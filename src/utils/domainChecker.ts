export interface DomainCheckResult {
  domain: string;
  cleanName: string;
  extension: string;
  status: 'available' | 'taken' | 'invalid';
  reason?: string;
  RegistrarOrNs?: string;
  suggestions: string[];
}

const KNOWN_EXTENSIONS = ['.com.eg', '.org.eg', '.edu.eg', '.net.eg', '.com', '.net', '.org', '.eg', '.io', '.co', '.me', '.info', '.biz'];

/**
 * Cleans user input so if a user types "https://www.google.com" or "google.com"
 * it extracts cleanName = "google" instead of turning "google.com" into "googlecom".
 */
export function parseDomainInput(rawInput: string, selectedExt: string): { cleanName: string; extension: string } {
  let text = rawInput.trim().toLowerCase();
  text = text.replace(/^https?:\/\//, '');
  text = text.replace(/^www\./, '');
  text = text.split('/')[0];

  let detectedExt = selectedExt;
  for (const ext of KNOWN_EXTENSIONS) {
    if (text.endsWith(ext) && text.length > ext.length) {
      text = text.slice(0, -ext.length);
      if (['.com', '.com.eg', '.net', '.org', '.eg'].includes(ext)) {
        detectedExt = ext;
      }
      break;
    }
  }

  // Remove any remaining dots or invalid characters from the domain label
  const cleanName = text.replace(/[^a-z0-9-]/g, '').replace(/^-+|-+$/g, '');
  return { cleanName, extension: detectedExt };
}

/**
 * Performs a real live DNS-over-HTTPS + RDAP check for a domain name.
 */
async function isDomainRegisteredLive(fullDomain: string): Promise<{ taken: boolean; details?: string }> {
  try {
    // 1. Query Google Public DNS-over-HTTPS for NS (Nameserver) records
    const nsResponse = await fetch(
      `https://dns.google/resolve?name=${encodeURIComponent(fullDomain)}&type=NS`,
      { headers: { Accept: 'application/dns-json' } }
    );

    if (nsResponse.ok) {
      const nsData = await nsResponse.json();

      // Status 3 = NXDOMAIN (Non-Existent Domain in the global TLD registry) -> Available!
      if (nsData.Status === 3) {
        return { taken: false };
      }

      // Status 2 = SERVFAIL (Domain is delegated in registry but nameservers fail to respond) -> Taken!
      if (nsData.Status === 2) {
        return { taken: true, details: 'مسجل في سجل النطاقات العالمي (Nameservers قيد الإعداد)' };
      }

      // Status 0 = NOERROR
      if (nsData.Status === 0) {
        if (Array.isArray(nsData.Answer) && nsData.Answer.length > 0) {
          const nsServer = nsData.Answer[0]?.data || 'مسجل ونشط';
          return { taken: true, details: `مسجل ومربوط بخوادم DNS (${nsServer})` };
        }
      }
    }

    // 2. Query Google Public DNS-over-HTTPS for A (IPv4) or SOA records
    const aResponse = await fetch(
      `https://dns.google/resolve?name=${encodeURIComponent(fullDomain)}&type=A`,
      { headers: { Accept: 'application/dns-json' } }
    );

    if (aResponse.ok) {
      const aData = await aResponse.json();
      if (aData.Status === 3) {
        return { taken: false };
      }
      if (aData.Status === 0 && Array.isArray(aData.Answer) && aData.Answer.length > 0) {
        return { taken: true, details: 'نطاق مسجل وموقع نشط حالياً على الإنترنت' };
      }
    }

    // 3. Fallback/Additional check via RDAP for gTLDs (.com, .net, .org) if DNS had no Answer
    if (fullDomain.endsWith('.com') || fullDomain.endsWith('.net') || fullDomain.endsWith('.org')) {
      try {
        const rdapRes = await fetch(`https://rdap.org/domain/${encodeURIComponent(fullDomain)}`);
        if (rdapRes.status === 200) {
          return { taken: true, details: 'مسجل رسمياً في قاعدة بيانات WHOIS / RDAP العالمية' };
        }
        if (rdapRes.status === 404) {
          return { taken: false };
        }
      } catch {
        // Ignore RDAP CORS or network errors and rely on DNS result
      }
    }

    return { taken: false };
  } catch {
    // Fallback to Cloudflare DoH if Google DoH is unreachable
    try {
      const cfRes = await fetch(
        `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(fullDomain)}&type=NS`,
        { headers: { accept: 'application/dns-json' } }
      );
      if (cfRes.ok) {
        const cfData = await cfRes.json();
        if (cfData.Status === 3) return { taken: false };
        if (cfData.Status === 0 && Array.isArray(cfData.Answer) && cfData.Answer.length > 0) {
          return { taken: true, details: 'نطاق مسجل ونشط على شبكة الإنترنت' };
        }
      }
    } catch {
      // Ignore network fallback error
    }
    return { taken: false };
  }
}

export async function checkDomainAvailabilityReal(
  rawInput: string,
  selectedExt: string
): Promise<DomainCheckResult> {
  const { cleanName, extension } = parseDomainInput(rawInput, selectedExt);

  if (!cleanName || cleanName.length < 2) {
    return {
      domain: `${cleanName}${extension}`,
      cleanName,
      extension,
      status: 'invalid',
      reason: 'يرجى كتابة اسم نطاق صحيح مكون من حرفين على الأقل باللغة الإنجليزية.',
      suggestions: []
    };
  }

  const fullDomain = `${cleanName}${extension}`;
  const liveCheck = await isDomainRegisteredLive(fullDomain);

  if (!liveCheck.taken) {
    return {
      domain: fullDomain,
      cleanName,
      extension,
      status: 'available',
      suggestions: []
    };
  }

  // Domain is TAKEN! Let's generate smart alternative suggestions and verify them
  const candidateDomains = [
    `${cleanName}-eg${extension}`,
    `${cleanName}digital.com`,
    `${cleanName}.com.eg`,
    `${cleanName}-group.com`,
    `get-${cleanName}.com`,
    `${cleanName}online.net`
  ].filter(d => d !== fullDomain);

  const verifiedSuggestions: string[] = [];
  await Promise.all(
    candidateDomains.slice(0, 4).map(async (cand) => {
      const check = await isDomainRegisteredLive(cand);
      if (!check.taken) {
        verifiedSuggestions.push(cand);
      }
    })
  );

  return {
    domain: fullDomain,
    cleanName,
    extension,
    status: 'taken',
    RegistrarOrNs: liveCheck.details || 'النطاق مسجل ومحجوز بالفعل في سجل النطاقات العالمي',
    suggestions: verifiedSuggestions.length > 0
      ? verifiedSuggestions
      : [`${cleanName}-eg.com`, `${cleanName}-co.com`, `${cleanName}.com.eg`]
  };
}

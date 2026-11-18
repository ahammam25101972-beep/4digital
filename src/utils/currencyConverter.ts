export interface LiveRateInfo {
  egpPerUsd: number;
  lastUpdated: string;
  isLive: boolean;
}

export const DEFAULT_USD_TO_EGP_RATE = 49.5;
const DEFAULT_FALLBACK_RATE = DEFAULT_USD_TO_EGP_RATE;

/**
 * Fetches the real-time USD to EGP exchange rate from public open APIs.
 */
export async function fetchLiveUsdToEgpRate(): Promise<LiveRateInfo> {
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/USD');
    if (res.ok) {
      const data = await res.json();
      const rate = data?.rates?.EGP;
      if (typeof rate === 'number' && rate > 10) {
        return {
          egpPerUsd: Number(rate.toFixed(2)),
          lastUpdated: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
          isLive: true
        };
      }
    }
  } catch {
    // Try secondary public endpoint
  }

  try {
    const res2 = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    if (res2.ok) {
      const data2 = await res2.json();
      const rate2 = data2?.rates?.EGP;
      if (typeof rate2 === 'number' && rate2 > 10) {
        return {
          egpPerUsd: Number(rate2.toFixed(2)),
          lastUpdated: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
          isLive: true
        };
      }
    }
  } catch {
    // Ignore network error and use fallback
  }

  return {
    egpPerUsd: DEFAULT_FALLBACK_RATE,
    lastUpdated: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
    isLive: false
  };
}

/**
 * Converts a numeric EGP amount into USD using the live exchange rate.
 */
export function convertEgpToUsdNumber(amountEgp: number, egpPerUsd: number = DEFAULT_FALLBACK_RATE): number {
  const rate = egpPerUsd > 0 ? egpPerUsd : DEFAULT_FALLBACK_RATE;
  const rawUsd = amountEgp / rate;
  if (rawUsd < 10) {
    return Number(rawUsd.toFixed(2));
  }
  return Number(rawUsd.toFixed(1));
}

/**
 * Formats a numeric EGP price into either EGP or live-converted USD with currency symbol.
 */
export function formatNumericPrice(
  amountEgp: number,
  currency: 'EGP' | 'USD',
  egpPerUsd: number = DEFAULT_FALLBACK_RATE
): string {
  if (currency === 'EGP') {
    return `${amountEgp.toLocaleString('ar-EG')} ج.م`;
  }
  const usd = convertEgpToUsdNumber(amountEgp, egpPerUsd);
  return `$${usd.toLocaleString('en-US')}`;
}

/**
 * Converts any Arabic price string containing EGP numbers (e.g. "50 ج", "4,999 ج.م", "10 ج للصفحة", "50 ج لملف مكون من 20 صفحة")
 * into USD when currency === 'USD' according to the live exchange rate.
 */
export function formatPriceText(
  text: string | undefined,
  currency: 'EGP' | 'USD',
  egpPerUsd: number = DEFAULT_FALLBACK_RATE
): string {
  if (!text) return '';
  if (currency === 'EGP') return text;

  const rate = egpPerUsd > 0 ? egpPerUsd : DEFAULT_FALLBACK_RATE;

  // Replace patterns like "4,999 ج.م" or "5000 ج" or "10 ج" where a number is followed by ج.م / ج / جنيه
  return text.replace(/(\d[\d,]*)\s*(ج\.م|جنيه مصري|جنيه|ج)(?![أ-ي])/g, (_, numStr) => {
    const cleanNum = parseFloat(numStr.replace(/,/g, ''));
    if (isNaN(cleanNum)) return _;
    const usd = convertEgpToUsdNumber(cleanNum, rate);
    return `$${usd}`;
  });
}

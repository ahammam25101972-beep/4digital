import React, { useState } from 'react';
import { 
  Check, 
  Search, 
  Lightbulb, 
  Sparkles, 
  Gift, 
  Percent, 
  ArrowLeft, 
  Calendar, 
  Flame 
} from 'lucide-react';
import egyptianBusinessImg from '../assets/images/egyptian_business_owners_1794240616808.jpg';

interface HeroProps {
  onOpenOrderModal: (planId?: string, domainQuery?: string) => void;
  onOpenGoldenFridayModal?: (offerId?: string) => void;
  onSelectDepartment?: (deptId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenOrderModal, 
  onOpenGoldenFridayModal,
  onSelectDepartment 
}) => {
  const [domainInput, setDomainInput] = useState('');
  const [domainExtension, setDomainExtension] = useState('.com');
  const [searchStatus, setSearchStatus] = useState<'idle' | 'searching' | 'available'>('idle');

  const handleDomainSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainInput.trim()) return;
    setSearchStatus('searching');
    setTimeout(() => {
      setSearchStatus('available');
    }, 500);
  };

  const goldenFridayOffers = [
    {
      id: 'gf-idea-5000',
      title: 'مبادرة قدّم فكرتك بـ 5,000 ج فقط!',
      desc: 'نحول فكرتك إلى موقع إلكتروني أو متجر إلكتروني أو تطبيق موبايل متكامل بدلاً من 9,500 ج.',
      badge: 'وفر 45%'
    },
    {
      id: 'gf-rampup',
      title: 'خصم 25% على باقات استضافة ودومينات 4Digital',
      desc: 'احجز باقة Warm Up (4999 ج) أو Ramp Up (6999 ج) أو Take Off (9999 ج) مع دومين مجاني وإيميلات رسمية.',
      badge: 'خصم 25%'
    },
    {
      id: 'gf-office-services',
      title: 'خصم 30% على خدمات الأوفيس والمحتوى والترجمة',
      desc: 'تخفيضات حصرية طوال نوفمبر 2026 على كتابة المستندات Word، شيتات Excel، عروض PowerPoint، والترجمة.',
      badge: 'خصم 30%'
    },
    {
      id: 'gf-branding-pack',
      title: 'باقة المطاعم والشركات (لوجو + منيو + QR Code)',
      desc: 'تصميم شعار احترافي + منيو طعام ورقي ورقمي + رمز QR ذكي بـ 300 ج بدلاً من 400 ج طوال الشهر.',
      badge: 'عرض الشهر'
    }
  ];

  return (
    <section id="hero" className="relative py-10 md:py-14 bg-white overflow-hidden min-h-[82vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Screen Split into Two Halves: Right (Company Online in Minutes) & Left (Golden Friday November 2026 Promo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* القسم الأول (الأيمن): شركتك أونلاين في دقائق! */}
          <div className="lg:col-span-6 bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-lg flex flex-col justify-between space-y-6 text-right">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e2b6c] tracking-tight">
                  فور ديجيتال <span className="font-sans">4Digital</span>
                </h2>
                <h1 className="text-3xl sm:text-4xl font-black text-[#0e2b6c] leading-snug">
                  شركتك أونلاين في دقائق!
                </h1>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                مجموعة من حلول الشركات والخدمات الرقمية المتكاملة، للوصول بسهولة لعملائك، وتحقيق الأهداف التسويقية لمنتجات وخدمات شركتك.
              </p>

              <div>
                <span className="inline-block text-lg sm:text-xl font-black text-[#0e2b6c] bg-sky-50 border border-sky-200 px-4 py-2 rounded-xl">
                  بأسعار تبدأ من 5000 ج
                </span>
              </div>

              {/* Two Buttons Side by Side: "اطلع على الباقات" & "قدم فكرتك" (linked to Submit Idea Page) */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onSelectDepartment && onSelectDepartment('hosting-domains')}
                  className="px-7 py-3.5 rounded-xl bg-[#43b8da] hover:bg-[#34a3c5] text-white font-bold text-sm sm:text-base shadow-md shadow-sky-500/20 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  اطلع على الباقات
                </button>

                <button
                  type="button"
                  onClick={() => onSelectDepartment && onSelectDepartment('submit-idea')}
                  className="px-7 py-3.5 rounded-xl bg-[#0e2b6c] hover:bg-[#163b8c] text-white font-bold text-sm sm:text-base shadow-md shadow-blue-900/20 transition-all hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  <Lightbulb className="w-5 h-5 text-amber-300" />
                  <span>قدم فكرتك</span>
                </button>
              </div>
            </div>

            {/* Egyptian Business Owners Photo */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-50">
              <img
                src={egyptianBusinessImg}
                alt="فور ديجيتال - شركتك أونلاين في دقائق"
                className="w-full h-64 sm:h-72 object-cover block"
              />
            </div>
          </div>

          {/* القسم الثاني (الأيسر): إعلان عروض الجمعة الذهبية خلال شهر نوفمبر 2026 */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-[#0e2b6c] via-slate-900 to-[#0e2b6c] text-white p-6 sm:p-8 shadow-2xl border-2 border-amber-400/90 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative Gold Glow */}
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-amber-400/20 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 space-y-5">
              {/* Top Gold Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black shadow-md">
                  <Flame className="w-4 h-4 fill-slate-950" />
                  <span>مهرجان تخفيضات شهر نوفمبر 2026</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-white/10 px-3 py-1 rounded-full border border-amber-400/30">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>العروض مستمرة طوال الشهر</span>
                </span>
              </div>

              {/* Main Promo Title */}
              <div className="space-y-1.5">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-300 leading-tight">
                  عروض الجمعة الذهبية
                </h2>
                <p className="text-base sm:text-lg font-bold text-white">
                  تخفيضات وعروض حصرية خلال شهر نوفمبر 2026
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  انتهز أقوى عروض السنة من فور ديجيتال لتأسيس وتطوير أعمالك الرقمية بأقل الأسعار وأعلى جودة تنفيذ:
                </p>
              </div>

              {/* Offers List */}
              <div className="space-y-3">
                {goldenFridayOffers.map((offer, idx) => (
                  <div
                    key={idx}
                    onClick={() => onOpenGoldenFridayModal && onOpenGoldenFridayModal(offer.id)}
                    className="p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-amber-300/70 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-sm font-black text-amber-300 group-hover:text-amber-200 flex items-center gap-1.5">
                        <Gift className="w-4 h-4 shrink-0" />
                        <span>{offer.title}</span>
                      </h3>
                      <span className="text-[11px] font-black px-2.5 py-0.5 rounded-lg bg-amber-400 text-slate-950 shrink-0">
                        {offer.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {offer.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Promo CTA */}
            <div className="relative z-10 pt-5 mt-5 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-center sm:text-right">
                <span className="text-xs text-amber-300 font-bold block">كود خصم الجمعة الذهبية الإضافي:</span>
                <span className="font-mono text-sm font-black text-white tracking-wider">GOLDEN2026</span>
              </div>

              <button
                type="button"
                onClick={() => onOpenGoldenFridayModal && onOpenGoldenFridayModal('gf-idea-5000')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <Percent className="w-4 h-4" />
                <span>احجز عرض الجمعة الذهبية الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Quick Domain Checker Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-2xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-black text-[#0e2b6c]">
                فحص سريع لاسم نطاق (دومين) شركتك المجاني مع الباقات:
              </h3>
              <p className="text-xs text-slate-600">
                تأكد من توافر اسم شركتك (.com / .com.eg / .net) واحصل عليه مجاناً ضمن عروض نوفمبر 2026
              </p>
            </div>

            <form 
              onSubmit={handleDomainSearch}
              className="flex-1 max-w-xl p-1.5 rounded-2xl bg-white border-2 border-slate-200 focus-within:border-[#43b8da] transition-all flex flex-col sm:flex-row items-center gap-2"
            >
              <div className="flex-1 flex items-center gap-2 px-3 w-full">
                <Search className="w-4 h-4 text-slate-400 shrink-0" />
                <input 
                  type="text"
                  value={domainInput}
                  onChange={(e) => {
                    setDomainInput(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''));
                    setSearchStatus('idle');
                  }}
                  placeholder="mycompany"
                  className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 font-sans text-sm py-1.5 focus:outline-none"
                  dir="ltr"
                />
              </div>

              <div className="flex items-center gap-1.5 w-full sm:w-auto">
                <select 
                  value={domainExtension}
                  onChange={(e) => setDomainExtension(e.target.value)}
                  className="bg-slate-100 text-slate-800 text-xs font-bold rounded-xl px-3 py-2.5 border border-slate-300 focus:outline-none"
                  dir="ltr"
                >
                  <option value=".com">.com</option>
                  <option value=".com.eg">.com.eg</option>
                  <option value=".net">.net</option>
                  <option value=".org">.org</option>
                  <option value=".eg">.eg</option>
                </select>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#43b8da] hover:bg-[#34a3c5] text-white transition-all shrink-0 cursor-pointer"
                >
                  فحص الدومين
                </button>
              </div>
            </form>
          </div>

          {searchStatus === 'available' && (
            <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-bold flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>النطاق <strong dir="ltr">{domainInput}{domainExtension}</strong> متاح للحجز الفوري مجاناً مع باقات 4Digital!</span>
              </div>
              <button
                onClick={() => onOpenOrderModal('ramp-up', `${domainInput}${domainExtension}`)}
                className="px-4 py-1.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-xs font-bold shrink-0"
              >
                احجزه الآن
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

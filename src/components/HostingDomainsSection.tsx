import React, { useState } from 'react';
import { GO_DIGITAL_PLANS, COMPARISON_CATEGORIES, GoDigitalPlan } from '../data/goDigitalData';
import { 
  Globe, 
  Server, 
  HardDrive, 
  Check, 
  Sparkles, 
  ArrowLeft, 
  Search, 
  CheckCircle2, 
  Lock, 
  Mail, 
  HelpCircle,
  Users
} from 'lucide-react';

interface HostingDomainsSectionProps {
  currency: 'EGP' | 'USD';
  onCurrencyToggle: () => void;
  onSelectPlan: (planId: string, domainQuery?: string) => void;
}

export const HostingDomainsSection: React.FC<HostingDomainsSectionProps> = ({
  currency,
  onCurrencyToggle,
  onSelectPlan
}) => {
  const [domainInput, setDomainInput] = useState('');
  const [domainExt, setDomainExt] = useState('.com');
  const [searchStatus, setSearchStatus] = useState<'idle' | 'searching' | 'available'>('idle');
  const [showFullComparison, setShowFullComparison] = useState(false);

  const currencySymbol = currency === 'EGP' ? 'ج.م' : '$';

  const domainPricing = [
    { ext: '.com', priceEGP: 650, priceUSD: 16, note: 'الأشهر عالمياً للشركات والتجارة' },
    { ext: '.com.eg', priceEGP: 850, priceUSD: 22, note: 'النطاق التجاري الرسمي داخل مصر' },
    { ext: '.net', priceEGP: 750, priceUSD: 19, note: 'مثالي لشركات التقنية والخدمات' },
    { ext: '.org', priceEGP: 700, priceUSD: 18, note: 'للمؤسسات والجمعيات والأكاديميات' },
    { ext: '.eg', priceEGP: 950, priceUSD: 25, note: 'النطاق السيادي المصري المميز' }
  ];

  const planSuitability: Record<string, string> = {
    'warm-up': 'مناسبة لـ: المواقع التعريفية البسيطة، الأفراد، والشركات الناشئة في بدايتها.',
    'ramp-up': 'مناسبة لـ: الشركات المتوسطة، المتاجر الإلكترونية، والمواقع ذات الزيارات اليومية العالية.',
    'take-off': 'مناسبة لـ: المؤسسات الكبرى، المنصات الضخمة، والمتاجر ذات آلاف المنتجات والعملاء.'
  };

  const handleDomainCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainInput.trim()) return;
    setSearchStatus('searching');
    setTimeout(() => {
      setSearchStatus('available');
    }, 500);
  };

  return (
    <section id="hosting-domains" className="py-20 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span>القسم الأول المستقل: حجز الدومينات والاستضافة السحابية</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            حجز الدومينات وباقات استضافة 4Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              شرح مبسط وأسعار واضحة شاملة كل شيء
            </span>
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            لا تحتاج لأي خبرة تقنية! نحن نقوم بحجز اسم موقعك، تجهيز السيرفر، وإنشاء إيميلات شركتك الرسمية خطوة بخطوة مع دعم فني متواصل.
          </p>
        </div>

        {/* Simple Plain-Arabic Explanation of What You Get */}
        <div className="p-6 sm:p-8 rounded-3xl bg-blue-50/50 border border-blue-200/80 space-y-5">
          <div className="flex items-center gap-2 text-slate-900 font-black text-base sm:text-lg">
            <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
            <span>توضيح مبسط: ماذا تشمل باقات الاستضافة والدومين لدينا؟</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5 shadow-2xs">
              <div className="flex items-center gap-2 font-black text-sm text-blue-700">
                <Globe className="w-4 h-4 shrink-0" />
                <span>١. الدومين (اسم موقعك)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                هو عنوان شركتك على الإنترنت مثل <strong dir="ltr">company.com</strong>، وتحصل عليه <strong>مجاناً</strong> لأول سنة مع أي باقة استضافة.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5 shadow-2xs">
              <div className="flex items-center gap-2 font-black text-sm text-indigo-700">
                <Server className="w-4 h-4 shrink-0" />
                <span>٢. الاستضافة (مساحة الموقع)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                هي السيرفر السحابي السريع الذي يحفظ صفحات موقعك وصورك وقواعد بياناتك ليعمل الموقع 24 ساعة بسرعة فائقة.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5 shadow-2xs">
              <div className="flex items-center gap-2 font-black text-sm text-emerald-700">
                <Mail className="w-4 h-4 shrink-0" />
                <span>٣. إيميلات رسمية للشركة</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                صناديق بريد رسمية باسم شركتك مثل <strong dir="ltr">info@company.com</strong> تزيد من ثقة عملائك في مراسلاتك.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5 shadow-2xs">
              <div className="flex items-center gap-2 font-black text-sm text-purple-700">
                <Lock className="w-4 h-4 shrink-0" />
                <span>٤. شهادة أمان SSL مجانية</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                تفعيل قفل الأمان الأخضر <strong dir="ltr">(https://)</strong> لتشفير وحماية بيانات موقعك وعملائك بالكامل مجاناً.
              </p>
            </div>
          </div>
        </div>

        {/* 1. Domain Registration Sub-Panel */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-50/80 border border-slate-200 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-black text-slate-900">
              أولاً: ابحث عن اسم النطاق (الدومين) الخاص بشركتك
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              يمكنك حجز الدومين مجاناً ضمن باقات الاستضافة بالأسفل، أو حجز الدومين منفرداً بالأسعار الموضحة:
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <form 
              onSubmit={handleDomainCheck}
              className="p-2 sm:p-2.5 rounded-2xl bg-white border-2 border-slate-200 shadow-md focus-within:border-blue-500 transition-all flex flex-col sm:flex-row items-center gap-2"
            >
              <div className="flex-1 flex items-center gap-2 px-3 w-full">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input 
                  type="text"
                  value={domainInput}
                  onChange={(e) => {
                    setDomainInput(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''));
                    setSearchStatus('idle');
                  }}
                  placeholder="اكتب اسم شركتك بالإنجليزية (مثال: alahram-group)"
                  className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 font-sans text-sm sm:text-base focus:outline-none"
                  dir="ltr"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <select 
                  value={domainExt}
                  onChange={(e) => setDomainExt(e.target.value)}
                  className="bg-slate-100 text-slate-800 text-sm font-bold rounded-xl px-3 py-2.5 border border-slate-300 focus:outline-none focus:border-blue-500"
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
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all shrink-0 cursor-pointer"
                >
                  فحص التوفر
                </button>
              </div>
            </form>

            {searchStatus === 'available' && (
              <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-bold flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>رائع! النطاق <strong dir="ltr">{domainInput}{domainExt}</strong> متاح للحجز الفوري مجاناً مع الباقات.</span>
                </div>
                <button
                  onClick={() => onSelectPlan('ramp-up', `${domainInput}${domainExt}`)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shrink-0 shadow-xs"
                >
                  احجز النطاق مع الباقة الآن
                </button>
              </div>
            )}
          </div>

          {/* Extension Price Table */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
            {domainPricing.map((item, idx) => {
              const price = currency === 'EGP' ? item.priceEGP : item.priceUSD;
              return (
                <div 
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white border border-slate-200 text-center space-y-1 hover:border-blue-400 transition-all shadow-xs"
                >
                  <span className="font-mono text-base font-black text-blue-600" dir="ltr">{item.ext}</span>
                  <div className="text-sm font-bold text-slate-900">
                    {price.toLocaleString('ar-EG')} {currencySymbol} <span className="text-[10px] text-slate-400 font-normal">/ سنوياً</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-tight">{item.note}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Cloud Hosting Plans Grid */}
        <div id="packages" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-2xl font-black text-slate-900">
                ثانياً: اختر باقة الاستضافة السنوية المناسبة لحجم عملك
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                جميع الباقات شاملة: دومين مجاني + مساحة استضافة سريعة + إيميلات رسمية + شهادة أمان SSL + دعم فني
              </p>
            </div>

            {/* Currency Switch Bar */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">عرض الأسعار بـ:</span>
              <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
                <button
                  onClick={() => currency !== 'EGP' && onCurrencyToggle()}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    currency === 'EGP' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  جنيه مصري
                </button>
                <button
                  onClick={() => currency !== 'USD' && onCurrencyToggle()}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    currency === 'USD' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  دولار أمريكي
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {GO_DIGITAL_PLANS.map((plan: GoDigitalPlan) => {
              const price = currency === 'EGP' ? plan.priceEGP : plan.priceUSD;
              const originalPrice = currency === 'EGP' ? plan.originalPriceEGP : Math.round((plan.originalPriceEGP || 0) / 38);

              return (
                <div 
                  key={plan.id}
                  className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 bg-white ${
                    plan.isPopular 
                      ? 'border-2 border-blue-600 shadow-xl shadow-blue-500/10 md:-translate-y-2 z-20' 
                      : 'border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 right-1/2 translate-x-1/2 px-4 py-1 rounded-full text-xs font-black bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md flex items-center gap-1 whitespace-nowrap">
                      <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                      <span>{plan.badge}</span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-black text-slate-900">{plan.name}</h4>
                      <p className="text-sm font-bold text-blue-600 mt-0.5">{plan.arabicName}</p>
                    </div>

                    {/* Plain-Arabic Suitability Box */}
                    <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-2 text-xs text-slate-800 font-bold leading-relaxed">
                      <Users className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{planSuitability[plan.id] || plan.tagline}</span>
                    </div>

                    {/* Pricing Box */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-right">
                      {originalPrice && (
                        <div className="text-xs text-slate-400 line-through mb-1">
                          السعر قبل الخصم: {originalPrice.toLocaleString('ar-EG')} {currencySymbol}
                        </div>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl sm:text-5xl font-black text-slate-900">
                          {price.toLocaleString('ar-EG')}
                        </span>
                        <span className="text-sm font-bold text-blue-600">
                          {currencySymbol} / سنوياً
                        </span>
                      </div>
                      <span className="text-[11px] text-emerald-700 font-bold block mt-1">
                        ✓ شامل الدومين المجاني والاستضافة والإيميلات الرسمية
                      </span>
                    </div>

                    {/* Key Specs */}
                    <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-slate-100">
                      <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                        <HardDrive className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{plan.specs.ssdStorage}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                        <Globe className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{plan.specs.domain}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2.5 pt-1">
                      <p className="text-xs font-black text-slate-900">
                        ماذا تحصل عليه في هذه الباقة؟
                      </p>
                      <ul className="space-y-2">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 space-y-2">
                    <button
                      onClick={() => onSelectPlan(plan.id)}
                      className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                        plan.isPopular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20'
                          : 'bg-slate-900 hover:bg-blue-600 text-white'
                      }`}
                    >
                      <span>اطلب باقة {plan.name} الآن</span>
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Payment Badges Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-black text-slate-800">طرق الدفع السهلة المتاحة للتفعيل الفوري:</span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold">
                📱 المحافظ الإلكترونية (فودافون كاش / أورنج / اتصالات / WE)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-800 border border-blue-200 font-bold">
                ⚡ انستاباي InstaPay
              </span>
              <span className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-mono">
                💳 VISA / MasterCard / ميزة
              </span>
              <span className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold">
                فوري Fawry
              </span>
              <span className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700">
                تحويل بنكي
              </span>
            </div>
          </div>
        </div>

        {/* 3. Technical Comparison Table Toggle */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                هل ترغب في مقارنة المواصفات الفنية الدقيقة بين الباقات الثلاث؟
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                جدول يوضح الفروق في المساحة، المعالج، الرامات، قواعد البيانات، وعدد الإيميلات لكل باقة
              </p>
            </div>
            <button
              onClick={() => setShowFullComparison(!showFullComparison)}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-blue-50 border border-slate-300 hover:border-blue-400 text-blue-700 text-xs font-black transition-all shrink-0 shadow-2xs"
            >
              {showFullComparison ? 'إخفاء جدول المقارنة' : 'عرض جدول المقارنة الكامل'}
            </button>
          </div>

          {showFullComparison && (
            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-lg">
              <table className="w-full text-right border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-4 text-sm font-black text-slate-900 w-1/4">المواصفة</th>
                    <th className="p-4 text-center text-sm font-bold text-slate-800 w-1/4">Warm Up (البداية)</th>
                    <th className="p-4 text-center text-sm font-bold text-blue-700 bg-blue-50/50 w-1/4">Ramp Up (الأكثر طلباً ⭐)</th>
                    <th className="p-4 text-center text-sm font-bold text-slate-800 w-1/4">Take Off (المؤسسات)</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_CATEGORIES.map((category, catIdx) => (
                    <React.Fragment key={catIdx}>
                      <tr className="bg-slate-100/70 border-y border-slate-200">
                        <td colSpan={4} className="py-2.5 px-4 text-xs font-black text-slate-800">
                          {category.category}
                        </td>
                      </tr>
                      {category.items.map((item, rIdx) => (
                        <tr key={rIdx} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="p-3.5 text-xs font-semibold text-slate-800">{item.name}</td>
                          <td className="p-3.5 text-center text-xs text-slate-600">{item.warmUp}</td>
                          <td className="p-3.5 text-center text-xs font-bold text-slate-900 bg-blue-50/30">{item.rampUp}</td>
                          <td className="p-3.5 text-center text-xs text-slate-600">{item.takeOff}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

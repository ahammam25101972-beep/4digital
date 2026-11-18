import React from 'react';
import { 
  Flame, 
  Sparkles, 
  Gift, 
  Percent, 
  CheckCircle2, 
  Calendar, 
  ArrowLeft, 
  MessageCircle, 
  ShieldCheck, 
  Wallet, 
  Zap,
  GraduationCap,
  BookOpen,
  Smartphone
} from 'lucide-react';
import { GOLDEN_FRIDAY_OFFERS } from './GoldenFridayModal';
import { CONTACT_INFO } from '../data/goDigitalData';
import { formatPriceText } from '../utils/currencyConverter';

interface GoldenFridayPageProps {
  currency?: 'EGP' | 'USD';
  exchangeRate?: number;
  onOpenGoldenFridayModal: (offerId?: string) => void;
  onSelectSection?: (sectionId: string) => void;
}

export const GoldenFridayPage: React.FC<GoldenFridayPageProps> = ({
  currency = 'EGP',
  exchangeRate = 49.5,
  onOpenGoldenFridayModal,
  onSelectSection
}) => {
  const offerFeaturesMap: Record<string, string[]> = {
    'gf-courses-300': [
      'سعر الكورس التدريبي 300 ج.م فقط بدلاً من 500 ج.م (خصم 40%)',
      'يشمل جميع دورات مايكروسوفت إكسيل، وورد، والعروض التقديمية PowerPoint',
      'يشمل دورات إنشاء المواقع والمتاجر والتسويق الرقمي وإدارة السيرفرات',
      'محتوى تدريبي عملي مع ملفات الشرح والتطبيقات العملية وشهادة معتمدة',
      'متاح الحجز الفوري والتواصل المباشر مع منسق الدورات عبر الواتساب'
    ],
    'gf-kids-books-50': [
      'سعر الكتاب 50 ج.م فقط بدلاً من 100 ج.م (خصم 50% بمناسبة الجمعة الذهبية)',
      'سلسلة العلم والمعرفة — القصة الأولى: «سر عالم النمل» (من إنتاج المنصة)',
      'كتاب «رحلة في عالم البرومبت: مفاتيح الذكاء الاصطناعي للأطفال واليافعين»',
      'قصة «خطوات سعيد الأولى: رحلة نحو الاستقلال» المصورة للأطفال',
      'نسخة إلكترونية PDF فائقة الجودة بألوان جذابة ورسوم توضيحية مشوقة واستلام فوري عبر واتساب'
    ],
    'gf-app-store': [
      'خصومات الجمعة الذهبية على كافة تطبيقات الموبايل والأنظمة السحابية والمحاسبية',
      'تطبيقات إسلامية وخدمية متكاملة مثل تطبيق «مَنَاسِكِي - Manasiki» للحج والعمرة (5,000 ج.م)',
      'أنظمة سحابية (BIZON ERP لنقاط البيع والمخزون والموارد البشرية) بـ 600 ج.م',
      'برامج سطح مكتب (عيادات DIMS، مطاعم Resto، ورش BIZ2، صيانة BIZ3، مصانع SMS Facto، وتقسيط BIZ 9) تبدأ من 1,200 ج.م مدى الحياة',
      'إمكانية طلب نسخة تجريبية مباشرة عبر واتساب مع دعم فني وتدريب كامل'
    ],
    'gf-idea-5000': [
      'تصميم وبرمجة موقع إلكتروني، متجر إلكتروني، أو تطبيق موبايل متكامل',
      'لوحة تحكم عربية سهلة لإدارة كافة المحتويات والمنتجات والطلبات',
      'تصميم متجاوب 100% مع جميع الهواتف الذكية والأجهزة اللوحية',
      'ربط وسائل الدفع الإلكتروني والواتساب المباشر لخدمة العملاء',
      'دعم فني مجاني وتدريب كامل على إدارة المشروع'
    ],
    'gf-warmup': [
      'دومين دولي مجاني باسم شركتك (.com أو .net)',
      'مساحة استضافة 1 جيجابايت SSD فائقة السرعة',
      'بريد إلكتروني رسمي باسم شركتك (2 جيجابايت لكل صندوق)',
      'شهادة حماية وأمان وتشفير SSL مجانية',
      'لوحة تحكم cPanel أصلية ومُصمم مواقع ذكي'
    ],
    'gf-rampup': [
      'دومين دولي مجاني + مساحة استضافة 2 جيجابايت SSD',
      'بريد إلكتروني احترافي للشركات (5 جيجابايت لكل صندوق)',
      'عدد 2 قواعد بيانات MySQL + 2 دومين فرعي Subdomains',
      'شهادة أمان SSL مجانية وفحص تلقائي ضد الفيروسات',
      'الباقة الأكثر طلباً للشركات المتوسطة والمتاجر الناشئة'
    ],
    'gf-takeoff': [
      'مساحة استضافة ضخمة 5 جيجابايت NVMe SSD للمؤسسات',
      'دومين دولي مجاني + 5 دومينات فرعية + 5 قواعد بيانات',
      'بريد إلكتروني رسمي بسعة 5 جيجابايت لكل موظف',
      'أولوية قصوى في الدعم الفني واستقرار بنسبة 99.9%',
      'مثالية للمتاجر الإلكترونية الكبرى والمنصات عالية الزيارات'
    ],
    'gf-branding-pack': [
      'تصميم شعار (لوجو) احترافي يعكس هوية نشاطك التجاري',
      'تصميم منيو طعام عصري وجذاب للطباعة والنشر الرقمي',
      'إعداد وتصميم كيو آر كود (QR Code) ذكي للمنيو أو الموقع',
      'تسليم الملفات بجودة عالية جاهزة للطباعة والاستخدام الفوري',
      'توفير 100 ج.م عند طلب الباقة المجمعة خلال شهر نوفمبر'
    ],
    'gf-office-services': [
      'كتابة المستندات Word (تبدأ من 10 ج للصفحة قبل الخصم)',
      'تنسيق ملفات الوورد (50 ج لملف مكون من 20 صفحة قبل الخصم)',
      'العمل على الإكسيل (20 ج لملف إكسيل مكون من 20 صف قبل الخصم)',
      'تصميم عروض باوربوينت احترافية (50 ج لعدد 10 سلايد قبل الخصم)',
      'خصم فوري 30% على إجمالي فاتورة خدمات الأوفيس والمحتوى والترجمة'
    ]
  };

  return (
    <section className="py-12 lg:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Banner of Offers Page */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0e2b6c] via-slate-900 to-[#091b46] text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-amber-400/30 overflow-hidden mb-12">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-right max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-black">
                <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
                <span>عروض الجمعة الذهبية الحصرية — طوال شهر نوفمبر 2026</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                صفحة عروض <span className="text-amber-400">الجمعة الذهبية</span> من فور ديجيتال
              </h1>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                استفد الآن من أقوى التخفيضات السنوية على الدورات التدريبية (300 ج بدلاً من 500 ج)، كتب الأطفال المصورة والذكاء الاصطناعي (50 ج بدلاً من 100 ج)، متجر التطبيقات والبرامج المحاسبية، باقات الاستضافة والدومينات، ومبادرة تحويل فكرتك إلى مشروع رقمي.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenGoldenFridayModal('gf-courses-300')}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-sm sm:text-base shadow-lg shadow-amber-500/25 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>احجز عرض الجمعة الذهبية الآن</span>
                </button>

                <a
                  href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent('مرحباً فور ديجيتال، أرغب في الاستفسار عن عروض الجمعة الذهبية خلال شهر نوفمبر')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base flex items-center gap-2 transition-all shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>اسأل عبر واتساب مباشر</span>
                </a>
              </div>
            </div>

            {/* Promo Code Card */}
            <div className="w-full lg:w-80 bg-white/10 backdrop-blur-md border-2 border-dashed border-amber-400/60 rounded-2xl p-6 text-center space-y-3 shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center mx-auto text-amber-300">
                <Gift className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-amber-200">كود خصم الجمعة الذهبية الموحد</p>
              <div className="bg-slate-950/90 border border-amber-400/50 rounded-xl py-3 px-4 font-mono text-2xl font-black text-amber-400 tracking-widest">
                GOLDEN2026
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                يُطبق الكود تلقائياً عند الضغط على زر <strong>"احجز هذا العرض"</strong> لأي باقة أدناه.
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-center gap-1.5 text-xs text-emerald-300 font-bold">
                <Calendar className="w-4 h-4" />
                <span>ساري حتى 30 نوفمبر 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black">
            <Percent className="w-4 h-4 text-amber-600" />
            <span>اختر العرض المناسب لنشاطك واحجزه فوراً</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            قائمة عروض وتخفيضات الجمعة الذهبية الكاملة
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            تشمل عروض الدورات التدريبية (300 ج)، كتب الأطفال والذكاء الاصطناعي (50 ج)، متجر التطبيقات والبرامج المحاسبية، والاستضافة والمواقع.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {GOLDEN_FRIDAY_OFFERS.map((offer, index) => {
            const isFeatured = index < 4;
            const features = offerFeaturesMap[offer.id] || [];

            return (
              <div
                key={offer.id}
                className={`rounded-2xl bg-white border-2 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl ${
                  isFeatured
                    ? 'border-amber-500 ring-4 ring-amber-500/10'
                    : 'border-slate-200 hover:border-[#0e2b6c]'
                }`}
              >
                <div>
                  {/* Card Top Ribbon */}
                  <div
                    className={`px-5 py-3 flex items-center justify-between text-xs font-black ${
                      isFeatured
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950'
                        : 'bg-[#0e2b6c] text-white'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <Flame className="w-4 h-4" />
                      <span>عرض الجمعة الذهبية</span>
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-black ${
                        isFeatured
                          ? 'bg-slate-950 text-amber-300'
                          : 'bg-amber-400 text-slate-950'
                      }`}
                    >
                      {offer.discountBadge}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-black text-slate-900 leading-snug">
                      {offer.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {formatPriceText(offer.summary, currency, exchangeRate)}
                    </p>

                    {/* Price Box */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                      <div>
                        <span className="block text-[11px] text-slate-500 font-bold">سعر العرض الحصري:</span>
                        <span className="text-xl sm:text-2xl font-black text-[#0e2b6c]">
                          {formatPriceText(offer.priceAfter, currency, exchangeRate)}
                        </span>
                      </div>
                      <div className="text-left">
                        <span className="block text-[11px] text-slate-400">السعر قبل الخصم:</span>
                        <span className="text-sm font-bold text-rose-500 line-through">
                          {formatPriceText(offer.priceBefore, currency, exchangeRate)}
                        </span>
                      </div>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-2 pt-2">
                      {features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{formatPriceText(feat, currency, exchangeRate)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="p-6 pt-0 space-y-2.5">
                  {offer.id === 'gf-courses-300' && onSelectSection && (
                    <button
                      type="button"
                      onClick={() => onSelectSection('courses')}
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <GraduationCap className="w-4 h-4 text-emerald-600" />
                      <span>تصفح جميع الدورات التدريبية</span>
                    </button>
                  )}
                  {offer.id === 'gf-kids-books-50' && onSelectSection && (
                    <button
                      type="button"
                      onClick={() => onSelectSection('library')}
                      className="w-full py-2.5 px-4 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-amber-600" />
                      <span>تصفح كتب الأطفال في المكتبة الرقمية</span>
                    </button>
                  )}
                  {offer.id === 'gf-app-store' && onSelectSection && (
                    <button
                      type="button"
                      onClick={() => onSelectSection('app-store')}
                      className="w-full py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0e2b6c] border border-blue-200 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Smartphone className="w-4 h-4 text-blue-600" />
                      <span>تصفح جميع تطبيقات وبرامج المتجر</span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => onOpenGoldenFridayModal(offer.id)}
                    className={`w-full py-3.5 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                      isFeatured
                        ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950'
                        : 'bg-[#0e2b6c] hover:bg-blue-900 text-white'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>احجز هذا العرض الآن</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee & Payment Banner */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-right">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>ضمان تنفيذ العقود وتثبيت أسعار العرض طوال شهر نوفمبر</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              بمجرد تسجيل طلبك في نموذج حجز الجمعة الذهبية، يتم الاحتفاظ بحقك في الخصم وتثبيت السعر المخفض، ويمكنك الدفع بسهولة عبر المحافظ الإلكترونية أو إنستا باي أو فوري.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-bold">
              <span className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 inline-flex items-center gap-1">
                <Wallet className="w-3.5 h-3.5 text-emerald-600" />
                <span>المحافظ الإلكترونية</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-800 inline-flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-cyan-600" />
                <span>انستاباي InstaPay</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700">
                VISA / MasterCard / ميزة / فوري
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenGoldenFridayModal('gf-idea-5000')}
              className="px-6 py-3.5 rounded-xl bg-[#0e2b6c] hover:bg-blue-900 text-white font-black text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>افتح نموذج حجز الجمعة الذهبية</span>
            </button>
            {onSelectSection && (
              <button
                type="button"
                onClick={() => onSelectSection('home')}
                className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all cursor-pointer"
              >
                العودة للرئيسية
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

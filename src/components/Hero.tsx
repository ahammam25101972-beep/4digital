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
  Flame,
  XCircle,
  Loader2,
  BookOpen,
  Smartphone,
  GraduationCap,
  MessageCircle,
  RefreshCw,
  CheckCircle2,
  Clock,
  UserCheck
} from 'lucide-react';
import egyptianBusinessImg from '../assets/images/egyptian_business_owners_1794240616808.jpg';
import { checkDomainAvailabilityReal, DomainCheckResult } from '../utils/domainChecker';
import { DIGITAL_BOOKS } from '../data/libraryBooksData';
import { APP_STORE_ITEMS } from './AppStoreSection';
import { COURSES_DATA } from '../data/coursesData';
import { CONTACT_INFO } from '../data/goDigitalData';
import { formatPriceText } from '../utils/currencyConverter';

interface HeroProps {
  currency?: 'EGP' | 'USD';
  exchangeRate?: number;
  onOpenOrderModal: (planId?: string, domainQuery?: string) => void;
  onOpenGoldenFridayModal?: (offerId?: string) => void;
  onSelectDepartment?: (deptId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  currency = 'EGP',
  exchangeRate = 49.5,
  onOpenOrderModal, 
  onOpenGoldenFridayModal,
  onSelectDepartment 
}) => {
  const [domainInput, setDomainInput] = useState('');
  const [domainExtension, setDomainExtension] = useState('.com');
  const [searchStatus, setSearchStatus] = useState<'idle' | 'searching' | 'available' | 'taken' | 'invalid'>('idle');
  const [checkResult, setCheckResult] = useState<DomainCheckResult | null>(null);

  // Compute daily rotating index based on calendar date so each day automatically shows a different book, app, and course
  const todayDayNumber = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const [bookOffset, setBookOffset] = useState(0);
  const [appOffset, setAppOffset] = useState(0);
  const [courseOffset, setCourseOffset] = useState(0);

  const bookOfTheDay = DIGITAL_BOOKS[(todayDayNumber + bookOffset) % DIGITAL_BOOKS.length];
  const appOfTheDay = APP_STORE_ITEMS[(todayDayNumber + 1 + appOffset) % APP_STORE_ITEMS.length];
  const courseOfTheDay = COURSES_DATA[(todayDayNumber + courseOffset) % COURSES_DATA.length];

  const todayFormattedAr = new Intl.DateTimeFormat('ar-EG', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date());

  const handleDomainSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainInput.trim()) return;
    setSearchStatus('searching');
    const result = await checkDomainAvailabilityReal(domainInput, domainExtension);
    setCheckResult(result);
    if (result.cleanName) {
      setDomainInput(result.cleanName);
    }
    if (result.extension) {
      setDomainExtension(result.extension);
    }
    setSearchStatus(result.status);
  };

  const goldenFridayOffers = [
    {
      id: 'gf-courses-300',
      title: 'عرض الدورات التدريبية الشاملة بـ 300 ج بدلاً من 500 ج',
      desc: 'احصل على أي كورس تدريبي متكامل من قسم الدورات التدريبية (إكسيل، وورد، باوربوينت، ووردبريس، تسويق رقمي، وسيرفرات) بخصم 40%.',
      badge: 'خصم 40%'
    },
    {
      id: 'gf-kids-books-50',
      title: 'كتب الأطفال المصورة والذكاء الاصطناعي بـ 50 ج بدلاً من 100 ج',
      desc: 'إصدارات فور ديجيتال («رحلة في عالم البرومبت» و«خطوات سعيد الأولى») بنسخة PDF فائقة الجودة بخصم 50%.',
      badge: 'خصم 50%'
    },
    {
      id: 'gf-app-store',
      title: 'عروض متجر التطبيقات والبرامج المحاسبية والأنظمة السحابية',
      desc: 'تطبيقات الموبايل وأنظمة الحسابات والمخازن والصيانة والتقسيط والعيادات والمطاعم (تبدأ من 600 ج للسحابي و 1,200 ج لسطح المكتب).',
      badge: 'خصم حتى 50%'
    },
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
      id: 'gf-branding-pack',
      title: 'باقة المطاعم والشركات (لوجو + منيو + QR Code)',
      desc: 'تصميم شعار احترافي + منيو طعام ورقي ورقمي + رمز QR ذكي بـ 300 ج بدلاً من 400 ج طوال الشهر.',
      badge: 'عرض الشهر'
    }
  ];

  return (
    <section id="hero" className="relative py-10 md:py-14 bg-white overflow-hidden min-h-[82vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">

        {/* Top Daily Picks Row: 1 = كتاب اليوم | 2 = تطبيق اليوم | 3 = كورس اليوم */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          
          {/* البطاقة الأولى: كتاب اليوم */}
          <div className="rounded-3xl bg-gradient-to-br from-amber-50/90 via-white to-sky-50/60 border-2 border-amber-300/90 p-5 shadow-md flex flex-col justify-between gap-4 text-right">
            <div className="space-y-3.5">
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black shadow-2xs">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>كتاب اليوم</span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-500">
                    ({todayFormattedAr})
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setBookOffset(prev => prev + 1)}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0e2b6c] hover:text-blue-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs cursor-pointer transition-colors"
                  title="معاينة كتاب اليوم التالي"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>كتاب آخر</span>
                </button>
              </div>

              {/* Book Content */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center">
                {bookOfTheDay.coverImage && (
                  <div className="sm:col-span-4 flex justify-center">
                    <div
                      onClick={() => onSelectDepartment && onSelectDepartment('library')}
                      className="relative max-w-[110px] w-full rounded-2xl overflow-hidden shadow-md border-2 border-white bg-white cursor-pointer group"
                    >
                      <img
                        src={bookOfTheDay.coverImage}
                        alt={bookOfTheDay.title}
                        className="w-full h-36 object-contain bg-slate-50 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                )}

                <div className={`${bookOfTheDay.coverImage ? 'sm:col-span-8' : 'sm:col-span-12'} space-y-2`}>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-[#0e2b6c] text-white">
                      {bookOfTheDay.categoryLabel}
                    </span>
                    <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300">
                      عرض الجمعة الذهبية 🔥
                    </span>
                  </div>

                  <h3
                    onClick={() => onSelectDepartment && onSelectDepartment('library')}
                    className="text-sm sm:text-base font-black text-[#0e2b6c] hover:text-blue-700 leading-snug cursor-pointer"
                  >
                    {bookOfTheDay.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {bookOfTheDay.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500 font-bold pt-0.5">
                    <span>تأليف: {bookOfTheDay.author}</span>
                    <span>·</span>
                    <span className="text-emerald-700 font-black">
                      {formatPriceText(bookOfTheDay.priceEGP, currency, exchangeRate)}
                    </span>
                    <span className="text-[10px] text-rose-500 line-through">
                      {formatPriceText('100 ج.م', currency, exchangeRate)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Footer Buttons */}
            <div className="pt-3 border-t border-amber-200/70 flex flex-wrap items-center justify-between gap-2">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`مرحباً فور ديجيتال، أرغب في شراء كتاب اليوم: "${bookOfTheDay.title}" (تأليف: ${bookOfTheDay.author}) بسعر العرض ${formatPriceText(bookOfTheDay.priceEGP, currency, exchangeRate)}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
                <span>اطلب الكتاب ({formatPriceText(bookOfTheDay.priceEGP, currency, exchangeRate)})</span>
              </a>

              <button
                type="button"
                onClick={() => onSelectDepartment && onSelectDepartment('library')}
                className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 text-[#0e2b6c] border border-slate-300 font-bold text-xs transition-all cursor-pointer"
              >
                المكتبة ({DIGITAL_BOOKS.length})
              </button>
            </div>
          </div>

          {/* البطاقة الثانية: تطبيق اليوم */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/60 border-2 border-blue-300/90 p-5 shadow-md flex flex-col justify-between gap-4 text-right">
            <div className="space-y-3.5">
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-200/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e2b6c] text-white text-xs font-black shadow-2xs">
                    <Smartphone className="w-3.5 h-3.5 text-cyan-300" />
                    <span>تطبيق اليوم</span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-500">
                    ({todayFormattedAr})
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setAppOffset(prev => prev + 1)}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0e2b6c] hover:text-blue-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs cursor-pointer transition-colors"
                  title="معاينة تطبيق اليوم التالي"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>تطبيق آخر</span>
                </button>
              </div>

              {/* App Content */}
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-cyan-100 text-[#0e2b6c] border border-cyan-300">
                    {appOfTheDay.fieldBadge}
                  </span>
                  <span className="text-[11px] font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {formatPriceText(appOfTheDay.priceEGP, currency, exchangeRate)}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  {(appOfTheDay.iconUrl || appOfTheDay.coverImage) && (
                    <a
                      href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`مرحباً فور ديجيتال، أرغب في طلب النسخة التجريبية من: "${appOfTheDay.title}" (${appOfTheDay.fieldBadge}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-slate-200 shadow-xs flex items-center justify-center ${
                        appOfTheDay.iconUrl ? 'bg-[#003622]' : 'bg-white'
                      }`}
                    >
                      <img
                        src={appOfTheDay.iconUrl || appOfTheDay.coverImage}
                        alt={appOfTheDay.title}
                        className="w-full h-full object-contain"
                      />
                    </a>
                  )}
                  <h3
                    onClick={() => onSelectDepartment && onSelectDepartment('app-store')}
                    className="text-sm sm:text-base font-black text-[#0e2b6c] hover:text-blue-700 leading-snug cursor-pointer"
                  >
                    {appOfTheDay.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {appOfTheDay.description}
                </p>

                <div className="grid grid-cols-1 gap-1.5 pt-0.5">
                  {appOfTheDay.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700 bg-white/90 px-2.5 py-1.5 rounded-xl border border-slate-200/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* App Footer Buttons */}
            <div className="pt-3 border-t border-blue-200/70 flex flex-wrap items-center justify-between gap-1.5">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`مرحباً فور ديجيتال، أرغب في طلب النسخة التجريبية من: "${appOfTheDay.title}" (${appOfTheDay.fieldBadge}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-xs transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
                <span>نسخة تجريبية</span>
              </a>
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`مرحباً فور ديجيتال، أرغب في طلب تطبيق اليوم: "${appOfTheDay.title}" (${appOfTheDay.fieldBadge}) بسعر ${formatPriceText(appOfTheDay.priceEGP, currency, exchangeRate)}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#0e2b6c] hover:bg-blue-900 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-xs transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                <span>اطلب التطبيق</span>
              </a>

              <button
                type="button"
                onClick={() => onSelectDepartment && onSelectDepartment('app-store')}
                className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 text-[#0e2b6c] border border-slate-300 font-bold text-xs transition-all cursor-pointer"
              >
                المتجر
              </button>
            </div>
          </div>

          {/* البطاقة الثالثة: كورس اليوم */}
          <div className="rounded-3xl bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/60 border-2 border-emerald-300/90 p-5 shadow-md flex flex-col justify-between gap-4 text-right">
            <div className="space-y-3.5">
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-200/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-black shadow-2xs">
                    <GraduationCap className="w-4 h-4 text-amber-300" />
                    <span>كورس اليوم</span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-500">
                    ({todayFormattedAr})
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setCourseOffset(prev => prev + 1)}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 hover:text-emerald-600 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs cursor-pointer transition-colors"
                  title="معاينة كورس اليوم التالي"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>كورس آخر</span>
                </button>
              </div>

              {/* Course Content */}
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                    {courseOfTheDay.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {formatPriceText(`${courseOfTheDay.priceEGP} ج.م`, currency, exchangeRate)}
                    </span>
                    {courseOfTheDay.originalPriceEGP && (
                      <span className="text-[11px] font-bold text-rose-500 line-through">
                        {formatPriceText(`${courseOfTheDay.originalPriceEGP} ج.م`, currency, exchangeRate)}
                      </span>
                    )}
                  </div>
                </div>

                <h3
                  onClick={() => onSelectDepartment && onSelectDepartment('courses')}
                  className="text-sm sm:text-base font-black text-[#0e2b6c] hover:text-emerald-700 leading-snug cursor-pointer"
                >
                  {courseOfTheDay.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {courseOfTheDay.tagline}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-600 font-bold pt-0.5">
                  <span className="inline-flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{courseOfTheDay.instructor}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{courseOfTheDay.duration}</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-1.5 pt-0.5">
                  {courseOfTheDay.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700 bg-white/90 px-2.5 py-1.5 rounded-xl border border-slate-200/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Course Footer Buttons */}
            <div className="pt-3 border-t border-emerald-200/70 flex flex-wrap items-center justify-between gap-2">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`مرحباً فور ديجيتال، أرغب في الاشتراك في كورس اليوم: "${courseOfTheDay.title}" بسعر عرض الجمعة الذهبية ${formatPriceText(`${courseOfTheDay.priceEGP} ج.م`, currency, exchangeRate)} بدلاً من ${formatPriceText(`${courseOfTheDay.originalPriceEGP || 500} ج.م`, currency, exchangeRate)}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
                <span>احجز الكورس ({formatPriceText(`${courseOfTheDay.priceEGP} ج.م`, currency, exchangeRate)})</span>
              </a>

              <button
                type="button"
                onClick={() => onSelectDepartment && onSelectDepartment('courses')}
                className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 text-[#0e2b6c] border border-slate-300 font-bold text-xs transition-all cursor-pointer"
              >
                كل الدورات ({COURSES_DATA.length})
              </button>
            </div>
          </div>

        </div>
        
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
                  {formatPriceText('بأسعار تبدأ من 5000 ج', currency, exchangeRate)}
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

              {/* Promotional Call-To-Action Box Filling the Space Between Buttons & Image */}
              <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-blue-50 via-sky-50/80 to-amber-50/70 border-2 border-[#43b8da]/40 shadow-sm space-y-3.5">
                <div className="flex items-center gap-2 text-[#0e2b6c] font-black text-base sm:text-lg">
                  <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>لا تؤجل نجاحك الرقمي.. ضاعف مبيعاتك وتواجدك الآن!</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 font-bold leading-relaxed">
                  كل دقيقة يتأخر فيها نشاطك التجاري عن الظهور أونلاين هي فرصة تذهب لمنافسيك! اطلب خدمتك الآن من <strong className="text-[#0e2b6c]">فور ديجيتال</strong> وامتلك موقعاً إلكترونياً أو متجراً أو تطبيقاً احترافياً يعكس قوة علامتك التجارية ويستقبل طلبات عملائك على مدار الساعة.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white/90 px-3 py-2 rounded-xl border border-sky-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>دومين واستضافة وإيميلات رسمية مجاناً</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white/90 px-3 py-2 rounded-xl border border-sky-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>تنفيذ سريع ودعم فني متواصل 24/7</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white/90 px-3 py-2 rounded-xl border border-sky-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>تهيئة كاملة لمحركات البحث (SEO)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white/90 px-3 py-2 rounded-xl border border-sky-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>استشارة مجانية وخطة عمل لمشروعك</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-sky-200/70">
                  <span className="text-xs font-black text-[#0e2b6c]">
                    جاهز للانطلاق؟ احجز باقتك أو تواصل معنا فوراً:
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenOrderModal('ramp-up')}
                      className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
                    >
                      <span>اطلب خدمتك الآن</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent('مرحباً فور ديجيتال، أرغب في طلب خدمة إنشاء موقع وتواجد رقمي متكامل لشركتي.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>واتساب فوري</span>
                    </a>
                  </div>
                </div>
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
                        <span>{formatPriceText(offer.title, currency, exchangeRate)}</span>
                      </h3>
                      <span className="text-[11px] font-black px-2.5 py-0.5 rounded-lg bg-amber-400 text-slate-950 shrink-0">
                        {offer.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {formatPriceText(offer.desc, currency, exchangeRate)}
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
                    setDomainInput(e.target.value.toLowerCase().replace(/[^a-z0-9.-]/g, ''));
                    setSearchStatus('idle');
                  }}
                  placeholder="مثال: google أو mycompany"
                  className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 font-sans text-sm py-1.5 focus:outline-none"
                  dir="ltr"
                />
              </div>

              <div className="flex items-center gap-1.5 w-full sm:w-auto">
                <select 
                  value={domainExtension}
                  onChange={(e) => {
                    setDomainExtension(e.target.value);
                    setSearchStatus('idle');
                  }}
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
                  disabled={searchStatus === 'searching'}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#43b8da] hover:bg-[#34a3c5] disabled:opacity-60 text-white transition-all shrink-0 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {searchStatus === 'searching' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>جاري الفحص الفعلي...</span>
                    </>
                  ) : (
                    <span>فحص الدومين</span>
                  )}
                </button>
              </div>
            </form>
          </div>

          {searchStatus === 'searching' && (
            <div className="mt-4 p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs sm:text-sm font-bold flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-blue-600 shrink-0" />
              <span>جاري الاستعلام المباشر عن النطاق في سجل النطاقات العالمي (DNS / WHOIS)...</span>
            </div>
          )}

          {searchStatus === 'available' && checkResult && (
            <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-bold flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>النطاق <strong dir="ltr" className="font-mono text-base">{checkResult.domain}</strong> غير مسجل ومتاح للحجز الفوري مجاناً مع باقات 4Digital!</span>
              </div>
              <button
                type="button"
                onClick={() => onOpenOrderModal('ramp-up', checkResult.domain)}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-xs font-bold shrink-0 cursor-pointer"
              >
                احجزه الآن
              </button>
            </div>
          )}

          {searchStatus === 'taken' && checkResult && (
            <div className="mt-4 p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-900 text-xs sm:text-sm space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-start gap-2 font-bold">
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span>عفواً، النطاق <strong dir="ltr" className="font-mono text-base text-rose-700">{checkResult.domain}</strong> محجوز بالفعل وغير متاح للتسجيل الجديد.</span>
                    {checkResult.RegistrarOrNs && (
                      <p className="text-[11px] text-rose-600 font-normal mt-0.5">
                        الحالة الفورية: {checkResult.RegistrarOrNs}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {checkResult.suggestions.length > 0 && (
                <div className="pt-2 border-t border-rose-200/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-black text-slate-700">نطاقات بديلة متاحة الآن للحجز الفوري:</span>
                  {checkResult.suggestions.map((sug) => (
                    <button
                      key={sug}
                      type="button"
                      onClick={() => onOpenOrderModal('ramp-up', sug)}
                      className="px-3 py-1.5 rounded-lg bg-white hover:bg-emerald-50 border border-emerald-400 text-emerald-800 font-mono text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
                      dir="ltr"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{sug}</span>
                      <span className="font-sans text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">احجز</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {searchStatus === 'invalid' && checkResult && (
            <div className="mt-4 p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-800 text-xs sm:text-sm font-bold">
              {checkResult.reason}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

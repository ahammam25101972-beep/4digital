import React from 'react';
import { 
  Lightbulb, 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  ArrowLeft, 
  ShieldCheck, 
  Rocket, 
  Clock, 
  MessageCircle 
} from 'lucide-react';
import { CONTACT_INFO } from '../data/goDigitalData';

export const SubmitIdeaPage: React.FC = () => {
  const googleFormUrl = 'https://docs.google.com/forms/d/12l_TwLwwLyj_daHTzUDvS-WUxa7juL9eP-tdjLKX-1U/edit';

  const ideaOptions = [
    {
      title: '١. موقع إلكتروني متكامل',
      subtitle: 'للشركات والمؤسسات والخدمات',
      price: '5,000 ج.م فقط',
      icon: Globe,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      features: [
        'تصميم عصري متجاوب مع الموبايل والكمبيوتر',
        'لوحة تحكم عربية سهلة لإدارة كافة الصفحات',
        'حجز دومين واستضافة سحابية سريعة وشهادة أمان SSL',
        'ربط مباشر بالواتساب ونماذج تواصل وخرائط جوجل',
        'تهيئة الموقع للظهور في محركات البحث SEO'
      ]
    },
    {
      title: '٢. متجر إلكتروني احترافي',
      subtitle: 'للبيع أونلاين وتلقي الطلبات',
      price: '5,000 ج.م فقط',
      icon: ShoppingCart,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      features: [
        'إضافة أقسام ومنتجات غير محدودة مع سلة مشتريات ذكية',
        'ربط طرق الدفع (المحافظ الإلكترونية، انستاباي، فيزا، فوري)',
        'نظام إدارة المخزون والفواتير وكوبونات الخصم',
        'ربط مع شركات الشحن وتتبع حالات الطلبات',
        'لوحة تقارير مبيعات وأرباح تفصيلية'
      ]
    },
    {
      title: '٣. تطبيق موبايل ذكي',
      subtitle: 'تطبيق هاتف لمشروعك أو فكرتك',
      price: '5,000 ج.م فقط',
      icon: Smartphone,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      features: [
        'تطبيق موبايل سريع وعصري يعمل بكفاءة عالية',
        'واجهات مستخدم جذابة وسهلة الاستخدام لعملائك',
        'نظام إشعارات وتنبيهات للعروض والطلبات الجديدة',
        'لوحة إدارة كاملة للتحكم في محتوى التطبيق والمستخدمين',
        'دعم فني وتحديثات لضمان استقرار التطبيق'
      ]
    }
  ];

  const steps = [
    {
      num: '01',
      title: 'اضغط على رابط نموذج تقديم الفكرة',
      desc: 'افتح نموذج Google Forms المخصص وسجل بياناتك وملخص فكرتك بكل سهولة.'
    },
    {
      num: '02',
      title: 'دراسة الفكرة والتواصل معك',
      desc: 'يقوم فريقنا بدراسة متطلبات مشروعك والتواصل معك لتحديد خطة التنفيذ والتصميم.'
    },
    {
      num: '03',
      title: 'التنفيذ والتسليم بـ 5,000 ج فقط',
      desc: 'نحول فكرتك إلى واقع ملموس (موقع أو متجر أو تطبيق موبايل) جاهز للعمل والربح.'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Highlighted Notice Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0e2b6c] via-blue-900 to-[#0e2b6c] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden border-2 border-amber-400/80">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-amber-400/15 blur-3xl rounded-full pointer-events-none" />
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs sm:text-sm font-black shadow-md">
              <Sparkles className="w-4 h-4" />
              <span>مبادرة فور ديجيتال لتحويل الأفكار إلى مشاريع ناجحة</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black leading-tight">
              قدّم الفكرة.. ونحن نحولها إلى <br className="hidden sm:inline" />
              <span className="text-amber-300">
                موقع إلكتروني أو متجر إلكتروني أو تطبيق موبايل
              </span>
            </h1>

            <div className="inline-block bg-white/10 backdrop-blur-xs border-2 border-amber-300 rounded-2xl px-6 py-4">
              <p className="text-2xl sm:text-4xl font-black text-amber-300">
                بـ 5,000 ج فقط!
              </p>
              <p className="text-xs sm:text-sm text-sky-100 mt-1">
                شامل التصميم، البرمجة، لوحة التحكم، والدعم الفني الكامل
              </p>
            </div>

            <p className="text-sm sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
              هل لديك فكرة مشروع أو ترغب في نقل نشاطك التجاري إلى عالم الإنترنت؟ الآن مع فور ديجيتال لا تدع التكلفة تقف أمام حلمك — سجل فكرتك الآن وسنتولى التنفيذ الكامل من الألف إلى الياء.
            </p>

            {/* Primary Google Form Link Button */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base sm:text-lg shadow-xl shadow-amber-400/25 flex items-center gap-3 transition-all hover:scale-105"
              >
                <Lightbulb className="w-6 h-6" />
                <span>اضغط هنا لتقديم فكرتك الآن (نموذج التسجيل)</span>
                <ExternalLink className="w-5 h-5" />
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base flex items-center gap-2 transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>استفسر عبر واتساب: {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Project Types Included in the 5,000 EGP Offer */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0e2b6c]">
              ماذا يمكنك أن تنفذ ضمن مبادرة الـ 5,000 ج؟
            </h2>
            <p className="text-sm text-slate-600">
              اختر نوع المشروع الذي يناسب فكرتك وسنقوم بتحويله إلى منتج رقمي متكامل جاهز للإطلاق
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {ideaOptions.map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-8 rounded-3xl bg-white border-2 ${opt.border} hover:shadow-xl transition-all flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-2xl ${opt.bg} flex items-center justify-center`}>
                        <Icon className={`w-7 h-7 ${opt.color}`} />
                      </div>
                      <span className="px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 font-black text-sm">
                        {opt.price}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-slate-900">{opt.title}</h3>
                      <p className="text-xs font-bold text-blue-600 mt-1">{opt.subtitle}</p>
                    </div>

                    <ul className="space-y-2.5 pt-2 border-t border-slate-100">
                      {opt.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <a
                      href={googleFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl bg-[#0e2b6c] hover:bg-blue-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all"
                    >
                      <span>قدّم فكرتك لهذا المشروع</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* How It Works & Direct Form Link Box */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-8">
          <h3 className="text-xl sm:text-2xl font-black text-center text-[#0e2b6c]">
            خطوات تحويل فكرتك إلى مشروع حقيقي
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                <span className="text-2xl font-black text-[#43b8da] font-mono">{s.num}</span>
                <h4 className="text-base font-black text-slate-900">{s.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white border-2 border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-right">
              <p className="text-base font-black text-slate-900">
                نموذج تسجيل وتقديم الفكرة (موقع أو متجر أو تطبيق موبايل بـ 5,000 ج فقط):
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                يمكنك نسخ الرابط مباشرة أو فتح النموذج لتسجيل بيانات فكرتك
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => {
                  if (typeof navigator !== 'undefined' && navigator.clipboard) {
                    navigator.clipboard.writeText(googleFormUrl).catch(() => {});
                  }
                }}
                className="px-5 py-3 rounded-xl bg-[#0e2b6c] hover:bg-blue-800 text-white font-bold text-xs sm:text-sm cursor-pointer"
              >
                نسخ الرابط
              </button>

              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#43b8da] hover:bg-[#34a3c5] text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md"
              >
                <span>فتح نموذج تقديم الفكرة</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

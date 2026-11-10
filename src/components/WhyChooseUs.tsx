import React from 'react';
import { 
  Headphones, 
  CreditCard, 
  Award, 
  Server, 
  ShieldCheck, 
  Zap, 
  Sparkles,
  PhoneCall,
  Check
} from 'lucide-react';
import { CONTACT_INFO } from '../data/goDigitalData';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: 'خدمة دعم فني متخصص باللغة العربية',
      desc: 'فريق دعم تقني متاح 24/7 طوال أيام الأسبوع للرد على كافة الاستفسارات وتقديم الحلول الفورية عبر الهاتف والواتساب وتذاكر الدعم.',
      icon: Headphones,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      title: 'باقات اقتصادية بأسعار واضحة بالجنيه المصري',
      desc: 'تجنب تقلبات أسعار الصرف والعملات الأجنبية؛ أسعارنا ثابتة ومحددة بدقة بالجنيه المصري شاملة كافة التراخيص والخدمات.',
      icon: CreditCard,
      color: 'text-sky-600',
      bg: 'bg-sky-50'
    },
    {
      title: 'فريق عمل متنوع من الخبراء المعتمدين',
      desc: 'مهندسون وفنيون متخصصون في إدارة الخوادم، تأمين البيانات، هندسة الويب، وحلول السحابة الإلكترونية الحديثة.',
      icon: Award,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      title: 'بنية تحتية تخدم أكثر من 7,000 شركة',
      desc: 'سيرفرات سريعة ومحمية تضمن لك سرعة تحميل البرامج وتصفح المواقع واستقرار الخدمة بنسبة 99.9%.',
      icon: Server,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      title: 'أقصى معايير الحماية والأمان السيبراني',
      desc: 'فحص دوري من البرمجيات الخبيثة، شهادات أمان SSL مشفرة، وجدران نارية متطورة تحمي بياناتك وبريدك من الاختراق.',
      icon: ShieldCheck,
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    },
    {
      title: 'طرق دفع سهلة وفورية (InstaPay)',
      desc: 'إمكانية إتمام الدفع والتفعيل الفوري عبر تطبيق انستاباي InstaPay، البطاقات البنكية (Visa / Mastercard)، أو فوري.',
      icon: Zap,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50'
    },
  ];

  return (
    <section id="why-us" className="py-20 relative bg-slate-50/80 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>لماذا يختارنا أصحاب الأعمال؟</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            لماذا تختار منصة <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              4Digital لشراكة نجاحك الرقمي؟
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            نجمع بين قوة الاستضافة السحابية العالمية والدعم المحلي المباشر في مصر لتوفير تجربة استثنائية تضمن استقرار وريادة أعمالك.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 shadow-sm space-y-4 group"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.bg} border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust CTA Box */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-right">
            <h4 className="text-xl font-bold text-slate-900">
              جاهز لتجربة باقات 4Digital بدون أي مخاطرة؟
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              استمتع بضمان استرداد الأموال لمدة 14 يوماً مع تفعيل فوري لكافة الخدمات.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="#plans" 
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all"
            >
              ابدأ الآن باختيار باقتك
            </a>
            <a 
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold text-sm transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-blue-600" />
              <span>اتصل بالمبيعات</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

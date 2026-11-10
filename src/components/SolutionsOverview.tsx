import React from 'react';
import { 
  Rocket, 
  Target, 
  Zap, 
  ArrowLeft,
  Server,
  Lock,
  Headphones,
  DollarSign,
  TrendingUp,
  Award
} from 'lucide-react';

interface SolutionsOverviewProps {
  onOpenOrderModal: () => void;
}

export const SolutionsOverview: React.FC<SolutionsOverviewProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="services-overview" className="py-20 relative bg-slate-50/70 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Block 1: حلول ذكية ومرنة لشركتك */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              <span>حلول ذكية ومرنة لشركتك</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              انطلق بشركتك لمواصلة <br />
              <span className="text-blue-600">مسيرة النجاح والتحول الرقمي</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              باقات 4Digital تساعد شركتك لمواصلة مسيرة النجاح عن طريق التحوّل الرقمي بتقديم حلول ذكية ومرنة تساعدك في إنشاء الموقع الإلكتروني الخاص بشركتك والمؤمن بتقنية SSL مع دومين يحمل اسم شركتك، وبريد إلكتروني احترافي.
            </p>

            <div className="space-y-3 pt-2">
              <p className="text-sm font-bold text-slate-900">عند اختيارك خدمات 4Digital ستحصل على:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: 'مجموعة متكاملة من حلول الاستضافة', icon: Server },
                  { title: 'أقصى درجات الأمان الإلكتروني', icon: Lock },
                  { title: 'طرق دفع مرنة ومحلية (InstaPay)', icon: DollarSign },
                  { title: 'خدمة دعم فني متخصص 24/7', icon: Headphones },
                  { title: 'ضمان استرداد الأموال المريح', icon: Award },
                  { title: 'سهولة الترقية والتوسع المستمر', icon: TrendingUp },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <item.icon className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-800">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenOrderModal}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center gap-2"
              >
                <span>ابدأ الآن وانضم للشركات الرائدة</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-slate-500">منظومة 4Digital المتكاملة</span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  سيرفرات جاهزة 100%
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs text-slate-500">النطاق والربط السحابي:</span>
                    <p className="text-sm font-bold text-slate-900" dir="ltr">yourcompany.com</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                    نشط وفوري
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs text-slate-500">موقع الشركة التعريفي:</span>
                    <p className="text-sm font-bold text-slate-900">مُصمم متجاوب + متوافق مع SEO</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                    جاهز للنشر
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs text-slate-500">البريد الإلكتروني المهني:</span>
                    <p className="text-sm font-bold text-slate-900" dir="ltr">ceo@yourcompany.com</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                    حماية كاملة
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center gap-3">
                <Rocket className="w-8 h-8 text-blue-600 shrink-0" />
                <p className="text-xs text-slate-700 leading-relaxed">
                  تجهيز وتسليم حسابك وإطلاق موقعك يتم خلال دقائق معدودة مع دعم فني خطوة بخطوة.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: مساعدة الشركات على النمو السريع */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Target className="w-3.5 h-3.5 text-blue-600" />
              <span>مساعدة الشركات على النمو السريع</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              نساعد الشركات بمختلف أحجامها <br />
              <span className="text-blue-600">لتأسيس وجود رقمي قوي وموثوق</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              إذا كانت شركتك في مرحلة البداية أو تسعى لتوسيع أعمالها عبر الإنترنت، توفر لك 4Digital البنية التحتية الصلبة التي تتيح لك التركيز في تنمية تجارتك وجذب عملاء جدد بكل سهولة.
            </p>

            <ul className="space-y-3">
              {[
                'لوحة تحكم cPanel عربية سهلة وبسيطة بدون أي تعقيد برمجي',
                'مُنشئ ومحرر مواقع وتطبيقات تفاعلية متجاوبة مع الجوال',
                'سيرفرات سحابية فائقة السرعة تضمن فتح موقعك في أقل من ثانية',
                'دعم فني واستشارات متخصصة عبر واتساب والهاتف باللغة العربية'
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <h4 className="text-lg font-bold text-slate-900">
                مؤشرات أداء استضافة 4Digital السحابية
              </h4>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                    <span>وقت تشغيل الخادم (Server Uptime)</span>
                    <span className="text-emerald-700">99.9%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[99.9%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                    <span>سرعة تحميل الصفحات (Page Speed)</span>
                    <span className="text-blue-700">0.7 ثانية</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full w-[94%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                    <span>حماية البيانات والتشفير (SSL & DDoS)</span>
                    <span className="text-indigo-700">100%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

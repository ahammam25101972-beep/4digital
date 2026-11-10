import React from 'react';
import { 
  Layout, 
  Server, 
  ShoppingCart, 
  Globe, 
  Zap, 
  ArrowLeft,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface WebServicesSectionProps {
  onOpenOrderModal: (serviceName?: string) => void;
}

export const WebServicesSection: React.FC<WebServicesSectionProps> = ({ onOpenOrderModal }) => {
  const webOfferings = [
    {
      title: 'تصميم مواقع الشركات والمؤسسات',
      desc: 'بناء موقع تعريفي رسمي يعكس قوة علامتك التجارية، سريع التحميل ومتوافق بنسبة 100% مع الجوال ومحركات البحث Google، مع لوحة تحكم عربية مرنة وسهلة.',
      icon: Layout,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      price: 'تبدأ من 2,999 ج.م',
      features: [
        'تصميم متجاوب بالكامل مع الهواتف الذكية والأجهزة اللوحية',
        'تهيئة كاملة لمحركات البحث (SEO On-Page)',
        'لوحة تحكم سهلة لإضافة وتعديل المقالات والخدمات',
        'ربط سريع بزر الواتساب ونماذج الاتصال المباشرة',
        'شهادة أمان وتشفير SSL ودومين مجاني متضمن'
      ]
    },
    {
      title: 'برمجة المتاجر الإلكترونية المتكاملة',
      desc: 'متجر إلكتروني احترافي مجهز بأحدث أدوات التجارة الرقمية، ربط بوابات الدفع الإلكتروني (فيزا، ماستركارد، انستاباي، فوري)، وإدارة المنتجات والمبيعات.',
      icon: ShoppingCart,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      price: 'تبدأ من 4,499 ج.م',
      badge: 'الأعلى طلباً للمبيعات 🛍️',
      features: [
        'ربط بوابات الدفع الإلكتروني المحلية والدولية (InstaPay, Visa, Fawry)',
        'نظام سلة مشتريات سلس وتتبع حالة الطلبات والمخزون',
        'إشعارات فورية بالطلبات الجديدة عبر البريد والواتساب',
        'نظام كوبونات الخصم والعروض الترويجية والتقييمات',
        'سرعة فائقة لتصفح المنتجات وزيادة معدل التحويل'
      ]
    },
    {
      title: 'استضافة سحابية فائقة السرعة SSD',
      desc: 'سيرفرات استضافة مدارة ومحمية بالكامل، تضمن سرعة استجابة مذهلة لموقعك ونسبة تشغيل 99.9% مع حماية ضد هجمات حجب الخدمة DDoS.',
      icon: Server,
      color: 'text-sky-600',
      bgColor: 'bg-sky-50',
      price: 'تبدأ من 1,200 ج.م/سنة',
      features: [
        'أقراص تخزين فائقة السرعة NVMe SSD',
        'لوحة تحكم cPanel أصلية باللغة العربية والإنجليزية',
        'شهادات SSL أمان مجانية لجميع النطاقات الفرعية',
        'نسخ احتياطي يومي وأسبوعي تلقائي لحماية بياناتك',
        'حماية استباقية من الفيروسات وجدار حماية WAF متطور'
      ]
    },
    {
      title: 'حجز وإدارة النطاقات (الدومينات)',
      desc: 'سجل اسم شركتك بنطاقات دولية ومحلية (.com, .com.eg, .net, .org, .eg) مع لوحة تحكم DNS كاملة ودعم فني معتمد لحماية ملكية النطاق.',
      icon: Globe,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      price: 'تبدأ من 450 ج.م/سنة',
      features: [
        'تفعيل وتسجيل فوري باسم شركتك أو نشاطك',
        'لوحة إدارة DNS كاملة ومجانية',
        'حماية خصوصية بيانات المالك Whois Privacy',
        'إعادة توجيه النطاق والبريد الإلكتروني بسهولة',
        'تنبيهات وتجديد تلقائي لمنع فقدان النطاق'
      ]
    }
  ];

  return (
    <section id="web-services" className="py-20 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>خدمات الويب المتكاملة من فور ديجيتال</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            تصميم واستضافة المواقع الإلكترونية <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              بأحدث المعايير التقنية العالمية
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            سواء كنت بحاجة إلى موقع تعريفي لشركتك، متجر إلكتروني لبيع منتجاتك، أو استضافة سحابية عالية الاستقرار، نقدم لك حلولاً برمجية وتصميمية متكاملة تحقق أهدافك وتزيد مبيعاتك.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {webOfferings.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Popular Badge if exists */}
                {item.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    {item.badge}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${item.bgColor} border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0`}>
                      <Icon className={`w-7 h-7 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs font-black text-blue-700 font-sans block mt-0.5">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Features List */}
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <p className="text-xs font-bold text-slate-900">تشمل الخدمة:</p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenOrderModal(item.title)}
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <span>طلب الخدمة واستشارة مجانية</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hosting + Design combo banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border border-blue-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-right">
            <h4 className="text-xl font-bold text-slate-900 flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span>وفر أكثر مع باقة [التصميم + الاستضافة + الدومين] الموحدة!</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              احصل على موقعك الإلكتروني جاهزاً للنشر مع الاستضافة السحابية والدومين والبريد الرسمي بخصم باقات 4Digital الحصري.
            </p>
          </div>

          <a 
            href="#plans" 
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shrink-0 shadow-md shadow-blue-500/20 transition-all"
          >
            اطلع على باقات 4Digital الشاملة
          </a>
        </div>

      </div>
    </section>
  );
};

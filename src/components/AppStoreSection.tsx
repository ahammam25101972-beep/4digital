import React, { useState } from 'react';
import { 
  Smartphone, 
  ShoppingBag, 
  CheckCircle2, 
  Star, 
  MessageCircle
} from 'lucide-react';
import { AdditionalService, CONTACT_INFO } from '../data/goDigitalData';

interface AppStoreSectionProps {
  onSelectApp: (service: AdditionalService) => void;
}

interface AppItem {
  id: string;
  title: string;
  fieldId: string;
  fieldBadge: string;
  platforms: string;
  priceEGP: string;
  description: string;
  features: string[];
  rating: string;
}

const APP_FIELDS = [
  { id: 'all', label: 'جميع المجالات' },
  { id: 'management', label: 'الإدارة والمحاسبة والمبيعات' },
  { id: 'ecommerce', label: 'التجارة الإلكترونية والتوصيل' },
  { id: 'restaurants', label: 'المطاعم والكافيهات' },
  { id: 'medical', label: 'العيادات والمجال الطبي' },
  { id: 'education', label: 'التعليم والتدريب' },
  { id: 'realestate', label: 'العقارات والمقاولات' },
];

export const AppStoreSection: React.FC<AppStoreSectionProps> = ({ onSelectApp }) => {
  const [selectedField, setSelectedField] = useState<string>('all');

  const apps: AppItem[] = [
    {
      id: 'app-pos-inventory',
      title: 'تطبيق ونظام إدارة المبيعات والمخازن ونقاط البيع (POS)',
      fieldId: 'management',
      fieldBadge: 'الإدارة والمحاسبة والمبيعات',
      platforms: 'موبايل Android / iOS + ويب وسطح مكتب',
      priceEGP: '4,500 ج.م',
      description: 'نظام متكامل لإدارة المحلات التجارية، السوبر ماركت، والشركات؛ يدعم قارئ الباركود، الفواتير، جرد المخازن، وحسابات العملاء والموردين.',
      features: [
        'إصدار فواتير سريعة ودعم طابعات الكاشير والباركود',
        'تنبيهات نواقص المخزون وتقارير الأرباح اليومية والشهرية',
        'تحديد صلاحيات الكاشير والمحاسب والمدير العام',
        'يعمل أونلاين وأوفلاين مع نسخ احتياطي سحابي'
      ],
      rating: '4.9'
    },
    {
      id: 'app-ecommerce-delivery',
      title: 'تطبيق المتجر الإلكتروني والتوصيل الذكي (العميل + المندوب)',
      fieldId: 'ecommerce',
      fieldBadge: 'التجارة الإلكترونية والتوصيل',
      platforms: 'Android & iOS + لوحة تحكم ويب',
      priceEGP: '6,500 ج.م',
      description: 'تطبيق متكامل للسوبر ماركت، الصيدليات، والمتاجر الإلكترونية مع تتبع المندوب على الخريطة ودعم وسائل الدفع الإلكتروني.',
      features: [
        'تطبيق للعميل لطلب المنتجات + تطبيق خاص لمندوب التوصيل',
        'دفع عبر المحافظ الإلكترونية، انستاباي، الفيزا، أو عند الاستلام',
        'إشعارات فورية بحالة الطلب وكوبونات خصم ذكية',
        'لوحة تحكم شاملة لإدارة الأقسام والمنتجات والطلبات'
      ],
      rating: '5.0'
    },
    {
      id: 'app-smart-restaurant',
      title: 'تطبيق المنيو الرقمي وإدارة طلبات المطاعم والكافيهات',
      fieldId: 'restaurants',
      fieldBadge: 'المطاعم والكافيهات',
      platforms: 'ويب + موبايل + QR طاولات',
      priceEGP: '3,500 ج.م',
      description: 'تطبيق ذكي يتيح لعملاء المطعم تصفح المنيو عبر مسح رمز QR على الطاولة أو الطلب أونلاين للتوصيل، مع شاشة مطبخ لحظية لتجهيز الطلبات.',
      features: [
        'منيو تفاعلي بالصور والأسعار والإضافات قابل للتعديل اللحظي',
        'نظام طلب من داخل الصالة (QR Table) وطلبات الدليفري عبر الواتساب',
        'إدارة الطاولات والحجوزات وتقارير الأصناف الأكثر مبيعاً',
        'بدون أي عمولات شهرية على الطلبات'
      ],
      rating: '4.9'
    },
    {
      id: 'app-clinic-manager',
      title: 'تطبيق إدارة العيادات والمراكز الطبية وحجز المواعيد',
      fieldId: 'medical',
      fieldBadge: 'العيادات والمجال الطبي',
      platforms: 'موبايل + ويب سحابي',
      priceEGP: '5,000 ج.م',
      description: 'تطبيق شامل للأطباء والمراكز الطبية لتنظيم حجوزات المرضى، الملف الطبي الإلكتروني، الروشتة المطبوعة، وحسابات العيادة.',
      features: [
        'حجز مواعيد أونلاين للمرضى مع رسائل تذكير تلقائية',
        'سجل مرضي إلكتروني كامل لكل مريض مع المرفقات والأشعة',
        'طباعة روشتة طبية احترافية منظمة',
        'إدارة حسابات الكشوفات والاستشارات والمصروفات'
      ],
      rating: '4.8'
    },
    {
      id: 'app-edu-academy',
      title: 'تطبيق المنصة التعليمية وإدارة المراكز والمدرسين والطلاب',
      fieldId: 'education',
      fieldBadge: 'التعليم والتدريب',
      platforms: 'Android & iOS + موقع ويب',
      priceEGP: '5,500 ج.م',
      description: 'منصة وتطبيق موبايل للمدرسين والأكاديميات ومراكز التدريب لعرض المحاضرات المسجلة، الاختبارات الإلكترونية، وبنك الأسئلة مع حماية الفيديوهات.',
      features: [
        'حماية كاملة للمحاضرات والفيديوهات من التحميل أو تصوير الشاشة',
        'امتحانات إلكترونية مصححة تلقائياً مع تقارير لمستوى الطالب',
        'دفع الاشتراكات عبر فودافون كاش وانستاباي وأكواد التفعيل',
        'متابعة حضور وغياب الطلاب وإشعارات لأولياء الأمور'
      ],
      rating: '4.9'
    },
    {
      id: 'app-real-estate-crm',
      title: 'تطبيق إدارة التسويق العقاري والأقساط والمبيعات (CRM)',
      fieldId: 'realestate',
      fieldBadge: 'العقارات والمقاولات',
      platforms: 'موبايل + لوحة تحكم سحابية',
      priceEGP: '4,999 ج.م',
      description: 'تطبيق مخصص لشركات الاستثمار والتسويق العقاري لمتابعة العملاء المحتملين (Leads)، الوحدات المتاحة، جدولة الأقساط، وتنبيهات التحصيل.',
      features: [
        'كتالوج عقاري تفاعلي بالصور والمساحات والأسعار ومواقع الوحدات',
        'متابعة مكالمات مندوبي المبيعات وتوزيع العملاء تلقائياً',
        'حاسبة أقساط ذكية وإشعارات بمواعيد استحقاق الدفعات',
        'تقارير أداء تفصيلية للمبيعات والتحصيلات'
      ],
      rating: '5.0'
    }
  ];

  const filteredApps = apps.filter(app => selectedField === 'all' || app.fieldId === selectedField);

  return (
    <section id="app-store" className="py-14 bg-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Smartphone className="w-4 h-4 text-blue-600" />
            <span>متجر التطبيقات والأنظمة الرقمية</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0e2b6c] leading-tight">
            متجر التطبيقات حسب مجال العمل
          </h1>

          <p className="text-slate-600 text-base leading-relaxed">
            اختر مجال نشاطك واستعرض التطبيقات والأنظمة الذكية المصممة لإدارة وتنمية أعمالك بكفاءة وسهولة.
          </p>

          {/* Category Filter Buttons by Application Field */}
          <div className="pt-3 flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-2 p-2 rounded-2xl bg-slate-100 border border-slate-200">
              {APP_FIELDS.map((field) => (
                <button
                  key={field.id}
                  onClick={() => setSelectedField(field.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedField === field.id
                      ? 'bg-[#0e2b6c] text-white shadow-xs'
                      : 'text-slate-700 hover:bg-white'
                  }`}
                >
                  {field.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="p-6 rounded-3xl bg-white border-2 border-slate-200 hover:border-[#43b8da] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-black px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                    مجال التطبيق: {app.fieldBadge}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-amber-600">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{app.rating}</span>
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-500">{app.platforms}</span>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#0e2b6c] transition-colors mt-1 leading-snug">
                    {app.title}
                  </h3>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs text-slate-600 font-bold">السعر:</span>
                  <span className="text-lg font-black text-[#0e2b6c]">{app.priceEGP}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {app.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <p className="text-xs font-black text-slate-900">أبرز مميزات التطبيق:</p>
                  {app.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() =>
                    onSelectApp({
                      id: app.id,
                      title: `طلب تطبيق: ${app.title}`,
                      description: app.description,
                      iconName: 'Layout',
                      startingPrice: app.priceEGP,
                      deliverableTime: 'خلال 48 ساعة',
                      highlight: app.fieldBadge,
                      category: 'web'
                    })
                  }
                  className="flex-1 py-3 rounded-xl bg-[#0e2b6c] hover:bg-blue-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>اطلب التطبيق الآن</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border-2 border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-right">
            <h3 className="text-xl font-black text-[#0e2b6c]">
              هل تبحث عن تطبيق في مجال آخر أو ترغب في معاينة حية؟
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              تواصل معنا مباشرة عبر واتساب لتجربة أي تطبيق عملياً أو طلب تطبيق مخصص لمجال عملك.
            </p>
          </div>

          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center gap-2 shrink-0 shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            <span>تواصل عبر واتساب: {CONTACT_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};

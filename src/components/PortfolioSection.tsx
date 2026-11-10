import React, { useState } from 'react';
import { 
  Briefcase, 
  Globe, 
  Smartphone, 
  Palette, 
  FileSpreadsheet, 
  CheckCircle2, 
  ArrowLeft, 
  Sparkles, 
  MessageCircle 
} from 'lucide-react';
import { AdditionalService, CONTACT_INFO } from '../data/goDigitalData';

interface PortfolioSectionProps {
  onOrderSimilar: (service: AdditionalService) => void;
}

interface PortfolioItem {
  id: string;
  title: string;
  category: 'web' | 'apps' | 'design' | 'office';
  categoryLabel: string;
  clientType: string;
  description: string;
  deliverables: string[];
  badge: string;
}

const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'جميع أعمالنا' },
  { id: 'web', label: 'المواقع والمتاجر الإلكترونية' },
  { id: 'apps', label: 'تطبيقات الموبايل والأنظمة' },
  { id: 'design', label: 'اللوجوهات والمنيو والـ QR' },
  { id: 'office', label: 'الوورد والإكسيل والباوربوينت' },
];

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'work-1',
    title: 'منصة ومتجر إلكتروني متكامل لشركة تجارة وتوريدات',
    category: 'web',
    categoryLabel: 'المواقع والمتاجر الإلكترونية',
    clientType: 'شركة تجارية — القاهرة',
    description: 'تصميم وبرمجة متجر وموقع تعريفي متجاوب بالكامل مع ربط وسائل الدفع الإلكتروني (المحافظ الإلكترونية وانستاباي) ولوحة تحكم عربية لإدارة المنتجات والطلبات.',
    deliverables: [
      'حجز دومين رسمي واستضافة سحابية فائقة السرعة',
      'تصميم واجهات عصرية متوافقة مع الهواتف ومحركات البحث SEO',
      'ربط بوابات الدفع الفوري ونظام الفواتير والشحن'
    ],
    badge: 'موقع ومتجر متكامل'
  },
  {
    id: 'work-2',
    title: 'تطبيق موبايل لإدارة المبيعات والطلبات وتوصيل الطلبات',
    category: 'apps',
    categoryLabel: 'تطبيقات الموبايل والأنظمة',
    clientType: 'سلسلة محلات وسوبر ماركت',
    description: 'تطوير تطبيق هاتف ذكي يتيح للعملاء تصفح الأصناف والطلب المباشر مع إشعارات لحظية، ولوحة إدارة شاملة لمتابعة المبيعات والمخزون.',
    deliverables: [
      'تطبيق موبايل سريع وسهل الاستخدام للعملاء',
      'لوحة تحكم لإدارة الأصناف والعروض والطلبات',
      'تقارير مبيعات وجرد مخازن يومية وشهرية'
    ],
    badge: 'تطبيق موبايل'
  },
  {
    id: 'work-3',
    title: 'تصميم الهوية البصرية واللوجو ومنيو الطعام والـ QR Code لمطعم وكافيه',
    category: 'design',
    categoryLabel: 'اللوجوهات والمنيو والـ QR',
    clientType: 'مطعم وكافيه — الإسكندرية',
    description: 'ابتكار شعار تجاري مميز (Logo) مع تصميم منيو طعام ومشروبات احترافي للطباعة والنسخة الرقمية، وإعداد رموز QR Code ذكية للطاولات.',
    deliverables: [
      'تصميم شعار (لوجو) احترافي بملفات مفتوحة للطباعة',
      'تصميم منيو طعام جذاب ومنظم يبرز كافة الأصناف والأسعار',
      'إعداد رموز QR Code مخصصة بألوان وشعار المطعم'
    ],
    badge: 'لوجو + منيو + QR'
  },
  {
    id: 'work-4',
    title: 'بناء منظومة شيتات إكسيل محاسبية ولوحة تحكم مالية (Dashboard)',
    category: 'office',
    categoryLabel: 'الوورد والإكسيل والباوربوينت',
    clientType: 'مكتب محاسبة وإدارة مشروعات',
    description: 'تصميم ملفات إكسيل متقدمة بالمعادلات لمتابعة الإيرادات والمصروفات، حساب صافي الأرباح، كشوف المرتبات، وحركة المخازن بشكل تلقائي.',
    deliverables: [
      'شيتات إكسيل مؤتمتة بالمعادلات الدقيقة وحماية الخلايا',
      'شاشة تقارير ورسوم بيانية توضح الأداء المالي بنظرة واحدة',
      'جاهزية تامة للطباعة والتصدير بصيغة PDF'
    ],
    badge: 'شيتات إكسيل محاسبية'
  },
  {
    id: 'work-5',
    title: 'تنسيق وكتابة رسائل علمية وعقود قانونية وعروض PowerPoint',
    category: 'office',
    categoryLabel: 'الوورد والإكسيل والباوربوينت',
    clientType: 'باحثون أكاديميون وشركات استشارية',
    description: 'كتابة وتنسيق ملفات وورد رسمية وأبحاث علمية مع الفهرسة الآلية، وتصميم عروض تقديمية (PowerPoint) احترافية للمناقشات والمستثمرين.',
    deliverables: [
      'تنسيق ملفات Word وضبط الهوامش والخطوط والفهارس التلقائية',
      'تصميم شرائح PowerPoint جذابة مدعومة بالإنفوجرافيك',
      'تدقيق لغوي وترجمة احترافية للملخصات والمستندات'
    ],
    badge: 'وورد + باوربوينت + ترجمة'
  },
  {
    id: 'work-6',
    title: 'موقع إلكتروني ونظام حجز مواعيد لمركز طبي وعيادات متخصصة',
    category: 'web',
    categoryLabel: 'المواقع والمتاجر الإلكترونية',
    clientType: 'مركز طبي متكامل',
    description: 'تصميم موقع طبي يعرض التخصصات والأطباء ومواعيد العيادات، مع إمكانية الحجز الإلكتروني المباشر والتواصل الفوري عبر واتساب.',
    deliverables: [
      'واجهة طبية مريحة وموثوقة متجاوبة مع جميع الشاشات',
      'نموذج حجز مواعيد ذكي مرتبط بلوحة إدارة المركز',
      'ربط الموقع بخرائط جوجل وصفحات السوشيال ميديا'
    ],
    badge: 'موقع طبي وحجوزات'
  }
];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOrderSimilar }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems = PORTFOLIO_ITEMS.filter(
    item => selectedCategory === 'all' || item.category === selectedCategory
  );

  const getCategoryIcon = (cat: PortfolioItem['category']) => {
    switch (cat) {
      case 'web':
        return <Globe className="w-6 h-6 text-blue-600" />;
      case 'apps':
        return <Smartphone className="w-6 h-6 text-indigo-600" />;
      case 'design':
        return <Palette className="w-6 h-6 text-rose-600" />;
      case 'office':
        return <FileSpreadsheet className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="portfolio" className="py-14 bg-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <span>سابقة أعمال فور ديجيتال — جودة تنفيذ واحترافية</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0e2b6c] leading-tight">
            من أعمالنا ومشاريعنا المنفذة
          </h1>

          <p className="text-slate-600 text-base leading-relaxed">
            نماذج مختارة من المشاريع والخدمات التي نفذناها لعملائنا في تصميم المواقع والمتاجر، تطبيقات الهواتف، تصميم اللوجوهات ومنيوهات الطعام، وأعمال الوورد والإكسيل والباوربوينت.
          </p>

          {/* Category Filter Buttons */}
          <div className="pt-3 flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
              {PORTFOLIO_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#0e2b6c] text-white shadow-xs'
                      : 'text-slate-700 hover:bg-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-white border-2 border-slate-200 hover:border-[#43b8da] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-500">
                    {item.categoryLabel} · {item.clientType}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#0e2b6c] transition-colors mt-1 leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <p className="text-xs font-black text-slate-900">ما تم تنفيذه وتسليمه:</p>
                  <ul className="space-y-1.5">
                    {item.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100">
                <button
                  onClick={() =>
                    onOrderSimilar({
                      id: item.id,
                      title: `طلب مشروع مماثل: ${item.title}`,
                      description: item.description,
                      iconName: 'Sparkles',
                      startingPrice: 'حسب تفاصيل المشروع',
                      deliverableTime: 'تسليم سريع ومضمون',
                      highlight: item.badge,
                      category: 'web'
                    })
                  }
                  className="w-full py-3 rounded-xl bg-[#0e2b6c] hover:bg-blue-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>اطلب عملاً مشابهاً لمشروعك</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border-2 border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-right">
            <h3 className="text-xl font-black text-[#0e2b6c]">
              هل ترغب في تنفيذ مشروعك القادم معنا بأعلى جودة؟
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              تواصل معنا الآن عبر واتساب لمناقشة تفاصيل فكرتك أو طلبك والبدء الفوري في التنفيذ.
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

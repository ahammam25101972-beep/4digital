import React, { useState } from 'react';
import { 
  Smartphone, 
  ShoppingBag, 
  CheckCircle2, 
  Star, 
  MessageCircle,
  ExternalLink,
  Sparkles,
  Monitor,
  Search
} from 'lucide-react';
import { AdditionalService, CONTACT_INFO } from '../data/goDigitalData';
import { formatPriceText } from '../utils/currencyConverter';

interface AppStoreSectionProps {
  currency?: 'EGP' | 'USD';
  exchangeRate?: number;
  onSelectApp: (service: AdditionalService) => void;
}

export interface AppItem {
  id: string;
  title: string;
  fieldId: string;
  fieldBadge: string;
  platforms: string;
  priceEGP: string;
  description: string;
  features: string[];
  rating: string;
  liveUrl?: string;
  previewUrl?: string;
  iconUrl?: string;
  coverImage?: string;
  isFeatured4Digital?: boolean;
  licenseBadge?: string;
}

const APP_FIELDS = [
  { id: 'all', label: 'جميع التطبيقات والبرامج' },
  { id: 'hajj-tourism', label: 'الحج والعمرة والسياحة الدينية' },
  { id: 'desktop-accounting', label: 'برامج سطح المكتب والحسابات' },
  { id: 'cloud-erp', label: 'البرامج السحابية و ERP' },
  { id: 'manufacturing', label: 'التصنيع والإنتاج والمصانع' },
  { id: 'installments', label: 'مبيعات التقسيط وتحصيل الأقساط' },
  { id: 'restaurants', label: 'المطاعم والكافيهات' },
  { id: 'medical', label: 'البرامج الطبية والعيادات' },
  { id: 'ecommerce', label: 'التجارة الإلكترونية والتوصيل' },
  { id: 'education', label: 'التعليم والتدريب' },
  { id: 'realestate', label: 'العقارات والمقاولات' },
];

export const APP_STORE_ITEMS: AppItem[] = [
  {
    id: 'app-manasiki-4digital',
    title: 'تطبيق «مَنَاسِكِي - Manasiki» — رفيق الحاج والمعتمر الذكي',
    fieldId: 'hajj-tourism',
    fieldBadge: 'الحج والعمرة والسياحة الدينية',
    platforms: 'تطبيق موبايل (Android / iOS / PWA) + ويب تفاعلي',
    priceEGP: '5,000 ج.م',
    description: 'رفيق الحاج الذكي من تطبيقات فور ديجيتال: يضم حقيبة الاستعداد الشاملة، رادار الرفاق والزحام اللحظي، خدمات ومخيم المشاعر (منى وعرفات)، وعداد المناسك والأدعية مع بطاقة الحاج الذكية.',
    features: [
      'حقيبة الاستعداد الذكية (التصاريح الرسمية ومنصة نسك، الاستعداد الصحي، مستلزمات الإحرام، والفقه)',
      'رادار الرفاق والزحام اللحظي لمتابعة أفراد العائلة والحملة حول الحرم المكي والمشاعر',
      'خدمات ومخيم المشاعر وتفاصيل السكن بمكة والمدينة ومخيمات منى وعرفات وبطاقة الحاج الذكية',
      'عداد المناسك التفاعلي (الطواف والسعي) ودليل الأدعية والإرشادات خطوة بخطوة'
    ],
    rating: '5.0',
    liveUrl: 'https://manasiki.4digital.net/',
    iconUrl: 'https://manasiki.4digital.net/icon.svg',
    isFeatured4Digital: true,
    licenseBadge: 'تطبيق ويب وموبايل متكامل'
  },
  {
    id: 'anis-bizon-erp',
    title: 'برنامج BIZON ERP — النظام السحابي لنقاط البيع و CRM والموارد البشرية والمخزون',
    fieldId: 'cloud-erp',
    fieldBadge: 'البرامج السحابية — الحسابات والمبيعات ERP',
    platforms: 'برنامج سحابي يعمل على الكمبيوتر والموبايل',
    priceEGP: '600 ج.م',
    description: 'حل سحابي متكامل لنقاط البيع (POS) مع إدارة علاقات العملاء (CRM) والحسابات العامة وإدارة الموارد البشرية (HRM) ومدير المخزون والفروع المتعددة.',
    features: [
      'الفواتير ونقاط البيع مع نظام إدارة علاقات العملاء CRM والمحفظة وتذاكر الدعم للعملاء',
      'حسابات متكاملة مع المبيعات والشراء بدعم عملات متعددة وأسعار الصرف الحية والضرائب',
      'إدارة فروع ومستودعات تجارية متعددة وربط الفروع بدون أي أجهزة إضافية',
      'إدارة الموارد البشرية HRM وتقارير تفصيلية عن الأعمال والحسابات ودعم فني مجاني'
    ],
    rating: '5.0',
    liveUrl: 'https://www.anis-soft.com/item/38/top-force-erp',
    previewUrl: 'https://www.anis-soft.com/item-preview/38/top-force-erp',
    coverImage: 'https://www.anis-soft.com/static/files/TopForce.png',
    isFeatured4Digital: false,
    licenseBadge: 'سحابي (كمبيوتر + موبايل) + دعم فني مجاناً'
  },
  {
    id: 'anis-biz2-workshop',
    title: 'برنامج BIZ2 Workshop — برنامج الحسابات وإدارة المخزون للشركات والمحلات',
    fieldId: 'desktop-accounting',
    fieldBadge: 'برامج سطح المكتب — برامج الحسابات',
    platforms: 'برامج سطح المكتب (Windows) + ربط الفروع',
    priceEGP: '1,300 ج.م',
    description: 'برنامج محاسبي متكامل لإدارة المبيعات والمشتريات وتعدد المخازن والمندوبين وحسابات العملاء والموردين والخزينة والأرباح للشركات والمحلات التجارية.',
    features: [
      'إدارة المبيعات والمشتريات وتعدد المخازن وتنبيهات حد الطلب للمخزون',
      'إدارة حسابات العملاء والموردين والمندوبين والموظفين والمستهلكات والأصول',
      'متابعة خط سير المندوبين على الخريطة وربط الفروع بدون أي أجهزة إضافية',
      'حساب الأرباح والخسائر ورأس المال وحساب الشركاء والعائد على الاستثمار والأرباح المستقبلية'
    ],
    rating: '4.9',
    liveUrl: 'https://www.anis-soft.com/item/46/biz2',
    previewUrl: 'https://www.anis-soft.com/item-preview/46/biz2',
    coverImage: 'https://www.anis-soft.com/static/files/workshop2.png',
    isFeatured4Digital: false,
    licenseBadge: 'ترخيص دائم مدى الحياة + دعم فني مجاناً'
  },
  {
    id: 'anis-biz3-sales-maintenance',
    title: 'برنامج BIZ3 Sales & Maintenance — إدارة المبيعات ومراكز الصيانة والحسابات',
    fieldId: 'desktop-accounting',
    fieldBadge: 'برامج سطح المكتب — المبيعات والصيانة',
    platforms: 'برامج سطح المكتب (Windows) + ربط الفروع',
    priceEGP: '1,500 ج.م',
    description: 'برنامج متخصص للشركات ومراكز الصيانة والتوكيلات التجارية؛ يدمج بين المبيعات والمشتريات وتعدد المخازن وبين نظام بطاقة الصيانة وحسابات العملاء والفنيين.',
    features: [
      'نظام بطاقة الصيانة المتكامل لمتابعة الأجهزة المستلمة وحالة الصيانة وقطع الغيار',
      'إدارة المبيعات والمشتريات وتعدد المخازن والمندوبين وتنبيهات حد الطلب',
      'متابعة خط سير المندوبين على الخريطة وحسابات العملاء والموردين والخزينة الرئيسية والفرعية',
      'تقارير الأرباح والخسائر ورأس المال وحساب الشركاء وربط الفروع بدون أجهزة إضافية'
    ],
    rating: '4.9',
    liveUrl: 'https://www.anis-soft.com/item/43/biz3',
    previewUrl: 'https://www.anis-soft.com/item-preview/43/biz3',
    coverImage: 'https://www.anis-soft.com/static/files/csms-web1.png',
    isFeatured4Digital: false,
    licenseBadge: 'ترخيص دائم مدى الحياة + دعم فني مجاناً'
  },
  {
    id: 'anis-sms-facto',
    title: 'برنامج SMS Facto — برنامج حسابات لإدارة عمليات التصنيع والإنتاج والمبيعات',
    fieldId: 'manufacturing',
    fieldBadge: 'التصنيع والإنتاج والمصانع',
    platforms: 'برامج سطح المكتب (Windows) للمصانع وخطوط الإنتاج',
    priceEGP: '1,700 ج.م',
    description: 'برنامج حسابات متخصص للمصانع وورش الإنتاج لإدارة عمليات التصنيع وخطوط الإنتاج والمبيعات بدون أي مصاريف شهرية أو سنوية.',
    features: [
      'قسم خاص لمخازن المواد الخام وقسم لعمليات التصنيع وقسم للمنتجات النهائية التامة',
      'حساب تكاليف الإنتاج الفعلي والخامات المستهلكة ومراحل التصنيع بدقة',
      'إدارة كاملة للمبيعات والمشتريات وحسابات العملاء والموردين وجميع التقارير المحاسبية',
      'ترخيص دائم مدى الحياة بدون أي مصاريف سنوية أو شهرية مع دعم فني مجاني'
    ],
    rating: '5.0',
    liveUrl: 'https://www.anis-soft.com/item/40/l-d-r-ltsnyaa-o-l-nt-g',
    previewUrl: 'https://www.anis-soft.com/item-preview/40/l-d-r-ltsnyaa-o-l-nt-g',
    coverImage: 'https://www.anis-soft.com/static/files/sms-facto-preview.png',
    isFeatured4Digital: false,
    licenseBadge: 'ترخيص دائم بدون مصاريف سنوية أو شهرية'
  },
  {
    id: 'anis-sas-accounting',
    title: 'برنامج SAS (Super Account System) — للحسابات العامة والقيود والحسابات الختامية',
    fieldId: 'desktop-accounting',
    fieldBadge: 'برامج سطح المكتب — الحسابات العامة للشركات',
    platforms: 'برامج سطح المكتب (Windows) للشركات والمؤسسات',
    priceEGP: '1,700 ج.م',
    description: 'نظام محاسبي متكامل للشركات والمؤسسات لإدارة الحسابات العامة، قيود اليومية، حساب الأستاذ العام، ميزان المراجعة، والحسابات الختامية والمركز المالي.',
    features: [
      'إدارة كاملة للقيود اليومية وحساب الأستاذ العام وشجرة الحسابات المحاسبية',
      'إعداد تقارير الأرباح والخسائر وحساب المتاجرة والتشغيل تلقائياً',
      'استخراج ميزان المراجعة الدقيق وتقارير المركز المالي والميزانية العمومية',
      'ترخيص دائم مدى الحياة للشركات مع دعم فني مجاناً مدى الحياة'
    ],
    rating: '4.9',
    liveUrl: 'https://www.anis-soft.com/item/18/i-work-invoicing-accounting-crm-software',
    previewUrl: 'https://www.anis-soft.com/item-preview/18/i-work-invoicing-accounting-crm-software',
    coverImage: 'https://www.anis-soft.com/static/files/acc.png',
    isFeatured4Digital: false,
    licenseBadge: 'ترخيص دائم مدى الحياة + دعم فني مجاناً'
  },
  {
    id: 'anis-dims-dental',
    title: 'برنامج DIMS — نظام إدارة عيادات ومراكز طب الأسنان',
    fieldId: 'medical',
    fieldBadge: 'البرامج الطبية وعيادات الأسنان',
    platforms: 'برامج سطح المكتب (Windows) للعيادات والمراكز الطبية',
    priceEGP: '1,200 ج.م',
    description: 'برنامج Dental Information Management System المتخصص لإدارة عيادات الأسنان، قواعد بيانات المرضى والأطباء، وتخطيط الجلسات العلاجية والتقارير الربحية.',
    features: [
      'تفاصيل قواعد بيانات أطباء الأسنان وتفاصيل قواعد بيانات المرضى والسجل العلاجي',
      'تخطيط وتنظيم التعاملات مع المرضى وإضافة رؤية واضحة لعملية معالجة الأسنان',
      'التقارير الربحية والمالية للعيادة لفترة زمنية محددة (موجزة وتفصيلية)',
      'إمكانية طباعة نتائج قواعد البيانات والروشتات وتقارير المتابعة بسهولة'
    ],
    rating: '4.9',
    liveUrl: 'https://www.anis-soft.com/item/17/solo-clinic-administrator',
    previewUrl: 'https://www.anis-soft.com/item-preview/17/solo-clinic-administrator',
    coverImage: 'https://www.anis-soft.com/static/files/dims.png',
    isFeatured4Digital: false,
    licenseBadge: 'ترخيص دائم مدى الحياة + دعم فني مجاناً'
  },
  {
    id: 'anis-resto-system',
    title: 'برنامج Resto (Restaurant System) — برنامج حسابات وإدارة المخزون للمطاعم والكافيهات',
    fieldId: 'restaurants',
    fieldBadge: 'المطاعم والكافيهات',
    platforms: 'سطح مكتب + حجز طاولة وطلب المنيو أونلاين',
    priceEGP: '1,400 ج.م',
    description: 'نظام متكامل يمكّن عميلك من حجز الطاولة وطلب المنيو أونلاين، مع تحكم كامل في حسابات ومخزون وكاشير المطاعم والكافيهات.',
    features: [
      'إتاحة حجز الطاولة وطلب المنيو أونلاين مباشرة لعملاء المطعم أو الكافيه',
      'إدارة شاملة للمبيعات والكاشير والصالة والتيك أواي وطلبات التوصيل',
      'إدارة دقيقة للمخزون والخامات والمشتريات وحساب تكلفة الأصناف والأرباح',
      'ترخيص دائم مدى الحياة مع نسخة تجريبية ودعم فني مجاناً مدى الحياة'
    ],
    rating: '4.9',
    liveUrl: 'https://www.anis-soft.com/item/16/web-1',
    previewUrl: 'https://www.anis-soft.com/item-preview/16/web-1',
    coverImage: 'https://www.anis-soft.com/static/files/resto.png',
    isFeatured4Digital: false,
    licenseBadge: 'ترخيص دائم مدى الحياة + دعم فني مجاناً'
  },
  {
    id: 'anis-biz9-installments',
    title: 'برنامج BIZ 9 Installment Sales — إدارة المبيعات النقدي والآجل ومبيعات التقسيط',
    fieldId: 'installments',
    fieldBadge: 'مبيعات التقسيط وتحصيل الأقساط',
    platforms: 'برامج سطح المكتب (Windows) + تتبع المندوبين وربط الفروع',
    priceEGP: '1,700 ج.م',
    description: 'البرنامج الأقوى لإدارة المبيعات النقدي والآجل ومبيعات التقسيط وجدولة وتحصيل الأقساط للمعارض والشركات، مع تعدد المخازن ومتابعة المندوبين على الخريطة.',
    features: [
      'إدارة المبيعات النقدي والآجل ومبيعات التقسيط وجدولة وتحصيل الأقساط الشهرية',
      'تعدد المخازن وإدارة المشتريات والمندوبين وتنبيهات المخزون وحد الطلب',
      'متابعة خط سير المندوبين على الخريطة وربط الفروع بدون أي أجهزة إضافية',
      'حسابات العملاء والموردين والخزينة والأرباح المستقبلية وحساب الشركاء والعائد على الاستثمار'
    ],
    rating: '5.0',
    liveUrl: 'https://www.anis-soft.com/item/15/web-1',
    previewUrl: 'https://www.anis-soft.com/item-preview/15/web-1',
    coverImage: 'https://www.anis-soft.com/static/files/sms.png',
    isFeatured4Digital: false,
    licenseBadge: 'ترخيص دائم مدى الحياة + دعم فني مجاناً'
  },
  {
    id: 'app-ecommerce-delivery',
    title: 'تطبيق المتجر الإلكتروني والتوصيل الذكي (العميل + المندوب)',
    fieldId: 'ecommerce',
    fieldBadge: 'التجارة الإلكترونية والتوصيل',
    platforms: 'Android & iOS + لوحة تحكم ويب',
    priceEGP: '6,700 ج.م',
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
    id: 'app-edu-academy',
    title: 'تطبيق المنصة التعليمية وإدارة المراكز والمدرسين والطلاب',
    fieldId: 'education',
    fieldBadge: 'التعليم والتدريب',
    platforms: 'Android & iOS + موقع ويب',
    priceEGP: '5,700 ج.م',
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
    priceEGP: '5,199 ج.م',
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

export const AppStoreSection: React.FC<AppStoreSectionProps> = ({
  currency = 'EGP',
  exchangeRate = 49.5,
  onSelectApp
}) => {
  const [selectedField, setSelectedField] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredApps = APP_STORE_ITEMS.filter(app => {
    const matchesField = selectedField === 'all' || app.fieldId === selectedField;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      app.title.toLowerCase().includes(q) ||
      app.description.toLowerCase().includes(q) ||
      app.fieldBadge.toLowerCase().includes(q);
    return matchesField && matchesSearch;
  });

  return (
    <section id="app-store" className="py-14 bg-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Smartphone className="w-4 h-4 text-blue-600" />
            <span>متجر التطبيقات والبرامج المحاسبية والسحابية ({APP_STORE_ITEMS.length} برنامج وتطبيق)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0e2b6c] leading-tight">
            متجر التطبيقات وبرامج الحسابات وإدارة الأعمال
          </h1>

          <p className="text-slate-600 text-base leading-relaxed">
            أقوى التطبيقات الذكية وبرامج الحسابات وإدارة المخزون والمبيعات والتصنيع والعيادات والمطاعم — مع دعم فني مجاناً مدى الحياة ونسخ تجريبية فورية.
          </p>

          {/* Search Input */}
          <div className="max-w-xl mx-auto pt-2">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن برنامج أو تطبيق (مثال: مناسكي، حسابات، صيانة، تقسيط، مطاعم، أسنان، ERP)..."
                className="w-full pr-12 pl-4 py-3.5 rounded-2xl bg-slate-50 border-2 border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0e2b6c] focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Category Filter Buttons by Application Field */}
          <div className="pt-3 flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-2 p-2 rounded-2xl bg-slate-100 border border-slate-200">
              {APP_FIELDS.map((field) => (
                <button
                  key={field.id}
                  onClick={() => setSelectedField(field.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
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
              className={`rounded-3xl bg-white border-2 transition-all duration-300 flex flex-col justify-between group overflow-hidden ${
                app.isFeatured4Digital
                  ? 'border-blue-300 hover:border-[#0e2b6c] shadow-md hover:shadow-xl'
                  : 'border-slate-200 hover:border-[#43b8da] hover:shadow-xl'
              }`}
            >
              <div>
                {/* Top Product Image / Banner if available */}
                {app.coverImage && (
                  <a
                    href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`مرحباً فور ديجيتال، أرغب في الحصول على النسخة التجريبية من: "${app.title}" (${app.fieldBadge}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full h-48 bg-slate-100 border-b border-slate-200 overflow-hidden"
                  >
                    <img
                      src={app.coverImage}
                      alt={app.title}
                      className="w-full h-full object-contain bg-white p-2 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {app.licenseBadge && (
                      <span className="absolute bottom-2.5 right-2.5 text-[10px] font-black px-2.5 py-1 rounded-lg bg-[#0e2b6c]/90 text-amber-300 backdrop-blur-xs shadow-xs">
                        {app.licenseBadge}
                      </span>
                    )}
                  </a>
                )}

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[11px] font-black px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                      {app.fieldBadge}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {app.isFeatured4Digital && !app.coverImage && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-700 text-amber-200">
                          <Sparkles className="w-3 h-3" />
                          <span>من تطبيقات فور ديجيتال</span>
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-xs font-bold text-amber-600">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{app.rating}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    {app.iconUrl && (
                      <a
                        href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`مرحباً فور ديجيتال، أرغب في الحصول على النسخة التجريبية من: "${app.title}" (${app.fieldBadge}).`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-emerald-700/20 shadow-md bg-[#003622] flex items-center justify-center group-hover:scale-105 transition-transform"
                      >
                        <img
                          src={app.iconUrl}
                          alt={app.title}
                          className="w-full h-full object-cover"
                        />
                      </a>
                    )}
                    <div className="flex-1">
                      <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                        <Monitor className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{app.platforms}</span>
                      </span>
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-[#0e2b6c] transition-colors mt-1 leading-snug">
                        {app.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs text-slate-600 font-bold">السعر:</span>
                    <span className="text-lg font-black text-emerald-700">{formatPriceText(app.priceEGP, currency, exchangeRate)}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {app.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <p className="text-xs font-black text-slate-900">أبرز المميزات والإمكانيات:</p>
                    {app.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <a
                    href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(`مرحباً فور ديجيتال، أرغب في طلب النسخة التجريبية من: "${app.title}" (${app.fieldBadge}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 shrink-0 fill-white" />
                    <span>نسخة تجريبية</span>
                  </a>
                  <button
                    onClick={() =>
                      onSelectApp({
                        id: app.id,
                        title: `طلب برنامج/تطبيق: ${app.title}`,
                        description: app.description,
                        iconName: 'Layout',
                        startingPrice: app.priceEGP,
                        deliverableTime: 'تسليم فوري + دعم فني مجاناً',
                        highlight: app.fieldBadge,
                        category: 'web'
                      })
                    }
                    className="w-full sm:flex-1 py-2.5 px-3 rounded-xl bg-[#0e2b6c] hover:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
                    <span>اطلب البرنامج الآن</span>
                  </button>
                </div>
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

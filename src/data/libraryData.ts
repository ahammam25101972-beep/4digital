export interface LibraryTemplate {
  id: string;
  title: string;
  category: 'finance' | 'hr' | 'legal' | 'marketing' | 'management' | 'academic';
  categoryLabel: string;
  format: string;
  fileSize: string;
  downloadsCount: number;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export const LIBRARY_CATEGORIES = [
  { id: 'all', label: 'كافة النماذج' },
  { id: 'finance', label: 'المالية والمحاسبة (Excel)' },
  { id: 'hr', label: 'الموارد البشرية والرواتب (HR)' },
  { id: 'legal', label: 'العقود والشؤون القانونية' },
  { id: 'marketing', label: 'التسويق والعروض التقديمية' },
  { id: 'management', label: 'إدارة الأعمال والمشاريع' },
  { id: 'academic', label: 'الأبحاث والتوثيق الأكاديمي' }
];

export const LIBRARY_TEMPLATES: LibraryTemplate[] = [
  {
    id: 'lib-invoice-pro',
    title: 'نموذج فاتورة مبيعات وخدمات ضريبية احترافية Excel',
    category: 'finance',
    categoryLabel: 'المالية والمحاسبة (Excel)',
    format: 'XLSX & PDF',
    fileSize: '450 كيلوبايت',
    downloadsCount: 3840,
    isFeatured: true,
    description: 'قالب إكسيل محاسبي متقدم يشمل حساب ضريبة القيمة المضافة 14% تلقائياً، الخصومات التجارية، المجموع الصافي، مع تفقيط المبالغ بالأرقام والحروف العربية وترويسة شركة قابلة للتخصيص.',
    features: [
      'حساب آلي للضرائب والخصومات',
      'تفقيط تلقائي للمبالغ بالحروف العربية',
      'جاهز للطباعة والتصدير لـ PDF',
      'أماكن لتوقيع المحاسب وختم الشركة'
    ]
  },
  {
    id: 'lib-payroll-sheet',
    title: 'شيت كشف رواتب الموظفين ومسير الأجور الشهري المتقدم',
    category: 'hr',
    categoryLabel: 'الموارد البشرية والرواتب (HR)',
    format: 'XLSX',
    fileSize: '620 كيلوبايت',
    downloadsCount: 2950,
    isFeatured: true,
    description: 'نموذج إكسيل متكامل لإدارة مرتبات الموظفين: الراتب الأساسي، البدلات، المكافآت، الخصومات، التأمينات الاجتماعية وضريبة كسب العمل، مع قسيمة راتب (Pay Slip) جاهزة للطباعة لكل موظف.',
    features: [
      'حساب آلي للتأمينات والضرائب والبدلات',
      'طباعة قسيمة راتب Pay Slip فردية',
      'ملخص إجمالي مصاريف الرواتب للشركة',
      'سجل متابعة السلف والغياب'
    ]
  },
  {
    id: 'lib-employment-contract',
    title: 'صيغة عقد عمل فردي محدد المدة معتمد قانوناً Word',
    category: 'legal',
    categoryLabel: 'العقود والشؤون القانونية',
    format: 'DOCX & PDF',
    fileSize: '320 كيلوبايت',
    downloadsCount: 4210,
    isFeatured: true,
    description: 'صياغة قانونية محكمة متوافقة مع قانون العمل، تشمل المسمى الوظيفي، المهام، الراتب، فترة الاختبار، الإجازات السنوية، وسرية المعلومات وعدم المنافسة، جاهزة للطباعة والتوقيع.',
    features: [
      'صياغة قانونية مدققة لغوياً 100%',
      'بنود سرية المعلومات NDA وحماية الملكية',
      'تنظيم فترات الاختبار وساعات العمل والإجازات',
      'ملف Word قابل للتعديل الفوري'
    ]
  },
  {
    id: 'lib-pitch-deck-template',
    title: 'قالب عرض تقديمي لملف تعريف الشركة PowerPoint (Pitch Deck)',
    category: 'marketing',
    categoryLabel: 'التسويق والعروض التقديمية',
    format: 'PPTX (20 شريحة)',
    fileSize: '4.8 ميجابايت',
    downloadsCount: 3120,
    isFeatured: true,
    description: 'شرائح عرض احترافية بتنسيق عالمي: من نحن، الرؤية والرسالة، الهيكل التنظيمي، حزمة الخدمات، شركاء النجاح، ودراسات الحالة مع رسوم بيانية وأيقونات متناسقة قابلة للتعديل.',
    features: [
      '20 شريحة مصممة بعناية فائقة',
      'حركات انتقالية ناعمة وتأثيرات بصرية جذابة',
      'رسوم بيانية ورسوم توضيحية إنفوجرافيك',
      'تعديل الألوان بنقرة واحدة لتلائم علامتك'
    ]
  },
  {
    id: 'lib-cashflow-budget',
    title: 'نموذج التوقع المالي والتدفق النقدي Cash Flow السنوي',
    category: 'finance',
    categoryLabel: 'المالية والمحاسبة (Excel)',
    format: 'XLSX',
    fileSize: '850 كيلوبايت',
    downloadsCount: 2680,
    description: 'متابعة حركة السيولة النقدية والمقبوضات والمصروفات الشهرية، مع توقعات الإيرادات ومؤشرات السيولة ورسوم بيانية ديناميكية تتيح لمدير الشركة اتخاذ القرارات السليمة.',
    features: [
      'مقارنة التقديري بالفعلي (Budget vs Actual)',
      'مخططات بيانية توضح حركة السيولة النقدية',
      'تنبيهات فورية في حال انخفاض رصيد الأمان',
      'لوحة قياس Dashbaord ملخصة'
    ]
  },
  {
    id: 'lib-service-agreement',
    title: 'عقد اتفاق وتقديم خدمات تقنية وتصميم مواقع Word',
    category: 'legal',
    categoryLabel: 'العقود والشؤون القانونية',
    format: 'DOCX',
    fileSize: '340 كيلوبايت',
    downloadsCount: 2140,
    description: 'نموذج عقد رسمي بين مقدم الخدمة الرقمية والعميل يحدد نطاق العمل (Scope of Work)، مراحل التسليم، شروط الدفع، وحقوق الملكية الفكرية والدعم الفني.',
    features: [
      'تحديد مراحل المشروع وجداول الدفعات المالية',
      'بنود واضحة لضمانات التسليم والدعم الفني',
      'حماية حقوق الملكية والبيانات للطرفين'
    ]
  },
  {
    id: 'lib-marketing-strategy',
    title: 'قالب خطة التسويق الرقمي وإطلاق المنتجات Word & Excel',
    category: 'marketing',
    categoryLabel: 'التسويق والعروض التقديمية',
    format: 'DOCX & XLSX',
    fileSize: '1.2 ميجابايت',
    downloadsCount: 2890,
    description: 'دليل منظم لتحديد الجمهور المستهدف، دراسة المنافسين، تخطيط ميزانيات الحملات الممولة، وجدول زمني لنشر المحتوى عبر منصات التواصل الاجتماعي.',
    features: [
      'جدول زمني للنشر عبر المنصات (Content Calendar)',
      'حاسبة الميزانية الإعلانية وتكلفة الاستحواذ CAC',
      'قوالب تحليل المنافسين ومصفوفة SWOT'
    ]
  },
  {
    id: 'lib-kpi-tracker',
    title: 'لوحة قياس مؤشرات الأداء الرئيسية للموظفين والفرق (KPI Dashboard)',
    category: 'management',
    categoryLabel: 'إدارة الأعمال والمشاريع',
    format: 'XLSX',
    fileSize: '780 كيلوبايت',
    downloadsCount: 1980,
    description: 'نموذج ذكي لتتبع أهداف الأقسام والموظفين، قياس نسب الإنجاز ربع السنوية، وحساب درجات التقييم التلقائي مع تقارير أداء ملونة وسهلة القراءة.',
    features: [
      'تقييم أوتوماتيكي بناءً على الأوزان النسبية للأهداف',
      'رسم راداري ومؤشرات ملونة للتقدم',
      'تقارير ربع سنوية وسنوية قابلة للطباعة'
    ]
  },
  {
    id: 'lib-academic-paper',
    title: 'قالب تنسيق الأبحاث والرسائل العلمية طبقاً لمعايير APA 7 Word',
    category: 'academic',
    categoryLabel: 'الأبحاث والتوثيق الأكاديمي',
    format: 'DOCX',
    fileSize: '410 كيلوبايت',
    downloadsCount: 1750,
    description: 'ملف وورد مجهز بالهوامش الدقيقة، أنماط الخطوط والعناوين، صفحة الغلاف الرسمية، الملخص، الفهرس التلقائي، وجداول توثيق المراجع بنظام APA الإصدار السابع.',
    features: [
      'ضبط الهوامش والمسافات البادئة بدقة 100%',
      'فهرسة آلية للمحتويات والجداول والأشكال',
      'أمثلة لتوثيق المصادر العربية والأجنبية'
    ]
  }
];

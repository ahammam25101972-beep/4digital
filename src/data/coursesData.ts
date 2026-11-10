export interface Course {
  id: string;
  title: string;
  tagline: string;
  category: 'office' | 'web' | 'business' | 'security';
  categoryLabel: string;
  level: string;
  duration: string;
  lessonsCount: number;
  instructor: string;
  instructorRole: string;
  priceEGP: number;
  priceUSD: number;
  originalPriceEGP: number;
  rating: number;
  studentsCount: number;
  badge?: string;
  certificate: boolean;
  features: string[];
  syllabus: {
    moduleTitle: string;
    topics: string[];
  }[];
}

export const COURSES_DATA: Course[] = [
  {
    id: 'course-excel-pro',
    title: 'دبلومة احتراف مايكروسوفت إكسيل المتقدم والداشبورد المالي (Excel Mastery)',
    tagline: 'من الصفر وحتى بناء النماذج المالية المعقدة ولوحات التحكم التفاعلية والأتمتة',
    category: 'office',
    categoryLabel: 'مايكروسوفت أوفيس وإكسيل',
    level: 'شامل',
    duration: '24 ساعة تدريبية (8 أسابيع)',
    lessonsCount: 36,
    instructor: 'د. كريم الشناوي',
    instructorRole: 'مستشار مالي وإداري معتمد من مايكروسوفت',
    priceEGP: 1499,
    priceUSD: 45,
    originalPriceEGP: 2500,
    rating: 4.9,
    studentsCount: 1850,
    badge: 'الأكثر تسجيلاً ⭐',
    certificate: true,
    features: [
      'شهادة إتمام معتمدة بكود تحقق رقمي',
      'تطبيقات عملية على أكثر من 30 ملف مالي وإداري حقيقي',
      'ملفات وقوالب جاهزة للتحميل مجاناً مدى الحياة',
      'مجموعة نقاش حصرية وتوجيه مباشر مع المدرب'
    ],
    syllabus: [
      {
        moduleTitle: 'الوحدة 1: الأساسيات واختصارات لوحة المفاتيح الاحترافية',
        topics: ['هيكلة البيانات', 'تنسيق الجداول الشرطي', 'أهم الاختصارات السريعة']
      },
      {
        moduleTitle: 'الوحدة 2: المعادلات والدوال المتقدمة',
        topics: ['XLOOKUP و INDEX-MATCH', 'دوال البحث والنصوص المتقدمة', 'دوال الشروط المتعددة SUMIFS & COUNTIFS']
      },
      {
        moduleTitle: 'الوحدة 3: الجداول المحورية ولوحات التحكم (Dashboards)',
        topics: ['Pivot Tables & Pivot Charts', 'Slicers والربط التفاعلي', 'تصميم واجهات احترافية للإدارة']
      },
      {
        moduleTitle: 'الوحدة 4: مقدمة في Power Query والماكرو',
        topics: ['دمج وتنظيف البيانات الضخمة', 'تسجيل الماكرو وأتمتة المهام اليومية']
      }
    ]
  },
  {
    id: 'course-doc-writing',
    title: 'دورة صياغة وتنسيق المستندات والخطابات والعقود الرسمية Word',
    tagline: 'إتقان الكتابة التنفيذية، صياغة العقود واللوائح، وتنسيق الأبحاث والكتب باحترافية',
    category: 'office',
    categoryLabel: 'كتابة وتنسيق المستندات',
    level: 'مبتدئ إلى متقدم',
    duration: '16 ساعة تدريبية (4 أسابيع)',
    lessonsCount: 22,
    instructor: 'أ. سارة عبد الرحمن',
    instructorRole: 'خبيرة صياغة وتوثيق إداري وأكاديمي',
    priceEGP: 999,
    priceUSD: 30,
    originalPriceEGP: 1800,
    rating: 4.8,
    studentsCount: 1120,
    badge: 'أساسي للشركات 📝',
    certificate: true,
    features: [
      'شهادة معتمدة في الكتابة الإدارية',
      'مكتبة صيغ عقود وخطابات رسمية قابلة للتعديل',
      'إتقان أنماط التوثيق الأكاديمي APA و MLA',
      'تصميم ترويسات ومطبوعات رسمية للشركات'
    ],
    syllabus: [
      {
        moduleTitle: 'الوحدة 1: أصول الصياغة الإدارية والخطابات الرسمية',
        topics: ['قواعد الكتابة التنفيذية', 'تجنب الأخطاء الإملائية والأسلوبية', 'هيكل الخطاب والقرار الإداري']
      },
      {
        moduleTitle: 'الوحدة 2: صياغة العقود والاتفاقيات ونماذج العمل',
        topics: ['بنود العقود القانونية الأساسية', 'عقود العمل وتوريد الخدمات', 'اتفاقيات عدم الإفصاح NDA']
      },
      {
        moduleTitle: 'الوحدة 3: التنسيق الفني المتقدم في Word',
        topics: ['الفهارس الآلية والمراجع', 'ترقيم الصفحات المتباين والفصول', 'تضمين الجداول والشعارات بجودة طباعة']
      }
    ]
  },
  {
    id: 'course-web-creation',
    title: 'دورة إنشاء وإدارة المواقع والمتاجر الإلكترونية بدون برمجة (WordPress & Woo)',
    tagline: 'احترف بناء موقع شركتك أو متجرك الإلكتروني، حجز الاستضافة والدومين، وربط بوابات الدفع',
    category: 'web',
    categoryLabel: 'المواقع والتجارة الإلكترونية',
    level: 'مبتدئ',
    duration: '20 ساعة تدريبية (6 أسابيع)',
    lessonsCount: 28,
    instructor: 'م. أحمد نبيل',
    instructorRole: 'مطور ويب وخبير منصات التجارة الإلكترونية',
    priceEGP: 1699,
    priceUSD: 50,
    originalPriceEGP: 2800,
    rating: 4.9,
    studentsCount: 1450,
    badge: 'شامل وعملي 🌐',
    certificate: true,
    features: [
      'استضافة تجريبية مجانية ودومين مجاني خلال الدورة',
      'تطبيق خطوة بخطوة لبناء متجر حقيقي متكامل',
      'ربط وسائل الدفع المصرية (InstaPay, Visa, Fawry)',
      'تهيئة محركات البحث SEO لزيادة المبيعات'
    ],
    syllabus: [
      {
        moduleTitle: 'الوحدة 1: أساسيات السيرفرات والدومين وcPanel',
        topics: ['اختيار الدومين والاستضافة السحابية', 'تثبيت ووردبريس بنقرة واحدة', 'ضبط إعدادات الأمان وSSL']
      },
      {
        moduleTitle: 'الوحدة 2: تصميم صفحات الموقع باستخدام Elementor',
        topics: ['بناء الصفحة الرئيسية ومن نحن وتواصل معنا', 'التوافق مع الجوال والسرعة', 'نماذج الاتصال وزر الواتساب']
      },
      {
        moduleTitle: 'الوحدة 3: إطلاق المتجر الإلكتروني WooCommerce',
        topics: ['إضافة المنتجات والتصنيفات والمخزون', 'ربط الدفع الإلكتروني والشحن', 'إدارة الطلبات وإشعارات العملاء']
      }
    ]
  },
  {
    id: 'course-pitch-powerpoint',
    title: 'دورة تصميم العروض التقديمية الاستثمارية والشركات (Pitch Decks & PowerPoint)',
    tagline: 'كيف تصنع عرضاً تقديمياً يقنع المستثمرين والعملاء في دقائق بأسلوب عالمي',
    category: 'office',
    categoryLabel: 'العروض التقديمية والإنفوجرافيك',
    level: 'متوسط',
    duration: '12 ساعة تدريبية (3 أسابيع)',
    lessonsCount: 18,
    instructor: 'أ. طارق حسام',
    instructorRole: 'مدير إبداعي ومصمم عروض استثمارية لشركات ناشئة',
    priceEGP: 899,
    priceUSD: 28,
    originalPriceEGP: 1500,
    rating: 4.8,
    studentsCount: 920,
    badge: 'مهارة فائقة الأهمية 🚀',
    certificate: true,
    features: [
      'أكثر من 100 شريحة جاهزة للتعديل مجاناً',
      'تعلم تصميم الإنفوجرافيك والرسوم البيانية المقنعة',
      'أسرار العرض والإلقاء (Storytelling)',
      'تصدير العروض بفيديو وPDF بجودة سينمائية'
    ],
    syllabus: [
      {
        moduleTitle: 'الوحدة 1: السرد القصصي (Storytelling) وهيكلة العرض',
        topics: ['هيكل شريحة المشكلة والحل', 'عرض نموذج العمل والمنافسين', 'أرقام النمو والتوقعات المالية']
      },
      {
        moduleTitle: 'الوحدة 2: التصميم البصري واستخدام الألوان والخطوط',
        topics: ['التناسق اللوني مع الهوية التجارية', 'الأيقونات والصور الواقعية', 'الحركات الانتقالية السلسة']
      }
    ]
  },
  {
    id: 'course-digital-marketing',
    title: 'دورة التسويق الرقمي وإدارة الحملات الإعلانية الممولة (Facebook, Insta & Google Ads)',
    tagline: 'استراتيجيات استهداف العملاء وتحقيق أعلى عائد على الإنفاق الإعلاني (ROAS)',
    category: 'business',
    categoryLabel: 'التسويق الرقمي والأعمال',
    level: 'شامل',
    duration: '22 ساعة تدريبية (6 أسابيع)',
    lessonsCount: 30,
    instructor: 'أ. محمود فوزي',
    instructorRole: 'خبير التسويق الرقمي وإدارة الميزانيات الإعلانية',
    priceEGP: 1599,
    priceUSD: 48,
    originalPriceEGP: 2600,
    rating: 4.9,
    studentsCount: 1680,
    badge: 'زيادة المبيعات 📈',
    certificate: true,
    features: [
      'تطبيق عملي على حسابات إعلانية حقيقية',
      'ضبط بيكسل الميتا Meta Pixel و Google Analytics',
      'صياغة نصوص الإعلانات الإبداعية (Copywriting)',
      'استراتيجيات إعادة الاستهداف Retargeting'
    ],
    syllabus: [
      {
        moduleTitle: 'الوحدة 1: فهم الجمهور وبناء العرض التسويقي القوي',
        topics: ['تحديد شخصية العميل المثالي Buyer Persona', 'تحليل المنافسين والفجوة السوقية']
      },
      {
        moduleTitle: 'الوحدة 2: حملات Meta Ads (فيسبوك وانستجرام)',
        topics: ['إعداد Business Manager', 'أنواع الحملات (رسائل، ليدز، تحويلات)', 'تحليل المقاييس وتقليل تكلفة النتائج']
      },
      {
        moduleTitle: 'الوحدة 3: إعلانات محركات البحث Google Search',
        topics: ['اختيار الكلمات المفتاحية', 'حملات البحث واليوتيوب', 'تحسين نقاط الجودة Quality Score']
      }
    ]
  },
  {
    id: 'course-cloud-security',
    title: 'دورة إدارة الاستضافات والسيرفرات السحابية والأمن الرقمي للمواقع',
    tagline: 'تعلم إدارة الخوادم، ضبط الـ DNS، حماية المواقع من الاختراق وهجمات DDoS، والنسخ الاحتياطي',
    category: 'security',
    categoryLabel: 'السيرفرات والأمن الرقمي',
    level: 'متوسط إلى متقدم',
    duration: '18 ساعة تدريبية (4 أسابيع)',
    lessonsCount: 24,
    instructor: 'م. إيهاب زكريا',
    instructorRole: 'مهندس أمن سيبراني وإدارة خوادم سحابية',
    priceEGP: 1299,
    priceUSD: 40,
    originalPriceEGP: 2200,
    rating: 4.7,
    studentsCount: 780,
    certificate: true,
    features: [
      'تطبيق على لوحة cPanel وسيرفرات Linux الحقيقية',
      'إعداد شهادات SSL وجدران الحماية WAF',
      'خطط الطوارئ واسترجاع البيانات المفقودة',
      'فحص الثغرات ومعالجة الفيروسات الشائعة'
    ],
    syllabus: [
      {
        moduleTitle: 'الوحدة 1: إدارة خوادم الويب واستضافات cPanel',
        topics: ['سجلات DNS ومطابقة النطاقات', 'إدارة قواعد البيانات وحسابات FTP', 'ضبط سيرفرات البريد الإلكتروني']
      },
      {
        moduleTitle: 'الوحدة 2: الحماية والاستجابة للهجمات الإلكترونية',
        topics: ['الحماية من هجمات حجب الخدمة DDoS', 'فحص وإزالة الأكواد الخبيثة', 'إعداد جداول النسخ الاحتياطي الأوتوماتيكي']
      }
    ]
  }
];

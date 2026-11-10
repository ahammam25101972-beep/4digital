export interface GoDigitalPlan {
  id: string;
  name: string;
  arabicName: string;
  tagline: string;
  priceEGP: number;
  priceUSD: number;
  originalPriceEGP?: number;
  badge?: string;
  isPopular?: boolean;
  colorScheme: 'cyan' | 'blue' | 'purple';
  features: string[];
  specs: {
    domain: string;
    ssdStorage: string;
    emailStorage: string;
    subdomains: string;
    mysqlDatabases: string;
    ftpAccounts: string;
    cpanel: boolean;
    sslCertificate: boolean;
    websiteBuilder: boolean;
    malwareScanner: boolean;
    cronjobs: string;
    emailProtocols: string;
    sharedCalendar: boolean;
    mobileAppsSupport: boolean;
  };
}

export const GO_DIGITAL_PLANS: GoDigitalPlan[] = [
  {
    id: 'warm-up',
    name: 'Warm Up',
    arabicName: 'باقة البداية (Warm Up)',
    tagline: 'الحل الأمثل لبدء تواجد شركتك وموقعك على الإنترنت بأفضل تكلفة',
    priceEGP: 4999,
    priceUSD: 130,
    originalPriceEGP: 6000,
    colorScheme: 'cyan',
    features: [
      'اسم دومين دولي مجاني خاص بشركتك (.com, .net)',
      'مساحة استضافة فائقة السرعة 1 جيجابايت SSD',
      'بريد إلكتروني احترافي 2 جيجابايت لكل صندوق بريد',
      'دومين فرعي (1 Subdomain)',
      'شهادة حماية وأمان وتشفير SSL مجانية',
      'مُصمِّم مواقع الإنترنت الذكي (Website Builder)',
      'لوحة تحكم cPanel كاملة وسهلة الاستخدام',
      'فحص البرمجيات الخبيثة ومكافحة الفيروسات',
      'حسابات FTP غير محدودة و Cronjobs'
    ],
    specs: {
      domain: 'دومين مجاني متضمن',
      ssdStorage: '1 جيجابايت SSD',
      emailStorage: '2 جيجابايت / صندوق بريد',
      subdomains: '1',
      mysqlDatabases: 'قاعدة بيانات واحدة',
      ftpAccounts: 'غير محدود',
      cpanel: true,
      sslCertificate: true,
      websiteBuilder: true,
      malwareScanner: true,
      cronjobs: 'غير محدود',
      emailProtocols: 'POP3 & Webmail آمن',
      sharedCalendar: false,
      mobileAppsSupport: true
    }
  },
  {
    id: 'ramp-up',
    name: 'Ramp Up',
    arabicName: 'باقة النمو (Ramp Up)',
    tagline: 'الباقة الأكثر طلباً للشركات الصغيرة والمتوسطة التي تبحث عن أداء قوي',
    priceEGP: 6999,
    priceUSD: 180,
    originalPriceEGP: 8500,
    badge: 'الأكثر طلباً ⭐',
    isPopular: true,
    colorScheme: 'blue',
    features: [
      'اسم دومين دولي مجاني خاص بشركتك',
      'مساحة استضافة سحابية سريعة 2 جيجابايت SSD',
      'بريد إلكتروني احترافي 5 جيجابايت لكل صندوق بريد',
      'عدد 2 دومين فرعي (2 Subdomains)',
      'عدد 2 قواعد بيانات MySQL Database',
      'دعم كامل لبروتوكول IMAP و POP3',
      'شهادة أمان وتشفير SSL مجانية معتمدة',
      'مُصمِّم مواقع الإنترنت الاحترافي',
      'لوحة تحكم cPanel وحماية Anti-Spam متقدمة',
      'تطبيق البريد على هواتف iOS و Android'
    ],
    specs: {
      domain: 'دومين مجاني متضمن',
      ssdStorage: '2 جيجابايت SSD',
      emailStorage: '5 جيجابايت / صندوق بريد',
      subdomains: '2',
      mysqlDatabases: '2 قواعد بيانات',
      ftpAccounts: 'غير محدود',
      cpanel: true,
      sslCertificate: true,
      websiteBuilder: true,
      malwareScanner: true,
      cronjobs: 'غير محدود',
      emailProtocols: 'IMAP & POP3 & Webmail',
      sharedCalendar: false,
      mobileAppsSupport: true
    }
  },
  {
    id: 'take-off',
    name: 'Take Off',
    arabicName: 'باقة الريادة (Take Off)',
    tagline: 'للمؤسسات والشركات الراغبة في أعلى كفاءة ومساحة وتكامل متقدم',
    priceEGP: 9999,
    priceUSD: 260,
    originalPriceEGP: 12000,
    badge: 'الأقوى للمؤسسات 🚀',
    colorScheme: 'purple',
    features: [
      'اسم دومين دولي مجاني متقدم',
      'مساحة استضافة فائقة 5 جيجابايت SSD NVMe',
      'بريد إلكتروني احترافي ضخم 10 جيجابايت لكل صندوق',
      'عدد 5 دومينات فرعية (5 Subdomains)',
      'عدد 5 قواعد بيانات MySQL',
      'دعم كامل لبروتوكولات IMAP و POP3 و MAPI',
      'جدول أعمال تشاركي (Shared Calendar) وقوائم مهام',
      'شهادة SSL ومُصمِّم مواقع مجاناً',
      'أعلى حماية متقدمة Anti-Virus & Anti-Spam',
      'نسخ احتياطي يومي وأولوية قصوى في الدعم'
    ],
    specs: {
      domain: 'دومين مجاني متضمن',
      ssdStorage: '5 جيجابايت SSD',
      emailStorage: '10 جيجابايت / صندوق بريد',
      subdomains: '5',
      mysqlDatabases: '5 قواعد بيانات',
      ftpAccounts: 'غير محدود',
      cpanel: true,
      sslCertificate: true,
      websiteBuilder: true,
      malwareScanner: true,
      cronjobs: 'غير محدود',
      emailProtocols: 'IMAP, POP3, MAPI & Webmail',
      sharedCalendar: true,
      mobileAppsSupport: true
    }
  }
];

export interface AdditionalService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  startingPrice: string;
  deliverableTime: string;
  highlight: string;
  category: 'web' | 'creative' | 'office';
}

export const ADDITIONAL_SERVICES: AdditionalService[] = [
  {
    id: 'web-design',
    title: 'تصميم وبرمجة المواقع والمتاجر الإلكترونية',
    description: 'تصميم مواقع ويب ومتاجر إلكترونية عصرية متجاوبة 100% مع الجوال والكمبيوتر، مع ربط بوابات الدفع الإلكتروني (فيزا، ماستركارد، فوري، انستاباي)، لوحة تحكم عربية سهلة، وتهيئة تامة لمحركات البحث SEO.',
    iconName: 'Layout',
    startingPrice: 'تبدأ من 2,999 ج.م',
    deliverableTime: 'خلال 5-7 أيام',
    highlight: 'تصميم مخصص بالكامل',
    category: 'web'
  },
  {
    id: 'cloud-hosting',
    title: 'استضافة المواقع السحابية وحجز الدومينات',
    description: 'سيرفرات استضافة سحابية فائقة السرعة مع أقراص NVMe SSD، حماية من هجمات الحجب DDoS، شهادات أمان SSL مجانية، لوحة تحكم cPanel، نسخ احتياطي يومي، واستقرار بنسبة 99.9%.',
    iconName: 'Server',
    startingPrice: 'تبدأ من 1,200 ج.م/سنة',
    deliverableTime: 'تفعيل فوري',
    highlight: 'استقرار 99.9%',
    category: 'web'
  },
  {
    id: 'office-docs',
    title: 'كتابة المستندات وجداول الإكسيل والعروض التقديمية',
    description: 'صياغة المستندات الرسمية، إعداد نماذج الإكسيل المالية والمحاسبية المتقدمة مع المعادلات والماكرو، وتصميم عروض تقديمية (PowerPoint) احترافية لكافة إصدارات مايكروسوفت أوفيس.',
    iconName: 'FileSpreadsheet',
    startingPrice: 'تبدأ من 250 ج.م',
    deliverableTime: 'خلال 24-48 ساعة',
    highlight: 'مايكروسوفت أوفيس 365',
    category: 'office'
  },
  {
    id: 'brand-identity',
    title: 'تصميم اللوجوهات والهوية البصرية الكاملة',
    description: 'ابتكار شعارات تجارية فريدة تعبر عن طبيعة نشاطك، مع ملفات فيكتور عالية الدقة، ودليل استخدام الهوية، وبطاقات الأعمال، والمطبوعات الرسمية.',
    iconName: 'Palette',
    startingPrice: 'تبدأ من 750 ج.م',
    deliverableTime: 'خلال 3-5 أيام',
    highlight: 'ملفات مفتوحة قابلة للطباعة',
    category: 'creative'
  },
  {
    id: 'qr-codes',
    title: 'تصميم QR Code الذكي والديناميكي',
    description: 'إنشاء رموز استجابة سريعة QR مخصصة بألوان وشعار علامتك التجارية، تقود لصفحة الدفع، رابط الواتساب، المنيو، أو موقعك، قابلة للتعديل والتحليل.',
    iconName: 'QrCode',
    startingPrice: 'تبدأ من 150 ج.م',
    deliverableTime: 'تسليم فوري',
    highlight: 'رمز ديناميكي ذكي',
    category: 'creative'
  },
  {
    id: 'restaurant-menu',
    title: 'تصميم منيو وقوائم الطعام والشراب للمطاعم',
    description: 'تصميم قوائم طعام راقية ومغرية للمطاعم والكافيهات، تدعم المنيو الورقي والمنيو الإلكتروني التفاعلي عبر الهاتف والباركود الذكي.',
    iconName: 'UtensilsCrossed',
    startingPrice: 'تبدأ من 450 ج.م',
    deliverableTime: 'خلال يومين عمل',
    highlight: 'منيو ورقي وتفاعلي',
    category: 'creative'
  },
  {
    id: 'content-writing',
    title: 'كتابة المحتوى التسويقي والإعلاني (SEO)',
    description: 'صياغة نصوص إعلانية جذابة لصفحات الهبوط ومنصات التواصل الاجتماعي، ومقالات حصرية متوافقة مع محركات البحث تجذب عملاءك المحتملين.',
    iconName: 'PenTool',
    startingPrice: 'تبدأ من 200 ج.م',
    deliverableTime: 'خلال 24 ساعة',
    highlight: 'متوافق مع محركات البحث',
    category: 'creative'
  }
];

export const COMPARISON_CATEGORIES = [
  {
    category: 'النطاق والاستضافة (Hosting & Domains)',
    items: [
      { name: 'اسم الدومين (Domain Name)', warmUp: 'متضمن مجاناً', rampUp: 'متضمن مجاناً', takeOff: 'متضمن مجاناً' },
      { name: 'مساحة التخزين السريعة (SSD Storage)', warmUp: '1 جيجابايت', rampUp: '2 جيجابايت', takeOff: '5 جيجابايت' },
      { name: 'الدومينات الفرعية (Subdomains)', warmUp: '1', rampUp: '2', takeOff: '5' },
      { name: 'قواعد البيانات (MySQL Databases)', warmUp: '1', rampUp: '2', takeOff: '5' },
      { name: 'حسابات الوصول (FTP Accounts)', warmUp: 'غير محدود', rampUp: 'غير محدود', takeOff: 'غير محدود' },
      { name: 'لوحة التحكم السحابية (cPanel)', warmUp: 'نعم', rampUp: 'نعم', takeOff: 'نعم' },
      { name: 'المهام المجدولة (Cronjobs)', warmUp: 'غير محدود', rampUp: 'غير محدود', takeOff: 'غير محدود' },
    ]
  },
  {
    category: 'البريد الإلكتروني الاحترافي (Business Email)',
    items: [
      { name: 'مساحة صندوق البريد (Mailbox Storage)', warmUp: '2 جيجابايت / بريد', rampUp: '5 جيجابايت / بريد', takeOff: '10 جيجابايت / بريد' },
      { name: 'الأسماء المستعارة (Email Aliases)', warmUp: 'غير محدود', rampUp: 'غير محدود', takeOff: 'غير محدود' },
      { name: 'دعم تطبيقات iOS و Android', warmUp: 'نعم', rampUp: 'نعم', takeOff: 'نعم' },
      { name: 'واجهة بريد الويب الآمنة (Secure Webmail)', warmUp: 'نعم', rampUp: 'نعم', takeOff: 'نعم' },
      { name: 'بروتوكول POP3', warmUp: 'نعم', rampUp: 'نعم', takeOff: 'نعم' },
      { name: 'بروتوكول IMAP', warmUp: 'غير متوفر', rampUp: 'نعم', takeOff: 'نعم' },
      { name: 'بروتوكول MAPI المتقدم', warmUp: 'غير متوفر', rampUp: 'غير متوفر', takeOff: 'نعم' },
      { name: 'التقويم التشاركي (Shared Calendar)', warmUp: 'غير متوفر', rampUp: 'غير متوفر', takeOff: 'نعم' },
    ]
  },
  {
    category: 'الأمان وحلول المواقع (Security & Website)',
    items: [
      { name: 'شهادة أمان وتشفير SSL', warmUp: 'متضمنة مجاناً', rampUp: 'متضمنة مجاناً', takeOff: 'متضمنة مجاناً' },
      { name: 'مُصمِّم مواقع الإنترنت (Website Builder)', warmUp: 'متضمن مجاناً', rampUp: 'متضمن مجاناً', takeOff: 'متضمن مجاناً' },
      { name: 'فحص الفيروسات والبرمجيات الخبيثة', warmUp: 'نعم', rampUp: 'نعم', takeOff: 'نعم' },
      { name: 'حماية متقدمة Anti-Virus & Anti-Spam', warmUp: 'نعم', rampUp: 'نعم', takeOff: 'نعم' },
      { name: 'الدعم الفني المتخصص باللغة العربية', warmUp: '24/7', rampUp: '24/7 ذو أولوية', takeOff: '24/7 كبار العملاء' },
    ]
  }
];

export const GO_DIGITAL_BENEFITS = [
  {
    title: 'خدمة دعم فني باللغة العربية',
    desc: 'فريق متخصص متواجد على مدار الساعة للرد على كافة استفساراتك وتقديم المساعدة الفنية الفورية.',
    icon: 'Headphones'
  },
  {
    title: 'باقات مناسبة بالجنيه المصري',
    desc: 'دفع محلي مرن يحميك من تقلبات العملة وبدون أي رسوم خفية أو مفاجآت.',
    icon: 'CreditCard'
  },
  {
    title: 'فريق خبراء معتمدين',
    desc: 'كوادر تقنية متمكنة في إدارة البنية التحتية، السيرفرات السحابية وتطوير الحلول الرقمية.',
    icon: 'Award'
  },
  {
    title: 'بنية تحتية سحابية موثوقة',
    desc: 'سيرفرات فائقة السرعة مع تخزين SSD وضمان استقرار وتشغيل بنسبة 99.9%.',
    icon: 'Server'
  },
  {
    title: 'أقصى درجات الأمان والامتثال',
    desc: 'تشفير كامل للبيانات، جدران حماية نارية، وفحص دوري من الهجمات الخبيثة.',
    icon: 'ShieldCheck'
  },
  {
    title: 'طرق دفع متنوعة وسريعة',
    desc: 'إمكانية الدفع عبر تطبيق انستاباي InstaPay، المحافظ الإلكترونية (فودافون كاش، أورنج، اتصالات، وي باي)، البطاقات البنكية، فوري، أو التحويل البنكي.',
    icon: 'Zap'
  }
];

export const GO_DIGITAL_FAQS = [
  {
    question: 'كيف أستخدم باقات 4Digital في بناء موقع الويب الخاص بشركتي؟',
    answer: '4Digital تقدم حلاً رقمياً شاملاً ومتكاملاً يساعدك على التحول الرقمي بسهولة؛ حيث توفر لك الدومين، استضافة المواقع السحابية، مُصمم المواقع بالسحب والإفلات أو التصميم البرمجي المخصص، شهادة حماية SSL المشفرة، والبريد الإلكتروني الرسمي باسم شركتك دون أي تعقيدات تقنية.'
  },
  {
    question: 'هل توفرون خدمات تصميم المواقع الخاصة والمتاجر الإلكترونية؟',
    answer: 'نعم بالتأكيد! نقدم خدمات تصميم وبرمجة المواقع التعريفية للشركات، والمتاجر الإلكترونية المتكاملة مع بوابات الدفع الإلكتروني (فيزا، ماستركارد، فوري، انستاباي)، وتطبيقات الويب المخصصة وفق هوية نشاطك ومتطلباتك الخاصة.'
  },
  {
    question: 'هل يمكنني إضافة خدمات أخرى مع باقتي؟',
    answer: 'نعم، يمكنك إضافة أي خدمات أخرى من قائمة خدماتنا المميزة مثل: تصميم وتطوير المواقع والمتاجر، كتابة وتنسيق مستندات أوفيس والإكسيل، تصميم اللوجوهات والهوية البصرية، تصميم QR Code الذكي، تصميم قوائم الطعام، أو كتابة المحتوى التسويقي.'
  },
  {
    question: 'هل يمكنني ترقية أو خفض اشتراكي في باقات 4Digital في أي وقت؟',
    answer: 'نعم بالتأكيد! يمكنك ترقية اشتراكك في أي وقت بسهولة مع نمو حجم أعمالك واحتياجك لمساحة أكبر وقواعد بيانات وبريد إضافي، مع دفع فارق السعر فقط للباقة الأعلى.'
  },
  {
    question: 'ما هي طرق الدفع المتاحة في فور ديجيتال؟',
    answer: 'نوفر لك خيارات دفع محلية ودولية سهلة تشمل: الدفع الفوري عبر انستاباي (InstaPay)، بطاقات الائتمان والخصم المباشر (Visa / Mastercard)، التحويلات البنكية المباشرة، وخدمات فوري والمحافظ الإلكترونية.'
  },
  {
    question: 'هل يمكنني إلغاء اشتراكي في أي وقت؟',
    answer: 'نعم، يمكنك إلغاء اشتراكك أو عدم التجديد في أي وقت دون أي التزامات مفروضة، ونقدم ضمان استرداد الأموال خلال أول 14 يوماً وفق شروط الخدمة.'
  }
];

export const CONTACT_INFO = {
  phone: '+20 01205132328',
  phoneDisplay: '+20 1205132328',
  phoneRaw: '201205132328',
  whatsappUrl: 'https://wa.me/201205132328',
  facebookUrl: 'https://www.facebook.com/4digitalservices',
  email: '4digitalservices26@gmail.com',
  address: 'القاهرة، جمهورية مصر العربية - خدمات رقمية تغطي كافة أنحاء الوطن العربي',
  hours: 'الدعم الفني متاح 24/7 طوال أيام الأسبوع'
};

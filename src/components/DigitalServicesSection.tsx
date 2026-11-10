import React from 'react';
import { 
  FileText, 
  FileSpreadsheet, 
  Presentation, 
  UtensilsCrossed, 
  QrCode, 
  Palette, 
  Video, 
  Languages, 
  Share2,
  PenTool,
  ArrowLeft, 
  Clock, 
  Layers, 
  Check 
} from 'lucide-react';
import { AdditionalService } from '../data/goDigitalData';

interface DigitalServicesSectionProps {
  onSelectService: (service: AdditionalService) => void;
}

interface DetailedService extends AdditionalService {
  number: string;
  forWho: string;
  deliverables: string[];
}

export const DigitalServicesSection: React.FC<DigitalServicesSectionProps> = ({ onSelectService }) => {
  const services: DetailedService[] = [
    {
      id: 'srv-word-writing',
      number: '01',
      title: 'كتابة المستندات Word',
      description: 'كتابة وإدخال كافة أنواع المستندات، المذكرات، الخطابات الرسمية، الأبحاث، والتقارير باللغة العربية والإنجليزية بدقة وسرعة عالية.',
      iconName: 'PenTool',
      startingPrice: 'تبدأ من 10 ج للصفحة',
      deliverableTime: 'تسليم سريع خلال ساعات',
      highlight: '10 ج / للصفحة',
      category: 'office',
      forWho: 'للشركات، الباحثين، الطلاب، والمكاتب الإدارية',
      deliverables: [
        'كتابة دقيقة خالية من الأخطاء الإملائية واللغوية',
        'تسليم ملف Word مفتوح قابل للتعديل + نسخة PDF',
        'الالتزام التام بمواعيد التسليم والسرية الكاملة'
      ]
    },
    {
      id: 'srv-word-formatting',
      number: '02',
      title: 'تنسيق ملفات الوورد (Word)',
      description: 'تنسيق احترافي لملفات الوورد، الأبحاث، التقارير، العقود، والكتب، يشمل ضبط الهوامش، الخطوط، الفهارس التلقائية، والجداول.',
      iconName: 'FileText',
      startingPrice: 'يبدأ من 50 ج لملف مكون من 20 صفحة',
      deliverableTime: 'خلال 24 ساعة',
      highlight: '50 ج / 20 صفحة',
      category: 'office',
      forWho: 'للباحثين، الشركات، المؤلفين، وطلاب الجامعات',
      deliverables: [
        'ضبط الهوامش والفقرات والعناوين والترقيم التلقائي',
        'عمل فهرس محتويات وجداول احترافي وتنسيق الترويسة',
        'تسليم ملف Word منسق بالكامل + نسخة PDF جاهزة للطباعة'
      ]
    },
    {
      id: 'srv-excel-sheets',
      number: '03',
      title: 'العمل على الإكسيل (Excel)',
      description: 'إعداد وتصميم جداول وشيتات الإكسيل المحاسبية والإدارية، إدخال البيانات، بناء المعادلات، وتنسيق الجداول والتقارير.',
      iconName: 'FileSpreadsheet',
      startingPrice: 'يبدأ من 20 ج لملف إكسيل مكون من 20 صف',
      deliverableTime: 'خلال 24 ساعة',
      highlight: '20 ج / 20 صف',
      category: 'office',
      forWho: 'للمحاسبين، أصحاب المشاريع، والشركات',
      deliverables: [
        'تنظيم وتنسيق البيانات داخل الجداول بدقة',
        'ربط المعادلات الحسابية والجمع التلقائي بدون أخطاء',
        'جاهزية الملف للطباعة والتعديل المباشر'
      ]
    },
    {
      id: 'srv-powerpoint',
      number: '04',
      title: 'تصميم ملفات باور بوينت (PowerPoint)',
      description: 'تصميم عروض تقديمية احترافية للشركات، المشاريع، المحاضرات التعليمية، ومناقشات الأبحاث بتصاميم عصرية جذابة.',
      iconName: 'Presentation',
      startingPrice: 'يبدأ من 50 ج لعدد 10 سلايد',
      deliverableTime: 'خلال 24 ساعة',
      highlight: '50 ج / 10 سلايد',
      category: 'office',
      forWho: 'للشركات، المحاضرين، الباحثين، والطلاب',
      deliverables: [
        'تصميم 10 شرائح (Slides) متناسقة الألوان والخطوط',
        'إضافة حركات انتقالية ورسوم توضيحية وإنفوجرافيك',
        'تسليم ملف PowerPoint مفتوح + نسخة PDF للعرض'
      ]
    },
    {
      id: 'srv-logos-branding',
      number: '05',
      title: 'تصميم اللوجوهات والشعارات',
      description: 'تصميم شعار (Logo) احترافي ومميز يعبر عن هوية شركتك أو مشروعك التجاري بدقة عالية يصلح لكافة المطبوعات والمنصات.',
      iconName: 'Palette',
      startingPrice: '150 ج',
      deliverableTime: 'خلال 24-48 ساعة',
      highlight: 'تصميم لوجو بـ 150 ج',
      category: 'creative',
      forWho: 'للشركات الناشئة، المتاجر، والمشاريع التجارية',
      deliverables: [
        'تصميم شعار مبتكر وعصري متناسق مع مجال عملك',
        'تسليم اللوجو بخلفية شفافة PNG وبأعلى جودة للطباعة',
        'إمكانية استخدامه على السوشيال ميديا والمطبوعات'
      ]
    },
    {
      id: 'srv-qr-codes',
      number: '06',
      title: 'إعداد وتصميم الكيو آر كود (QR Code)',
      description: 'تصميم وتوليد رمز استجابة سريعة (QR Code) مخصص بألوان وشعار شركتك يربط العملاء بموقعك، الواتساب، المنيو، أو اللوكيشن.',
      iconName: 'QrCode',
      startingPrice: '50 ج',
      deliverableTime: 'تسليم فوري',
      highlight: 'كيو آر كود بـ 50 ج',
      category: 'creative',
      forWho: 'للمطاعم، المحلات، الشركات، والعيادات',
      deliverables: [
        'رمز QR Code ذكي ومجرب يعمل على كافة الهواتف',
        'دمج ألوان ولوجو شركتك داخل تصميم الرمز',
        'تسليم ملف عالي الدقة جاهز للطباعة والنشر'
      ]
    },
    {
      id: 'srv-food-menus',
      number: '07',
      title: 'تصميم منيوهات الطعام',
      description: 'تصميم منيو طعام ومشروبات احترافي وجذاب للمطاعم والكافيهات، منظم بشكل يبرز الأصناف والأسعار والعروض.',
      iconName: 'UtensilsCrossed',
      startingPrice: '200 ج',
      deliverableTime: 'خلال 24-48 ساعة',
      highlight: 'تصميم منيو بـ 200 ج',
      category: 'creative',
      forWho: 'للمطاعم، الكافيهات، ومحلات الحلويات والعصائر',
      deliverables: [
        'تصميم منيو جذاب يفتح الشهية ويسهل قراءة الأصناف',
        'ملف عالي الدقة جاهز للطباعة الفورية',
        'نسخة رقمية جاهزة للنشر أو الربط بالـ QR Code'
      ]
    },
    {
      id: 'srv-content-creation',
      number: '08',
      title: 'كتابة المحتوى (نص - صورة - فيديو)',
      description: 'إنتاج وصناعة محتوى إبداعي وتسويقي متكامل يشمل كتابة النصوص والمقالات، تصميم الصور الإعلانية، أو إعداد ومونتاج الفيديوهات.',
      iconName: 'Video',
      startingPrice: 'حسب الاتفاق',
      deliverableTime: 'حسب حجم المحتوى المطلوب',
      highlight: 'نص · صورة · فيديو',
      category: 'creative',
      forWho: 'للشركات، المتاجر، وصناع المحتوى',
      deliverables: [
        'كتابة نصوص تسويقية وإعلانية ومقالات حصرية',
        'تصميم صور وبنرات احترافية عالية الجودة',
        'إعداد ومونتاج فيديوهات ترويجية وإعلانية'
      ]
    },
    {
      id: 'srv-translation',
      number: '09',
      title: 'الترجمة الاحترافية من وإلى أي لغة',
      description: 'ترجمة دقيقة واحترافية للمستندات، العقود، الأبحاث الأكاديمية، والمقالات من وإلى كافة اللغات العالمية.',
      iconName: 'Languages',
      startingPrice: 'حسب الاتفاق',
      deliverableTime: 'حسب عدد الصفحات واللغة',
      highlight: 'جميع اللغات',
      category: 'office',
      forWho: 'للشركات، الباحثين، والجهات الإدارية',
      deliverables: [
        'ترجمة بشرية دقيقة تراعي المعنى والمصطلحات التخصصية',
        'ترجمة من وإلى الإنجليزية، الفرنسية، الألمانية، وكافة اللغات',
        'مراجعة لغوية وتسليم الملف منسقاً وجاهزاً'
      ]
    },
    {
      id: 'srv-social-media-posts',
      number: '10',
      title: 'كتابة بوستات للسوشيال ميديا',
      description: 'كتابة وصياغة بوستات ومنشورات تفاعلية وإعلانية لمنصات التواصل الاجتماعي (فيسبوك، إنستجرام، لينكدإن، تيك توك) تجذب العملاء وتزيد المبيعات.',
      iconName: 'Share2',
      startingPrice: 'حسب الاتفاق',
      deliverableTime: 'حسب خطة النشر المتفق عليها',
      highlight: 'بوستات تفاعلية وبيعية',
      category: 'creative',
      forWho: 'لأصحاب الصفحات، المتاجر الإلكترونية، والشركات',
      deliverables: [
        'أفكار ومنشورات جذابة تناسب جمهورك المستهدف',
        'صياغة إعلانية قوية (Copywriting) مع الكلمات المفتاحية والهاشتاجات',
        'إمكانية التعاقد بالقطعة أو بنظام الباقات الشهرية'
      ]
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'PenTool': return <PenTool className="w-6 h-6 text-sky-600" />;
      case 'FileText': return <FileText className="w-6 h-6 text-blue-600" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6 text-emerald-600" />;
      case 'Presentation': return <Presentation className="w-6 h-6 text-purple-600" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-6 h-6 text-rose-600" />;
      case 'QrCode': return <QrCode className="w-6 h-6 text-amber-600" />;
      case 'Palette': return <Palette className="w-6 h-6 text-indigo-600" />;
      case 'Video': return <Video className="w-6 h-6 text-sky-600" />;
      case 'Languages': return <Languages className="w-6 h-6 text-teal-600" />;
      case 'Share2': return <Share2 className="w-6 h-6 text-blue-600" />;
      default: return <Layers className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="digital-services" className="py-14 relative bg-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>قسم الخدمات الرقمية الشاملة — أسعار تنافسية وواضحة</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0e2b6c] leading-tight">
            قسم الخدمات الرقمية المتكاملة
          </h1>

          <p className="text-slate-600 text-base leading-relaxed">
            قائمة أسعار وخدمات فور ديجيتال: <strong className="text-slate-900">كتابة المستندات (10 ج/صفحة)</strong>، <strong className="text-slate-900">تنسيق وورد (50 ج لـ 20 صفحة)</strong>، <strong className="text-slate-900">إكسيل (20 ج لـ 20 صف)</strong>، <strong className="text-slate-900">باور بوينت (50 ج لـ 10 سلايد)</strong>، <strong className="text-slate-900">تصميم لوجو (150 ج)</strong>، <strong className="text-slate-900">كيو آر كود (50 ج)</strong>، <strong className="text-slate-900">منيو طعام (200 ج)</strong>، بالإضافة إلى كتابة المحتوى، بوستات السوشيال ميديا، والترجمة.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-3xl bg-white border-2 border-slate-200 hover:border-[#43b8da] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="text-left">
                    <span className="text-xs sm:text-sm font-black text-blue-800 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200 inline-block">
                      {service.startingPrice}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400">خدمة رقم {service.number}</span>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#0e2b6c] transition-colors leading-snug mt-0.5">
                    {service.title}
                  </h3>
                  <p className="text-xs font-bold text-indigo-600 mt-1">
                    {service.forWho}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <p className="text-xs font-black text-slate-900">ماذا تشمل الخدمة؟</p>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-700 leading-snug">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>{service.deliverableTime}</span>
                  </span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    {service.highlight}
                  </span>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full py-3 rounded-xl bg-[#0e2b6c] hover:bg-blue-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
                >
                  <span>اطلب هذه الخدمة الآن</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

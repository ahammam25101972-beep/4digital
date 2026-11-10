import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  FileText, 
  Presentation, 
  BookOpen, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  ArrowLeft,
  Layers,
  Award
} from 'lucide-react';
import { AdditionalService } from '../data/goDigitalData';

interface OfficeWritingSectionProps {
  onSelectService: (service: AdditionalService) => void;
}

export const OfficeWritingSection: React.FC<OfficeWritingSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'services' | 'library'>('services');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const services = [
    {
      id: 'excel-advanced',
      title: 'إعداد وتنسيق جداول الإكسيل المتقدمة (Excel Models)',
      desc: 'بناء وتصميم نماذج مالية وإدارية ذكية، لوحات تحكم ومؤشرات أداء (Dashboards)، برمجة المعادلات المعقدة والماكرو VBA، وحساب الأرباح والخسائر وحركة المخزون بدقة تامة.',
      icon: FileSpreadsheet,
      badge: 'إكسيل متقدم',
      price: 'تبدأ من 350 ج.م',
      features: [
        'معادلات ودوال متقدمة (VLOOKUP, XLOOKUP, INDEX-MATCH)',
        'تصميم لوحات تحكم تفاعلية (Interactive Dashboards)',
        'نماذج محاسبية وفواتير إلكترونية وموازنات',
        'تنسيق شرطي ومخططات بيانية ديناميكية جذابة'
      ]
    },
    {
      id: 'docs-writing',
      title: 'صياغة وتنسيق المستندات والخطابات الرسمية',
      desc: 'كتابة وتنسيق العقود والاتفاقيات، اللوائح الإدارية، الخطابات الرسمية، والتقارير التنفيذية على Microsoft Word بتنسيق احترافي يلائم الهوية البصرية لشركتك.',
      icon: FileText,
      badge: 'وورد رسمي',
      price: 'تبدأ من 250 ج.م',
      features: [
        'صياغة لغوية وإملائية عربية وإنجليزية سليمة 100%',
        'تنسيق جداول وفهارس ومراجع المستندات الطويلة',
        'إدراج شعار وبيانات الشركة وترويسة رسمية جاهزة للطباعة',
        'تسليم ملفات قابلة للتعديل Word وملفات PDF جاهزة'
      ]
    },
    {
      id: 'powerpoint-pitch',
      title: 'تصميم عروض تقديمية احترافية (PowerPoint & Pitch Decks)',
      desc: 'عروض تقديمية تأسر المستثمرين والعملاء، بتصميم جرافيكي متقن، إنفوجرافيك عصري، رسوم بيانية توضيحية، وحركات انتقالية سلسة تعكس تميز أفكارك.',
      icon: Presentation,
      badge: 'عروض استثمارية',
      price: 'تبدأ من 450 ج.م',
      features: [
        'عروض لتقديم الشركات للعملاء (Company Profile)',
        'عروض لجذب المستثمرين والتمويل (Pitch Decks)',
        'تصميم إنفوجرافيك وأيقونات متناسقة مع ألوان علامتك',
        'تأثيرات حركية أنيقة وتنسيق سينمائي مميز'
      ]
    },
    {
      id: 'academic-formatting',
      title: 'تنسيق الأبحاث والكتب الإلكترونية والمطبوعات',
      desc: 'تنسيق الدراسات والأبحاث الأكاديمية والكتب الرقمية والمطبوعة وفق المعايير العالمية (APA, MLA, Chicago)، مع فهرسة آلية وتصميم أغلفة داخلية وخارجية.',
      icon: BookOpen,
      badge: 'نشر وتنسيق',
      price: 'تبدأ من 300 ج.م',
      features: [
        'ضبط الهوامش والخطوط والمسافات وفق أدلة التنسيق',
        'توليد الفهارس التلقائية للمحتويات والجداول والصور',
        'تنسيق وتدقيق حواشي التوثيق والمراجع والمصادر',
        'تجهيز نسخ PDF تفاعلية للقراءة على الهاتف والأجهزة'
      ]
    }
  ];

  const libraryTemplates = [
    {
      id: 'temp-invoice',
      title: 'نموذج فاتورة مبيعات وخدمات احترافية Excel',
      category: 'مالية ومبيعات',
      format: 'XLSX & PDF',
      downloads: '1,420 تحميل',
      desc: 'قالب إكسيل جاهز يحتوي على حسابات آلية لضريبة القيمة المضافة، الخصومات، والمجموع الصافي، مع ترويسة شركة احترافية.'
    },
    {
      id: 'temp-salary',
      title: 'نموذج كشف الرواتب ومسير الأجور الشهرية',
      category: 'الموارد البشرية',
      format: 'XLSX',
      downloads: '980 تحميل',
      desc: 'جدول حساب الرواتب، البدلات، الخصومات والتأمينات، مع تقرير ملخص إجمالي أجور الموظفين الشهري.'
    },
    {
      id: 'temp-contract',
      title: 'نموذج عقد عمل محدد المدة قانوني Word',
      category: 'عقود وقانوني',
      format: 'DOCX & PDF',
      downloads: '2,150 تحميل',
      desc: 'صيغة قانونية شاملة لبنود التوظيف، فترات الاختبار، سرية المعلومات، وساعات العمل متوافقة مع قانون العمل.'
    },
    {
      id: 'temp-pitch',
      title: 'قالب عرض تقديمي لملف تعريف الشركة PowerPoint',
      category: 'تسويق وعروض',
      format: 'PPTX (15 شريحة)',
      downloads: '1,890 تحميل',
      desc: 'شرائح مصممة بأسلوب عصري وأنيق، تضم شريحة من نحن، الرؤية، الخدمات، العملاء، وخطة العمل.'
    },
    {
      id: 'temp-cashflow',
      title: 'نموذج التدفق النقدي والميزانية التقديرية Excel',
      category: 'إدارة مالية',
      format: 'XLSX',
      downloads: '1,320 تحميل',
      desc: 'متابعة المقبوضات والمدفوعات اليومية والشهرية مع رسوم بيانية توضح رصيد النقدية المتوقع.'
    },
    {
      id: 'temp-marketing-plan',
      title: 'قالب خطة تسويقية سنوية للشركات Word',
      category: 'تسويق واستراتيجية',
      format: 'DOCX',
      downloads: '1,640 تحميل',
      desc: 'هيكل منظم لتحديد الجمهور المستهدف، تحليل المنافسين، قنوات التسويق، والميزانية التسويقية.'
    }
  ];

  const handleDownload = (templateTitle: string) => {
    setDownloadSuccess(templateTitle);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 3500);
  };

  return (
    <section id="writing-office-services" className="py-20 relative bg-slate-50/80 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>حلول مايكروسوفت أوفيس والمكتبة الرقمية</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            خدمات الكتابة والتنسيق <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              والمكتبة الرقمية لنماذج الأعمال
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            نساعد الشركات ورواد الأعمال في صياغة وتنسيق كافة مستندات مايكروسوفت أوفيس (Word, Excel, PowerPoint)، وتجهيز نماذج عمل محاسبية وإدارية دقيقة، بجانب مكتبة رقمية متجددة من القوالب الجاهزة.
          </p>

          {/* Toggle Tabs */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-300 shadow-xs">
              <button
                onClick={() => setActiveTab('services')}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'services'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>خدمات الكتابة والتنسيق المخصصة</span>
              </button>

              <button
                onClick={() => setActiveTab('library')}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'library'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>المكتبة الرقمية (نماذج وقوالب جاهزة)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Customized Services */}
        {activeTab === 'services' && (
          <div className="grid md:grid-cols-2 gap-8 items-stretch animate-in fade-in">
            {services.map((srv) => {
              const Icon = srv.icon;

              return (
                <div 
                  key={srv.id}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700">
                        {srv.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {srv.title}
                      </h3>
                      <span className="text-xs font-black text-blue-700 font-sans block mt-1">
                        {srv.price}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {srv.desc}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <p className="text-xs font-bold text-slate-900">مميزات الخدمة:</p>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {srv.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <button
                      onClick={() => onSelectService({
                        id: srv.id,
                        title: srv.title,
                        description: srv.desc,
                        iconName: 'FileSpreadsheet',
                        startingPrice: srv.price,
                        deliverableTime: 'خلال 24-48 ساعة',
                        highlight: srv.badge,
                        category: 'office'
                      })}
                      className="w-full py-3 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
                    >
                      <span>طلب الخدمة وتحديد التفاصيل</span>
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Digital Library (Templates) */}
        {activeTab === 'library' && (
          <div className="space-y-8 animate-in fade-in">
            {/* Download success alert banner */}
            {downloadSuccess && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm font-bold flex items-center justify-between shadow-sm animate-in zoom-in-95">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>تم تجهيز قالب ({downloadSuccess}) بنجاح! يمكنك استخدامه والتعديل عليه بحرية.</span>
                </div>
                <span className="text-xs font-normal text-emerald-700">فور ديجيتال للمكتبة الرقمية</span>
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {libraryTemplates.map((item) => (
                <div 
                  key={item.id}
                  className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700">
                        {item.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        {item.format}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                      <span>{item.downloads}</span>
                      <span className="text-emerald-700 font-bold">مجاني ومتاح للتحميل</span>
                    </div>
                  </div>

                  <div className="pt-5 mt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => handleDownload(item.title)}
                      className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>تحميل القالب الآن</span>
                    </button>
                    
                    <button
                      onClick={() => onSelectService({
                        id: item.id,
                        title: `تخصيص: ${item.title}`,
                        description: `طلب تعديل وتخصيص قالب ${item.title} وفق بيانات وشعار شركتي`,
                        iconName: 'FileSpreadsheet',
                        startingPrice: '150 ج.م',
                        deliverableTime: 'خلال 24 ساعة',
                        highlight: 'تخصيص مخصص',
                        category: 'office'
                      })}
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 text-xs font-bold"
                      title="طلب تخصيص القالب لشركتك"
                    >
                      تخصيص
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Template Request Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border border-blue-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1 text-center md:text-right">
                <h4 className="text-lg font-bold text-slate-900 flex items-center justify-center md:justify-start gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>هل تحتاج قالباً أو نموذجاً محاسبياً مخصصاً لشركتك؟</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  فريق فور ديجيتال يقوم بتصميم وبناء نماذج الإكسيل وقوالب المستندات المعقدة المصممة خصيصاً لدورة عمل مؤسستك.
                </p>
              </div>

              <button
                onClick={() => onSelectService({
                  id: 'custom-template',
                  title: 'تصميم نموذج وقالب مخصص لشركتك',
                  description: 'تصميم وبناء نموذج إكسيل أو وورد مخصص بالكامل لمعادلات ودورة عمل شركتك',
                  iconName: 'FileSpreadsheet',
                  startingPrice: 'تبدأ من 300 ج.م',
                  deliverableTime: 'خلال يوم عمل',
                  highlight: 'قالب خاص',
                  category: 'office'
                })}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shrink-0 shadow-md shadow-blue-500/20 transition-all"
              >
                طلب نموذج مخصص الآن
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

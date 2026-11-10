import React, { useState } from 'react';
import { 
  Newspaper, 
  Clock, 
  User, 
  ArrowLeft, 
  BookOpen, 
  CheckCircle2, 
  X, 
  Sparkles 
} from 'lucide-react';
import { AdditionalService } from '../data/goDigitalData';

interface BlogSectionProps {
  onOrderService?: (service: AdditionalService) => void;
}

interface BlogArticle {
  id: string;
  number: number;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  keyPoints: string[];
  fullContent: string;
  relatedServiceTitle: string;
  relatedServicePrice: string;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOrderService }) => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  const articles: BlogArticle[] = [
    {
      id: 'blog-1',
      number: 1,
      title: 'كيف تطلق موقع شركتك الإلكتروني وتختار الدومين والاستضافة المناسبة في مصر؟',
      category: 'الدومينات والاستضافة',
      readTime: '4 دقائق قراءة',
      date: 'نوفمبر 2026',
      summary: 'دليل عملي لأصحاب الشركات لاختيار اسم نطاق (.com أو .com.eg) وتحديد مساحة الاستضافة السحابية المناسبة لضمان سرعة الموقع وأمان البريد الرسمي.',
      keyPoints: [
        'اختيار اسم دومين قصير وسهل التذكر يعبر عن نشاط شركتك',
        'أهمية أقراص NVMe SSD وشهادة الأمان SSL في تصدر نتائج جوجل',
        'كيف تمنحك الإيميلات الرسمية (info@company.com) مصداقية فورية أمام العملاء'
      ],
      fullContent: 'يعد امتلاك موقع إلكتروني رسمي حجر الأساس لأي شركة تطمح للنمو والوصول لعملاء جدد. يبدأ النجاح من اختيار اسم نطاق (Domain) واضح ومميز، ثم اختيار باقة استضافة سحابية مستقرة توفر سرعة تحميل عالية وحماية كاملة للبيانات مع بريد إلكتروني رسمي باسم الشركة.',
      relatedServiceTitle: 'حجز باقة استضافة ودومين مجاني',
      relatedServicePrice: 'تبدأ من 4,999 ج.م'
    },
    {
      id: 'blog-2',
      number: 2,
      title: 'دليلك الشامل لإنشاء متجر إلكتروني ناجح وربط المحافظ الإلكترونية وانستاباي',
      category: 'المتاجر الإلكترونية',
      readTime: '5 دقائق قراءة',
      date: 'نوفمبر 2026',
      summary: 'تعرف على الخطوات الأساسية لتحويل تجارتك إلى متجر أونلاين يعمل 24 ساعة مع تفعيل وسائل الدفع الأكثر استخداماً في مصر.',
      keyPoints: [
        'تصميم واجهة متجر سهلة التصفح من الهاتف المحمول',
        'ربط فودافون كاش، انستاباي، والبطاقات البنكية لتسهيل الدفع الفوري',
        'إدارة المخزون والطلبات وشركات الشحن من لوحة تحكم واحدة'
      ],
      fullContent: 'التجارة الإلكترونية في مصر تشهد نمواً غير مسبوق، والسر في نجاح المتجر الإلكتروني يكمن في سهولة خطوات الشراء وتوفير وسائل الدفع المحلية المفضلة للعميل المصري مثل المحافظ الإلكترونية وتطبيق انستاباي إلى جانب البطاقات البنكية والدفع عند الاستلام.',
      relatedServiceTitle: 'تصميم وبرمجة متجر إلكتروني متكامل',
      relatedServicePrice: '5,000 ج.م'
    },
    {
      id: 'blog-3',
      number: 3,
      title: 'أسرار صياغة وتنسيق المستندات الرسمية والعقود والأبحاث على برنامج Word',
      category: 'كتابة وتنسيق المستندات',
      readTime: '4 دقائق قراءة',
      date: 'نوفمبر 2026',
      summary: 'كيف تترك انطباعاً احترافياً من خلال تنسيق المراسلات الإدارية، العقود القانونية، والرسائل العلمية وفق المعايير القياسية.',
      keyPoints: [
        'ضبط الهوامش والخطوط الرسمية والترويسة (Header & Footer) بشعار المؤسسة',
        'الفهرسة الآلية للجداول والمحتويات والمراجع الأكاديمية',
        'صياغة بنود العقود والاتفاقيات بلغة سليمة خالية من الأخطاء'
      ],
      fullContent: 'المستند الرسمي أو العقد هو واجهة تعبر عن مدى دقة واحترافية مؤسستك. التنسيق المتقن على برنامج Word وتصدير نسخ PDF عالية الجودة يضمن وضوح القراءة ويحمي حقوق الأطراف في التعاقدات والتقارير التنفيذية.',
      relatedServiceTitle: 'كتابة المستندات (10 ج/صفحة) وتنسيق وورد (50 ج/20 صفحة)',
      relatedServicePrice: 'تبدأ من 10 ج للصفحة'
    },
    {
      id: 'blog-4',
      number: 4,
      title: 'كيف تضاعف إنتاجية شركتك وتضبط حساباتك باستخدام لوحات تحكم Excel المتقدمة؟',
      category: 'العمل على الإكسيل',
      readTime: '5 دقائق قراءة',
      date: 'نوفمبر 2026',
      summary: 'استبدل الحسابات اليدوية المرهقة بشيتات إكسيل ذكية تحسب الأرباح والمصروفات والمخزون والرواتب تلقائياً بدقة 100%.',
      keyPoints: [
        'استخدام المعادلات المتقدمة والجداول المحورية لتحليل المبيعات لحظياً',
        'تصميم شاشات Dashboard تفاعلية تعرض مؤشرات الأداء بالرسوم البيانية',
        'حماية الخلايا والمعادلات من الحذف الخاطئ وتوفير ساعات من العمل اليومي'
      ],
      fullContent: 'برنامج Microsoft Excel هو أقوى أداة مالية وإدارية عندما يتم توظيفه بشكل احترافي. من خلال تصميم شيتات محاسبية مخصصة ولوحات تحكم تفاعلية، يمكنك معرفة صافي أرباحك وحركة مخزونك بضغطة زر واحدة.',
      relatedServiceTitle: 'العمل على الإكسيل (Excel)',
      relatedServicePrice: 'يبدأ من 20 ج لملف إكسيل مكون من 20 صف'
    },
    {
      id: 'blog-5',
      number: 5,
      title: 'فن تصميم العروض التقديمية PowerPoint التي تقنع المستثمرين والعملاء',
      category: 'تصميم باور بوينت',
      readTime: '3 دقائق قراءة',
      date: 'نوفمبر 2026',
      summary: 'كيف تحول ملف تعريف شركتك (Company Profile) أو عرض مشروعك إلى شرائح بصرية جذابة ومؤثرة.',
      keyPoints: [
        'اختيار ألوان وخطوط متناسقة مع الهوية البصرية للشركة',
        'تحويل النصوص الطويلة والأرقام إلى إنفوجرافيك ورسوم توضيحية',
        'ترتيب تسلسل الشرائح بأسلوب قصصي يجذب الانتباه حتى النهاية'
      ],
      fullContent: 'العرض التقديمي الناجح هو الذي يوصل الفكرة في ثوانٍ معدودة دون تشتيت. سواء كنت تعرض مشروعك أمام مستثمرين أو تقدم سابقة أعمال شركتك لعميل جديد، فإن تصميم PowerPoint الاحترافي يصنع الفارق.',
      relatedServiceTitle: 'تصميم ملفات باور بوينت (PowerPoint)',
      relatedServicePrice: 'يبدأ من 50 ج لعدد 10 سلايد'
    },
    {
      id: 'blog-6',
      number: 6,
      title: 'كيف يزيد تصميم منيوهات الطعام الاحترافية من مبيعات المطاعم والكافيهات؟',
      category: 'تصميم منيوهات الطعام',
      readTime: '4 دقائق قراءة',
      date: 'نوفمبر 2026',
      summary: 'قواعد هندسة المنيو (Menu Engineering) لتصميم قوائم طعام ورقية ورقمية تفتح الشهية وتبرز الأصناف الأكثر ربحية.',
      keyPoints: [
        'توزيع الأصناف والأسعار بصرياً لتوجيه عين العميل نحو الوجبات المميزة',
        'الجمع بين المنيو المطبوع الفاخر والمنيو الرقمي التفاعلي عبر الموبايل',
        'استخدام صور عالية الجودة ووصف مشوق لمكونات الأطباق'
      ],
      fullContent: 'منيو المطعم ليس مجرد قائمة أسعار، بل هو أهم أداة تسويقية داخل مطعمك أو كافيهك. التصميم المدروس للمنيو يرفع متوسط قيمة الطلب ويسهل على العميل اختيار وجبته المفضلة بسرعة.',
      relatedServiceTitle: 'تصميم منيو الطعام',
      relatedServicePrice: '200 ج'
    },
    {
      id: 'blog-7',
      number: 7,
      title: 'استخدامات الكيو آر كود (QR Code) الذكي في تسويق الشركات والمحلات',
      category: 'إعداد الكيو آر كود',
      readTime: '3 دقائق قراءة',
      date: 'نوفمبر 2026',
      summary: 'تعرّف على الفرق بين رمز QR العادي ورمز QR الديناميكي المخصص بشعار وألوان شركتك وكيف يربط عملاءك بك فوراً.',
      keyPoints: [
        'ربط رمز QR بصفحة الواتساب، المنيو، موقع الشركة، أو لوكيشن خرائط جوجل',
        'تصميم رمز QR بألوان الهوية التجارية ووضع اللوجو في المنتصف',
        'إمكانية تحديث الرابط مستقبلاً دون الحاجة لإعادة طباعة المطبوعات'
      ],
      fullContent: 'بمسحة كاميرا واحدة من هاتف العميل، ينقله رمز QR Code الذكي إلى متجرك أو حساباتك أو قائمة أسعارك. إنه الجسر الأسرع بين المطبوعات الورقية والتواصل الرقمي المباشر.',
      relatedServiceTitle: 'تصميم كيو آر كود (QR Code)',
      relatedServicePrice: '50 ج'
    },
    {
      id: 'blog-8',
      number: 8,
      title: 'أهمية تصميم اللوجوهات والشعارات والهوية البصرية في بناء العلامات التجارية',
      category: 'تصميم اللوجوهات والشعارات',
      readTime: '4 دقائق قراءة',
      date: 'نوفمبر 2026',
      summary: 'لماذا يعتبر الشعار الاحترافي والهوية البصرية المتكاملة الاستثمار الأهم لترسيخ اسم شركتك في أذهان العملاء؟',
      keyPoints: [
        'بساطة الشعار وقابليته للطباعة والاستخدام على كافة المنصات والأحجام',
        'توحيد الألوان والخطوط في الكروت الشخصية، الفواتير، وصفحات السوشيال ميديا',
        'استلام الملفات الأصلية المفتوحة المصدر (Vector) لضمان أعلى دقة'
      ],
      fullContent: 'الشعار (Logo) هو البصمة البصرية التي يميزك بها عملاؤك عن المنافسين. الهوية البصرية المتناسقة تمنح مشروعك الناشئ مظهر الشركات الكبرى وتزيد من ولاء العملاء لعلامتك التجارية.',
      relatedServiceTitle: 'تصميم اللوجو والشعارات',
      relatedServicePrice: '150 ج'
    },
    {
      id: 'blog-9',
      number: 9,
      title: 'صناعة المحتوى المتكامل (نصوص، صور، وفيديو) وبوستات السوشيال ميديا',
      category: 'كتابة وإنتاج المحتوى',
      readTime: '5 دقائق قراءة',
      date: 'نوفمبر 2026',
      summary: 'كيف تجمع بين النص التسويقي المقنع، بوستات السوشيال ميديا، التصميم البصري، والفيديو الترويجي للسيطرة على منصات التواصل.',
      keyPoints: [
        'كتابة بوستات سوشيال ميديا ونصوص إعلانية (Copywriting) تدفع العميل للشراء',
        'تصميم صور سوشيال ميديا احترافية تعكس جودة المنتج أو الخدمة',
        'إنتاج فيديوهات ترويجية ومونتاج احترافي يحقق أعلى نسب مشاهدة وتفاعل'
      ],
      fullContent: 'المحتوى هو الملك في التسويق الرقمي الحديث. عندما يجتمع النص المتوافق مع محركات البحث SEO مع بوستات السوشيال ميديا والصور المصممة بعناية والفيديوهات الإعلانية، تتضاعف ثقة الجمهور ومبيعات الشركة.',
      relatedServiceTitle: 'كتابة المحتوى وبوستات السوشيال ميديا',
      relatedServicePrice: 'حسب الاتفاق'
    },
    {
      id: 'blog-10',
      number: 10,
      title: 'معايير الترجمة الاحترافية من وإلى أي لغة وكيف تفتح لشركتك أسواقاً عالمية',
      category: 'الترجمة واللغات',
      readTime: '4 دقائق قراءة',
      date: 'نوفمبر 2026',
      summary: 'لماذا تحتاج الشركات والباحثون إلى ترجمة بشرية متخصصة تراعي المصطلحات القانونية والتجارية والتقنية بدقة؟',
      keyPoints: [
        'ترجمة العقود، المستندات الرسمية، والمواقع الإلكترونية بدقة لغوية وسياقية',
        'مراعاة المصطلحات التخصصية في المجالات القانونية، الطبية، المالية، والأكاديمية',
        'مراجعة وتدقيق النصوص المترجمة من وإلى العربية والإنجليزية والفرنسية والألمانية وغيرها'
      ],
      fullContent: 'الترجمة الاحترافية لا تقتصر على نقل الكلمات حرفياً، بل تنقل المعنى والأسلوب والمصطلح التخصصي بدقة تامة، مما يساعد الشركات والباحثين على مخاطبة الجهات الأجنبية والعملاء الدوليين بثقة.',
      relatedServiceTitle: 'ترجمة احترافية من وإلى أي لغة',
      relatedServicePrice: 'حسب الاتفاق'
    }
  ];

  return (
    <section id="blog" className="py-14 bg-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Newspaper className="w-4 h-4 text-blue-600" />
            <span>مدونة فور ديجيتال المعرفية — 10 موضوعات شاملة</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0e2b6c] leading-tight">
            مدونة فور ديجيتال
          </h1>

          <p className="text-slate-600 text-base leading-relaxed">
            مقالات وأدلة عملية مكتوبة بعناية تغطي كافة مجالات عمل المنصة: من الاستضافة وتصميم المواقع والمتاجر إلى كتابة المستندات، الإكسيل، الهوية البصرية، صناعة المحتوى، والترجمة.
          </p>
        </div>

        {/* 10 Blog Topics Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((art) => (
            <article
              key={art.id}
              className="p-6 rounded-3xl bg-white border-2 border-slate-200 hover:border-[#43b8da] hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                    الموضوع {art.number} · {art.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#0e2b6c] transition-colors leading-snug">
                  {art.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {art.summary}
                </p>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <p className="text-xs font-black text-slate-900">أهم محاور الموضوع:</p>
                  {art.keyPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedArticle(art)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 font-bold text-xs flex items-center gap-1.5 transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>قراءة المقال كاملاً</span>
                </button>

                {onOrderService && (
                  <button
                    onClick={() =>
                      onOrderService({
                        id: art.id,
                        title: art.relatedServiceTitle,
                        description: art.summary,
                        iconName: 'Sparkles',
                        startingPrice: art.relatedServicePrice,
                        deliverableTime: 'تسليم سريع ومضمون',
                        highlight: art.category,
                        category: 'office'
                      })
                    }
                    className="px-4 py-2.5 rounded-xl bg-[#0e2b6c] hover:bg-blue-800 text-white font-bold text-xs flex items-center gap-1.5 transition-all"
                  >
                    <span>اطلب الخدمة المرتبطة</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl text-right space-y-5 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 left-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
              الموضوع رقم {selectedArticle.number} · {selectedArticle.category}
            </span>

            <h3 className="text-xl sm:text-2xl font-black text-[#0e2b6c] leading-snug">
              {selectedArticle.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {selectedArticle.fullContent}
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-sm font-black text-slate-900">النقاط التطبيقية الأساسية:</h4>
              <ul className="space-y-2">
                {selectedArticle.keyPoints.map((kp, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{kp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200">
              <div>
                <span className="text-xs text-slate-500 block">الخدمة المتوفرة في فور ديجيتال:</span>
                <span className="text-sm font-black text-[#0e2b6c]">
                  {selectedArticle.relatedServiceTitle} ({selectedArticle.relatedServicePrice})
                </span>
              </div>

              {onOrderService && (
                <button
                  onClick={() => {
                    const art = selectedArticle;
                    setSelectedArticle(null);
                    onOrderService({
                      id: art.id,
                      title: art.relatedServiceTitle,
                      description: art.summary,
                      iconName: 'Sparkles',
                      startingPrice: art.relatedServicePrice,
                      deliverableTime: 'تسليم سريع ومضمون',
                      highlight: art.category,
                      category: 'office'
                    });
                  }}
                  className="px-6 py-3 rounded-xl bg-[#43b8da] hover:bg-[#34a3c5] text-white font-bold text-sm"
                >
                  اطلب هذه الخدمة الآن
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

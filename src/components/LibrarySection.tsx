import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  CheckCircle2, 
  Star,
  BookMarked,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { AdditionalService, CONTACT_INFO } from '../data/goDigitalData';

interface LibrarySectionProps {
  onCustomizeTemplate: (service: AdditionalService) => void;
}

interface DigitalBook {
  id: string;
  title: string;
  author: string;
  category: string;
  categoryLabel: string;
  pagesCount: string;
  format: string;
  priceEGP: string;
  originalPriceEGP?: string;
  coverImage?: string;
  isFeatured?: boolean;
  description: string;
  chapters: string[];
  downloadsCount: number;
}

const BOOK_CATEGORIES = [
  { id: 'all', label: 'جميع الكتب الرقمية' },
  { id: 'children', label: 'قسم كتب الأطفال' },
  { id: 'business', label: 'ريادة الأعمال والإدارة' },
  { id: 'marketing', label: 'التسويق الرقمي والمحتوى' },
  { id: 'office', label: 'احتراف الأوفيس والإكسيل' },
  { id: 'tech', label: 'البرمجة وتصميم المواقع' },
  { id: 'translation', label: 'اللغات والترجمة الاحترافية' },
];

const DIGITAL_BOOKS: DigitalBook[] = [
  {
    id: 'book-saeed-steps',
    title: 'خطوات سعيد الأولى: رحلة نحو الاستقلال',
    author: 'أحمد همام',
    category: 'children',
    categoryLabel: 'قسم كتب الأطفال والناشئة',
    pagesCount: 'قصة مصورة وهادفة',
    format: 'كتاب رقمي PDF عالي الجودة',
    priceEGP: '50 ج',
    originalPriceEGP: '100 ج',
    coverImage: '/assets/aistudio/image_b60675b1.png',
    isFeatured: true,
    description: 'قصة تربوية ملهمة ومشوقة للأطفال والناشئة من تأليف الأستاذ أحمد همام، تصحب القارئ في رحلة شيقة مع البطل "سعيد" وهو يخطو خطواته الأولى نحو الاعتماد على النفس، بناء الثقة، اتخاذ القرارات السليمة، وتحمل المسؤولية بأسلوب قصصي ممتع يغرس القيم الإيجابية والطموح.',
    chapters: [
      'بداية الرحلة واكتشاف القدرات الذاتية',
      'مواجهة التحديات اليومية بشجاعة وتفكير إيجابي',
      'قيمة العمل والاعتماد على النفس وبناء الشخصية المستقلة'
    ],
    downloadsCount: 2350
  },
  {
    id: 'book-1',
    title: 'الدليل الشامل لإطلاق وإدارة شركتك أونلاين من الصفر',
    author: 'أحمد همام — فور ديجيتال',
    category: 'business',
    categoryLabel: 'ريادة الأعمال والإدارة',
    pagesCount: '185 صفحة',
    format: 'كتاب رقمي PDF / EPUB',
    priceEGP: '150 ج',
    description: 'كتاب رقمي عملي يشرح خطوة بخطوة كيف تحول مشروعك التقليدي إلى شركة رقمية ناجحة، بداية من اختيار الدومين وبناء الهوية وحتى إدارة المبيعات.',
    chapters: [
      'الفصل الأول: التخطيط الرقمي واختيار اسم النطاق والاستضافة',
      'الفصل الثاني: بناء الهوية البصرية وكسب ثقة العملاء أونلاين',
      'الفصل الثالث: أتمتة المبيعات وربط وسائل الدفع الإلكتروني في مصر'
    ],
    downloadsCount: 1420
  },
  {
    id: 'book-2',
    title: 'موسوعة الإكسيل المحاسبي والتحليل المالي للشركات',
    author: 'فريق خبراء فور ديجيتال',
    category: 'office',
    categoryLabel: 'احتراف الأوفيس والإكسيل',
    pagesCount: '240 صفحة',
    format: 'كتاب رقمي تفاعلي PDF',
    priceEGP: '200 ج',
    description: 'كتاب مرجعي مصور يشرح أهم المعادلات المحاسبية، الجداول المحورية Pivot Tables، وتصميم لوحات التحكم المالية بلغة عربية مبسطة.',
    chapters: [
      'الفصل الأول: أهم 50 دالة إكسيل يحتاجها كل محاسب ومدير',
      'الفصل الثاني: بناء القوائم المالية وحساب الأرباح والمخزون',
      'الفصل الثالث: تصميم Dashboard تفاعلية بالرسوم البيانية'
    ],
    downloadsCount: 1980
  },
  {
    id: 'book-3',
    title: 'أسرار صناعة المحتوى الإعلاني (نصوص، صور، وفيديو) ومضاعفة المبيعات',
    author: 'قسم التسويق — فور ديجيتال',
    category: 'marketing',
    categoryLabel: 'التسويق الرقمي والمحتوى',
    pagesCount: '160 صفحة',
    format: 'كتاب رقمي PDF',
    priceEGP: '180 ج',
    description: 'تعلّم كيف تكتب نصوصاً تسويقية مقنعة (Copywriting)، وتخطط لتصاميم السوشيال ميديا وسيناريوهات الفيديوهات القصيرة التي تجذب العملاء.',
    chapters: [
      'الفصل الأول: سيكولوجية المشتري وصياغة العناوين الجذابة',
      'الفصل الثاني: قواعد التصميم البصري ومنيوهات المطاعم والـ QR',
      'الفصل الثالث: كتابة سكريبت الفيديوهات الإعلانية وتصدر محركات البحث'
    ],
    downloadsCount: 1150
  },
  {
    id: 'book-4',
    title: 'احتراف صياغة وتنسيق المستندات الرسمية والرسائل العلمية على Word',
    author: 'فريق التحرير والتنسيق — فور ديجيتال',
    category: 'office',
    categoryLabel: 'احتراف الأوفيس والإكسيل',
    pagesCount: '145 صفحة',
    format: 'كتاب رقمي PDF',
    priceEGP: '150 ج',
    description: 'دليل تطبيقي للباحثين والإداريين لإتقان تنسيق التقارير، العقود، والأبحاث الأكاديمية، وضبط الفهارس التلقائية والمراجع القياسية.',
    chapters: [
      'الفصل الأول: قواعد التنسيق الرسمي للخطابات والعقود القانونية',
      'الفصل الثاني: تنسيق رسائل الماجستير والدكتوراه وفق نظام APA',
      'الفصل الثالث: تصميم العروض التقديمية PowerPoint باحترافية'
    ],
    downloadsCount: 1640
  },
  {
    id: 'book-5',
    title: 'مدخل عملي لتطوير المواقع والمتاجر وتطبيقات الهواتف الذكية',
    author: 'أحمد همام',
    category: 'tech',
    categoryLabel: 'البرمجة وتصميم المواقع',
    pagesCount: '290 صفحة',
    format: 'كتاب رقمي PDF',
    priceEGP: '250 ج',
    description: 'كتاب شامل يأخذك في رحلة فهم تقنيات الويب الحديثة، كيفية بناء متجر إلكتروني آمن، ومراحل تصميم وبرمجة تطبيقات Android و iOS.',
    chapters: [
      'الفصل الأول: أساسيات تصميم تجربة المستخدم UX/UI للمواقع والتطبيقات',
      'الفصل الثاني: إدارة السيرفرات السحابية ولوحة cPanel وقواعد البيانات',
      'الفصل الثالث: تحويل الأفكار الريادية إلى تطبيقات موبايل مربحة'
    ],
    downloadsCount: 1310
  },
  {
    id: 'book-6',
    title: 'فن الترجمة الاحترافية والمصطلحات التجارية والقانونية الدولية',
    author: 'قسم اللغات والترجمة — فور ديجيتال',
    category: 'translation',
    categoryLabel: 'اللغات والترجمة الاحترافية',
    pagesCount: '210 صفحة',
    format: 'كتاب رقمي PDF',
    priceEGP: '190 ج',
    description: 'مرجع غني للمترجمين وأصحاب الأعمال يضم أهم المصطلحات التعاقدية والتجارية والتقنية وقواعد الترجمة السياقية الدقيقة بين اللغات.',
    chapters: [
      'الفصل الأول: أصول ترجمة العقود والوثائق الرسمية بدقة قانونية',
      'الفصل الثاني: تعريب المواقع الإلكترونية والمتاجر والتطبيقات',
      'الفصل الثالث: قاموس المصطلحات المالية والإدارية الأكثر استخداماً'
    ],
    downloadsCount: 940
  }
];

export const LibrarySection: React.FC<LibrarySectionProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = DIGITAL_BOOKS.filter(book => {
    const matchCat = activeCategory === 'all' || book.category === activeCategory;
    const matchSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const getWhatsAppBookUrl = (book: DigitalBook) => {
    const message = `مرحباً فور ديجيتال، أرغب في شراء كتاب "${book.title}" (تأليف: ${book.author}) بسعر ${book.priceEGP}${book.originalPriceEGP ? ` بدلاً من ${book.originalPriceEGP}` : ''}.`;
    return `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
  };

  const featuredKidsBook = DIGITAL_BOOKS[0];

  return (
    <section id="library" className="py-14 bg-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>المكتبة الرقمية — كتب الأطفال والإصدارات الرقمية المتخصصة</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0e2b6c] leading-tight">
            قسم المكتبة الرقمية (الكتب الرقمية)
          </h1>

          <p className="text-slate-600 text-base leading-relaxed">
            مكتبة شاملة تضم <strong className="text-slate-900">قسم كتب الأطفال والناشئة</strong>، بالإضافة إلى الكتب الرقمية في مجالات ريادة الأعمال، التسويق الرقمي، المحاسبة والإكسيل، البرمجة، والترجمة.
          </p>
        </div>

        {/* Featured Children's Book Spotlight Banner: خطوات سعيد الأولى */}
        {(activeCategory === 'all' || activeCategory === 'children') && (
          <div className="rounded-3xl bg-gradient-to-br from-amber-50/90 via-white to-sky-50/80 border-2 border-amber-300 shadow-xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Book Cover Image */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative max-w-[280px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={featuredKidsBook.coverImage}
                    alt={featuredKidsBook.title}
                    className="w-full h-auto object-cover block"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-black shadow-md">
                    خصم 50% لفترة محدودة
                  </div>
                </div>
              </div>

              {/* Book Details & WhatsApp Buy Button */}
              <div className="lg:col-span-8 space-y-5 text-right">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>إصدار مميز في قسم كتب الأطفال</span>
                  </span>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    تأليف: {featuredKidsBook.author}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-[#0e2b6c] leading-snug">
                  {featuredKidsBook.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {featuredKidsBook.description}
                </p>

                {/* Chapters / Highlights */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                  <p className="text-xs sm:text-sm font-black text-slate-900">ماذا يتعلم الطفل والناشئ من هذا الكتاب؟</p>
                  <div className="grid sm:grid-cols-3 gap-2.5">
                    {featuredKidsBook.chapters.map((ch, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Box + Direct WhatsApp Purchase Button */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-amber-200/80">
                  <div className="flex items-center gap-3">
                    <span className="text-xs sm:text-sm font-bold text-slate-600">سعر الكتاب:</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-emerald-700">50 ج</span>
                      <span className="text-base sm:text-lg font-bold text-rose-500 line-through">100 ج</span>
                    </div>
                    <span className="text-xs font-black bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-lg">
                      بدلاً من 100 ج
                    </span>
                  </div>

                  <a
                    href={getWhatsAppBookUrl(featuredKidsBook)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/25 transition-all hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>شراء الكتاب عبر واتساب (50 ج فقط)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search & Filter Bar */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن كتاب رقمي في المكتبة..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 pr-10"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
            </div>

            <span className="text-xs font-bold text-slate-600">
              عرض {filteredBooks.length} من أصل {DIGITAL_BOOKS.length} كتب رقمية
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {BOOK_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0e2b6c] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Digital Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className={`p-6 rounded-3xl bg-white border-2 transition-all duration-300 flex flex-col justify-between group ${
                book.isFeatured
                  ? 'border-amber-400 shadow-lg'
                  : 'border-slate-200 hover:border-[#43b8da] hover:shadow-xl'
              }`}
            >
              <div className="space-y-4">
                {/* Book Cover Image if present */}
                {book.coverImage && (
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex justify-center p-2">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="h-64 w-auto rounded-xl object-contain shadow-md"
                    />
                    {book.originalPriceEGP && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-rose-600 text-white text-[11px] font-black shadow-xs">
                        50 ج بدلاً من {book.originalPriceEGP}
                      </span>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0e2b6c]">
                      <BookMarked className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-blue-600 block">
                        {book.categoryLabel}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {book.pagesCount} · {book.format}
                      </span>
                    </div>
                  </div>

                  <div className="text-left">
                    <span className="text-sm font-black text-emerald-800 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200 inline-block">
                      {book.priceEGP}
                    </span>
                    {book.originalPriceEGP && (
                      <span className="block text-[11px] text-rose-500 line-through font-bold text-center mt-0.5">
                        {book.originalPriceEGP}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#0e2b6c] transition-colors leading-snug">
                    {book.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-500 mt-1">
                    تأليف: {book.author}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {book.description}
                </p>

                {/* Book Chapters */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <p className="text-xs font-black text-slate-900">فصول ومحاور الكتاب:</p>
                  {book.chapters.map((ch, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>عدد القراء: <strong>{book.downloadsCount}</strong></span>
                  <span className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>5.0</span>
                  </span>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100">
                <a
                  href={getWhatsAppBookUrl(book)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>
                    شراء الكتاب عبر واتساب ({book.priceEGP}{book.originalPriceEGP ? ` بدلاً من ${book.originalPriceEGP}` : ''})
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

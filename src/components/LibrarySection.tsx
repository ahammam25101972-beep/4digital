import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  CheckCircle2, 
  Star,
  BookMarked,
  MessageCircle,
  Sparkles,
  FileText,
  User,
  Layers,
  X,
  HardDrive,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { AdditionalService, CONTACT_INFO } from '../data/goDigitalData';
import { BOOK_CATEGORIES, DIGITAL_BOOKS, DigitalBook } from '../data/libraryBooksData';
import { formatPriceText } from '../utils/currencyConverter';

interface LibrarySectionProps {
  currency?: 'EGP' | 'USD';
  exchangeRate?: number;
  onCustomizeTemplate: (service: AdditionalService) => void;
}

const BOOKS_PER_PAGE = 24;

export const LibrarySection: React.FC<LibrarySectionProps> = ({
  currency = 'EGP',
  exchangeRate = 49.5
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showAllInOnePage, setShowAllInOnePage] = useState<boolean>(false);
  const [selectedBookModal, setSelectedBookModal] = useState<DigitalBook | null>(null);

  const filteredBooks = DIGITAL_BOOKS.filter(book => {
    const matchCat = activeCategory === 'all' || book.category === activeCategory;
    const matchSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredBooks.length / BOOKS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const displayedBooks = showAllInOnePage
    ? filteredBooks
    : filteredBooks.slice((safePage - 1) * BOOKS_PER_PAGE, safePage * BOOKS_PER_PAGE);

  const getCategoryCount = (catId: string) => {
    if (catId === 'all') return DIGITAL_BOOKS.length;
    return DIGITAL_BOOKS.filter(b => b.category === catId).length;
  };

  const getWhatsAppBookUrl = (book: DigitalBook) => {
    const pAfter = formatPriceText(book.priceEGP, currency, exchangeRate);
    const pBefore = book.originalPriceEGP ? formatPriceText(book.originalPriceEGP, currency, exchangeRate) : '';
    const message = `مرحباً فور ديجيتال، أرغب في الحصول على كتاب "${book.title}" (تأليف: ${book.author} - تصنيف: ${book.categoryLabel}) بسعر ${pAfter}${pBefore ? ` بدلاً من ${pBefore}` : ''}.`;
    return `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
  };

  const featuredKidsBooks = DIGITAL_BOOKS.filter(b => b.category === 'children');

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setCurrentPage(1);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setCurrentPage(1);
  };

  return (
    <section id="library" className="py-14 bg-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>المكتبة الرقمية المتكاملة — {DIGITAL_BOOKS.length} كتاباً رقمياً كاملاً في {BOOK_CATEGORIES.length - 1} قسماً متخصصاً</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0e2b6c] leading-tight">
            قسم المكتبة الرقمية (جميع الكتب الرقمية)
          </h1>

          <p className="text-slate-600 text-base leading-relaxed">
            تصفح مكتبتنا الرقمية الشاملة التي تضم <strong className="text-slate-900">{DIGITAL_BOOKS.length} كتاباً رقمياً</strong> في <strong className="text-slate-900">قسم كتب الأطفال والناشئة</strong>، التسويق، المبيعات، التجارة الإلكترونية، الذكاء الاصطناعي، العلامات التجارية، تجربة المستخدم، وتحسين محركات البحث SEO.
          </p>
        </div>

        {/* Featured Children's Books Spotlight Banner */}
        {(activeCategory === 'all' || activeCategory === 'children') && !searchQuery && safePage === 1 && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs sm:text-sm font-black shadow-xs">
                  <Sparkles className="w-4 h-4" />
                  <span>قسم كتب الأطفال والناشئة — إصدارات مصورة وهادفة</span>
                </span>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                {formatPriceText('سعر الكتاب 50 ج بدلاً من 100 ج', currency, exchangeRate)}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredKidsBooks.map((kidsBook) => (
                <div
                  key={kidsBook.id}
                  className="rounded-3xl bg-gradient-to-br from-amber-50/90 via-white to-sky-50/80 border-2 border-amber-300 shadow-lg p-6 sm:p-7 flex flex-col justify-between gap-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                    {/* Book Cover Image */}
                    <div className="sm:col-span-5 flex justify-center">
                      <div
                        onClick={() => setSelectedBookModal(kidsBook)}
                        className="relative max-w-[210px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white cursor-pointer group"
                      >
                        <img
                          src={kidsBook.coverImage}
                          alt={kidsBook.title}
                          className="w-full h-auto object-cover block group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-rose-600 text-white text-[11px] font-black shadow-md">
                          خصم 50%
                        </div>
                      </div>
                    </div>

                    {/* Book Details */}
                    <div className="sm:col-span-7 space-y-3 text-right">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-black text-amber-900 bg-amber-200/80 px-2.5 py-0.5 rounded-full">
                          {kidsBook.categoryLabel}
                        </span>
                        <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                          تأليف: {kidsBook.author}
                        </span>
                        {kidsBook.publisher && (
                          <span className="text-[11px] font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                            {kidsBook.publisher}
                          </span>
                        )}
                      </div>

                      <h2
                        onClick={() => setSelectedBookModal(kidsBook)}
                        className="text-xl sm:text-2xl font-black text-[#0e2b6c] hover:text-blue-700 leading-snug cursor-pointer"
                      >
                        {kidsBook.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {kidsBook.description}
                      </p>

                      {/* Chapters / Highlights */}
                      <div className="p-3 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                        <p className="text-xs font-black text-slate-900">ماذا يتعلم الطفل من الكتاب؟</p>
                        {kidsBook.chapters.map((ch, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{ch}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price Box + Direct WhatsApp Purchase Button */}
                  <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-amber-200/80">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-bold text-slate-600">سعر الكتاب:</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-black text-emerald-700">{formatPriceText(kidsBook.priceEGP, currency, exchangeRate)}</span>
                        {kidsBook.originalPriceEGP && (
                          <span className="text-sm sm:text-base font-bold text-rose-500 line-through">{formatPriceText(kidsBook.originalPriceEGP, currency, exchangeRate)}</span>
                        )}
                      </div>
                      {kidsBook.originalPriceEGP && (
                        <span className="text-[11px] font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-lg">
                          بدلاً من {formatPriceText(kidsBook.originalPriceEGP, currency, exchangeRate)}
                        </span>
                      )}
                    </div>

                    <a
                      href={getWhatsAppBookUrl(kidsBook)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>شراء الكتاب عبر واتساب ({formatPriceText(kidsBook.priceEGP, currency, exchangeRate)} فقط)</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search & Categories Filter Box */}
        <div className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder={`ابحث في ${DIGITAL_BOOKS.length} كتاباً باسم الكتاب، المؤلف، أو القسم...`}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0e2b6c] pr-10 shadow-2xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                <Layers className="w-4 h-4 text-[#0e2b6c]" />
                <span>
                  إجمالي الكتب في هذا القسم: <strong className="text-[#0e2b6c] text-sm">{filteredBooks.length}</strong> كتاباً
                </span>
              </div>

              {filteredBooks.length > BOOKS_PER_PAGE && (
                <button
                  type="button"
                  onClick={() => setShowAllInOnePage(prev => !prev)}
                  className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-blue-50 border border-slate-300 text-[#0e2b6c] text-xs font-bold transition-colors cursor-pointer"
                >
                  {showAllInOnePage ? 'تفعيل تقسيم الصفحات (24 كتاب/صفحة)' : `عرض جميع الكتب (${filteredBooks.length}) في صفحة واحدة`}
                </button>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-black text-slate-700 block">أقسام وتصنيفات المكتبة الرقمية ({BOOK_CATEGORIES.length - 1} قسماً):</span>
            <div className="flex flex-wrap gap-2">
              {BOOK_CATEGORIES.map((cat) => {
                const count = getCategoryCount(cat.id);
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#0e2b6c] text-white shadow-sm'
                        : 'bg-white hover:bg-blue-50 border border-slate-200 text-slate-700 hover:border-blue-300'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-md text-[10px] font-black ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Digital Books Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {displayedBooks.map((book) => (
            <div
              key={book.id}
              className={`rounded-3xl bg-white border-2 transition-all duration-300 flex flex-col justify-between group overflow-hidden ${
                book.isFeatured
                  ? 'border-amber-400 shadow-lg'
                  : 'border-slate-200 hover:border-[#43b8da] hover:shadow-xl'
              }`}
            >
              <div>
                {/* Book Cover Image */}
                {book.coverImage && (
                  <div
                    onClick={() => setSelectedBookModal(book)}
                    className="relative bg-gradient-to-b from-slate-100 to-slate-50 border-b border-slate-200 flex justify-center items-center p-5 h-72 cursor-pointer overflow-hidden"
                  >
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      loading="lazy"
                      className="h-full w-auto max-w-[190px] rounded-xl object-contain shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#0e2b6c]/90 text-white text-[10px] font-bold shadow-xs">
                      {book.categoryLabel}
                    </span>
                    {book.originalPriceEGP && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-rose-600 text-white text-[10px] font-black shadow-xs">
                        {formatPriceText(book.priceEGP, currency, exchangeRate)} بدلاً من {formatPriceText(book.originalPriceEGP, currency, exchangeRate)}
                      </span>
                    )}
                  </div>
                )}

                <div className="p-5 space-y-3">
                  {/* Meta Tags */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                    <span className="inline-flex items-center gap-1 font-bold text-slate-700">
                      <FileText className="w-3.5 h-3.5 text-blue-600" />
                      <span>{book.pagesCount}</span>
                    </span>
                    {book.fileSize && (
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] bg-slate-100 px-2 py-0.5 rounded-md text-slate-600">
                        <HardDrive className="w-3 h-3 text-slate-500" />
                        <span dir="ltr">{book.fileSize}</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Author */}
                  <div>
                    <h3
                      onClick={() => setSelectedBookModal(book)}
                      className="text-base font-black text-slate-900 group-hover:text-[#0e2b6c] transition-colors leading-snug line-clamp-2 cursor-pointer"
                    >
                      {book.title}
                    </h3>
                    <p className="text-xs font-bold text-blue-700 mt-1 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">المؤلف: {book.author}</span>
                    </p>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {book.description}
                  </p>

                  {/* Book Chapters Preview */}
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <p className="text-[11px] font-black text-slate-900">أبرز محاور الكتاب:</p>
                    {book.chapters.slice(0, 2).map((ch, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 space-y-2">
                <div className="flex items-center justify-between py-2 border-t border-slate-100">
                  <div>
                    <span className="text-[10px] text-slate-500 block">سعر النسخة الرقمية:</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-black text-emerald-700">{formatPriceText(book.priceEGP, currency, exchangeRate)}</span>
                      {book.originalPriceEGP && (
                        <span className="text-xs text-rose-500 line-through font-bold">{formatPriceText(book.originalPriceEGP, currency, exchangeRate)}</span>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedBookModal(book)}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    تفاصيل الكتاب
                  </button>
                </div>

                <a
                  href={getWhatsAppBookUrl(book)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                  <span>شراء الكتاب عبر واتساب ({formatPriceText(book.priceEGP, currency, exchangeRate)})</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {!showAllInOnePage && totalPages > 1 && (
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-bold text-slate-600">
              صفحة <strong className="text-[#0e2b6c]">{safePage}</strong> من أصل <strong>{totalPages}</strong> (إجمالي {filteredBooks.length} كتاباً)
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5">
              <button
                type="button"
                disabled={safePage <= 1}
                onClick={() => {
                  setCurrentPage(p => Math.max(1, p - 1));
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 text-xs font-bold flex items-center gap-1 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
                <span>السابق</span>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => {
                    setCurrentPage(pageNum);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className={`w-9 h-9 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    pageNum === safePage
                      ? 'bg-[#0e2b6c] text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-blue-50 text-slate-700'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                type="button"
                disabled={safePage >= totalPages}
                onClick={() => {
                  setCurrentPage(p => Math.min(totalPages, p + 1));
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 text-xs font-bold flex items-center gap-1 cursor-pointer"
              >
                <span>التالي</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Book Details Modal */}
        {selectedBookModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
              <button
                type="button"
                onClick={() => setSelectedBookModal(null)}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center absolute top-4 left-4 cursor-pointer"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Modal Cover */}
                <div className="md:col-span-4 flex flex-col items-center space-y-3">
                  <div className="rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-50 p-3 shadow-md">
                    <img
                      src={selectedBookModal.coverImage}
                      alt={selectedBookModal.title}
                      className="w-full max-w-[210px] h-auto rounded-lg object-contain mx-auto"
                    />
                  </div>
                  <div className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500">التصنيف:</span>
                      <strong className="text-[#0e2b6c]">{selectedBookModal.categoryLabel}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">عدد الصفحات:</span>
                      <strong className="text-slate-800">{selectedBookModal.pagesCount}</strong>
                    </div>
                    {selectedBookModal.fileSize && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">حجم الكتاب:</span>
                        <strong className="text-slate-800" dir="ltr">{selectedBookModal.fileSize}</strong>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-slate-500">الصيغة:</span>
                      <strong className="text-emerald-700">{selectedBookModal.format}</strong>
                    </div>
                  </div>
                </div>

                {/* Modal Info */}
                <div className="md:col-span-8 space-y-4 text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                    <BookMarked className="w-3.5 h-3.5" />
                    <span>{selectedBookModal.categoryLabel}</span>
                  </span>

                  <h2 className="text-xl sm:text-2xl font-black text-[#0e2b6c] leading-snug">
                    {selectedBookModal.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-600">
                    <span>المؤلف: <strong className="text-slate-900">{selectedBookModal.author}</strong></span>
                    {selectedBookModal.publisher && (
                      <span>دار النشر: <strong className="text-slate-900">{selectedBookModal.publisher}</strong></span>
                    )}
                    <span className="flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span>4.9 ({selectedBookModal.downloadsCount} قارئ)</span>
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-xs font-black text-slate-900">عن الكتاب:</h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                      {selectedBookModal.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-black text-slate-900">محتويات ومحاور الكتاب:</h4>
                    <div className="space-y-1.5">
                      {selectedBookModal.chapters.map((ch, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{ch}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-slate-500 block">سعر الكتاب:</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-emerald-700">{formatPriceText(selectedBookModal.priceEGP, currency, exchangeRate)}</span>
                        {selectedBookModal.originalPriceEGP && (
                          <span className="text-sm text-rose-500 line-through font-bold">{formatPriceText(selectedBookModal.originalPriceEGP, currency, exchangeRate)}</span>
                        )}
                      </div>
                    </div>

                    <a
                      href={getWhatsAppBookUrl(selectedBookModal)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>اطلب الكتاب الآن عبر واتساب ({formatPriceText(selectedBookModal.priceEGP, currency, exchangeRate)})</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

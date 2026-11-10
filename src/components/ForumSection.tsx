import React, { useState } from 'react';
import { 
  MessageSquare, 
  ThumbsUp, 
  Eye, 
  PlusCircle, 
  Search, 
  CheckCircle2, 
  Clock, 
  User, 
  X,
  MessageCircle,
  HelpCircle
} from 'lucide-react';

interface ForumPost {
  id: string;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  timeAgo: string;
  summary: string;
  views: number;
  replies: number;
  likes: number;
  isPinned?: boolean;
}

const INITIAL_POSTS: ForumPost[] = [
  {
    id: 'post-1',
    title: 'ما هي أفضل الممارسات لاختيار اسم دومين مميز لشركتي الجديدة في مصر؟',
    category: 'المواقع والاستضافة',
    author: 'م. كريم الشناوي',
    authorRole: 'مستشار تقني',
    timeAgo: 'منذ ساعتين',
    summary: 'عند اختيار الدومين احرص على أن يكون قصيراً، سهل الحفظ، ولا يحتوي على أرقام أو رموز معقدة، ويفضل دائماً حجز امتداد .com ونطاق .com.eg لحماية علامتك محلياً.',
    views: 412,
    replies: 18,
    likes: 34,
    isPinned: true
  },
  {
    id: 'post-2',
    title: 'كيف أربط البريد الإلكتروني الرسمي لشركتي بتطبيق Outlook وهواتف الآيفون؟',
    category: 'البريد والسيرفرات',
    author: 'أحمد نبيل',
    authorRole: 'مدير عمليات',
    timeAgo: 'منذ 5 ساعات',
    summary: 'مع باقات 4Digital تدعم الخوادم بروتوكولات IMAP و POP3 بشكل مباشر؛ كل ما تحتاجه هو إدخال اسم المخدم والبورت الآمن SSL وسيتم مزامنة كافة الرسائل فوراً.',
    views: 290,
    replies: 12,
    likes: 22
  },
  {
    id: 'post-3',
    title: 'أهم 5 دوال في إكسيل يحتاجها كل محاسب ومدير مالي لتوفير ساعات العمل',
    category: 'أوفيس وتنسيق',
    author: 'سارة عبد الرحمن',
    authorRole: 'خبيرة نماذج مالية',
    timeAgo: 'منذ يوم',
    summary: 'شرح مبسط لدوال XLOOKUP، SUMIFS، IFERROR، INDEX-MATCH، وكيفية استخدام الجداول المحورية Pivot Tables لاستخراج تقارير الأرباح والمبيعات بضغطة زر واحدة.',
    views: 685,
    replies: 29,
    likes: 58
  },
  {
    id: 'post-4',
    title: 'تجربتي في إطلاق متجر إلكتروني مع بوابة دفع انستاباي وفيزا في مصر',
    category: 'التجارة الإلكترونية',
    author: 'طارق حسام',
    authorRole: 'رائد أعمال',
    timeAgo: 'منذ يومين',
    summary: 'مشاركة تجربة متكاملة من حجز الاستضافة وتصميم المتجر وربط بوابات الدفع الإلكتروني المحلية لتسهيل الشراء على العملاء وزيادة نسبة إتمام الطلبات.',
    views: 520,
    replies: 24,
    likes: 47
  },
  {
    id: 'post-5',
    title: 'نصائح لتسريع تصفح المواقع الإلكترونية والوصول لنسبة أداء 95%+ على Google',
    category: 'المواقع والاستضافة',
    author: 'فريق دعم 4Digital',
    authorRole: 'دعم فني معتمد',
    timeAgo: 'منذ 3 أيام',
    summary: 'الاعتماد على أقراص NVMe SSD، تفعيل التخزين المؤقت Caching، ضغط الصور بصيغة WebP، واستخدام شهادات SSL حديثة يعزز ترتيب موقعك في محركات البحث بشكل مباشر.',
    views: 890,
    replies: 35,
    likes: 91,
    isPinned: true
  }
];

export const ForumSection: React.FC = () => {
  const [posts, setPosts] = useState<ForumPost[]>(INITIAL_POSTS);
  const [activeCategory, setActiveCategory] = useState<string>('الكل');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  // New Post Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('المواقع والاستضافة');
  const [newAuthor, setNewAuthor] = useState('');
  const [newContent, setNewContent] = useState('');
  const [submittedAlert, setSubmittedAlert] = useState(false);

  const categories = ['الكل', 'المواقع والاستضافة', 'البريد والسيرفرات', 'التجارة الإلكترونية', 'أوفيس وتنسيق', 'نقاشات عامة'];

  const handleLike = (id: string) => {
    const isLiked = likedPosts[id];
    setLikedPosts(prev => ({ ...prev, [id]: !isLiked }));
    setPosts(prev => prev.map(p => {
      if (p.id === id) {
        return { ...p, likes: isLiked ? p.likes - 1 : p.likes + 1 };
      }
      return p;
    }));
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newAuthor.trim() || !newContent.trim()) return;

    const newPost: ForumPost = {
      id: `post-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      author: newAuthor,
      authorRole: 'عضو مجتمع',
      timeAgo: 'الآن',
      summary: newContent,
      views: 1,
      replies: 0,
      likes: 1
    };

    setPosts([newPost, ...posts]);
    setNewTitle('');
    setNewAuthor('');
    setNewContent('');
    setIsModalOpen(false);
    setSubmittedAlert(true);
    setTimeout(() => setSubmittedAlert(false), 4000);
  };

  const filteredPosts = posts.filter(p => {
    const matchCategory = activeCategory === 'الكل' || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section id="forum" className="py-20 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>مجتمع فور ديجيتال — مساحة نقاشية عامة ومفتوحة للجميع</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0e2b6c] leading-tight">
            مجتمع فور ديجيتال <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              مساحة نقاشية عامة لتبادل الأفكار والخبرات
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            مساحة نقاشية عامة ومفتوحة تجمع رواد الأعمال، أصحاب المشاريع، والمهتمين بمجالات التكنولوجيا والإدارة لطرح الموضوعات العامة، تبادل الآراء، ومشاركة الخبرات والتجارب.
          </p>
        </div>

        {/* Action Bar (Search & Categories & Add Post) */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في مواضيع المنتدى..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 pr-10"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>

            {/* Create Post Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all hover:scale-105 shrink-0"
            >
              <PlusCircle className="w-4 h-4" />
              <span>أضف موضوعاً أو استفساراً جديداً</span>
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Post Creation Alert */}
        {submittedAlert && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-bold flex items-center gap-2 animate-in zoom-in-95">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>تم نشر موضوعك بنجاح في منتدى 4Digital! شكراً لمشاركتك القيّمة.</span>
          </div>
        )}

        {/* Forum Discussions List */}
        <div className="space-y-4">
          {filteredPosts.map((post) => {
            const isLiked = likedPosts[post.id];

            return (
              <div 
                key={post.id}
                className="p-5 sm:p-6 rounded-3xl bg-slate-50/70 border border-slate-200 hover:border-blue-400 transition-all duration-200 hover:bg-white shadow-xs space-y-3 group"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    {post.isPinned && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-300">
                        موضوع مثبت 📌
                      </span>
                    )}
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-blue-600" />
                      <span className="text-slate-800 font-semibold">{post.author}</span>
                      <span className="text-[10px] text-slate-400">({post.authorRole})</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.timeAgo}</span>
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {post.summary}
                </p>

                {/* Stats & Actions Row */}
                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.views} مشاهدة</span>
                    </span>

                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.replies} رد</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                        isLiked 
                          ? 'bg-rose-50 text-rose-700 border border-rose-300' 
                          : 'bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400'
                      }`}
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                      <span>{post.likes}</span>
                    </button>

                    <a
                      href="https://wa.me/201205132328?text=مرحباً%20فور%20ديجيتال،%20أود%20المشاركة%20أو%20الاستفسار%20بخصوص%20موضوع%20في%20المنتدى"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-xl bg-white border border-slate-300 hover:border-blue-400 text-blue-600 font-bold hover:text-blue-700 transition-all text-xs"
                    >
                      شارك برأيك
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredPosts.length === 0 && (
            <div className="p-8 text-center bg-slate-50 rounded-3xl border border-slate-200 text-slate-500 space-y-2">
              <HelpCircle className="w-8 h-8 mx-auto text-slate-400" />
              <p className="text-sm font-semibold">لم يتم العثور على مواضيع مطابقة للبحث.</p>
              <button 
                onClick={() => { setActiveCategory('الكل'); setSearchQuery(''); }}
                className="text-xs text-blue-600 underline hover:text-blue-700"
              >
                عرض كل المواضيع
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Add New Topic Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in">
          <div 
            className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl text-right text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 left-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5 space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                منتدى فور ديجيتال
              </span>
              <h3 className="text-xl font-black text-slate-900">
                إضافة موضوع أو استفسار جديد
              </h3>
              <p className="text-xs text-slate-500">
                شارك سؤالك أو تجربتك ليجيب عليك أعضاء المجتمع وفريق الدعم الفني.
              </p>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  عنوان الموضوع: *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="مثال: كيف أختار أفضل قالب لموقعي؟"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    القسم / التصنيف:
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                  >
                    <option value="المواقع والاستضافة">المواقع والاستضافة</option>
                    <option value="البريد والسيرفرات">البريد والسيرفرات</option>
                    <option value="التجارة الإلكترونية">التجارة الإلكترونية</option>
                    <option value="أوفيس وتنسيق">أوفيس وتنسيق</option>
                    <option value="نقاشات عامة">نقاشات عامة</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    اسم الكاتب: *
                  </label>
                  <input
                    type="text"
                    required
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="مثال: أحمد محمد"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  نص الموضوع أو الاستفسار: *
                </label>
                <textarea
                  required
                  rows={4}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="اكتب تفاصيل سؤالك أو موضوعك هنا..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all"
                >
                  نشر الموضوع في المنتدى
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

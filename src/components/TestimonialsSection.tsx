import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  User, 
  PlusCircle, 
  Award, 
  ThumbsUp 
} from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  serviceUsed: string;
  rating: number;
  comment: string;
  date: string;
}

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Testimonial[]>([
    {
      id: 'rev-1',
      name: 'م. محمود عبد العزيز',
      role: 'مدير شركة مقاولات وتوريدات - القاهرة',
      serviceUsed: 'باقة استضافة Ramp Up + تصميم موقع الشركة',
      rating: 5,
      comment: 'تعامل راقٍ جداً وسرعة في التنفيذ. استلمنا موقع الشركة مع الدومين الرسمي والإيميلات باسم الشركة خلال أيام معدودة، والدعم الفني مع المهندس أحمد همام متواجد دائماً.',
      date: 'نوفمبر 2026'
    },
    {
      id: 'rev-2',
      name: 'د. هالة المنياوي',
      role: 'باحثة دكتوراه وأستاذة جامعية',
      serviceUsed: 'تنسيق الرسائل العلمية + الترجمة الأكاديمية',
      rating: 5,
      comment: 'قمت بتنسيق رسالة الدكتوراه بالكامل مع الفهرسة التلقائية وترجمة المستخلص البحثي؛ دقة غير عادية في المواعيد وتنسيق وورد احترافي مطابق لدليل الجامعة.',
      date: 'أكتوبر 2026'
    },
    {
      id: 'rev-3',
      name: 'أ. تامر الجمل',
      role: 'صاحب سلسلة مطاعم وكافيهات - الإسكندرية',
      serviceUsed: 'تصميم منيوهات الطعام + رموز QR Code الذكية',
      rating: 5,
      comment: 'تصميم المنيو الورقي والمنيو الرقمي بالـ QR Code نقل المطعم لمستوى آخر تماماً، وسهّل على العملاء الطلب عبر الواتساب مباشرة.',
      date: 'أكتوبر 2026'
    },
    {
      id: 'rev-4',
      name: 'أ. شريف نصار',
      role: 'مدير مالي ومحاسب قانوني',
      serviceUsed: 'تصميم شيتات إكسيل محاسبية + تطبيق المبيعات',
      rating: 5,
      comment: 'شيتات الإكسيل ولوحة التحكم المالية وفرت علينا ساعات طويلة من الجرد والحسابات اليدوية، بالإضافة إلى سهولة الدفع عبر انستاباي وفودافون كاش.',
      date: 'سبتمبر 2026'
    },
    {
      id: 'rev-5',
      name: 'أ. نورهان فؤاد',
      role: 'مؤسسة براند أزياء ومستحضرات تجميل',
      serviceUsed: 'مبادرة قدم فكرتك (متجر إلكتروني بـ 5000 ج)',
      rating: 5,
      comment: 'قدمت فكرة متجري عبر صفحة قدم فكرتك وتم تحويلها إلى متجر إلكتروني كامل بـ 5000 جنيه فقط مع تصميم اللوجو وكتابة المحتوى التسويقي. تجربة ممتازة بكل المقاييس!',
      date: 'نوفمبر 2026'
    },
    {
      id: 'rev-6',
      name: 'أ. خالد السويسي',
      role: 'مدير تطوير أعمال',
      serviceUsed: 'تصميم ملفات PowerPoint وعروض المستثمرين',
      rating: 5,
      comment: 'ملف الـ Company Profile والعرض التقديمي على باوربوينت كان مبهراً جداً وساعدنا في الفوز بتعاقدات جديدة بفضل الإنفوجرافيك والتصميم الاحترافي.',
      date: 'أغسطس 2026'
    }
  ]);

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [serviceUsed, setServiceUsed] = useState('الخدمات الرقمية وتنسيق المستندات');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;
    const newRev: Testimonial = {
      id: `rev-${Date.now()}`,
      name,
      role: role || 'عميل فور ديجيتال',
      serviceUsed,
      rating: 5,
      comment,
      date: 'الآن'
    };
    setReviews([newRev, ...reviews]);
    setName('');
    setRole('');
    setComment('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="testimonials" className="py-14 bg-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
            <Award className="w-4 h-4 text-amber-600" />
            <span>ثقة أكثر من +1,200 عميل وشركة في مصر والوطن العربي</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0e2b6c] leading-tight">
            رأي العملاء وتجاربهم مع فور ديجيتال
          </h1>

          <p className="text-slate-600 text-base leading-relaxed">
            نفخر بثقة عملائنا في كافة خدماتنا من استضافة وتصميم المواقع والتطبيقات إلى كتابة المستندات، الإكسيل، الباوربوينت، والترجمة.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-blue-200" />
                </div>

                <span className="inline-block text-[11px] font-bold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
                  {rev.serviceUsed}
                </span>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#0e2b6c] text-white flex items-center justify-center font-bold text-sm">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900">{rev.name}</h4>
                    <p className="text-[11px] text-slate-500">{rev.role}</p>
                  </div>
                </div>
                <span className="text-[11px] text-slate-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Add Review Form */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
          <div className="space-y-1 text-center">
            <h3 className="text-xl font-black text-[#0e2b6c]">شاركنا رأيك وتجربتك مع فور ديجيتال</h3>
            <p className="text-xs text-slate-600">يسعدنا دائماً الاستماع إلى تقييمك لخدماتنا</p>
          </div>

          {submitted && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-bold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>شكراً لك! تم إضافة تقييمك ورأيك بنجاح في صفحة آراء العملاء.</span>
            </div>
          )}

          <form onSubmit={handleAddReview} className="space-y-4">
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">الاسم الكريم *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="اكتب اسمك..."
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">المسمى الوظيفي / الشركة</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="مثال: مدير شركة / رائد أعمال"
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">الخدمة التي حصلت عليها</label>
                <select
                  value={serviceUsed}
                  onChange={(e) => setServiceUsed(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="حجز دومين واستضافة 4Digital">حجز دومين واستضافة 4Digital</option>
                  <option value="مبادرة قدم فكرتك بـ 5000 ج">مبادرة قدم فكرتك بـ 5000 ج</option>
                  <option value="كتابة المستندات Word وتنسيقها">كتابة المستندات Word وتنسيقها</option>
                  <option value="العمل على الإكسيل والباوربوينت">العمل على الإكسيل والباوربوينت</option>
                  <option value="منيوهات الطعام والـ QR واللوجوهات">منيوهات الطعام والـ QR واللوجوهات</option>
                  <option value="كتابة المحتوى والترجمة">كتابة المحتوى والترجمة</option>
                  <option value="متجر التطبيقات والكتب الرقمية">متجر التطبيقات والكتب الرقمية</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">رأيك في الخدمة *</label>
              <textarea
                rows={3}
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="اكتب تجربتك ورأيك في جودة وسرعة الخدمة..."
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-[#0e2b6c] hover:bg-blue-800 text-white font-bold text-sm flex items-center gap-2 transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              <span>إضافة رأيك الآن</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

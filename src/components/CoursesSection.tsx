import React, { useState } from 'react';
import { COURSES_DATA, Course } from '../data/coursesData';
import { 
  GraduationCap, 
  Clock, 
  BookOpen, 
  Award, 
  Star, 
  Users, 
  CheckCircle2, 
  ArrowLeft, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { AdditionalService } from '../data/goDigitalData';

interface CoursesSectionProps {
  currency: 'EGP' | 'USD';
  onEnrollCourse: (service: AdditionalService) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ currency, onEnrollCourse }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedSyllabus, setExpandedSyllabus] = useState<string | null>(null);

  const currencySymbol = currency === 'EGP' ? 'ج.م' : '$';

  const categories = [
    { id: 'all', label: 'كافة الدورات التدريبية' },
    { id: 'office', label: 'مايكروسوفت أوفيس وإكسيل' },
    { id: 'web', label: 'المواقع والتجارة الإلكترونية' },
    { id: 'business', label: 'التسويق الرقمي والأعمال' },
    { id: 'security', label: 'السيرفرات والأمن الرقمي' }
  ];

  const filteredCourses = activeCategory === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter(c => c.category === activeCategory);

  const toggleSyllabus = (courseId: string) => {
    setExpandedSyllabus(expandedSyllabus === courseId ? null : courseId);
  };

  return (
    <section id="courses" className="py-20 relative bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>القسم الرابع المستقل: قسم الدورات التدريبية وورش العمل</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            قسم الدورات التدريبية <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              مهارات رقمية وعملية تؤهلك للريادة وسوق العمل
            </span>
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            برامج تدريبية وتطبيقية متقدمة في مايكروسوفت إكسيل، صياغة المستندات والعقود، بناء المتاجر والمواقع، التسويق الإلكتروني، وإدارة السيرفرات مع نخبة من المدربين المعتمدين وشهادات إتمام رسمية.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white hover:bg-slate-100 border border-slate-300 text-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredCourses.map((course) => {
            const price = currency === 'EGP' ? course.priceEGP : course.priceUSD;
            const originalPrice = currency === 'EGP' ? course.originalPriceEGP : Math.round(course.originalPriceEGP / 38);
            const isExpanded = expandedSyllabus === course.id;

            return (
              <div
                key={course.id}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 shadow-sm flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Popular or Category Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    {course.categoryLabel}
                  </span>
                  {course.badge && (
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-300">
                      {course.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-4">
                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                      {course.tagline}
                    </p>
                  </div>

                  {/* Instructor & Rating */}
                  <div className="flex items-center justify-between text-xs text-slate-600 py-2 border-y border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-blue-600" />
                      <span>{course.instructor}</span>
                    </div>

                    <div className="flex items-center gap-1 text-amber-600 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{course.rating}</span>
                      <span className="text-slate-400 font-normal">({course.studentsCount})</span>
                    </div>
                  </div>

                  {/* Course Details Pills */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                      <span>{course.lessonsCount} درس تطبيقي</span>
                    </div>
                  </div>

                  {/* Pricing Box */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-right">
                    <div className="text-[11px] text-slate-400 line-through">
                      السعر الأصلي: {originalPrice.toLocaleString('ar-EG')} {currencySymbol}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-slate-900">
                        {price.toLocaleString('ar-EG')}
                      </span>
                      <span className="text-xs font-bold text-blue-600">
                        {currencySymbol} / وصول كامل
                      </span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-1.5 pt-1">
                    {course.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Syllabus Accordion */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleSyllabus(course.id)}
                      className="w-full text-right text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center justify-between py-1.5 border-t border-slate-100"
                    >
                      <span>{isExpanded ? 'إخفاء محاور الدورة' : 'استعراض محاور الدورة التفصيلية'}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    {isExpanded && (
                      <div className="space-y-2 pt-2 animate-in fade-in">
                        {course.syllabus.map((mod, mIdx) => (
                          <div key={mIdx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                            <span className="font-bold text-slate-800 block mb-1">{mod.moduleTitle}</span>
                            <ul className="list-disc list-inside text-slate-600 text-[11px] space-y-0.5">
                              {mod.topics.map((top, tIdx) => (
                                <li key={tIdx}>{top}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-5 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onEnrollCourse({
                      id: course.id,
                      title: `التسجيل في: ${course.title}`,
                      description: `الاشتراك في ${course.title} مع ${course.instructor}، الحصول على الشهادة والمواد التدريبية`,
                      iconName: 'Layout',
                      startingPrice: `${price} ${currencySymbol}`,
                      deliverableTime: course.duration,
                      highlight: 'دورة معتمدة',
                      category: 'web'
                    })}
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
                  >
                    <span>التسجيل في الدورة والبدء الآن</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate Trust Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                شهادات معتمدة مع كل دورة تدريبية
              </h4>
              <p className="text-xs text-slate-600">
                يحصل كل متدرب على شهادة إتمام رقمية برقم تسلسلي معتمد تثبت اجتيازه لكافة التطبيقات العملية والواجبات.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/201205132328?text=مرحباً%20فور%20ديجيتال،%20أود%20الاستفسار%20عن%20الدورات%20التدريبية%20المتاحة"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm transition-all shrink-0"
          >
            تواصل مع منسق الدورات عبر واتساب
          </a>
        </div>

      </div>
    </section>
  );
};

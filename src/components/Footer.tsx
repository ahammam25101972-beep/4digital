import React from 'react';
import { Logo } from './Logo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  ExternalLink,
  Wallet,
  Zap,
  Globe,
  Layers,
  Facebook
} from 'lucide-react';
import { CONTACT_INFO } from '../data/goDigitalData';

interface FooterProps {
  onSelectSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectSection }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (id: string) => {
    if (onSelectSection) {
      onSelectSection(id);
    }
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#02060f] border-t border-cyan-500/20 text-slate-300 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-5">
            <Logo size="lg" theme="dark" />
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              منصة فور ديجيتال للخدمات الرقمية وحلول 4Digital - شريكك الرائد لتمكين الشركات والمشاريع الناشئة من إطلاق حضورها الإلكتروني المتكامل وتنمية مبيعاتها بأحدث تقنيات تصميم واستضافة المواقع والتطبيقات.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold hover:bg-emerald-900/60 flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>محادثة واتساب: {CONTACT_INFO.phoneDisplay}</span>
              </a>

              <a
                href="https://www.facebook.com/4digitalservices"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-blue-950/60 border border-blue-500/40 text-blue-300 text-xs font-bold hover:bg-blue-900/60 flex items-center gap-2 transition-colors"
              >
                <Facebook className="w-4 h-4 text-blue-400" />
                <span>صفحتنا على فيسبوك</span>
              </a>
            </div>
          </div>

          {/* Col 2: Hosting & Packages */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-r-2 border-cyan-400 pr-2 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>الباقات والمبادرات</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button type="button" onClick={() => handleNav('submit-idea')} className="hover:text-amber-300 text-amber-400 font-bold transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>مبادرة قدّم فكرتك بـ 5,000 ج فقط</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('hosting-domains')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>باقة البداية Warm Up (4,999 ج.م/سنة)</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('hosting-domains')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>باقة النمو Ramp Up الأكثر طلباً (6,999 ج.م)</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('hosting-domains')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>باقة الريادة Take Off للمؤسسات (9,999 ج.م)</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('app-store')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>متجر التطبيقات والأنظمة الجاهزة</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Pages */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-r-2 border-cyan-400 pr-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>أقسام الموقع</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button type="button" onClick={() => handleNav('digital-services')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  <span>الخدمات الرقمية الشاملة</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('portfolio')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>قسم من أعمالنا</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('library')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>المكتبة الرقمية (كتب رقمية)</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('courses')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  <span>قسم الدورات التدريبية</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('blog')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>المدونة (10 موضوعات)</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('forum')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>مجتمع فور ديجيتال</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('testimonials')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                  <span>رأي العملاء</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Support */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-r-2 border-cyan-400 pr-2">
              التواصل والدعم الفني
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-slate-500">الهاتف والواتساب المباشر:</span>
                  <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="font-bold text-white hover:text-cyan-300" dir="ltr">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-slate-500">البريد الإلكتروني الرسمي:</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="font-bold text-cyan-300 hover:underline break-all">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Facebook className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-slate-500">صفحة فيسبوك الرسمية:</span>
                  <a
                    href="https://www.facebook.com/4digitalservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-blue-400 hover:text-blue-300 hover:underline inline-flex items-center gap-1"
                  >
                    <span>فور ديجيتال للخدمات الرقمية</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-slate-500">المقر الرئيسي:</span>
                  <span className="text-slate-300">القاهرة، جمهورية مصر العربية</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-slate-500">ساعات العمل:</span>
                  <span className="text-emerald-400 font-bold">{CONTACT_INFO.hours}</span>
                </div>
              </div>

              <div className="pt-1">
                <button 
                  type="button"
                  onClick={() => handleNav('contact')} 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
                >
                  <span>صفحة التواصل السريع والشكاوى</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Payment methods single line row */}
        <div className="mt-8">
          <div className="flex items-center justify-center gap-2.5 text-xs text-slate-400 overflow-x-auto whitespace-nowrap py-1">
            <span className="text-xs font-bold text-slate-300 ml-1 shrink-0">طرق الدفع المدعومة:</span>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 font-bold inline-flex items-center gap-1.5 shadow-xs shrink-0">
              <Wallet className="w-3.5 h-3.5 text-emerald-400" />
              <span>المحافظ الإلكترونية (فودافون كاش / أورنج / اتصالات / WE)</span>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 font-bold inline-flex items-center gap-1.5 shadow-xs shrink-0">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>انستاباي InstaPay</span>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-[11px] text-white shrink-0">VISA / MasterCard</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 font-bold text-[11px] text-amber-300 shrink-0">ميزة Meeza</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 font-bold text-[11px] text-yellow-400 shrink-0">فوري Fawry</span>
          </div>
        </div>

        {/* Bottom copyright line & Developer Credit */}
        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            حقوق النشر محفوظة لشركة <strong className="text-slate-300">فور ديجيتال للخدمات الرقمية</strong> ذ.م.م. © {currentYear}
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs shadow-xs">
            <span className="text-slate-300">
              تصميم وبرمجة <strong className="text-white font-bold">أحمد همام أحمد</strong> : 
            </span>
            <a 
              href="tel:01205132328" 
              className="text-cyan-400 hover:text-cyan-300 font-mono font-bold transition-colors"
              dir="ltr"
            >
              01205132328
            </a>
            <span className="text-slate-600 font-bold">|</span>
            <a 
              href="https://www.facebook.com/4digitalservices" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-bold transition-colors hover:underline"
              title="زيارة صفحة فور ديجيتال للخدمات الرقمية على فيسبوك"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>صفحة فور ديجيتال على فيسبوك</span>
            </a>
            <span className="text-slate-600 font-bold">|</span>
            <a 
              href="https://www.facebook.com/profile.php?id=61582844093225" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold transition-colors hover:underline"
              title="زيارة صفحة فكرة للتطبيقات على فيسبوك"
            >
              <span>فكرة للتطبيقات</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

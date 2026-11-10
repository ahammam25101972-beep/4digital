import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2,
  ShieldCheck,
  Headphones
} from 'lucide-react';
import { CONTACT_INFO } from '../data/goDigitalData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('باقات 4Digital');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `مرحباً فور ديجيتال، لدي استفسار جديد:\n`;
    text += `👤 الاسم: ${name}\n`;
    text += `📱 الهاتف: ${phone}\n`;
    if (email) text += `✉️ البريد: ${email}\n`;
    text += `🏷️ الخدمة المطلوبة: ${serviceType}\n`;
    text += `📝 الرسالة: ${message}\n`;

    const encoded = encodeURIComponent(text);
    const targetUrl = `https://wa.me/201205132328?text=${encoded}`;
    try {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Fallback
    }
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Headphones className="w-3.5 h-3.5 text-blue-600" />
            <span>تواصل مباشر على مدار الساعة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            تواصل معنا في فور ديجيتال <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              فريقنا جاهز لمساعدتك في كل خطوة
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            سواء كان لديك استفسار حول باقات الاستضافة، تصميم موقعك الجديد، خدمات التنسيق والأوفيس، أو ترغب في استشارة تقنية مجانية، يسعدنا تواصلك في أي وقت.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Contact Information & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Phone Card */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all shadow-xs group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block mb-0.5">الهاتف والواتساب المباشر:</span>
                    <a 
                      href={`tel:${CONTACT_INFO.phoneRaw}`} 
                      className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors"
                      dir="ltr"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Chat Card */}
              <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200 hover:border-emerald-300 transition-all shadow-xs group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-emerald-800 block mb-0.5">المحادثة الفورية:</span>
                      <span className="text-base font-bold text-slate-900">دردشة واتساب 24/7</span>
                    </div>
                  </div>
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all shrink-0"
                  >
                    ابدأ المحادثة
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all shadow-xs group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block mb-0.5">البريد الإلكتروني الرسمي:</span>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`} 
                      className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours & Address */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>أوقات العمل: <strong className="text-emerald-700">{CONTACT_INFO.hours}</strong></span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>المقر: <strong className="text-slate-900">{CONTACT_INFO.address}</strong></span>
                </div>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>سرية وأمان تام للبيانات</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>رد سريع خلال دقائق</span>
              </span>
            </div>
          </div>

          {/* Contact & Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-900">
                  أرسل لنا استفسارك أو طلبك
                </h3>
                <p className="text-xs text-slate-500">
                  سنقوم بالرد عليك وتزويدك بكافة التفاصيل وعروض الأسعار في أسرع وقت.
                </p>
              </div>

              {isSent && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-bold flex items-center gap-2 animate-in zoom-in-95">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>تم تحويل رسالتك إلى فريق الدعم عبر واتساب. سنتواصل معك فوراً!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      الاسم بالكامل: *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="أحمد محمد"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      رقم الهاتف / الواتساب: *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01200000000"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      البريد الإلكتروني:
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      الخدمة أو الموضوع:
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                    >
                      <option value="باقات 4Digital (استضافة + دومين)">باقات 4Digital (استضافة + دومين)</option>
                      <option value="تصميم وبرمجة موقع جديد">تصميم وبرمجة موقع جديد</option>
                      <option value="إنشاء وتطوير متجر إلكتروني">إنشاء وتطوير متجر إلكتروني</option>
                      <option value="خدمات الكتابة والتنسيق والمكتبة">خدمات الكتابة والتنسيق والمكتبة</option>
                      <option value="تصميم شعار وهوية بصرية">تصميم شعار وهوية بصرية</option>
                      <option value="استفسار أو دعم فني عام">استفسار أو دعم فني عام</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    تفاصيل رسالتك أو استفسارك: *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="اكتب ما تحتاجه وسنقوم بالتواصل معك بكافة الحلول المقترحة..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 text-white hover:brightness-105 shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>إرسال الرسالة والتواصل الفوري عبر واتساب</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

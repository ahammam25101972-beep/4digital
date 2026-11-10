import React, { useState, useEffect } from 'react';
import { 
  X, 
  Flame, 
  Sparkles, 
  CheckCircle2, 
  Gift, 
  Percent, 
  Wallet, 
  MessageCircle, 
  User, 
  Phone, 
  Mail, 
  FileText 
} from 'lucide-react';
import { CONTACT_INFO } from '../data/goDigitalData';

interface GoldenFridayModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultOfferId?: string;
}

export interface GoldenOfferItem {
  id: string;
  title: string;
  priceAfter: string;
  priceBefore: string;
  discountBadge: string;
  summary: string;
}

export const GOLDEN_FRIDAY_OFFERS: GoldenOfferItem[] = [
  {
    id: 'gf-idea-5000',
    title: 'عرض قدّم فكرتك (موقع أو متجر أو تطبيق موبايل)',
    priceAfter: '5,000 ج.م',
    priceBefore: '9,500 ج.م',
    discountBadge: 'وفر 45%',
    summary: 'تحويل فكرتك إلى موقع إلكتروني أو متجر إلكتروني أو تطبيق موبايل متكامل شامل التصميم ولوحة التحكم.'
  },
  {
    id: 'gf-warmup',
    title: 'باقة الاستضافة والدومين Warm Up — عرض الجمعة الذهبية',
    priceAfter: '3,749 ج.م',
    priceBefore: '4,999 ج.م',
    discountBadge: 'خصم 25%',
    summary: 'استضافة سحابية + دومين مجاني + شهادة أمان SSL + بريد إلكتروني رسمي لمدة سنة كاملة.'
  },
  {
    id: 'gf-rampup',
    title: 'باقة الاستضافة والدومين Ramp Up (الأكثر طلباً) — عرض الجمعة الذهبية',
    priceAfter: '5,249 ج.م',
    priceBefore: '6,999 ج.م',
    discountBadge: 'خصم 25%',
    summary: 'استضافة سحابية مضاعفة السرعة + دومين مجاني + 2 قواعد بيانات + إيميلات رسمية للشركات.'
  },
  {
    id: 'gf-takeoff',
    title: 'باقة الاستضافة والدومين Take Off للمؤسسات — عرض الجمعة الذهبية',
    priceAfter: '7,499 ج.م',
    priceBefore: '9,999 ج.م',
    discountBadge: 'خصم 25%',
    summary: 'أعلى باقة استضافة للمؤسسات والمتاجر الكبرى مع 5 جيجابايت NVMe SSD ودومين مجاني.'
  },
  {
    id: 'gf-branding-pack',
    title: 'باقة المطاعم والشركات (لوجو + منيو طعام + QR Code)',
    priceAfter: '300 ج.م',
    priceBefore: '400 ج.م',
    discountBadge: 'باقة موفرة',
    summary: 'تصميم شعار احترافي (150 ج) + تصميم منيو طعام (200 ج) + إعداد كيو آر كود ذكي (50 ج) بسعر مخفض.'
  },
  {
    id: 'gf-office-services',
    title: 'عرض خدمات الوورد والإكسيل والباوربوينت والمحتوى والترجمة',
    priceAfter: 'خصم 30% على إجمالي طلبك',
    priceBefore: 'الأسعار العادية',
    discountBadge: 'خصم 30%',
    summary: 'كتابة مستندات (10 ج/صفحة)، تنسيق وورد (50 ج/20 صفحة)، إكسيل (20 ج/20 صف)، باوربوينت (50 ج/10 سلايد) مع خصم إضافي 30%.'
  }
];

export const GoldenFridayModal: React.FC<GoldenFridayModalProps> = ({
  isOpen,
  onClose,
  defaultOfferId = 'gf-idea-5000'
}) => {
  const [selectedOfferId, setSelectedOfferId] = useState<string>(defaultOfferId);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [companyOrEmail, setCompanyOrEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('المحافظ الإلكترونية (فودافون كاش / أورنج / اتصالات / WE)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  useEffect(() => {
    if (defaultOfferId) {
      setSelectedOfferId(defaultOfferId);
    }
  }, [defaultOfferId]);

  if (!isOpen) return null;

  const selectedOffer = GOLDEN_FRIDAY_OFFERS.find(o => o.id === selectedOfferId) || GOLDEN_FRIDAY_OFFERS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;
    const randomCode = `GF-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingCode(randomCode);
    setIsSubmitted(true);
  };

  const getWhatsAppConfirmationUrl = () => {
    const msg = `🔥 *طلب اشتراك وحجز عرض الجمعة الذهبية — فور ديجيتال*\n` +
      `رقم الحجز: *${bookingCode}*\n` +
      `كود الخصم: *GOLDEN2026*\n` +
      `------------------------\n` +
      `👤 *الاسم:* ${fullName}\n` +
      `📱 *الهاتف / واتساب:* ${phone}\n` +
      (companyOrEmail ? `🏢 *الشركة / البريد:* ${companyOrEmail}\n` : '') +
      `🎁 *العرض المختار:* ${selectedOffer.title}\n` +
      `💰 *السعر بعد العرض:* ${selectedOffer.priceAfter} (بدلاً من ${selectedOffer.priceBefore})\n` +
      `💳 *طريقة الدفع المفضلة:* ${paymentMethod}\n` +
      (notes ? `📝 *تفاصيل إضافية:* ${notes}\n` : '');
    return `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(msg)}`;
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhone('');
    setCompanyOrEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-white border-2 border-amber-400 shadow-2xl overflow-hidden my-8 text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Golden Friday Header */}
        <div className="bg-gradient-to-r from-[#0e2b6c] via-slate-900 to-[#0e2b6c] text-white p-6 sm:p-7 relative border-b-2 border-amber-400">
          <button
            type="button"
            onClick={handleResetAndClose}
            className="absolute top-5 left-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black">
              <Flame className="w-3.5 h-3.5 fill-slate-950" />
              <span>استمارة حجز عروض الجمعة الذهبية</span>
            </span>
            <span className="text-xs font-mono font-bold text-amber-300 bg-white/10 px-2.5 py-1 rounded-lg border border-amber-400/40">
              كود مفعل: GOLDEN2026
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-amber-300">
            نموذج الاشتراك وحجز عرض الجمعة الذهبية
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 mt-1">
            اختر العرض المناسب لك وسجل بياناتك للاحتفاظ بالسعر المخفض طوال فترة العرض
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Step 1: Select Golden Friday Offer */}
              <div className="space-y-2.5">
                <label className="block text-xs sm:text-sm font-black text-[#0e2b6c] flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-amber-500" />
                  <span>١. اختر عرض الجمعة الذهبية المطلوب حجزه: *</span>
                </label>

                <div className="grid grid-cols-1 gap-2.5">
                  {GOLDEN_FRIDAY_OFFERS.map((offer) => {
                    const isSelected = selectedOfferId === offer.id;
                    return (
                      <div
                        key={offer.id}
                        onClick={() => setSelectedOfferId(offer.id)}
                        className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#0e2b6c] bg-amber-50/60 shadow-xs'
                            : 'border-slate-200 hover:border-amber-300 bg-slate-50/60'
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="goldenOffer"
                              checked={isSelected}
                              onChange={() => setSelectedOfferId(offer.id)}
                              className="w-4 h-4 accent-[#0e2b6c]"
                            />
                            <span className="text-xs sm:text-sm font-black text-slate-900">
                              {offer.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                              {offer.priceAfter}
                            </span>
                            <span className="text-[11px] text-rose-500 line-through font-bold">
                              {offer.priceBefore}
                            </span>
                            <span className="text-[10px] font-black bg-amber-400 text-slate-950 px-2 py-0.5 rounded-md">
                              {offer.discountBadge}
                            </span>
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-600 mt-1 pr-6 leading-relaxed">
                          {offer.summary}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Subscriber Info */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200">
                <div>
                  <label className="block text-xs font-black text-slate-800 mb-1.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-blue-600" />
                    <span>الاسم بالكامل: *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="اكتب اسمك الثلاثي..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0e2b6c] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-800 mb-1.5 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>رقم الموبايل / واتساب: *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="01xxxxxxxxx"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0e2b6c] focus:bg-white"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-slate-800 mb-1.5 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <span>اسم الشركة أو البريد الإلكتروني (اختياري):</span>
                  </label>
                  <input
                    type="text"
                    value={companyOrEmail}
                    onChange={(e) => setCompanyOrEmail(e.target.value)}
                    placeholder="مثال: شركة النور / email@example.com"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0e2b6c] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-800 mb-1.5 flex items-center gap-1">
                    <Wallet className="w-3.5 h-3.5 text-amber-600" />
                    <span>طريقة الدفع المفضلة:</span>
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0e2b6c] focus:bg-white"
                  >
                    <option value="المحافظ الإلكترونية (فودافون كاش / أورنج / اتصالات / WE)">
                      المحافظ الإلكترونية (فودافون كاش / أورنج / اتصالات / WE)
                    </option>
                    <option value="انستاباي (InstaPay)">انستاباي (InstaPay)</option>
                    <option value="بطاقة بنكية (Visa / MasterCard / ميزة)">
                      بطاقة بنكية (Visa / MasterCard / ميزة)
                    </option>
                    <option value="فوري (Fawry)">فوري (Fawry)</option>
                    <option value="تحويل بنكي">تحويل بنكي</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-800 mb-1.5 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-blue-600" />
                  <span>تفاصيل إضافية حول طلبك أو فكرتك (اختياري):</span>
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="اكتب أي تفاصيل أو استفسارات خاصة بالعرض المطلوب..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0e2b6c] focus:bg-white resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-400/25 transition-all cursor-pointer"
                >
                  <Percent className="w-5 h-5" />
                  <span>تأكيد الاشتراك وحجز عرض الجمعة الذهبية الآن</span>
                </button>
              </div>
            </form>
          ) : (
            /* Confirmation Screen */
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="inline-block px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 font-black text-xs border border-amber-300">
                  رقم حجز العرض: {bookingCode}
                </span>
                <h3 className="text-2xl font-black text-[#0e2b6c]">
                  تم تسجيل اشتراكك في عرض الجمعة الذهبية بنجاح!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  شكراً لك أ/ <strong>{fullName}</strong>، تم حجز <strong>({selectedOffer.title})</strong> بسعر العرض <strong>{selectedOffer.priceAfter}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-right text-xs space-y-1.5 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">العرض المحجوز:</span>
                  <span className="font-bold text-slate-900">{selectedOffer.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">قيمة العرض:</span>
                  <span className="font-black text-emerald-700">{selectedOffer.priceAfter}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">طريقة الدفع:</span>
                  <span className="font-bold text-slate-800">{paymentMethod}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={getWhatsAppConfirmationUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>إرسال تأكيد الحجز فوراً عبر واتساب</span>
                </a>

                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm cursor-pointer"
                >
                  إغلاق النافذة
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

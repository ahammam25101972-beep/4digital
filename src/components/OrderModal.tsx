import React, { useState, useEffect } from 'react';
import { GO_DIGITAL_PLANS, CONTACT_INFO, AdditionalService } from '../data/goDigitalData';
import { X, CheckCircle, Globe, Shield, CreditCard } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId?: string;
  selectedService?: AdditionalService | null;
  defaultDomain?: string;
  currency: 'EGP' | 'USD';
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  selectedPlanId = 'ramp-up',
  selectedService,
  defaultDomain = '',
  currency
}) => {
  const [currentPlanId, setCurrentPlanId] = useState(selectedPlanId);
  const [domainName, setDomainName] = useState(defaultDomain);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'instapay' | 'wallets' | 'card' | 'fawry' | 'bank'>('instapay');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedPlanId) setCurrentPlanId(selectedPlanId);
  }, [selectedPlanId]);

  useEffect(() => {
    if (defaultDomain) setDomainName(defaultDomain);
  }, [defaultDomain]);

  if (!isOpen) return null;

  const currentPlan = GO_DIGITAL_PLANS.find(p => p.id === currentPlanId) || GO_DIGITAL_PLANS[1];
  const price = currency === 'EGP' ? currentPlan.priceEGP : currentPlan.priceUSD;
  const currencySymbol = currency === 'EGP' ? 'ج.م' : '$';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const itemTitle = selectedService ? selectedService.title : `باقة ${currentPlan.name} (${currentPlan.arabicName})`;
    const priceText = selectedService ? selectedService.startingPrice : `${price} ${currencySymbol} / سنة`;
    
    const paymentDisplayMap: Record<string, string> = {
      instapay: 'انستاباي (InstaPay)',
      wallets: 'المحافظ الإلكترونية (فودافون كاش / أورنج / اتصالات / WE)',
      card: 'بطاقة بنكية (فيزا / ماستركارد)',
      fawry: 'فوري (Fawry)',
      bank: 'تحويل بنكي مباشر'
    };
    
    let message = `مرحباً فور ديجيتال، أود طلب الخدمة التالية:\n`;
    message += `📌 الطلب: ${itemTitle}\n`;
    message += `💰 السعر: ${priceText}\n`;
    if (domainName) message += `🌐 النطاق المطلوب: ${domainName}\n`;
    if (fullName) message += `👤 الاسم: ${fullName}\n`;
    if (phone) message += `📱 الهاتف: ${phone}\n`;
    if (email) message += `✉️ البريد: ${email}\n`;
    message += `💳 طريقة الدفع المفضلة: ${paymentDisplayMap[paymentMethod] || paymentMethod}\n`;
    if (notes) message += `📝 ملاحظات إضافية: ${notes}\n`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/201205132328?text=${encodedMessage}`;

    // Safely open WhatsApp
    try {
      window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    } catch {
      // Fallback
    }
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in">
      <div 
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl text-right text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
          aria-label="إغلاق النافذة"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">تم تجهيز طلبك بنجاح!</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              تم تحويلك إلى محادثة واتساب الرسمية مع فريق مبيعات فور ديجيتال لتأكيد التفعيل الفوري.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              رقم التواصل المباشر: <strong dir="ltr">{CONTACT_INFO.phone}</strong>
            </div>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
            >
              إغلاق
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Modal Title */}
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                نموذج الاشتراك والطلب السريع
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">
                {selectedService ? selectedService.title : `الاشتراك في باقة ${currentPlan.name}`}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                أدخل بياناتك وسيتم توجيهك مباشرة لمسؤول الحسابات عبر واتساب لإتمام الحجز والتفعيل.
              </p>
            </div>

            {/* Plan Switcher if not a custom service */}
            {!selectedService && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">اختر الباقة المطلوبة:</label>
                <div className="grid grid-cols-3 gap-2">
                  {GO_DIGITAL_PLANS.map((plan) => (
                    <button
                      type="button"
                      key={plan.id}
                      onClick={() => setCurrentPlanId(plan.id)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        currentPlanId === plan.id
                          ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-sm font-black">{plan.name}</div>
                      <div className="text-[11px] text-slate-500">
                        {currency === 'EGP' ? plan.priceEGP : plan.priceUSD} {currencySymbol}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Pricing Summary Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block">إجمالي القيمة:</span>
                <span className="text-2xl font-black text-slate-900">
                  {selectedService ? selectedService.startingPrice : `${price.toLocaleString('ar-EG')} ${currencySymbol}`}
                </span>
                {!selectedService && (
                  <span className="text-xs text-slate-500 font-normal block">شامل الدومين والاستضافة لسنة كاملة</span>
                )}
              </div>
              <div className="text-left">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  كود الخصم مفعل 20%
                </span>
              </div>
            </div>

            {/* Form Inputs */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  اسم النطاق (الدومين) المرغوب:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={domainName}
                    onChange={(e) => setDomainName(e.target.value)}
                    placeholder="example.com"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white"
                    dir="ltr"
                  />
                  <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    الاسم بالكامل: *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="مثال: محمد علي"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    رقم الهاتف / الواتساب: *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="01200000000"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  البريد الإلكتروني:
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white"
                  dir="ltr"
                />
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  طريقة الدفع المفضلة:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                  {[
                    { id: 'instapay', name: 'انستاباي InstaPay' },
                    { id: 'wallets', name: 'المحافظ الإلكترونية (كاش)' },
                    { id: 'card', name: 'فيزا / ماستركارد' },
                    { id: 'fawry', name: 'فوري Fawry' },
                    { id: 'bank', name: 'تحويل بنكي' }
                  ].map((method) => (
                    <button
                      type="button"
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id as any)}
                      className={`p-2.5 rounded-xl border text-center transition-all text-xs font-semibold ${
                        paymentMethod === method.id
                          ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {method.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  ملاحظات أو متطلبات خاصة:
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="أي تفاصيل ترغب في إضافتها..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white resize-none"
                />
              </div>
            </div>

            {/* Trust Footer */}
            <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>ضمان أمان وسرية البيانات</span>
              </span>
              <span className="flex items-center gap-1">
                <CreditCard className="w-3.5 h-3.5 text-blue-600" />
                <span>دفع آمن بالجنيه المصري</span>
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 text-sm"
            >
              <span>تأكيد الطلب والمتابعة عبر واتساب</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

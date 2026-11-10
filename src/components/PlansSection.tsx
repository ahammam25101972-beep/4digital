import React from 'react';
import { GO_DIGITAL_PLANS, GoDigitalPlan } from '../data/goDigitalData';
import { Check, Sparkles, ArrowLeft, Shield, Zap, Globe, HardDrive } from 'lucide-react';

interface PlansSectionProps {
  currency: 'EGP' | 'USD';
  onCurrencyToggle: () => void;
  onSelectPlan: (planId: string) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ 
  currency, 
  onCurrencyToggle, 
  onSelectPlan 
}) => {
  return (
    <section id="plans" className="py-20 relative bg-slate-50/80 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>اختر باقتك من 4Digital</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            باقات 4Digital الشاملة <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              أفضل المواصفات السحابية بدون أي رسوم خفية
            </span>
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            جميع الباقات تشمل اسم دومين دولي مجاني، استضافة سحابية فائقة السرعة مع وحدات SSD، مُصمم مواقع احترافي، شهادة أمان SSL، وبريد إلكتروني رسمي باسم شركتك.
          </p>

          {/* Currency Switch Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs text-slate-500 font-medium">عرض الأسعار بـ :</span>
            <div className="inline-flex p-1 rounded-xl bg-white border border-slate-300 shadow-xs">
              <button
                onClick={() => currency !== 'EGP' && onCurrencyToggle()}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currency === 'EGP' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                الجنيه المصري (EGP)
              </button>
              <button
                onClick={() => currency !== 'USD' && onCurrencyToggle()}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currency === 'USD' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                الدولار الأمريكي (USD)
              </button>
            </div>
            <span className="text-xs text-emerald-800 font-bold bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              الاشتراك سنوي شامل الدومين والاستضافة
            </span>
          </div>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {GO_DIGITAL_PLANS.map((plan: GoDigitalPlan) => {
            const price = currency === 'EGP' ? plan.priceEGP : plan.priceUSD;
            const currencySymbol = currency === 'EGP' ? 'ج.م' : '$';
            const originalPrice = currency === 'EGP' ? plan.originalPriceEGP : Math.round((plan.originalPriceEGP || 0) / 38);

            return (
              <div 
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 bg-white ${
                  plan.isPopular 
                    ? 'border-2 border-blue-600 shadow-xl shadow-blue-500/10 md:-translate-y-2 z-20' 
                    : 'border border-slate-200 hover:border-slate-300 shadow-md hover:shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 right-1/2 translate-x-1/2 px-4 py-1 rounded-full text-xs font-black bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">{plan.name}</h3>
                    <p className="text-sm font-bold text-blue-600 mt-0.5">{plan.arabicName}</p>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed min-h-[36px]">{plan.tagline}</p>
                  </div>

                  {/* Pricing Box */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-right">
                    {originalPrice && (
                      <div className="text-xs text-slate-400 line-through mb-1">
                        السعر الأصلي: {originalPrice.toLocaleString('ar-EG')} {currencySymbol}
                      </div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900">
                        {price.toLocaleString('ar-EG')}
                      </span>
                      <span className="text-sm font-bold text-blue-600">
                        {currencySymbol} / سنوياً
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      (ما يعادل حوالي {Math.round(price / 12).toLocaleString('ar-EG')} {currencySymbol} شهرياً)
                    </span>
                  </div>

                  {/* Key Highlights Row */}
                  <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <HardDrive className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{plan.specs.ssdStorage}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Globe className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{plan.specs.domain}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      المميزات المتضمنة:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-snug">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-8 space-y-3">
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                      plan.isPopular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20'
                        : 'bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 border border-slate-300'
                    }`}
                  >
                    <span>ابدأ الآن مع باقة {plan.name}</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  <a 
                    href="#comparison"
                    className="block text-center text-xs text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    مقارنة المواصفات التفصيلية
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note below plans */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto flex items-center justify-center gap-2">
          <Shield className="w-4 h-4 text-emerald-600" />
          <span>ضمان استرداد الأموال لمدة 14 يوماً مع دعم فني متواصل طوال فترة الاشتراك</span>
        </div>

      </div>
    </section>
  );
};

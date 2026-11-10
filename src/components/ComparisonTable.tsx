import React from 'react';
import { COMPARISON_CATEGORIES, GO_DIGITAL_PLANS } from '../data/goDigitalData';
import { Sparkles } from 'lucide-react';

interface ComparisonTableProps {
  currency: 'EGP' | 'USD';
  onSelectPlan: (planId: string) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ currency, onSelectPlan }) => {
  const currencySymbol = currency === 'EGP' ? 'ج.م' : '$';

  return (
    <section id="comparison" className="py-20 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>جدول المقارنة الكامل</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            قارن بين جميع باقات 4Digital
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            اطلع على الفروقات الدقيقة والمواصفات التقنية لكل باقة لتختار الأنسب لحجم وأهداف شركتك
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-lg">
          <table className="w-full text-right border-collapse min-w-[720px]">
            {/* Table Header with Plans */}
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-5 text-base font-black text-slate-900 w-1/4">
                  المواصفات التقنية
                </th>
                {GO_DIGITAL_PLANS.map((plan) => {
                  const price = currency === 'EGP' ? plan.priceEGP : plan.priceUSD;
                  return (
                    <th 
                      key={plan.id}
                      className={`p-5 text-center w-1/4 ${
                        plan.isPopular ? 'bg-blue-50/60 border-x border-blue-200' : ''
                      }`}
                    >
                      <div className="text-lg font-black text-slate-900">{plan.name}</div>
                      <div className="text-xs text-blue-600 font-bold mb-2">{plan.arabicName}</div>
                      <div className="text-xl font-extrabold text-slate-900">
                        {price.toLocaleString('ar-EG')} <span className="text-xs font-normal text-slate-500">{currencySymbol}/سنة</span>
                      </div>
                      <button
                        onClick={() => onSelectPlan(plan.id)}
                        className={`mt-3 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          plan.isPopular
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                            : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                        }`}
                      >
                        اختر الباقة
                      </button>
                    </th>
                  );
                })}
              </tr>
            </thead>

            {/* Table Body Categories */}
            <tbody>
              {COMPARISON_CATEGORIES.map((category, catIdx) => (
                <React.Fragment key={catIdx}>
                  {/* Category Title Row */}
                  <tr className="bg-slate-100/80 border-y border-slate-200">
                    <td 
                      colSpan={4} 
                      className="py-3 px-5 text-xs font-black text-slate-800 uppercase tracking-wider"
                    >
                      {category.category}
                    </td>
                  </tr>

                  {/* Feature Rows */}
                  {category.items.map((item, rIdx) => (
                    <tr 
                      key={rIdx} 
                      className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                    >
                      <td className="p-4 text-xs sm:text-sm font-semibold text-slate-800">
                        {item.name}
                      </td>

                      {/* Warm Up */}
                      <td className="p-4 text-center text-xs sm:text-sm text-slate-700">
                        {item.warmUp}
                      </td>

                      {/* Ramp Up (Popular Column) */}
                      <td className="p-4 text-center text-xs sm:text-sm font-bold text-slate-900 bg-blue-50/30 border-x border-blue-100">
                        {item.rampUp}
                      </td>

                      {/* Take Off */}
                      <td className="p-4 text-center text-xs sm:text-sm text-slate-700">
                        {item.takeOff}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

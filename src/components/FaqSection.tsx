import React, { useState } from 'react';
import { GO_DIGITAL_FAQS } from '../data/goDigitalData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative bg-slate-50/80 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>إجابات واضحة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            الأسئلة الشائعة حول 4Digital
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            كل ما تود معرفته عن طريقة حجز باقات 4Digital وتصميم المواقع، الدفع، الترقية، والمميزات التقنية.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {GO_DIGITAL_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen 
                    ? 'border-blue-400 shadow-md' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-blue-600 font-mono text-sm">0{idx + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-blue-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ADDITIONAL_SERVICES, AdditionalService } from '../data/goDigitalData';
import { 
  Layout,
  Server,
  FileSpreadsheet, 
  Palette, 
  QrCode, 
  UtensilsCrossed, 
  PenTool, 
  ArrowLeft, 
  Sparkles,
  Clock
} from 'lucide-react';

interface AdditionalServicesProps {
  onSelectService: (service: AdditionalService) => void;
}

export const AdditionalServices: React.FC<AdditionalServicesProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'office' | 'creative'>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout': return <Layout className="w-7 h-7 text-blue-600" />;
      case 'Server': return <Server className="w-7 h-7 text-sky-600" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-7 h-7 text-emerald-600" />;
      case 'Palette': return <Palette className="w-7 h-7 text-purple-600" />;
      case 'QrCode': return <QrCode className="w-7 h-7 text-amber-600" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-7 h-7 text-rose-600" />;
      case 'PenTool': return <PenTool className="w-7 h-7 text-indigo-600" />;
      default: return <Sparkles className="w-7 h-7 text-blue-600" />;
    }
  };

  const filteredServices = activeFilter === 'all' 
    ? ADDITIONAL_SERVICES 
    : ADDITIONAL_SERVICES.filter(s => s.category === activeFilter);

  return (
    <section id="additional-services" className="py-20 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>خدمات فور ديجيتال الرقمية المتكاملة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            جميع خدمات 4Digital لدعم وتطوير أعمالك
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            تشمل خدماتنا الأساسية تصميم واستضافة المواقع والمتاجر، كتابة مستندات وحلول مايكروسوفت أوفيس، تصميم الهويات البصرية والشعارات، رموز QR الذكية، قوائم الطعام، وكتابة المحتوى التسويقي.
          </p>

          {/* Interactive Filter Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'كافة الخدمات' },
              { id: 'web', label: 'تصميم واستضافة المواقع' },
              { id: 'office', label: 'خدمات الكتابة والأوفيس' },
              { id: 'creative', label: 'الهوية والمحتوى الرقمي' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  {service.highlight && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700">
                      {service.highlight}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-xs font-black text-blue-700 font-sans block mt-1">
                    {service.startingPrice}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>وقت التنفيذ: {service.deliverableTime}</span>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 border border-slate-300 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <span>طلب تفاصيل الخدمة</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

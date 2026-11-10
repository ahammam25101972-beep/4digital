import React, { useState } from 'react';
import { Logo } from './Logo';
import { Phone, Menu, X, Globe, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/goDigitalData';

interface NavbarProps {
  currency: 'EGP' | 'USD';
  onCurrencyToggle: () => void;
  onOpenOrderModal: (planId?: string) => void;
  onOpenGoldenFridayModal?: (offerId?: string) => void;
  activeSection?: string;
  onSelectSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currency, 
  onCurrencyToggle, 
  onOpenOrderModal,
  onOpenGoldenFridayModal,
  activeSection = 'home',
  onSelectSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'submit-idea', label: 'قدم فكرتك' },
    { id: 'hosting-domains', label: 'الباقات والدومينات' },
    { id: 'digital-services', label: 'الخدمات الرقمية' },
    { id: 'app-store', label: 'متجر التطبيقات' },
    { id: 'portfolio', label: 'من أعمالنا' },
    { id: 'library', label: 'المكتبة الرقمية' },
    { id: 'courses', label: 'الدورات التدريبية' },
    { id: 'blog', label: 'المدونة' },
    { id: 'forum', label: 'مجتمع فور ديجيتال' },
    { id: 'testimonials', label: 'رأي العملاء' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  const handleLinkClick = (id: string) => {
    if (onSelectSection) {
      onSelectSection(id);
    }
    setMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-slate-900 via-[#0e2b6c] to-slate-900 text-white text-xs sm:text-sm py-2 px-4 text-center flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => onOpenGoldenFridayModal && onOpenGoldenFridayModal('gf-idea-5000')}
          className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-black cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>اسأل عن عروض الجمعة الذهبية خلال شهر يناير</span>
        </button>
        <span className="hidden sm:inline text-slate-500">·</span>
        <a 
          href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent('مرحباً فور ديجيتال، أرغب في الاستفسار عن عروض الجمعة الذهبية خلال شهر يناير')}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-emerald-300 font-bold hover:underline flex items-center gap-1"
        >
          <span>تواصل واتساب: {CONTACT_INFO.phoneDisplay}</span>
        </a>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className="flex items-center shrink-0 text-right focus:outline-none cursor-pointer"
          >
            <Logo size="md" theme="light" />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 text-xs font-bold text-slate-700 whitespace-nowrap">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleLinkClick(link.id)}
                  className={`py-2 px-2.5 rounded-xl transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-[#0e2b6c] text-white font-black shadow-xs' 
                      : 'hover:text-[#0e2b6c] hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Actions: Currency Toggle + Order (Copy Link button removed as requested) */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button 
              onClick={onCurrencyToggle}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
              title="تبديل العملة"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{currency === 'EGP' ? 'ج.م' : 'USD'}</span>
            </button>

            <button 
              onClick={() => onOpenOrderModal('ramp-up')}
              className="px-4 py-2 rounded-xl font-bold text-xs bg-[#43b8da] hover:bg-[#34a3c5] text-white shadow-sm transition-all cursor-pointer"
            >
              اطلب خدمتك
            </button>
          </div>

          {/* Mobile & Tablet menu trigger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button 
              onClick={onCurrencyToggle}
              className="px-2.5 py-1.5 rounded bg-slate-100 border border-slate-300 text-xs text-slate-800 font-bold md:hidden"
            >
              {currency === 'EGP' ? 'ج.م' : 'USD'}
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 flex items-center gap-1.5 text-xs font-bold"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span>أقسام الموقع</span>
            </button>
          </div>
        </div>

        {/* Secondary Horizontal Bar on Medium/Large Screens (< xl) */}
        <div className="flex xl:hidden overflow-x-auto py-2 gap-1.5 border-t border-slate-100 no-scrollbar">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLinkClick(link.id)}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                  isActive
                    ? 'bg-[#0e2b6c] text-white font-black'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Full Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-bold text-xs sm:text-sm text-slate-700">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleLinkClick(link.id)}
                  className={`py-2.5 px-3 rounded-xl border text-right flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-[#0e2b6c] text-white border-[#0e2b6c]'
                      : 'bg-slate-50 hover:bg-blue-50 border-slate-200 text-slate-800'
                  }`}
                >
                  <span>{link.label}</span>
                  <span>←</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <a 
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-bold text-xs"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>اتصل بنا: {CONTACT_INFO.phoneDisplay}</span>
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal('ramp-up');
              }}
              className="flex-1 py-2.5 rounded-xl font-bold bg-[#43b8da] text-white text-center text-xs shadow-md"
            >
              اطلب خدمتك الآن
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

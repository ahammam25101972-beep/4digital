import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HostingDomainsSection } from './components/HostingDomainsSection';
import { DigitalServicesSection } from './components/DigitalServicesSection';
import { AppStoreSection } from './components/AppStoreSection';
import { SubmitIdeaPage } from './components/SubmitIdeaPage';
import { PortfolioSection } from './components/PortfolioSection';
import { LibrarySection } from './components/LibrarySection';
import { CoursesSection } from './components/CoursesSection';
import { BlogSection } from './components/BlogSection';
import { ForumSection } from './components/ForumSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { GoldenFridayModal } from './components/GoldenFridayModal';
import { AdditionalService, CONTACT_INFO } from './data/goDigitalData';
import { MessageCircle, Phone } from 'lucide-react';

export default function App() {
  const [currency, setCurrency] = useState<'EGP' | 'USD'>('EGP');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isGoldenFridayModalOpen, setIsGoldenFridayModalOpen] = useState(false);
  const [goldenFridayOfferId, setGoldenFridayOfferId] = useState<string>('gf-idea-5000');
  const [selectedPlanId, setSelectedPlanId] = useState<string>('ramp-up');
  const [selectedService, setSelectedService] = useState<AdditionalService | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleCurrencyToggle = () => {
    setCurrency(prev => prev === 'EGP' ? 'USD' : 'EGP');
  };

  const handleOpenOrderModal = (planId: string = 'ramp-up', domainQuery: string = '') => {
    setSelectedPlanId(planId);
    setSelectedService(null);
    setSelectedDomain(domainQuery);
    setIsOrderModalOpen(true);
  };

  const handleOpenGoldenFridayModal = (offerId: string = 'gf-idea-5000') => {
    setGoldenFridayOfferId(offerId);
    setIsGoldenFridayModalOpen(true);
  };

  const handleSelectService = (service: AdditionalService) => {
    setSelectedService(service);
    setIsOrderModalOpen(true);
  };

  const handleNavigate = (pageId: string) => {
    setActiveSection(pageId);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative flex flex-col justify-between">
      {/* Main Navigation Bar */}
      <Navbar
        currency={currency}
        onCurrencyToggle={handleCurrencyToggle}
        onOpenOrderModal={handleOpenOrderModal}
        onOpenGoldenFridayModal={handleOpenGoldenFridayModal}
        activeSection={activeSection}
        onSelectSection={handleNavigate}
      />

      {/* Render ONLY the selected page */}
      <main className="flex-1">
        {activeSection === 'home' && (
          <Hero 
            onOpenOrderModal={handleOpenOrderModal}
            onOpenGoldenFridayModal={handleOpenGoldenFridayModal}
            onSelectDepartment={handleNavigate}
          />
        )}

        {activeSection === 'hosting-domains' && (
          <HostingDomainsSection
            currency={currency}
            onCurrencyToggle={handleCurrencyToggle}
            onSelectPlan={handleOpenOrderModal}
          />
        )}

        {activeSection === 'digital-services' && (
          <DigitalServicesSection
            onSelectService={handleSelectService}
          />
        )}

        {activeSection === 'app-store' && (
          <AppStoreSection
            onSelectApp={handleSelectService}
          />
        )}

        {activeSection === 'submit-idea' && (
          <SubmitIdeaPage />
        )}

        {activeSection === 'portfolio' && (
          <PortfolioSection
            onOrderSimilar={handleSelectService}
          />
        )}

        {activeSection === 'library' && (
          <LibrarySection
            onCustomizeTemplate={handleSelectService}
          />
        )}

        {activeSection === 'courses' && (
          <CoursesSection
            currency={currency}
            onEnrollCourse={handleSelectService}
          />
        )}

        {activeSection === 'blog' && (
          <BlogSection
            onOrderService={handleSelectService}
          />
        )}

        {activeSection === 'forum' && (
          <ForumSection />
        )}

        {activeSection === 'testimonials' && (
          <TestimonialsSection />
        )}

        {activeSection === 'contact' && (
          <ContactSection />
        )}
      </main>

      {/* Footer */}
      <Footer onSelectSection={handleNavigate} />

      {/* Order & Booking Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => {
          setIsOrderModalOpen(false);
          setSelectedService(null);
        }}
        selectedPlanId={selectedPlanId}
        selectedService={selectedService}
        defaultDomain={selectedDomain}
        currency={currency}
      />

      {/* Golden Friday Subscription & Booking Modal */}
      <GoldenFridayModal
        isOpen={isGoldenFridayModalOpen}
        onClose={() => setIsGoldenFridayModalOpen(false)}
        defaultOfferId={goldenFridayOfferId}
      />

      {/* Floating Action Buttons (WhatsApp & Quick Call) */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-110 transition-all duration-300 group relative"
          aria-label="تواصل عبر واتساب"
        >
          <MessageCircle className="w-7 h-7 fill-white text-white" />
          <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-slate-900 border border-slate-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
            محادثة واتساب: {CONTACT_INFO.phoneDisplay}
          </span>
        </a>

        <a
          href={`tel:${CONTACT_INFO.phoneRaw}`}
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 hover:scale-110 transition-all duration-300 group relative"
          aria-label="اتصل بنا"
        >
          <Phone className="w-5 h-5 text-white" />
          <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-slate-900 border border-slate-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
            اتصال هاتفي: {CONTACT_INFO.phoneDisplay}
          </span>
        </a>
      </div>
    </div>
  );
}

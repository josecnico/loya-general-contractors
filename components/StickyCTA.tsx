import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ShieldCheck } from 'lucide-react';
import { COMPANY_PHONE, LICENSE_NUMBER } from '../constants';
import { useQuoteModal } from './QuoteContext';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { openModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 80% of viewport height (past hero content)
      const showThreshold = window.innerHeight * 0.8;
      
      if (window.scrollY > showThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-[90] lg:hidden transform transition-transform duration-500 ease-in-out shadow-[0_-5px_20px_rgba(0,0,0,0.15)] bg-white border-t border-slate-100 ${
        isVisible ? 'translate-y-0' : 'translate-y-[120%]'
      }`}
      data-cta-location="sticky-bar"
    >
      {/* Trust Micro-copy */}
      <div className="bg-slate-50 py-1 text-center border-b border-slate-100">
         <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 font-medium uppercase tracking-widest">
            <ShieldCheck size={10} className="text-brand-accent" />
            <span>{LICENSE_NUMBER} • Licensed & Insured</span>
         </div>
      </div>

      <div className="flex p-3 gap-3 pb-safe-area">
        <a 
          href={`tel:${COMPANY_PHONE}`} 
          className="flex-1 flex flex-col items-center justify-center bg-white border-2 border-slate-200 rounded-lg py-2.5 active:bg-slate-50 transition-colors"
          data-cta-action="call"
        >
           <Phone size={20} className="text-brand-dark mb-0.5" />
           <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">Call Now</span>
        </a>
        
        <button 
          onClick={() => openModal()}
          className="flex-[2] flex flex-col items-center justify-center bg-brand-primary text-white rounded-lg py-2.5 shadow-lg active:scale-95 transition-transform"
          data-cta-action="quote"
        >
           <Calendar size={20} className="mb-0.5" />
           <span className="text-xs font-bold uppercase tracking-wider">Free Quote</span>
        </button>
      </div>
    </div>
  );
};
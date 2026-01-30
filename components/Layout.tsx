import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, Facebook, Linkedin, MapPin, Calculator } from 'lucide-react';
import { NAV_LINKS, COMPANY_NAME, COMPANY_PHONE, LICENSE_NUMBER, COMPANY_EMAIL } from '../constants';
import { QuoteProvider, useQuoteModal } from './QuoteContext';
import { QuoteModal } from './QuoteModal';
import { StickyCTA } from './StickyCTA';

// Wrapper component to use the context hook
const NavigationContent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openModal } = useQuoteModal();

  // Determine if we are on the home page
  const isHome = location.pathname === '/';
  
  // Logic: Use the solid/scrolled style if we have scrolled down OR if we are NOT on the home page.
  const useSolidHeader = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-brand-light">
      <QuoteModal />
      <StickyCTA />

      {/* Top Bar - SEO Rich */}
      <div className="bg-slate-950 text-slate-400 text-[10px] md:text-xs py-3 px-4 md:px-8 hidden md:flex justify-between items-center z-50 relative border-b border-slate-800">
        <div className="flex gap-6 tracking-widest uppercase font-medium">
          <span>{LICENSE_NUMBER}</span>
          <span className="hidden lg:inline text-brand-accent">Licensed, Bonded & Insured</span>
        </div>
        <div className="flex gap-6 items-center">
          <a href={`tel:${COMPANY_PHONE}`} className="hover:text-white transition-colors flex items-center gap-2 font-bold text-white">
             <Phone size={12} className="text-brand-accent" /> {COMPANY_PHONE}
          </a>
          <span className="uppercase tracking-widest opacity-50">Serving San Diego County</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 w-full z-40 transition-all duration-500 ${useSolidHeader ? 'bg-white/95 backdrop-blur-md shadow-xl py-3' : 'bg-white/0 py-6'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="relative z-50 group">
            <img
              src="/logo.svg"
              alt="Loya General Construction - Licensed General Contractor San Diego"
              className={`h-12 md:h-14 w-auto transition-all duration-300 group-hover:scale-105 ${useSolidHeader ? '' : 'md:brightness-0 md:invert'}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-widest uppercase transition-colors relative py-2 group
                  ${useSolidHeader 
                    ? (location.pathname === link.path ? 'text-brand-primary' : 'text-slate-600 hover:text-brand-dark') 
                    : (location.pathname === link.path ? 'text-brand-accent' : 'text-white/80 hover:text-white')
                  }
                `}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-px bg-current transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <button
              onClick={() => openModal()}
              className={`ml-6 px-6 py-3 text-xs font-bold uppercase tracking-widest border transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95
                ${useSolidHeader 
                  ? 'border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-brand-dark'
                }`}
            >
              Get Estimate
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-2 z-50 relative transition-colors ${isMenuOpen ? 'text-white' : (useSolidHeader ? 'text-brand-dark' : 'text-white')}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-slate-900 lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-primary blur-[100px] opacity-50"></div>
        
        <div className="flex flex-col items-center justify-center h-full gap-8 p-8 relative z-10">
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`text-3xl font-display font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-accent hover:to-white transition-all transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="w-12 h-1 bg-brand-accent mt-4 rounded-full"></div>
          <button 
            onClick={() => { setIsMenuOpen(false); openModal(); }}
            className="mt-4 px-8 py-3 bg-brand-accent text-white font-bold uppercase tracking-widest text-sm rounded"
          >
            Get Free Quote
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className={`flex-grow pb-20 lg:pb-0 ${isHome ? '-mt-20 md:-mt-32' : ''}`}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-slate-400 pt-24 pb-32 lg:pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            
            {/* Brand Column */}
            <div className="md:col-span-5 lg:col-span-4">
              <img
                src="/logo.svg"
                alt="Loya General Construction"
                className="h-14 w-auto mb-6 brightness-0 invert"
              />
              <p className="mb-8 text-slate-400 leading-relaxed max-w-md">
                Transforming San Diego homes with precision and artistry. Your dedicated General B Contractor for high-end remodeling, ADUs, and custom additions.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 border border-slate-700 rounded-full flex items-center justify-center hover:border-brand-accent hover:text-brand-accent hover:scale-110 transition-all duration-300">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Column */}
            <div className="md:col-span-3 lg:col-span-2 md:col-start-7">
              <h4 className="text-white font-display font-bold uppercase tracking-widest mb-8 text-sm">Explore</h4>
              <ul className="space-y-4">
                {NAV_LINKS.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:text-white hover:pl-2 transition-all duration-300 inline-block">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services SEO Column */}
            <div className="md:col-span-4 lg:col-span-3">
              <h4 className="text-white font-display font-bold uppercase tracking-widest mb-8 text-sm">Expertise</h4>
              <ul className="space-y-4">
                <li className="hover:text-white transition-colors">Whole Home Remodeling</li>
                <li className="hover:text-white transition-colors">Luxury Kitchen Design</li>
                <li className="hover:text-white transition-colors">ADU & Guest Houses</li>
                <li className="hover:text-white transition-colors">Bathroom Spas</li>
              </ul>
            </div>
            
             {/* Contact Column */}
             <div className="md:col-span-12 lg:col-span-3 border-t border-slate-800 lg:border-none pt-12 lg:pt-0">
                <h4 className="text-white font-display font-bold uppercase tracking-widest mb-8 text-sm">Contact</h4>
                <div className="space-y-6">
                   <p className="flex items-start gap-4 group cursor-pointer">
                     <MapPin className="shrink-0 text-brand-accent group-hover:animate-bounce" />
                     <span className="group-hover:text-white transition-colors">
                       <strong className="block text-white mb-1">{COMPANY_NAME}</strong>
                       Serving San Diego, CA<br/>& Surrounding Areas
                     </span>
                   </p>
                   <a href={`tel:${COMPANY_PHONE}`} className="flex items-center gap-4 group">
                     <Phone className="shrink-0 text-brand-accent" />
                     <span className="group-hover:text-white transition-colors text-lg font-display font-bold">{COMPANY_PHONE}</span>
                   </a>
                   <button onClick={() => openModal()} className="flex items-center gap-4 group text-left">
                     <Calculator className="shrink-0 text-brand-accent" />
                     <span className="group-hover:text-white transition-colors text-sm">Request an Estimate</span>
                   </button>
                </div>
             </div>

          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wide uppercase text-slate-500">
            <p>&copy; {new Date().getFullYear()} {COMPANY_NAME} | {LICENSE_NUMBER}</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Main Layout export wrapping with Provider
export const Layout: React.FC = () => {
  return (
    <QuoteProvider>
      <NavigationContent />
    </QuoteProvider>
  );
};
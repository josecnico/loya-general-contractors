import React from 'react';
import { SectionTitle, Button, Reveal } from '../components/UI';
import { COMPANY_PHONE, COMPANY_EMAIL } from '../constants';
import { Phone, ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <SeoHead
         title="Contact Us | Free Estimate San Diego"
         description="Get a free construction estimate from Loya General Construction. Licensed General B Contractor (CSLB #1143886) serving San Diego County. ADU construction, home remodeling, bathroom renovations. Call (619) 480-9951."
       />

      {/* Dark Sidebar Info */}
      <div className="lg:w-2/5 bg-brand-dark text-white p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        
        <div className="relative z-10">
          <Reveal>
            <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-6 block">Get in Touch</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display font-bold text-5xl lg:text-6xl mb-8">Let's build your vision.</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-slate-400 text-lg mb-16 leading-relaxed">
              Ready to transform your space? Contact us for a consultation. We prioritize clear communication from day one.
            </p>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={300}>
              <div>
                 <p className="text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">Call Us</p>
                 <a href={`tel:${COMPANY_PHONE}`} className="text-2xl font-display font-bold hover:text-brand-accent transition-colors flex items-center gap-4">
                   {COMPANY_PHONE} <ArrowRight size={20} className="text-brand-accent" />
                 </a>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div>
                 <p className="text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">Email Us</p>
                 <a href={`mailto:${COMPANY_EMAIL}`} className="text-xl font-display font-bold hover:text-brand-accent transition-colors">
                   {COMPANY_EMAIL}
                 </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="lg:w-3/5 bg-white p-12 lg:p-24 flex items-center">
         <div className="w-full max-w-lg mx-auto">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Reveal delay={200}>
                  <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-brand-primary transition-colors">Name</label>
                    <input type="text" className="w-full border-b-2 border-slate-200 bg-transparent py-2 focus:outline-none focus:border-brand-primary transition-colors" placeholder="John Doe" />
                  </div>
                </Reveal>
                <Reveal delay={300}>
                  <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-brand-primary transition-colors">Phone</label>
                    <input type="tel" className="w-full border-b-2 border-slate-200 bg-transparent py-2 focus:outline-none focus:border-brand-primary transition-colors" placeholder="(555) 000-0000" />
                  </div>
                </Reveal>
              </div>
              
              <Reveal delay={400}>
                <div className="group">
                   <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-brand-primary transition-colors">Email</label>
                   <input type="email" className="w-full border-b-2 border-slate-200 bg-transparent py-2 focus:outline-none focus:border-brand-primary transition-colors" placeholder="john@example.com" />
                </div>
              </Reveal>

              <Reveal delay={500}>
                <div className="group">
                   <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-brand-primary transition-colors">Project Type</label>
                   <select className="w-full border-b-2 border-slate-200 bg-transparent py-2 focus:outline-none focus:border-brand-primary transition-colors">
                      <option>Full Home Remodel</option>
                      <option>Kitchen Renovation</option>
                      <option>Bathroom Remodel</option>
                      <option>ADU / Guest House</option>
                      <option>Home Addition</option>
                   </select>
                </div>
              </Reveal>

              <Reveal delay={600}>
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-brand-primary transition-colors">Project Details</label>
                  <textarea className="w-full border-b-2 border-slate-200 bg-transparent py-2 focus:outline-none focus:border-brand-primary transition-colors h-32 resize-none" placeholder="Describe your vision, timeline, and budget..."></textarea>
                </div>
              </Reveal>

              <Reveal delay={700}>
                <Button variant="dark" className="w-full md:w-auto" icon>Send Request</Button>
              </Reveal>
            </form>
         </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Hammer, Layout, Home as HomeIcon, CheckCircle2, ShieldCheck, Award, HardHat, Calculator, Calendar, Clock, Phone } from 'lucide-react';
import { SERVICES, PROJECTS, CITY_MAIN, LICENSE_NUMBER, COMPANY_PHONE } from '../constants';
import { SectionTitle, Button, Reveal } from '../components/UI';
import { SeoHead } from '../components/SeoHead';
import { useQuoteModal } from '../components/QuoteContext';

export const Home: React.FC = () => {
  const { openModal } = useQuoteModal();

  const handleScrollToProjects = () => {
    const element = document.getElementById('featured-projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="overflow-hidden bg-white">
      <SeoHead 
        title={`General Contractor in ${CITY_MAIN} | Home Remodeling & ADUs`}
        description={`Premier General B Contractor serving ${CITY_MAIN}. Specializing in luxury whole-home remodeling, kitchen renovations, and ADU construction. Licensed & Insured.`}
        schemaType="LocalBusiness"
      />

      {/* Hero Section - SEO Optimized H1 */}
      <section className="relative min-h-screen flex items-center pt-32 md:pt-48">
        {/* Background Image with Parallax feel */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40 z-10"></div>
           <img
             src="https://res.cloudinary.com/dwquql5lk/image/upload/f_auto,q_auto,w_1920,h_1080,c_fill/dji_fly_20250629_134718_249_1751230115561_photo_optimized_e3sher.jpg"
             alt="ADU Construction by Licensed General Contractor in San Diego - Aerial View of New Build"
             className="w-full h-full object-cover"
           />
        </div>
        
        {/* Content Container */}
        <div className="container mx-auto px-4 md:px-8 relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <Reveal delay={0}>
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-12 bg-brand-accent"></span>
                <span className="text-white text-xs font-bold tracking-[0.3em] uppercase">{LICENSE_NUMBER}</span>
              </div>
            </Reveal>
            
            <Reveal delay={0}>
              <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-8 tracking-tight">
                <span className="block text-3xl md:text-4xl text-slate-300 font-sans font-light tracking-normal mb-2">General Contractor in {CITY_MAIN}</span>
                CRAFTING <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white/80 italic font-serif pr-4">Defined</span> 
                SPACES
              </h1>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="text-slate-200 text-lg md:text-xl max-w-xl mb-12 leading-relaxed border-l-2 border-brand-accent pl-6">
                We specialize in high-end residential remodeling, ADUs, and architectural additions. Experience the perfect blend of structural integrity and modern design.
              </p>
            </Reveal>
            
            {/* CTA Group - High Conversion */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <Reveal delay={400}>
                <button 
                  onClick={() => openModal()}
                  className="group relative flex flex-col items-start bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto"
                  data-cta-location="hero"
                  data-cta-type="primary"
                >
                  <div className="flex items-center gap-3">
                     <Calculator size={24} className="text-white" />
                     <span className="font-bold uppercase tracking-widest text-sm">Get Your Free Estimate</span>
                  </div>
                  <span className="text-[10px] text-blue-200 mt-1 pl-9 opacity-90 font-medium">Transparent pricing • No hidden fees</span>
                </button>
              </Reveal>
              <Reveal delay={500}>
                <button 
                  onClick={handleScrollToProjects}
                  className="group flex flex-col items-start border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg transition-all duration-300 w-full sm:w-auto"
                  data-cta-location="hero"
                  data-cta-type="secondary"
                >
                  <div className="flex items-center gap-3">
                     <span className="font-bold uppercase tracking-widest text-sm">See Our Work</span>
                     <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                   <span className="text-[10px] text-slate-300 mt-1 font-medium">200+ completed projects</span>
                </button>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-brand-dark border-b border-slate-800 py-8">
         <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="flex items-center gap-3 text-white">
                  <ShieldCheck size={32} className="text-brand-accent" />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Licensed & Insured</span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400">{LICENSE_NUMBER}</span>
                  </div>
               </div>
               <div className="flex items-center gap-3 text-white">
                  <Award size={32} className="text-brand-accent" />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Best of Houzz</span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400">Service Award</span>
                  </div>
               </div>
               <div className="flex items-center gap-3 text-white">
                  <HardHat size={32} className="text-brand-accent" />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Safety First</span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400">OSHA Compliant</span>
                  </div>
               </div>
               <div className="hidden md:flex items-center gap-3 text-white">
                  <CheckCircle2 size={32} className="text-brand-accent" />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">10+ Years</span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400">Experience</span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Services Section */}
      <section className="py-32 bg-slate-50 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-silver/30 -skew-x-12 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <SectionTitle 
              subtitle="Our Expertise" 
              title="Construction Services" 
              number="01"
            />
            <Reveal delay={200}>
              <Link to="/services" className="hidden md:block mb-4 text-brand-primary font-bold uppercase text-xs tracking-widest hover:text-brand-dark transition-colors border-b border-brand-primary pb-1">
                View All Capabilities
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <Reveal key={service.id} delay={idx * 200} className={`${idx === 1 ? 'md:-mt-12' : ''}`}>
                <div className={`group bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-t-4 border-transparent hover:border-brand-primary h-full flex flex-col cursor-pointer`} onClick={() => openModal(service.title)}>
                  <div className="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-colors duration-500">
                    {idx === 0 && <Layout className="text-brand-dark group-hover:text-white" size={24} />}
                    {idx === 1 && <HomeIcon className="text-brand-dark group-hover:text-white" size={24} />}
                    {idx === 2 && <Hammer className="text-brand-dark group-hover:text-white" size={24} />}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">{service.title}</h3>
                  <p className="text-slate-600 mb-8 text-sm leading-relaxed flex-grow">{service.description}</p>
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-brand-dark transition-colors mt-auto">
                    Get Quote <ArrowRight size={14} className="ml-2" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Loya - Soft CTA Insert */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <div>
               <SectionTitle subtitle="Why Loya Contracting" title="Building Trust in San Diego" number="03" />
               <Reveal delay={200}>
                 <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                   We believe that construction is a collaborative art form. It requires not just bricks and mortar, but transparency, precision, and a relentless commitment to quality. We are your partners in increasing your property value.
                 </p>
               </Reveal>
               <ul className="space-y-6">
                 {[
                   "Licensed General B Contractor (CSLB Verified)",
                   "Detailed Project Management & Timelines",
                   "High-End Material Sourcing",
                   "Transparent Pricing Structure"
                 ].map((item, i) => (
                   <Reveal key={i} delay={300 + (i * 100)}>
                     <li className="flex items-center gap-4">
                       <div className="w-6 h-6 rounded-full border border-brand-accent flex items-center justify-center shrink-0">
                          <CheckCircle2 size={14} className="text-brand-accent" />
                       </div>
                       <span className="font-medium text-slate-800">{item}</span>
                     </li>
                   </Reveal>
                 ))}
               </ul>
            </div>
            
            <Reveal delay={200} className="relative">
               <div className="absolute -top-10 -left-10 w-2/3 h-full bg-slate-100 z-0"></div>
               <img
                 src="https://res.cloudinary.com/dwquql5lk/image/upload/f_auto,q_auto,w_800,h_600,c_fill/IMG_1425_ks9zdb.jpg"
                 alt="Modern Marble Bathroom Remodel by Loya General Construction in San Diego"
                 className="relative z-10 w-full h-[500px] object-cover shadow-2xl"
               />
               <div className="absolute -bottom-6 -right-6 bg-brand-primary p-8 z-20 text-white hidden md:block">
                  <p className="font-display font-bold text-4xl mb-1">10+</p>
                  <p className="text-xs uppercase tracking-widest opacity-80">Years Experience</p>
               </div>
            </Reveal>
          </div>

          {/* Soft CTA Insert */}
          <Reveal delay={300}>
             <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-sm">
                <h3 className="font-display font-bold text-2xl text-brand-dark mb-3">Have a project in mind?</h3>
                <p className="text-slate-600 mb-8">Let's discuss how we can bring your vision to life with a comprehensive plan.</p>
                <button 
                  onClick={() => openModal()}
                  className="bg-white border-2 border-brand-dark text-brand-dark font-bold uppercase text-xs tracking-widest px-8 py-4 hover:bg-brand-dark hover:text-white transition-colors duration-300"
                >
                  Schedule Free Consultation
                </button>
                <p className="text-xs text-slate-400 mt-4 flex items-center justify-center gap-2">
                   <Clock size={12} /> 15-minute call • No obligation • Expert advice
                </p>
             </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Projects with Overlay CTA */}
      <section id="featured-projects" className="py-32 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-dot-pattern bg-dot-sm"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <SectionTitle subtitle="Selected Works" title="Featured Projects" light number="02" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-800 mt-12">
            {PROJECTS.slice(0, 4).map((project, idx) => (
              <Reveal key={project.id} delay={idx * 100} className="h-[400px]">
                <div className="group relative h-full w-full block overflow-hidden border border-slate-800 hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={project.imageUrl} 
                    alt={`General Contractor Project: ${project.title}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Updated Overlay Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-95 transition-all duration-500"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10">
                    <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{project.category}</p>
                    <h3 className="text-white font-display font-bold text-3xl mb-2">{project.title}</h3>
                    <p className="text-slate-300 text-sm flex items-center gap-2 mb-6"><Layout size={14}/> {project.location}</p>
                    
                    {/* Project Specific CTA */}
                    <button 
                      onClick={() => openModal(project.category)}
                      className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200 flex items-center gap-2 text-white border border-white/30 px-6 py-3 hover:bg-brand-primary hover:border-brand-primary rounded"
                    >
                      <span className="text-xs font-bold uppercase tracking-widest">Start Similar Project</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Reveal delay={200}>
               <div className="inline-block">
                 <p className="text-slate-400 text-sm mb-4">Ready to start your project? Limited slots available for {new Date().getFullYear()}.</p>
                 <Link to="/projects">
                   <Button variant="outline">Explore Full Portfolio</Button>
                 </Link>
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* Pre-Footer Feasibility Assessment CTA */}
      <section className="py-24 bg-brand-light border-t border-brand-silver">
        <div className="container mx-auto px-4 md:px-8">
           <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="md:w-1/3 relative z-10 text-center md:text-left">
                <div className="w-24 h-24 bg-brand-silver rounded-full mx-auto md:mx-0 mb-6 overflow-hidden border-4 border-white shadow-lg">
                   <img src="https://res.cloudinary.com/dwquql5lk/image/upload/f_auto,q_auto,w_200,h_200,c_fill,g_face/IMG_5926_tr2ilo.jpg" alt="Jose Loya - Licensed General Contractor San Diego" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display font-bold text-2xl text-brand-dark">Not sure where to start?</h3>
                <p className="text-slate-500 mt-2 text-sm">Get a free project feasibility assessment.</p>
             </div>
             
             <div className="md:w-2/3 relative z-10 border-t md:border-t-0 md:border-l border-slate-100 pt-8 md:pt-0 md:pl-12 text-center md:text-left">
                <p className="text-lg text-slate-600 italic mb-8">
                  "I personally review every project inquiry to ensure we are the right fit for your vision and budget. No sales pressure, just honest construction advice."
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                   <button 
                     onClick={() => openModal('Feasibility Check')}
                     className="bg-brand-dark text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded hover:bg-brand-primary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                   >
                     Talk to an Expert
                   </button>
                   <a href={`tel:${COMPANY_PHONE}`} className="flex items-center justify-center gap-2 text-brand-dark font-bold hover:text-brand-primary transition-colors">
                     <Phone size={18} />
                     <span>{COMPANY_PHONE}</span>
                   </a>
                </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};
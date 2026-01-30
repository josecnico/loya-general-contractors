import React from 'react';
import { SectionTitle, Reveal } from '../components/UI';
import { SeoHead } from '../components/SeoHead';
import { CITY_MAIN, COMPANY_NAME, LICENSE_NUMBER } from '../constants';

// Cloudinary URLs
const CDN = 'https://res.cloudinary.com/dwquql5lk/image/upload';

export const About: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen">
      <SeoHead
        title={`About Us | Licensed General Contractor ${CITY_MAIN}`}
        description={`Learn about ${COMPANY_NAME}, a licensed General B Contractor (${LICENSE_NUMBER}) serving San Diego County. Over 10 years of experience in ADU construction, home remodeling, and new construction.`}
        image={`${CDN}/f_auto,q_auto,w_1200,h_630,c_fill/IMG_5926_tr2ilo.jpg`}
      />

      {/* Minimal Hero */}
      <div className="pt-32 pb-20 container mx-auto px-4 md:px-8">
        <Reveal>
          <h1 className="font-display font-bold text-6xl md:text-8xl text-brand-dark mb-6">Who We Are</h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-xl text-slate-500 max-w-2xl">Licensed General B Contractor building trust throughout San Diego County since 2015.</p>
        </Reveal>
      </div>

      {/* Image & Text Overlap */}
      <section className="pb-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative">
            <Reveal className="w-full lg:w-3/4 h-[500px]">
              <img
                src={`${CDN}/f_auto,q_auto,w_1200,h_800,c_fill/IMG_3074_gd9l3p.jpg`}
                alt="Large Scale New Construction Project by Loya General Construction in San Diego"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </Reveal>
            <div className="lg:absolute lg:bottom-10 lg:right-0 w-full lg:w-1/2 mt-[-100px] lg:mt-0 relative z-10 ml-4 lg:ml-0 mr-4 lg:mr-0">
               <Reveal delay={300}>
                 <div className="bg-white p-10 lg:p-16 shadow-2xl border-l-4 border-brand-primary">
                   <SectionTitle subtitle="Our Story" title="Built on Trust & Quality" />
                   <p className="text-slate-600 leading-relaxed mb-6">
                     <strong>{COMPANY_NAME}</strong> was founded with a simple mission: deliver exceptional construction work with transparency and integrity. As a licensed General B Contractor ({LICENSE_NUMBER}), we bring professional expertise to every project in {CITY_MAIN} and surrounding communities.
                   </p>
                   <p className="text-slate-600 leading-relaxed">
                     From ADU construction and home additions to complete renovations and concrete work, we handle projects of all sizes with the same attention to detail. Our hands-on approach ensures quality at every stage, from permits to final walkthrough.
                   </p>
                 </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { title: "Licensed & Insured", desc: "California State License Board certified (CSLB #1143886). Fully bonded and insured for your protection and peace of mind." },
               { title: "Quality Craftsmanship", desc: "We take pride in our work. Every detail matters, from proper framing techniques to flawless finish work." },
               { title: "Clear Communication", desc: "Regular updates, honest timelines, and transparent pricing. No surprises, no hidden fees." }
             ].map((val, i) => (
               <Reveal key={i} delay={i * 150} className="border-t border-slate-200 pt-8">
                 <span className="text-brand-accent font-display font-bold text-5xl mb-4 block">0{i+1}</span>
                 <h3 className="font-bold text-brand-dark text-xl uppercase tracking-widest mb-4">{val.title}</h3>
                 <p className="text-slate-500">{val.desc}</p>
               </Reveal>
             ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle subtitle="What We Do" title="Our Expertise" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Reveal delay={100}>
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={`${CDN}/f_auto,q_auto,w_600,h_400,c_fill/B2DECA51-3377-4F52-AB0F-9FA0896519F7_altedj.jpg`}
                  alt="ADU Construction San Diego - Detached Guest House"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                  <h3 className="text-white font-display font-bold text-xl">ADU Construction</h3>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={`${CDN}/f_auto,q_auto,w_600,h_400,c_fill/IMG_1425_ks9zdb.jpg`}
                  alt="Bathroom Remodel San Diego - Modern Marble Finish"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                  <h3 className="text-white font-display font-bold text-xl">Bathroom Remodels</h3>
                </div>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={`${CDN}/f_auto,q_auto,w_600,h_400,c_fill/IMG_3896_xxnma7.jpg`}
                  alt="Room Addition Framing San Diego - Home Expansion"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                  <h3 className="text-white font-display font-bold text-xl">Room Additions</h3>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team / Leadership */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-5"></div>
         <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <SectionTitle subtitle="Leadership" title="Hands-On Approach" light />
              <Reveal delay={200}>
                <p className="text-slate-400 text-lg mb-6">
                  Every project receives direct supervision from our licensed team. We believe in being on-site, communicating clearly, and ensuring quality at every step of the construction process.
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <div className="bg-brand-primary/20 border border-brand-primary/30 rounded-lg px-6 py-4">
                    <p className="text-3xl font-display font-bold text-brand-accent">100+</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest">Projects Completed</p>
                  </div>
                  <div className="bg-brand-primary/20 border border-brand-primary/30 rounded-lg px-6 py-4">
                    <p className="text-3xl font-display font-bold text-brand-accent">10+</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest">Years Experience</p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="md:w-1/2">
               <Reveal delay={300}>
                 <img
                   src={`${CDN}/f_auto,q_auto,w_800,h_600,c_fill/IMG_5926_tr2ilo.jpg`}
                   alt="Loya General Construction Team at Work in San Diego"
                   className="w-full h-[400px] object-cover"
                 />
               </Reveal>
            </div>
         </div>
      </section>
    </div>
  );
};

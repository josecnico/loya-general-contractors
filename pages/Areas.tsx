import React from 'react';
import { SectionTitle, Reveal } from '../components/UI';
import { SeoHead } from '../components/SeoHead';
import { CITIES_SERVED, CITY_MAIN, COMPANY_NAME, LICENSE_NUMBER } from '../constants';
import { MapPin } from 'lucide-react';

export const Areas: React.FC = () => {

  return (
    <div className="bg-brand-light min-h-screen">
      <SeoHead
        title={`Service Areas | General Contractor ${CITY_MAIN} County`}
        description={`Licensed General B Contractor (${LICENSE_NUMBER}) serving ${CITIES_SERVED.join(', ')}, and all of ${CITY_MAIN} County. ADU construction, home remodeling, and more. Call (619) 480-9951.`}
      />
      <div className="bg-brand-dark text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/10 -skew-x-12"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Reveal>
            <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">Local Presence</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-xl text-slate-400 max-w-2xl">Serving the greater {CITY_MAIN} community with pride and precision.</p>
          </Reveal>
        </div>
      </div>

      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           <div>
             <SectionTitle subtitle="Locations" title="Where We Build" />
             <Reveal delay={200}>
               <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                 {COMPANY_NAME} is deeply rooted in Southern California. From coastal renovations to inland custom builds, we understand the micro-climates and specific zoning requirements of each neighborhood.
               </p>
             </Reveal>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {CITIES_SERVED.map((city, i) => (
                 <Reveal key={city} delay={300 + (i * 50)}>
                   <div className="group flex items-center p-4 bg-white border border-slate-200 hover:border-brand-primary transition-colors">
                     <MapPin className="text-brand-gray group-hover:text-brand-primary mr-4 transition-colors" size={20} />
                     <span className="font-bold text-brand-dark">{city}, CA</span>
                   </div>
                 </Reveal>
               ))}
             </div>
           </div>

           {/* Service Area Visual */}
           <Reveal delay={300} className="bg-slate-200 min-h-[400px] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="https://res.cloudinary.com/dwquql5lk/image/upload/f_auto,q_auto,w_800,h_600,c_fill/dji_fly_20250702_132444_278_1751487950232_photo_optimized_srcqgz.jpg"
                alt="Aerial View of Construction Project in San Diego County"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end justify-center pb-12">
                 <div className="bg-white/95 backdrop-blur p-6 text-center shadow-xl">
                    <h3 className="font-display font-bold text-2xl text-brand-dark">{CITY_MAIN} County</h3>
                    <p className="text-xs uppercase tracking-widest text-brand-primary mt-2">Service Area</p>
                 </div>
              </div>
           </Reveal>
        </div>
      </section>
    </div>
  );
};
import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, Button, Reveal } from '../components/UI';
import { SERVICES, CITY_MAIN, LICENSE_NUMBER } from '../constants';
import { SeoHead } from '../components/SeoHead';

// Cloudinary optimized images for services
const CDN = 'https://res.cloudinary.com/dwquql5lk/image/upload/f_auto,q_auto,w_800,h_600,c_fill';
const SERVICE_IMAGES: { [key: string]: string } = {
  'remodeling': `${CDN}/71512F3D-D9FB-4326-97FE-C8C88438282B_sc6j9h.jpg`,
  'kitchens': `${CDN}/IMG_5530_xmcb8j.jpg`,
  'adus': `${CDN}/B2DECA51-3377-4F52-AB0F-9FA0896519F7_altedj.jpg`,
  'baths': `${CDN}/IMG_1425_ks9zdb.jpg`,
  'framing': `${CDN}/IMG_3896_xxnma7.jpg`,
  'hardscape': `${CDN}/IMG_5693_hp3dyf.jpg`
};

export const Services: React.FC = () => {
  return (
    <div className="bg-white">
       <SeoHead
         title={`Construction Services | ADU, Remodeling, Concrete | ${CITY_MAIN}`}
         description={`Licensed General B Contractor (${LICENSE_NUMBER}) offering ADU construction, home remodeling, bathroom renovations, kitchen renovations, framing, and concrete work in ${CITY_MAIN} County. Call (619) 480-9951 for a free estimate.`}
         image="/images/portfolio/adu-stucco-exterior-san-diego.jpg"
       />

       {/* Minimal Header */}
       <div className="bg-brand-light pt-32 pb-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8">
          <Reveal>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-brand-dark mb-6">Our Services</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-xl text-slate-500 max-w-3xl">
              Full-service General B contracting for residential projects throughout {CITY_MAIN} County. From ADUs to complete home renovations, we handle it all.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Stylized Service List */}
      <div className="container mx-auto px-4 md:px-8 py-24">
        <div className="space-y-32">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

              {/* Image Side - Real Photos */}
              <Reveal className="w-full lg:w-1/2 relative">
                 <div className={`absolute inset-0 border-2 border-brand-dark translate-x-4 translate-y-4 z-0`}></div>
                 <img
                  src={SERVICE_IMAGES[service.id] || `https://res.cloudinary.com/dwquql5lk/image/upload/f_auto,q_auto,w_800,h_600,c_fill/dji_fly_20250629_134718_249_1751230115561_photo_optimized_e3sher.jpg`}
                  alt={`${service.title} Services in ${CITY_MAIN} by Loya General Construction`}
                  className="relative z-10 w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 />
              </Reveal>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <Reveal delay={200}>
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-display text-4xl font-bold text-brand-silver">0{index + 1}</span>
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-dark">{service.title}</h2>
                  </div>
                </Reveal>

                <Reveal delay={300}>
                  <p className="text-slate-600 mb-8 text-lg leading-relaxed border-l border-brand-accent pl-6">
                    {service.description} Every {service.title.toLowerCase()} project we complete meets our rigorous standards for quality, durability, and code compliance.
                  </p>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                  {service.details.map((detail, i) => (
                    <Reveal key={i} delay={400 + (i * 50)}>
                      <div className="flex items-center group">
                        <span className="w-2 h-2 bg-brand-accent mr-3 rounded-full group-hover:scale-150 transition-transform"></span>
                        <span className="text-slate-700 font-medium uppercase text-xs tracking-wide">{detail}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={500}>
                  <Link to="/contact">
                     <Button variant="outline" className="w-full md:w-auto">Get Free Estimate</Button>
                  </Link>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <section className="bg-brand-dark py-24 text-white">
        <div className="container mx-auto px-4 md:px-8">
           <SectionTitle subtitle="How We Work" title="Our Process" light align="center" />

           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
             {[
               { title: "Free Consultation", desc: "We meet on-site to discuss your vision, assess the project scope, and provide honest feedback on feasibility and budget." },
               { title: "Design & Permits", desc: "We handle architectural planning and navigate city permits, ensuring your project meets all local building codes." },
               { title: "Construction", desc: "Our licensed team executes with precision, keeping you informed with regular progress updates throughout the build." },
               { title: "Final Walkthrough", desc: "We conduct a thorough inspection together, ensuring every detail meets your expectations before project completion." }
             ].map((step, i) => (
               <Reveal key={i} delay={i * 200} className="relative p-6 border border-slate-800 hover:border-brand-accent transition-colors group">
                 <span className="absolute top-4 right-4 font-display text-6xl font-bold text-slate-800 group-hover:text-brand-primary/20 transition-colors">{i+1}</span>
                 <h3 className="font-bold text-xl mb-4 relative z-10">{step.title}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
               </Reveal>
             ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-dark mb-4">Ready to Start Your Project?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and estimate. Licensed General B Contractor serving all of {CITY_MAIN} County.
            </p>
            <Link to="/contact">
              <Button>Get Your Free Estimate</Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

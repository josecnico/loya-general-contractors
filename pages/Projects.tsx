import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, CITY_MAIN, LICENSE_NUMBER } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../components/UI';
import { SeoHead } from '../components/SeoHead';

export const Projects: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SeoHead
         title={`Portfolio | Completed Projects in ${CITY_MAIN}`}
         description={`View our portfolio of completed construction projects in ${CITY_MAIN} County. ADU construction, bathroom remodels, room additions, and more. Licensed General B Contractor (${LICENSE_NUMBER}).`}
         image="https://res.cloudinary.com/dwquql5lk/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/dji_fly_20250629_134718_249_1751230115561_photo_optimized_e3sher.jpg"
      />
      <div className="pt-32 pb-12 container mx-auto px-4 md:px-8">
        <Reveal>
          <h1 className="font-display font-bold text-6xl md:text-8xl text-brand-dark mb-6">Our Work</h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-xl text-slate-500 max-w-2xl mb-8">
            Real projects completed by our licensed team throughout {CITY_MAIN} County. Every image shows our actual work.
          </p>
          <div className="h-px w-full bg-slate-200 mb-12"></div>
        </Reveal>
      </div>

      <div className="container mx-auto px-4 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 100} className={index % 3 === 0 ? 'md:col-span-2 h-[600px]' : 'h-[500px]'}>
              <div className="group relative w-full h-full overflow-hidden cursor-pointer">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} - ${project.category} in ${project.location} by Loya General Construction`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-8 md:p-12">
                  <div className="flex justify-between items-start">
                     <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest border border-white/30">
                       {project.category}
                     </span>
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                       <ArrowUpRight className="text-brand-dark" />
                     </div>
                  </div>
                  <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                    <h3 className="font-display font-bold text-3xl md:text-5xl text-white mb-2">{project.title}</h3>
                    <p className="text-slate-200 mb-2">{project.location}</p>
                    <p className="text-slate-300 text-sm max-w-lg">{project.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Additional Gallery Section */}
        <div className="mt-24">
          <Reveal>
            <h2 className="font-display font-bold text-3xl text-brand-dark mb-8">More From Our Portfolio</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: 'https://res.cloudinary.com/dwquql5lk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/dji_fly_20250702_132208_274_1751487796591_photo_optimized_rgn6sr.jpg', alt: 'ADU Foundation Work San Diego' },
              { src: 'https://res.cloudinary.com/dwquql5lk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/IMG_0377_fmk5ql.jpg', alt: 'Exterior Framing San Diego' },
              { src: 'https://res.cloudinary.com/dwquql5lk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/IMG_0725_zac81a.jpg', alt: 'Window Installation ADU' },
              { src: 'https://res.cloudinary.com/dwquql5lk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/DC545685-561A-44C3-A18E-5BB9F572F3EE_rzbrt1.jpg', alt: 'ADU Interior Windows' },
              { src: 'https://res.cloudinary.com/dwquql5lk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/IMG_5530_xmcb8j.jpg', alt: 'Interior Framing Remodel' },
              { src: 'https://res.cloudinary.com/dwquql5lk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/IMG_5532_jpla6x.jpg', alt: 'Framing with Windows' },
              { src: 'https://res.cloudinary.com/dwquql5lk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/dji_fly_20250702_132444_278_1751487950232_photo_optimized_srcqgz.jpg', alt: 'Home Addition Aerial View' },
              { src: 'https://res.cloudinary.com/dwquql5lk/image/upload/f_auto,q_auto,w_400,h_400,c_fill/IMG_5409_ncex35.jpg', alt: 'Concrete Slab Work' },
            ].map((img, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="aspect-square overflow-hidden group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
           <Reveal delay={200}>
             <p className="text-brand-gray mb-6 uppercase tracking-widest text-xs">Ready to start your project?</p>
             <Link to="/contact" className="font-display font-bold text-4xl md:text-5xl text-brand-dark hover:text-brand-primary transition-colors underline decoration-2 underline-offset-8">
               Let's build together.
             </Link>
             <p className="text-slate-500 mt-6 text-sm">
               Call us at <a href="tel:6194809951" className="text-brand-primary font-bold">(619) 480-9951</a> for a free consultation.
             </p>
           </Reveal>
        </div>
      </div>
    </div>
  );
};

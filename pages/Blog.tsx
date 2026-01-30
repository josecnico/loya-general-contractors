import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, COMPANY_NAME } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../components/UI';

export const Blog: React.FC = () => {
  useEffect(() => {
    document.title = `Journal | ${COMPANY_NAME}`;
  }, []);

  return (
    <div className="bg-brand-light min-h-screen">
      <div className="pt-32 pb-12 container mx-auto px-4 md:px-8 border-b border-slate-200">
        <Reveal>
          <h1 className="font-display font-bold text-6xl md:text-8xl text-brand-dark mb-6">Journal</h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-xl text-slate-500">Insights on construction, design, and property value.</p>
        </Reveal>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.id} delay={i * 150} className="h-full">
              <article className="group flex flex-col h-full">
                 <div className="h-64 overflow-hidden mb-6 relative">
                   <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute top-4 left-4 bg-brand-dark text-white text-[10px] font-bold uppercase px-3 py-1 tracking-widest">
                     {post.category}
                   </div>
                 </div>
                 
                 <div className="flex-grow">
                   <div className="text-xs text-brand-gray mb-3 font-medium uppercase tracking-wide">{post.date}</div>
                   <h2 className="font-display font-bold text-2xl text-brand-dark mb-4 leading-tight group-hover:text-brand-primary transition-colors">
                     <Link to="/contact">{post.title}</Link>
                   </h2>
                   <p className="text-slate-600 text-sm leading-relaxed mb-6 border-l border-slate-300 pl-4">
                     {post.excerpt}
                   </p>
                 </div>
                 
                 <Link to="/contact" className="mt-auto inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-primary hover:text-brand-dark transition-colors">
                   Read Article <ArrowRight size={14} className="ml-2" />
                 </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
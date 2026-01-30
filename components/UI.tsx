import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
  light?: boolean;
  number?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, align = 'left', light = false, number }) => {
  return (
    <Reveal>
      <div className={`relative mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
        {/* Background Number if provided */}
        {number && (
          <span className={`absolute -top-16 ${align === 'center' ? 'left-1/2 -translate-x-1/2' : '-left-4'} text-[120px] font-display font-bold opacity-5 pointer-events-none ${light ? 'text-white' : 'text-brand-dark'}`}>
            {number}
          </span>
        )}
        
        <div className={`inline-flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className={`h-px w-8 ${light ? 'bg-brand-accent' : 'bg-brand-primary'}`}></span>
          <span className={`text-xs font-bold tracking-[0.2em] uppercase ${light ? 'text-brand-accent' : 'text-brand-primary'}`}>
            {subtitle}
          </span>
        </div>
        
        <h2 className={`font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight relative z-10 ${light ? 'text-white' : 'text-brand-dark'}`}>
          {title}
        </h2>
      </div>
    </Reveal>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white' | 'dark';
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', icon, className = '', ...props }) => {
  // Added hover:scale-105 and active:scale-95 for click feedback
  // Added shadow-sm hover:shadow-xl for depth
  const baseStyle = "group relative inline-flex items-center justify-center px-8 py-4 font-bold uppercase tracking-widest text-xs overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:text-white",
    outline: "border border-brand-primary text-brand-primary hover:text-white hover:border-brand-primary", 
    white: "bg-white text-brand-dark hover:text-brand-primary",
    dark: "bg-brand-dark text-white hover:text-white"
  };

  // Updated slide colors to use gradients for dynamic effect
  const slideColor = {
    primary: "bg-gradient-to-r from-brand-dark to-slate-900",
    outline: "bg-gradient-to-r from-brand-primary to-brand-accent",
    white: "bg-slate-50",
    dark: "bg-gradient-to-r from-brand-accent to-brand-primary"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {/* Sliding background effect */}
      <span className={`absolute inset-0 w-full h-full ${slideColor[variant]} translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out`}></span>
      
      <span className="relative z-10 flex items-center">
        {children}
        {icon && <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />}
      </span>
    </button>
  );
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`${className} transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
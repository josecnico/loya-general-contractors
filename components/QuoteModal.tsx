import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Home, Warehouse, Bath, ChefHat, Hammer, ShieldCheck, Clock, CheckCircle2, Building2 } from 'lucide-react';
import { useQuoteModal } from './QuoteContext';
import { LICENSE_NUMBER } from '../constants';

const STEPS = [
  { id: 1, title: "Project Type" },
  { id: 2, title: "Details" },
  { id: 3, title: "Contact" }
];

const PROJECT_TYPES = [
  { id: 'Kitchen Remodel', icon: ChefHat, label: 'Kitchen' },
  { id: 'Bathroom Remodel', icon: Bath, label: 'Bathroom' },
  { id: 'ADU / Addition', icon: Warehouse, label: 'ADU / Addition' },
  { id: 'Full Home Reno', icon: Home, label: 'Full Home' },
  { id: 'General / Commercial', icon: Building2, label: 'General / Commercial' },
  { id: 'Other', icon: Hammer, label: 'Other' },
];

export const QuoteModal: React.FC = () => {
  const { isOpen, closeModal, prefilledType } = useQuoteModal();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    budget: 50000,
    timeline: '1-3 months',
    zipCode: '',
    name: '',
    email: '',
    phone: '',
    subscribe: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync prefilled type when modal opens
  useEffect(() => {
    if (isOpen && prefilledType) {
      setFormData(prev => ({ ...prev, projectType: prefilledType }));
    }
    if (!isOpen) {
        // Reset after animation
        setTimeout(() => {
            setStep(1);
            setIsSuccess(false);
            setIsSubmitting(false);
        }, 300);
    }
  }, [isOpen, prefilledType]);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity" 
        onClick={closeModal}
      ></div>
      
      <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
            <div>
                <h2 className="font-display font-bold text-2xl text-slate-900">
                    {isSuccess ? 'Request Received' : 'Get Your Free Estimate'}
                </h2>
                {!isSuccess && <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mt-1">{LICENSE_NUMBER}</p>}
            </div>
            <button 
                onClick={closeModal} 
                className="p-2 -mr-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
                <X size={24} />
            </button>
        </div>

        {isSuccess ? (
            <div className="p-12 text-center flex flex-col items-center justify-center flex-grow">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <Check size={48} className="text-green-600" />
                </div>
                <h3 className="font-display font-bold text-3xl text-slate-900 mb-4">You're all set!</h3>
                <p className="text-slate-600 mb-8 max-w-sm mx-auto text-lg leading-relaxed">
                    We've received your project details. One of our project managers will review your request and contact you shortly.
                </p>
                <button 
                    onClick={closeModal} 
                    className="w-full bg-brand-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-brand-dark transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-brand-primary/30"
                >
                    Return to Website
                </button>
            </div>
        ) : (
            <>
                {/* Progress Bar */}
                <div className="w-full bg-slate-100 h-1.5">
                    <div 
                        className="bg-brand-primary h-full transition-all duration-500 ease-out rounded-r-full" 
                        style={{ width: `${(step / 3) * 100}%` }}
                    ></div>
                </div>

                <div className="flex-grow overflow-y-auto">
                    <form onSubmit={handleSubmit} className="p-6 md:p-8">
                        {/* Step 1: Project Type */}
                        {step === 1 && (
                            <div className="animate-fade-in-up">
                                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-brand-light text-brand-primary flex items-center justify-center text-sm">1</span>
                                    What type of project are you planning?
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {PROJECT_TYPES.map((type) => {
                                        const Icon = type.icon;
                                        const isSelected = formData.projectType === type.id;
                                        return (
                                            <div 
                                                key={type.id}
                                                onClick={() => setFormData({...formData, projectType: type.id})}
                                                className={`relative cursor-pointer border-2 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300
                                                    ${isSelected 
                                                        ? 'border-brand-primary bg-brand-light shadow-md scale-[1.02]' 
                                                        : 'border-slate-100 bg-white hover:border-brand-silver hover:bg-slate-50'}`}
                                            >
                                                {isSelected && (
                                                    <div className="absolute top-3 right-3 text-brand-primary">
                                                        <CheckCircle2 size={20} fill="currentColor" className="text-white" />
                                                    </div>
                                                )}
                                                <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${isSelected ? 'bg-white text-brand-primary' : 'bg-slate-100 text-slate-400'}`}>
                                                    <Icon size={32} strokeWidth={1.5} />
                                                </div>
                                                <span className={`text-sm font-bold text-center ${isSelected ? 'text-brand-dark' : 'text-slate-500'}`}>
                                                    {type.label}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Step 2: Details */}
                        {step === 2 && (
                            <div className="animate-fade-in-up space-y-8">
                                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-brand-light text-brand-primary flex items-center justify-center text-sm">2</span>
                                    Project Details
                                </h3>
                                
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <label className="flex justify-between text-sm font-bold text-slate-700 mb-6">
                                        <span>Estimated Budget</span>
                                        <span className="text-brand-primary bg-white px-3 py-1 rounded-lg shadow-sm border border-slate-100">${formData.budget.toLocaleString()}+</span>
                                    </label>
                                    <input 
                                        type="range" 
                                        min="10000" 
                                        max="500000" 
                                        step="5000"
                                        value={formData.budget}
                                        onChange={(e) => setFormData({...formData, budget: parseInt(e.target.value)})}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-primary hover:accent-brand-dark"
                                    />
                                    <div className="flex justify-between text-xs font-medium text-slate-400 mt-3 uppercase tracking-wide">
                                        <span>$10k</span>
                                        <span>$500k+</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Timeline</label>
                                        <div className="relative">
                                            <select 
                                                className="w-full appearance-none border border-slate-200 rounded-xl p-4 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all cursor-pointer"
                                                value={formData.timeline}
                                                onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                                            >
                                                <option>ASAP</option>
                                                <option>1-3 Months</option>
                                                <option>3-6 Months</option>
                                                <option>6+ Months</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                                                <Clock size={16} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Zip Code</label>
                                        <input 
                                            type="text" 
                                            placeholder="92101"
                                            className="w-full border border-slate-200 rounded-xl p-4 bg-white text-slate-700 font-medium placeholder:text-slate-300 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                                            value={formData.zipCode}
                                            onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Contact */}
                        {step === 3 && (
                            <div className="animate-fade-in-up space-y-6">
                                <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-brand-light text-brand-primary flex items-center justify-center text-sm">3</span>
                                    Contact Info
                                </h3>

                                <div className="bg-blue-50/50 p-4 rounded-xl flex items-start gap-3 border border-blue-100">
                                    <ShieldCheck className="text-brand-primary shrink-0 mt-0.5" size={20} />
                                    <p className="text-sm text-slate-600 leading-snug">
                                        Your information is secure. We are a licensed contractor ({LICENSE_NUMBER}) committed to privacy.
                                    </p>
                                </div>

                                <div className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                                        <input 
                                            type="text" 
                                            placeholder="John Doe"
                                            required
                                            className="w-full border border-slate-200 rounded-xl p-4 bg-white text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email</label>
                                            <input 
                                                type="email" 
                                                placeholder="john@example.com"
                                                required
                                                className="w-full border border-slate-200 rounded-xl p-4 bg-white text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Phone</label>
                                            <input 
                                                type="tel" 
                                                placeholder="(555) 123-4567"
                                                required
                                                className="w-full border border-slate-200 rounded-xl p-4 bg-white text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 pt-2 px-1">
                                    <input 
                                        type="checkbox" 
                                        id="subscribe"
                                        checked={formData.subscribe}
                                        onChange={(e) => setFormData({...formData, subscribe: e.target.checked})}
                                        className="w-5 h-5 text-brand-primary rounded border-slate-300 focus:ring-brand-primary cursor-pointer"
                                    />
                                    <label htmlFor="subscribe" className="text-sm text-slate-600 cursor-pointer select-none">
                                        Send me renovation tips and market updates.
                                    </label>
                                </div>
                            </div>
                        )}
                    </form>
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center sticky bottom-0 z-10">
                    {step > 1 ? (
                        <button 
                            type="button" 
                            onClick={handleBack}
                            className="text-slate-500 font-bold hover:text-slate-800 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-200/50 transition-colors"
                        >
                            <ArrowLeft size={18} /> Back
                        </button>
                    ) : (
                        <div></div>
                    )}

                    {step < 3 ? (
                        <button 
                            type="button" 
                            onClick={handleNext}
                            disabled={step === 1 && !formData.projectType}
                            className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all transform shadow-lg
                                ${step === 1 && !formData.projectType 
                                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none' 
                                    : 'bg-brand-primary text-white hover:bg-brand-dark hover:scale-[1.02] hover:shadow-brand-primary/30'}`}
                        >
                            Next Step <ArrowRight size={18} />
                        </button>
                    ) : (
                        <button 
                            type="submit"
                            onClick={handleSubmit} // Explicitly calling for outside form button
                            disabled={isSubmitting}
                            className="flex items-center gap-2 px-10 py-4 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-dark transition-all transform hover:scale-[1.02] shadow-xl hover:shadow-brand-primary/30 disabled:opacity-70 disabled:cursor-wait"
                        >
                            {isSubmitting ? 'Processing...' : 'Get Free Estimate'}
                        </button>
                    )}
                </div>
            </>
        )}
      </div>
    </div>
  );
};
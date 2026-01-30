import React, { createContext, useContext, useState } from 'react';

interface QuoteContextType {
  isOpen: boolean;
  openModal: (projectType?: string) => void;
  closeModal: () => void;
  prefilledType: string;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledType, setPrefilledType] = useState('');

  const openModal = (projectType: string = '') => {
    setPrefilledType(projectType);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPrefilledType('');
  };

  return (
    <QuoteContext.Provider value={{ isOpen, openModal, closeModal, prefilledType }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuoteModal = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteProvider');
  }
  return context;
};
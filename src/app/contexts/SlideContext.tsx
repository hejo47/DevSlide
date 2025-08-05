"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SlideContextType {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  totalSlide: number;
  setTotalSlide: (total: number) => void;
}

const SlideContext = createContext<SlideContextType | undefined>(undefined);

export const useSlideContext = () => {
  const context = useContext(SlideContext);
  if (context === undefined) {
    throw new Error('useSlideContext must be used within a SlideProvider');
  }
  return context;
};

interface SlideProviderProps {
  children: ReactNode;
}

export const SlideProvider: React.FC<SlideProviderProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlide, setTotalSlide] = useState(0);

  const value = {
    currentSlide,
    setCurrentSlide,
    totalSlide,
    setTotalSlide,
  };

  return (
    <SlideContext.Provider value={value}>
      {children}
    </SlideContext.Provider>
  );
}; 
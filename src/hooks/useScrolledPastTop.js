// src/hooks/useScrolledPastTop.js
import { useState, useEffect } from 'react';

export function useScrolledPastTop(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.pageYOffset > threshold;
      
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, threshold]);

  return scrolled; // Returns true if scrolled down, false if at the top (or near it)
}
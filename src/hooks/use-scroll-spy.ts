
import { useState, useEffect } from 'react';

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      let currentSection: string | null = null;
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return activeSection;
}

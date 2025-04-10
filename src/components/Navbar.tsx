
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled 
        ? "bg-white/90 backdrop-blur-md py-3 shadow-sm" 
        : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="font-montserrat font-bold text-xl">
          UX Research
        </a>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center p-2"
        >
          <span className={cn(
            "block w-6 h-0.5 bg-foreground transition-all duration-300 mb-1.5",
            mobileMenuOpen && "rotate-45 translate-y-2"
          )} />
          <span className={cn(
            "block w-6 h-0.5 bg-foreground transition-all duration-300 mb-1.5",
            mobileMenuOpen && "opacity-0"
          )} />
          <span className={cn(
            "block w-6 h-0.5 bg-foreground transition-all duration-300",
            mobileMenuOpen && "-rotate-45 -translate-y-2"
          )} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#hero" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      <nav className={cn(
        "md:hidden absolute w-full bg-white/95 backdrop-blur-md transition-all duration-300 overflow-hidden border-b",
        mobileMenuOpen ? "max-h-60 py-4" : "max-h-0"
      )}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a 
            href="#hero" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-foreground hover:text-primary transition-colors py-2"
          >
            Home
          </a>
          <a 
            href="#projects" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-foreground hover:text-primary transition-colors py-2"
          >
            Projects
          </a>
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-foreground hover:text-primary transition-colors py-2"
          >
            About
          </a>
          <Button 
            onClick={() => setMobileMenuOpen(false)}
            asChild 
            className="w-full"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

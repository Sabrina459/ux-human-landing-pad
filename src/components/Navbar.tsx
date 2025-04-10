
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
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
    <header className={`fixed w-full z-50 ${scrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="font-bold text-xl">
          UX Research
        </a>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded border border-gray-300"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          Menu
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#hero" className="hover:text-primary transition-colors">Home</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <Button asChild>
            <a href="#contact">Contact</a>
          </Button>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-b py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#hero" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-primary"
            >
              Home
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-primary"
            >
              Projects
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-primary"
            >
              About
            </a>
            <Button 
              onClick={() => setMobileMenuOpen(false)}
              asChild 
              className="w-full"
            >
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

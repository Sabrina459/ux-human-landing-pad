
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const Index = () => {
  const activeSection = useScrollSpy();
  
  useEffect(() => {
    // Animate content that's in view on initial load
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

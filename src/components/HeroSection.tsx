
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <section 
      id="hero" 
      ref={sectionRef} 
      className="min-h-screen pt-20 flex flex-col justify-center relative"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex flex-col space-y-4 md:space-y-6 md:w-2/3">
            <span className="text-primary font-medium tracking-wide text-sm md:text-base">
              UX RESEARCH PORTFOLIO
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Creating Human-Centered <br className="hidden sm:inline" /> 
              <span className="text-primary">Design Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Exploring the intersection of human behavior, technology, and research
              to design experiences that are intuitive, accessible, and impactful.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#about">About Me</a>
              </Button>
            </div>
          </div>
          <div className="relative md:w-1/3 aspect-square md:aspect-auto">
            <div className="bg-gradient-to-br from-blue-500/20 to-violet-500/20 absolute inset-0 rounded-full blur-3xl"></div>
            <div className="relative bg-white/80 backdrop-blur p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-muted-foreground mb-6">Years Experience</div>
              
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-muted-foreground mb-6">Research Projects</div>
              
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-muted-foreground">User Interviews</div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#projects" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to projects"
      >
        <ArrowDownIcon className="h-8 w-8 text-primary" />
      </a>
    </section>
  );
};

export default HeroSection;

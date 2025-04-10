
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen pt-20 flex flex-col justify-center relative fade-in-section"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            UX RESEARCH PORTFOLIO
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Creating Human-Centered Design Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Exploring the intersection of human behavior, technology, and research
            to design experiences that are intuitive, accessible, and impactful.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#about">About Me</a>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 space-y-6 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="text-4xl font-bold text-primary">5+</div>
              <div className="ml-4 text-lg text-muted-foreground">Years Experience</div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="text-4xl font-bold text-primary">20+</div>
              <div className="ml-4 text-lg text-muted-foreground">Research Projects</div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="text-4xl font-bold text-primary">100+</div>
              <div className="ml-4 text-lg text-muted-foreground">User Interviews</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <p className="mb-2 text-sm text-muted-foreground">Scroll to explore</p>
        <a 
          href="#projects" 
          className="bg-primary/10 p-2 rounded-full animate-bounce"
          aria-label="Scroll to projects"
        >
          <ArrowDownIcon className="h-6 w-6 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

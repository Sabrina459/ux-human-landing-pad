
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, Award, FileText, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen pt-28 pb-24 flex flex-col justify-center relative fade-in-section"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:gap-12">
          <div className="flex-1 mb-12 md:mb-0">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              UX RESEARCH PORTFOLIO
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Creating Human-Centered Design Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Exploring the intersection of human behavior, technology, and research
              to design experiences that are intuitive, accessible, and impactful.
            </p>
            <div className="flex flex-wrap gap-6 mt-6">
              <Button size="lg" asChild className="text-base px-8 py-6">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-base px-8 py-6">
                <a href="#about">About Me</a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:min-w-[280px]">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">5+</div>
                <div className="text-base text-muted-foreground">Years Experience</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">20+</div>
                <div className="text-base text-muted-foreground">Research Projects</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">100+</div>
                <div className="text-base text-muted-foreground">User Interviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <p className="mb-3 text-sm text-muted-foreground">Scroll to explore</p>
        <a 
          href="#projects" 
          className="bg-primary/10 p-3 rounded-full animate-bounce"
          aria-label="Scroll to projects"
        >
          <ArrowDownIcon className="h-6 w-6 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

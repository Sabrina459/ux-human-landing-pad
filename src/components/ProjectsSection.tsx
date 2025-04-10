
import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLinkIcon } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Cognitive Load Assessment in UI Design",
    description: "Research on how different UI elements affect cognitive load in users, with recommendations for designing interfaces that reduce mental effort.",
    tags: ["Cognitive Psychology", "UI Design", "Usability Testing"],
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    title: "Accessibility in Mobile Banking Applications",
    description: "A comprehensive study on accessibility barriers in mobile banking apps and proposals for inclusive design patterns.",
    tags: ["Accessibility", "Mobile Design", "Inclusive UX"],
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    title: "User Behavior Analysis for E-learning Platforms",
    description: "Research exploring how users interact with e-learning interfaces, identifying patterns that contribute to successful learning outcomes.",
    tags: ["E-learning", "Behavioral Analysis", "UX Research"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    title: "Cross-cultural UX Design Considerations",
    description: "Investigation into how cultural factors influence user expectations and interactions with digital products across different markets.",
    tags: ["Cultural UX", "Global Design", "User Research"],
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80",
    link: "#"
  }
];

const ProjectsSection = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
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
      observerRef.current?.observe(el);
    });
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-secondary/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-on-scroll">
          <span className="text-primary font-medium tracking-wide text-sm md:text-base">
            RESEARCH PROJECTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured UX Research Work
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Exploring human behavior and designing better experiences through rigorous research and thoughtful analysis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden animate-on-scroll">
              <div className="h-60 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                <CardDescription className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <a href={project.link} className="flex items-center gap-2">
                    View Case Study <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-on-scroll">
          <Button size="lg" variant="secondary" asChild>
            <a href="#" className="flex items-center gap-2">
              See All Projects <ExternalLinkIcon className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

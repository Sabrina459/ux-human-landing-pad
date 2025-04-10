
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpenIcon, BriefcaseIcon, GraduationCapIcon, UsersIcon } from "lucide-react";

const skills = [
  "User Research", "Usability Testing", "Ethnographic Studies",
  "Cognitive Walkthroughs", "A/B Testing", "Information Architecture",
  "Prototyping", "Journey Mapping", "Survey Design",
  "Accessibility Evaluation", "Heuristic Analysis", "Data Visualization"
];

const AboutSection = () => {
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
    <section id="about" ref={sectionRef} className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-on-scroll">
          <span className="text-primary font-medium tracking-wide text-sm md:text-base">
            ABOUT ME
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Human-Centered Research & Design
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Dedicated to understanding human behavior and creating experiences that are intuitive, accessible, and enjoyable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col space-y-6 animate-on-scroll">
            <h3 className="text-2xl font-semibold">My Approach</h3>
            <p className="text-muted-foreground">
              I believe that great design begins with a deep understanding of the people who will use it. My research approach combines rigorous methods with empathy to uncover insights that drive meaningful design decisions.
            </p>
            <p className="text-muted-foreground">
              With a background in cognitive psychology and human factors, I specialize in identifying the subtle aspects of user behavior that often go unnoticed but significantly impact the user experience.
            </p>
            
            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-4">Experience & Education</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <BriefcaseIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Senior UX Researcher</h4>
                    <p className="text-muted-foreground text-sm">Tech Innovation Labs, 2020 - Present</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <UsersIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Human Factors Specialist</h4>
                    <p className="text-muted-foreground text-sm">Global Design Agency, 2018 - 2020</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <GraduationCapIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Ph.D. in Human-Computer Interaction</h4>
                    <p className="text-muted-foreground text-sm">University Research Institute, 2018</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <BookOpenIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">M.S. in Cognitive Psychology</h4>
                    <p className="text-muted-foreground text-sm">State University, 2015</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6">Research Skills</h3>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="bg-secondary p-3 rounded-lg text-center text-sm font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-6">Research Philosophy</h3>
              <Card>
                <CardContent className="p-6">
                  <blockquote className="border-l-4 border-primary pl-4 italic">
                    "The most powerful research doesn't just answer questions—it reveals the questions we should have been asking all along."
                  </blockquote>
                  <p className="mt-6 text-muted-foreground">
                    My work is guided by the belief that good research balances rigor with pragmatism, and that the most valuable insights often come from observing the unexpected and being willing to challenge assumptions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

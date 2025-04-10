
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon, TwitterIcon } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-secondary/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-on-scroll">
          <span className="text-primary font-medium tracking-wide text-sm md:text-base">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Let's Discuss Your Project
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Interested in collaboration or have questions about my research? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 animate-on-scroll">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MailIcon className="h-5 w-5 text-primary" />
                  <span>research@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPinIcon className="h-5 w-5 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Connect Online</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="LinkedIn">
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="Twitter">
                      <TwitterIcon className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="GitHub">
                      <GithubIcon className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="p-6 bg-primary/10 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Research Collaboration</h3>
              <p className="text-muted-foreground">
                I'm always open to collaborating on UX and human factors research projects, particularly those focused on cognitive accessibility, education technology, or healthcare interfaces.
              </p>
            </div>
          </div>
          
          <Card className="animate-on-scroll">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


import { cn } from "@/lib/utils";

const footerItems = [
  {
    title: "Pages",
    items: [
      { name: "Home", href: "#hero" },
      { name: "Projects", href: "#projects" },
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
    ]
  },
  {
    title: "Research Areas",
    items: [
      { name: "Cognitive Psychology", href: "#" },
      { name: "User Testing", href: "#" },
      { name: "Accessibility", href: "#" },
      { name: "Human Factors", href: "#" },
    ]
  },
  {
    title: "Resources",
    items: [
      { name: "Published Papers", href: "#" },
      { name: "Research Methods", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "UX Blog", href: "#" },
    ]
  }
];

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("bg-secondary/70 py-12 border-t", className)}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="font-montserrat font-bold text-xl">
              UX Research
            </a>
            <p className="text-muted-foreground mt-4 text-sm">
              Exploring the intersection of human behavior and technology through rigorous research and thoughtful design.
            </p>
          </div>
          
          {footerItems.map((group, index) => (
            <div key={index} className="space-y-3">
              <h3 className="font-semibold">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href={item.href} 
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} UX Research Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Designed with a human-centered approach
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

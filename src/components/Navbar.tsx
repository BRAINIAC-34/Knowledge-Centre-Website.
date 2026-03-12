import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "+919405543053";
const WHATSAPP_URL = `https://wa.me/919405543053`;

const Navbar = () => {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-md">
            <span className="text-primary-foreground font-heading font-extrabold text-xl">K</span>
          </div>
          <div>
            <h1 className="font-heading font-extrabold text-xl text-foreground leading-tight">Knowledge Centre</h1>
            <p className="text-sm text-primary font-semibold">Online Learning Platform</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href={`tel:${PHONE_NUMBER}`} className="hidden lg:flex items-center gap-2 text-sm font-medium text-foreground">
            <Phone className="w-4 h-4" />
            {PHONE_NUMBER}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="destructive" size="sm" className="rounded-full bg-[hsl(0,80%,55%)] hover:bg-[hsl(0,80%,48%)] text-[hsl(0,0%,100%)]">
              Enquire Now
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

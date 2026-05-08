import { Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "+919405543053";
const WHATSAPP_URL = `https://wa.me/919405543053`;

const Navbar = () => {
  const { pathname } = useLocation();
  const navLinks = [
    { label: "Tuitions", href: "/" },
    { label: "School", href: "/school" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-[hsl(264,45%,18%)]/25 bg-card/95 shadow-[0_10px_35px_hsl(264_45%_18%/0.08)] backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-md">
            <span className="text-primary-foreground font-heading font-extrabold text-xl">K</span>
          </div>
          <div>
            <h1 className="font-heading font-extrabold text-xl text-foreground leading-tight">Knowledge Centre</h1>
            <p className="text-sm text-primary font-semibold">Tuitions & Preschool</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <a
                key={`${link.label}-${link.href}`}
                href={link.href}
                className={`relative pb-1 text-sm font-semibold transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[hsl(264,45%,18%)] transition-transform ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
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

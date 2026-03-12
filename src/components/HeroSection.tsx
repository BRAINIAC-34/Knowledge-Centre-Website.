import { Monitor, Users, Award, Sparkles, ArrowRight, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/919405543053";

const HeroSection = () => {
  const stats = [
    { value: "500+", label: "Students Online" },
    { value: "95%", label: "Success Rate" },
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Board Toppers" },
  ];

  const cards = [
    { icon: Monitor, title: "8th – 10th", desc: "Live Online Classes", bg: "bg-card-yellow" },
    { icon: Users, title: "Commerce", desc: "11th & 12th Accounting", bg: "bg-card-green" },
    { icon: Award, title: "95% Success", desc: "Distinction Rate", bg: "bg-card-yellow" },
    { icon: Sparkles, title: "Vedic Maths", desc: "Weekend Batches", bg: "bg-card-pink" },
  ];

  return (
    <section id="home" className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-card rounded-full px-4 py-2 mb-8 border border-border shadow-sm">
              <Wifi className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Live Online Classes | Join from Anywhere</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Learn From Home,
              <br />
              <span className="text-primary">Excel Everywhere</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Premier online tuition classes helping students from 8th to 12th grade achieve academic excellence through expert guidance and innovative virtual teaching methods. Join from anywhere in India!
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#contact">
                <Button variant="hero" size="lg">
                  Book Free Demo Class <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="#services">
                <Button variant="heroOutline" size="lg">
                  View Courses
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-heading font-extrabold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -top-2 right-0 z-10"
            >
              <Button variant="accent" size="sm" className="rounded-full shadow-lg">
                <Monitor className="w-4 h-4" /> Live Classes!
              </Button>
            </a>

            <div className="bg-card rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-4">
              {cards.map((card) => (
                <div key={card.title} className={`${card.bg} rounded-xl p-5`}>
                  <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center mb-4 shadow-sm">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

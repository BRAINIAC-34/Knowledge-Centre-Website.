import { Monitor, FileText, GraduationCap, BookOpen, Award, Star, Video, Clock } from "lucide-react";

const features = [
  { icon: Monitor, title: "Live Interactive Classes", desc: "Real-time online sessions with live Q&A" },
  { icon: FileText, title: "Regular Assessments", desc: "Weekly tests and monthly progress reports" },
  { icon: GraduationCap, title: "Experienced Faculty", desc: "Qualified teachers with proven track record" },
  { icon: BookOpen, title: "Study Material", desc: "Digital notes and practice papers provided" },
];

const highlights = [
  { icon: Award, title: "Double Graduate Faculty", desc: "Our accounting faculty holds double graduation degree with years of teaching experience" },
  { icon: Star, title: "Proven Track Record", desc: "Consistently producing board toppers and distinction holders every year" },
  { icon: Video, title: "Live Interactive Classes", desc: "Real-time online sessions with live Q&A and screen sharing for better understanding" },
  { icon: Clock, title: "Recorded Sessions", desc: "Access class recordings anytime for revision and catch up on missed classes" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20" style={{ background: "var(--hero-gradient)" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">
            Your Trusted Partner in Online Education
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Based in Pune, we bring quality education to your doorstep through our live online classes. Our mission is to provide accessible, high-quality education that builds strong fundamentals and prepares students for future success - no matter where they are in India.
          </p>
          <p className="text-accent font-semibold mt-3">Join from anywhere with just an internet connection!</p>
        </div>

        <p className="text-muted-foreground max-w-3xl mx-auto text-center mb-12">
          Our faculty comprises experienced teachers who are passionate about education. We believe every child has the potential to excel, and with the right guidance and support through our interactive online platform, they can achieve remarkable results.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {features.map((f) => (
            <div key={f.title} className="bg-card rounded-xl p-6 text-center border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading font-bold text-foreground mb-1">{f.title}</h4>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-heading font-bold text-foreground mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

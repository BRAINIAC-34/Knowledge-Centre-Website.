import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/919405543053";

const VedicMathsSection = () => {
  const benefits = [
    { title: "Lightning Fast Calculations", desc: "Multiply large numbers mentally in seconds using ancient Vedic techniques" },
    { title: "Improved Accuracy", desc: "Build strong mental math skills that reduce calculation errors" },
    { title: "Save Time in Exams", desc: "Solve problems faster and get more time for difficult questions" },
    { title: "Competitive Edge", desc: "Excel in competitive exams like NTSE, Olympiads, and entrance tests" },
  ];

  return (
    <section className="py-20 bg-foreground text-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Special Program</span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mt-2 mb-4">
            Master Vedic Mathematics
          </h2>
          <p className="text-card/70 max-w-2xl mx-auto mb-8">
            Discover the ancient Indian system of mathematics that makes complex calculations simple. Our Vedic Maths program teaches powerful sutras and techniques that can dramatically improve your mathematical abilities.
          </p>
        </div>

        {/* Quick Example */}
        <div className="max-w-md mx-auto bg-card/10 rounded-2xl p-6 text-center mb-12 border border-card/20">
          <p className="text-sm text-card/60 mb-2">Quick Example:</p>
          <p className="font-heading text-2xl font-bold mb-2">98 × 97 = ?</p>
          <p className="text-primary font-medium mb-1">Vedic Method: (98-3) | (2×3) = 9506</p>
          <p className="text-sm text-accent font-semibold">Solved in under 3 seconds!</p>
        </div>

        <div className="text-center mb-12">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg">Join Vedic Maths Batch</Button>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-card/5 border border-card/10 rounded-xl p-6">
              <h3 className="font-heading font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-card/60">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VedicMathsSection;

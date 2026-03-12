import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "PS",
    name: "Priya Sharma",
    grade: "10th Grade - 94%",
    text: "The teachers here are amazing! I improved my maths score from 65% to 94%. The Vedic maths techniques helped me solve problems much faster in the board exam.",
  },
  {
    initials: "RP",
    name: "Rahul Patil",
    grade: "12th Commerce - 89%",
    text: "Sir's accounting classes are exceptional. The practical approach and regular practice made complex topics easy to understand. Highly recommended!",
  },
  {
    initials: "SK",
    name: "Sneha Kulkarni",
    grade: "9th Grade - 91%",
    text: "I joined for science and maths. The personal attention and doubt-clearing sessions really helped me build strong concepts. Thank you!",
  },
  {
    initials: "AD",
    name: "Amit Deshmukh",
    grade: "10th Grade - 96%",
    text: "Best tuition in Dhanori! The regular tests and feedback system kept me on track. I scored distinction in all subjects.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground">
            Hear from our students and parents about their transformative learning experience with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{t.initials}</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-foreground">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Trusted by families across Dhanori and Pune</p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex -space-x-2">
              {testimonials.map((t) => (
                <div key={t.initials} className="w-8 h-8 rounded-full bg-primary/10 border-2 border-card flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{t.initials}</span>
                </div>
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">+500 Happy Students</span>
            <span className="text-sm text-primary font-semibold">4.9/5 Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { BookOpen, Calculator, Brain, CheckCircle } from "lucide-react";

const programs = [
  {
    title: "8th to 10th Grade Online Tuition",
    description: "Live interactive online coaching for all subjects with focus on board exam preparation. Join from anywhere in India with just an internet connection!",
    forLabel: "8th, 9th, 10th",
    subjects: ["Mathematics", "Science", "English", "Social Studies"],
    features: ["Live interactive classes", "Regular tests & assessments", "Personal attention", "Recorded sessions available"],
    icon: BookOpen,
  },
  {
    title: "11th & 12th Commerce - Online Accounting",
    description: "Expert online accounting classes by a double graduate professional. Master book-keeping, financial statements, and advanced accounting concepts from home.",
    forLabel: "11th, 12th Commerce",
    subjects: ["Accountancy", "Book-Keeping", "Financial Statements", "Cost Accounting"],
    features: ["Double graduate faculty", "Screen sharing & demos", "Board pattern practice", "Career guidance"],
    icon: Calculator,
  },
  {
    title: "Vedic Mathematics Online",
    description: "Learn ancient Indian calculation techniques to solve complex math problems in seconds. Interactive online sessions with live demonstrations.",
    forLabel: "All Students",
    subjects: ["Mental Calculations", "Speed Math", "Shortcuts & Tricks", "Competitive Exam Prep"],
    features: ["10x faster calculations", "Live practice sessions", "Competition ready", "Fun learning"],
    icon: Brain,
  },
];

const ProgramsSection = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Programs</span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">
            Comprehensive Learning Programs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tailored coaching programs designed to help students excel in academics and develop strong fundamentals for future success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.title} className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <program.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{program.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{program.description}</p>

              <div className="mb-4">
                <span className="text-xs font-semibold text-muted-foreground">For:</span>
                <span className="ml-2 text-sm font-medium text-foreground">{program.forLabel}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {program.subjects.map((s) => (
                  <span key={s} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">{s}</span>
                ))}
              </div>

              <ul className="space-y-2">
                {program.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

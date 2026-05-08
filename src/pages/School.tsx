import {
  ArrowRight,
  Baby,
  BookOpen,
  CalendarCheck,
  HeartHandshake,
  Home,
  Palette,
  ShieldCheck,
  Sparkles,
  Stars,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Playgroup",
    age: "Early learners",
    description: "A gentle first step into school with music, stories, sensory play, and social routines.",
    icon: Baby,
  },
  {
    title: "Nursery",
    age: "Foundation years",
    description: "Language, numbers, movement, and creative activities that build confidence every day.",
    icon: Palette,
  },
  {
    title: "Junior KG",
    age: "School readiness",
    description: "Activity-based learning with pre-reading, writing readiness, concepts, and guided discovery.",
    icon: BookOpen,
  },
  {
    title: "Senior KG",
    age: "Primary ready",
    description: "Stronger literacy, numeracy, communication, and habits for a smooth move to primary school.",
    icon: Stars,
  },
];

const features = [
  { title: "Caring Teachers", description: "Warm guidance from staff who understand early childhood needs.", icon: HeartHandshake },
  { title: "Safe Environment", description: "A nurturing preschool space where children feel protected and comfortable.", icon: ShieldCheck },
  { title: "Holistic Growth", description: "Focus on social, emotional, physical, and academic development.", icon: Sparkles },
  { title: "Parent Connect", description: "Clear communication with parents about progress, routines, and milestones.", icon: Users },
];

const rhythm = [
  "Circle time and stories",
  "Phonics and early literacy",
  "Numbers through games",
  "Art, craft, music, and movement",
  "Outdoor and indoor play",
  "Festival and theme-based activities",
];

const School = () => {
  return (
    <div className="school-page min-h-screen bg-background text-foreground">
      <Navbar />

      <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,hsl(48_100%_88%)_0,hsl(266_100%_97%)_32%,hsl(263_88%_94%)_100%)]">
        <div className="absolute left-8 top-20 h-28 w-28 rounded-full bg-[hsl(48_100%_70%)]/40 blur-2xl school-float" />
        <div className="absolute bottom-12 right-10 h-40 w-40 rounded-full bg-[hsl(280_80%_72%)]/30 blur-3xl school-float-delayed" />

        <div className="container relative mx-auto grid gap-12 px-4 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/80 px-4 py-2 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Guru Global Preschool under Knowledge Centre</span>
            </div>

            <h1 className="font-heading text-4xl font-extrabold leading-tight text-foreground md:text-6xl lg:text-7xl">
              A joyful start at
              <span className="mt-2 block text-primary">Guru Global Preschool</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A warm preschool experience built around play, curiosity, confidence, and holistic early learning for your child's first school years.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact">
                <Button variant="hero" size="lg" className="bg-primary hover:bg-primary/90">
                  Enquire for Admission <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#programs">
                <Button variant="heroOutline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  View Programs
                </Button>
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-3">
              {["Playgroup", "Nursery", "Junior & Senior KG"].map((item) => (
                <div key={item} className="rounded-2xl border border-primary/10 bg-card/75 p-4 text-center shadow-sm backdrop-blur">
                  <p className="text-sm font-bold text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -left-4 top-8 z-10 rounded-2xl bg-[hsl(48_100%_72%)] px-4 py-3 font-heading font-bold text-[hsl(264_45%_20%)] shadow-lg school-float">
              Learn
            </div>
            <div className="absolute -right-2 bottom-8 z-10 rounded-2xl bg-[hsl(158_65%_82%)] px-4 py-3 font-heading font-bold text-[hsl(264_45%_20%)] shadow-lg school-float-delayed">
              Play
            </div>

            <div className="rounded-[2rem] border border-primary/10 bg-card/80 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-[linear-gradient(145deg,hsl(267_86%_58%),hsl(284_70%_66%))] p-6 text-primary-foreground">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 shadow-inner">
                  <span className="font-heading text-4xl font-extrabold">G</span>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">Preschool</p>
                <h2 className="mt-3 font-heading text-4xl font-extrabold leading-tight">Growing bright little minds</h2>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {features.slice(0, 4).map((feature) => (
                    <div key={feature.title} className="rounded-2xl bg-white/15 p-4">
                      <feature.icon className="mb-3 h-5 w-5" />
                      <p className="text-sm font-bold">{feature.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">About The School</span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-foreground md:text-4xl">
              A preschool where children feel seen, safe, and excited to learn
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground">
            <p>
              Guru Global Preschool brings early education under the Knowledge Centre umbrella with a child-first approach: playful learning, caring guidance, and steady development across academics, confidence, communication, and values.
            </p>
            <p>
              The goal is simple: help every child enjoy school, build strong habits, make friends, and become ready for the next stage with confidence.
            </p>
          </div>
        </div>
      </section>

      <section id="programs" className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Programs</span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-foreground md:text-4xl">Preschool programs for every early stage</h2>
            <p className="mt-4 text-muted-foreground">
              Each program balances playful exploration with age-appropriate learning goals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <div key={program.title} className="rounded-3xl border border-primary/10 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <program.icon className="h-7 w-7 text-primary" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{program.age}</p>
                <h3 className="mt-2 font-heading text-xl font-extrabold text-foreground">{program.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[2rem] bg-[hsl(264_72%_20%)] p-8 text-white shadow-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[hsl(48_100%_75%)]">Daily Rhythm</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl">Learning that feels natural for children</h2>
            <p className="mt-4 text-white/75">
              Preschool learning works best when children can touch, move, speak, sing, imagine, and repeat. The school page highlights that experience clearly for parents.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {rhythm.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                  <CalendarCheck className="h-5 w-5 text-[hsl(48_100%_75%)]" />
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-primary/10 bg-card p-6 shadow-sm">
                <feature.icon className="mb-4 h-7 w-7 text-primary" />
                <h3 className="font-heading text-lg font-extrabold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,hsl(263_88%_94%),hsl(48_100%_92%))] py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 rounded-[2rem] border border-primary/10 bg-card/85 p-8 shadow-xl backdrop-blur lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Admissions Open</span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold text-foreground md:text-4xl">
                Looking for the right preschool start?
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Enquire for Playgroup, Nursery, Junior KG, and Senior KG. We can guide parents on program fit, admission process, and the next visit or call.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a href="#contact">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Start Admission Enquiry
                </Button>
              </a>
              <a href="/">
                <Button variant="heroOutline" size="lg" className="w-full border-primary text-primary hover:bg-primary/10 sm:w-auto">
                  View Tuitions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Life At School</span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-foreground md:text-4xl">A warm, playful, parent-friendly experience</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { title: "Creative Corners", icon: Palette },
              { title: "Safe Classrooms", icon: Home },
              { title: "Growing Together", icon: Users },
            ].map((item) => (
              <div key={item.title} className="flex min-h-52 flex-col justify-end overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,hsl(267_86%_58%),hsl(48_100%_78%))] p-6 text-white shadow-lg">
                <item.icon className="mb-5 h-10 w-10" />
                <h3 className="font-heading text-2xl font-extrabold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/80">Add real school photos here later to make this section more personal.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection audience="school" />
      <Footer />
    </div>
  );
};

export default School;

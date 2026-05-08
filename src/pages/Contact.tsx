import { useState } from "react";
import { GraduationCap, School as SchoolIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

type ContactAudience = "tuition" | "school";

const options = [
  {
    value: "tuition" as const,
    label: "Tuitions",
    description: "Online classes, commerce coaching, and Vedic Maths enquiries.",
    icon: GraduationCap,
  },
  {
    value: "school" as const,
    label: "School",
    description: "Guru Global Preschool admissions, visits, and program enquiries.",
    icon: SchoolIcon,
  },
];

const Contact = () => {
  const [audience, setAudience] = useState<ContactAudience>("tuition");
  const isSchool = audience === "school";

  return (
    <div className={`${isSchool ? "school-page" : ""} min-h-screen bg-background text-foreground`}>
      <Navbar />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,hsl(48_100%_91%)_0,hsl(var(--background))_48%,hsl(var(--card))_100%)] py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[hsl(264,45%,18%)] shadow-xl">
            <span className="font-heading text-4xl font-extrabold text-white">K</span>
          </div>

          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contact Knowledge Centre</span>
          <h1 className="mx-auto mt-3 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            What would you like to enquire about?
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Choose the right section first, and the full contact form with the correct details will appear below.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-2">
            {options.map((option) => {
              const selected = audience === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setAudience(option.value)}
                  className={`rounded-3xl border-2 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                    selected
                      ? "border-[hsl(264,45%,18%)] bg-card"
                      : "border-border bg-card/70 hover:border-[hsl(264,45%,18%)]/40"
                  }`}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <option.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        selected ? "bg-[hsl(264,45%,18%)] text-white" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {selected ? "Selected" : "Choose"}
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl font-extrabold text-foreground">{option.label}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{option.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <ContactSection key={audience} audience={audience} />
      <Footer />
    </div>
  );
};

export default Contact;

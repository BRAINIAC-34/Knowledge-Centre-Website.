const schedule = [
  { grade: "8th Grade", timing: "7:00 AM - 9:00 AM", days: "Mon - Sat" },
  { grade: "9th Grade", timing: "9:30 AM - 11:30 AM", days: "Mon - Sat" },
  { grade: "10th Grade", timing: "4:00 PM - 6:00 PM", days: "Mon - Sat" },
  { grade: "11th Commerce", timing: "6:30 PM - 8:30 PM", days: "Tue, Thu, Sat" },
  { grade: "12th Commerce", timing: "6:30 PM - 8:30 PM", days: "Mon, Wed, Fri" },
  { grade: "Vedic Maths", timing: "10:00 AM - 1:00 PM", days: "Sat & Sun" },
];

const ScheduleSection = () => {
  return (
    <section className="py-20" style={{ background: "var(--hero-gradient)" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Schedule</span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">
            Batch Timings
          </h2>
          <p className="text-muted-foreground">
            Choose a batch that fits your schedule. We offer flexible timing options for all grades.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-card rounded-2xl border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-foreground text-card">
                <th className="text-left py-4 px-6 font-heading font-bold text-sm">Grade / Program</th>
                <th className="text-left py-4 px-6 font-heading font-bold text-sm">Timing</th>
                <th className="text-left py-4 px-6 font-heading font-bold text-sm">Days</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((s, i) => (
                <tr key={s.grade} className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}>
                  <td className="py-4 px-6 font-medium text-sm text-foreground">{s.grade}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{s.timing}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{s.days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          * Timings are subject to change. Contact us for the latest schedule.
        </p>
      </div>
    </section>
  );
};

export default ScheduleSection;

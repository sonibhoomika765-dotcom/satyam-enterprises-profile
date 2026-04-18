import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "Founded by Defence Personnel", desc: "Built on military discipline and a soldier's code of duty." },
  { title: "Trusted by Government Clients", desc: "Long-standing relationships with Armed Forces & state institutions." },
  { title: "Multi-Category Capability", desc: "IT, NCC, Textile and Defence — all under one trusted vendor." },
  { title: "Timely Delivery & Execution", desc: "On-schedule fulfillment is our non-negotiable standard." },
  { title: "GeM & Tender Expertise", desc: "Deep experience navigating government procurement processes." },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container-wide max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-semibold tracking-widest uppercase mb-5">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
            The <span className="text-accent">Satyam</span> Advantage
          </h2>
          <p className="text-muted-foreground">
            Discipline, reliability and multi-category capability — the values that define every engagement.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-5">
          {reasons.map((r) => (
            <li
              key={r.title}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-elegant hover:border-accent transition-all group"
            >
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-primary text-lg font-sans mb-1">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;

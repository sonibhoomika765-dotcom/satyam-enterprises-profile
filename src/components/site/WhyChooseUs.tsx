import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "Founded by Defence Personnel", desc: "Built on military discipline and a soldier's code of duty." },
  { title: "Trusted by Government Clients", desc: "Long-standing relationships with Armed Forces & state institutions." },
  { title: "Multi-Category Capability", desc: "IT, NCC, Textile and Defence — all under one trusted vendor." },
  { title: "Timely Delivery & Execution", desc: "On-schedule fulfillment is our non-negotiable standard." },
  { title: "GeM & Tender Expertise", desc: "Deep experience navigating government procurement processes." },
];

const presence = [
  { city: "Madhya Pradesh", role: "Head Office" },
  { city: "West Bengal", role: "Branch Office" },
  { city: "New Delhi", role: "Branch Office" },
];

const WhyChooseUs = () => {
  return (
    <section id="presence" className="section-padding bg-secondary">
      <div className="container-wide grid lg:grid-cols-2 gap-16">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-semibold tracking-widest uppercase mb-5">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
            The <span className="text-accent">Satyam</span> Advantage
          </h2>

          <ul className="space-y-5">
            {reasons.map((r) => (
              <li key={r.title} className="flex gap-4 group">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-bold text-primary text-lg font-sans mb-1">{r.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-semibold tracking-widest uppercase mb-5">
            Our Presence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
            Three States.<br /> One Standard.
          </h2>

          <div className="space-y-4">
            {presence.map((p, i) => (
              <div
                key={p.city}
                className="p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-elegant transition-all hover:border-accent group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-1">{p.role}</div>
                    <div className="text-2xl font-bold text-primary font-sans">{p.city}</div>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-gradient-navy flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-muted-foreground italic text-sm">
            Expanding across regions, delivering with consistency nationwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

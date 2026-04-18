import { MapPin, Building2, Landmark, Phone } from "lucide-react";

type Office = {
  label: string;
  city: string;
  badge: string;
  icon: typeof MapPin;
  lines: { k?: string; v: string }[];
};

const offices: Office[] = [
  {
    label: "Head Office",
    city: "Bhopal, Madhya Pradesh",
    badge: "MP",
    icon: Landmark,
    lines: [
      { v: "G-2/234, Chanakya Apartment" },
      { v: "Gulmohar Colony" },
      { v: "Bhopal — 462029" },
      { v: "Madhya Pradesh, India" },
    ],
  },
  {
    label: "Branch Office",
    city: "New Delhi",
    badge: "DL",
    icon: Building2,
    lines: [
      { k: "Floor", v: "I" },
      { k: "Building / Flat No.", v: "56" },
      { k: "Premises", v: "Gali Jatwara" },
      { k: "Road / Street", v: "Gali Jatwara Phool Mithai" },
      { k: "Landmark", v: "Near Delhi Head Post Office" },
      { k: "Locality", v: "New Delhi" },
      { k: "District", v: "Central Delhi" },
      { k: "PIN", v: "110006" },
    ],
  },
  {
    label: "Branch Office",
    city: "Simlapal, West Bengal",
    badge: "WB",
    icon: MapPin,
    lines: [
      { k: "Plot / Khatiyan", v: "Plot No. 163/412, Khatiyan No. 435" },
      { k: "Premises", v: "Patamachla Patra Villa" },
      { k: "Road / Street", v: "Bankura Taldangra Simlapal Road" },
      { k: "Landmark", v: "Near Layekpara Post Office" },
      { k: "City / Village", v: "Simlapal" },
      { k: "District", v: "Bankura" },
      { k: "State", v: "West Bengal" },
      { k: "PIN", v: "722151" },
    ],
  },
];

const Offices = () => {
  return (
    <section id="offices" className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-semibold tracking-widest uppercase mb-5">
            Our Presence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Head Offices
          </h2>
          <p className="text-muted-foreground">
            Three offices. One standard of service — expanding across regions, delivering with consistency nationwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((o) => {
            const Icon = o.icon;
            return (
              <article
                key={o.city}
                className="relative p-7 rounded-xl bg-card border border-border shadow-card hover:shadow-elegant hover:border-accent transition-all group flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-gradient-navy flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full bg-accent-soft text-accent">
                    {o.badge}
                  </span>
                </div>

                <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-1">
                  {o.label}
                </div>
                <h3 className="text-2xl font-bold text-primary font-sans mb-5 leading-tight">
                  {o.city}
                </h3>

                <div className="h-px bg-border mb-5" />

                <address className="not-italic space-y-2 text-sm flex-1">
                  {o.lines.map((l, idx) => (
                    <div key={idx} className="flex gap-2">
                      <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" />
                      <div className="leading-relaxed">
                        {l.k && (
                          <span className="text-muted-foreground font-medium">
                            {l.k}:{" "}
                          </span>
                        )}
                        <span className="text-primary font-medium">{l.v}</span>
                      </div>
                    </div>
                  ))}
                </address>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Phone className="w-4 h-4 text-accent" />
          <span>For visits, please schedule via the contact form below.</span>
        </div>
      </div>
    </section>
  );
};

export default Offices;

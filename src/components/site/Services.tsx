import { Monitor, GraduationCap, Shirt, Shield } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "IT & Electronics",
    desc: "Desktops, laptops, printers, UPS systems and complete networking solutions for government & institutional clients.",
  },
  {
    icon: GraduationCap,
    title: "NCC Supplies",
    desc: "Comprehensive NCC kits, training materials and accessories supplied to cadet units across India.",
  },
  {
    icon: Shirt,
    title: "Textile & Uniform",
    desc: "High-quality uniforms, fabrics and textile supplies for institutions, schools and defence units.",
  },
  {
    icon: Shield,
    title: "Defence & Army",
    desc: "ITC and institutional supply items tailored to the rigorous standards of the Armed Forces.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-semibold tracking-widest uppercase mb-5">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-5">
            Multi-Category Supply Capability
          </h2>
          <p className="text-muted-foreground text-lg">
            Four specialized verticals, one unified standard of excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <div className="w-14 h-14 rounded-lg bg-gradient-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-primary text-xl mb-3 font-sans">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

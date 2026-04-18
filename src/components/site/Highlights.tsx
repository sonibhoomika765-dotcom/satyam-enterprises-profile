import { BadgeCheck, Award, Handshake, Building2, TrendingUp } from "lucide-react";

const items = [
  { icon: BadgeCheck, title: "GeM Registered Seller", sub: "ID: 34A7180000639642" },
  { icon: Award, title: "9+ Years Experience", sub: "Serving since 2017" },
  { icon: Handshake, title: "Authorized OEM Partner", sub: "Genuine warranty-backed supply" },
  { icon: Building2, title: "Government & Defence", sub: "Specialized supply expertise" },
  { icon: TrendingUp, title: "Consistent Growth", sub: "10% annual growth track record" },
];

const Highlights = () => {
  return (
    <section id="highlights" className="section-padding bg-gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-widest uppercase mb-5">
            Key Highlights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Credentials That Inspire <span className="text-accent">Confidence</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-accent/40 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <it.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-white font-semibold text-base font-sans mb-1.5 leading-snug">{it.title}</h3>
              <p className="text-white/60 text-xs">{it.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;

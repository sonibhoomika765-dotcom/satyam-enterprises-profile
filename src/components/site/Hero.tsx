import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/satyam-logo.png";
import { ArrowRight, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Satyam Enterprises corporate background"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container-wide relative z-10 pt-28 pb-20">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block bg-white/95 backdrop-blur rounded-lg p-3 shadow-elegant mb-7">
            <img src={logo} alt="Satyam Enterprises official logo" className="h-20 md:h-24 w-auto object-contain" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-6 ml-0 md:ml-1">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white/90 text-xs font-medium tracking-wider uppercase">GeM Registered Seller</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            Satyam <span className="text-gradient-accent">Enterprises</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/95 font-medium mb-3">
            Multi-Category Government & Institutional Supplier
          </p>
          <p className="text-base md:text-lg text-white/75 mb-10 max-w-2xl leading-relaxed">
            Delivering Reliable Solutions Across IT, NCC, Textile & Defence Supplies — trusted by the Indian Armed Forces and government institutions since 2017.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-md bg-accent text-accent-foreground font-semibold shadow-accent hover:scale-[1.02] transition-all"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-md bg-white/10 backdrop-blur border border-white/30 text-white font-semibold hover:bg-white/20 transition-all"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl">
            {[
              { v: "9+", l: "Years Experience" },
              { v: "3", l: "State Presence" },
              { v: "10%", l: "Annual Growth" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl md:text-4xl font-bold text-white font-serif">{s.v}</div>
                <div className="text-xs md:text-sm text-white/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

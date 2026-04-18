import brandsStrip from "@/assets/brands-strip.png";

const stripBrands = [
  "HP",
  "Acer",
  "LG",
  "Lloyd",
  "Blue Star",
  "Voltas",
  "Havells",
  "Dell",
  "Samsung",
];

const otherBrands = [
  "Godrej",
  "Microtek",
  "Kyocera",
  "Brother",
  "Bluebird",
  "ALTOP",
  "Cynix",
  "INP",
];

const Monogram = ({ name }: { name: string }) => (
  <div className="group aspect-[3/2] flex flex-col items-center justify-center gap-2 px-3 rounded-lg bg-card border border-border hover:border-accent hover:shadow-card transition-all hover:-translate-y-0.5">
    <div className="h-9 w-9 rounded-md bg-gradient-navy flex items-center justify-center">
      <span className="text-primary-foreground font-bold text-sm font-serif">
        {name.charAt(0)}
      </span>
    </div>
    <span className="font-semibold text-primary text-xs tracking-tight font-sans">
      {name}
    </span>
  </div>
);

const Partners = () => {
  return (
    <section id="partners" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-semibold tracking-widest uppercase mb-5">
            OEM Partners
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Trusted Brand Partnerships
          </h2>
          <p className="text-muted-foreground">
            Authorized OEM partnerships ensuring genuine products and warranty-backed supply.
          </p>
        </div>

        {/* Featured brand logos strip */}
        <div className="rounded-xl bg-card border border-border shadow-card p-6 md:p-8 mb-8">
          <img
            src={brandsStrip}
            alt={`Authorized OEM partners: ${stripBrands.join(", ")}`}
            loading="lazy"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Additional partners as monogram tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {otherBrands.map((name) => (
            <Monogram key={name} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

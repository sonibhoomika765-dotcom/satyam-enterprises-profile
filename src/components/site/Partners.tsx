import { useState } from "react";

type Brand = { name: string; slug?: string };

// slug refers to simpleicons.org slug; undefined => monogram fallback
const brands: Brand[] = [
  { name: "HP", slug: "hp" },
  { name: "LG", slug: "lg" },
  { name: "Acer", slug: "acer" },
  { name: "Godrej" },
  { name: "Blue Star" },
  { name: "Lloyd" },
  { name: "Havells" },
  { name: "Microtek" },
  { name: "Kyocera", slug: "kyocera" },
  { name: "Brother", slug: "brother" },
  { name: "Bluebird" },
  { name: "ALTOP" },
  { name: "Cynix" },
  { name: "INP" },
];

const BrandLogo = ({ brand }: { brand: Brand }) => {
  const [errored, setErrored] = useState(false);
  const showImg = brand.slug && !errored;

  return (
    <div className="group aspect-[3/2] flex flex-col items-center justify-center gap-2 px-3 rounded-lg bg-card border border-border hover:border-accent hover:shadow-card transition-all hover:-translate-y-0.5">
      {showImg ? (
        <img
          src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${brand.slug}.svg`}
          alt={`${brand.name} logo`}
          loading="lazy"
          width={40}
          height={40}
          onError={() => setErrored(true)}
          className="h-9 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
          style={{ filter: "brightness(0) saturate(100%) invert(11%) sepia(40%) saturate(1500%) hue-rotate(190deg) brightness(95%) contrast(95%)" }}
        />
      ) : (
        <div className="h-9 w-9 rounded-md bg-gradient-navy flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm font-serif">
            {brand.name.charAt(0)}
          </span>
        </div>
      )}
      <span className="font-semibold text-primary text-xs tracking-tight font-sans">
        {brand.name}
      </span>
    </div>
  );
};

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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {brands.map((b) => (
            <BrandLogo key={b.name} brand={b} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

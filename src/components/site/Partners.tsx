const brands = ["HP", "LG", "Acer", "Godrej", "Blue Star", "Lloyd", "Havells", "Microtek", "Kyocera", "Brother", "Bluebird", "ALTOP", "Cynix", "INP"];

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
            <div
              key={b}
              className="aspect-[3/2] flex items-center justify-center rounded-lg bg-card border border-border hover:border-accent hover:shadow-card transition-all hover:-translate-y-0.5"
            >
              <span className="font-bold text-primary text-lg tracking-tight font-sans">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

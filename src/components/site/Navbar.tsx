import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/satyam-logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#highlights", label: "Highlights" },
  { href: "#partners", label: "Partners" },
  { href: "#presence", label: "Presence" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3">
          <div className={`rounded-md transition-all ${scrolled ? "bg-white shadow-card p-1" : "bg-white/95 backdrop-blur p-1"}`}>
            <img src={logo} alt="Satyam Enterprises logo" className="h-10 w-auto object-contain" />
          </div>
          <div className="leading-tight hidden sm:block">
            <div className={`font-bold text-sm ${scrolled ? "text-primary" : "text-white"}`}>Satyam Enterprises</div>
            <div className={`text-[10px] uppercase tracking-widest ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              Est. 2017
            </div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-md bg-accent text-accent-foreground text-sm font-semibold hover:shadow-accent transition-all"
        >
          Get a Quote
        </a>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className={scrolled ? "text-primary" : "text-white"} /> : <Menu className={scrolled ? "text-primary" : "text-white"} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <ul className="container-wide py-6 space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block text-foreground font-medium py-1">
                  {l.label}
                </a>
              </li>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-block px-5 py-2.5 rounded-md bg-accent text-accent-foreground font-semibold">
              Get a Quote
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

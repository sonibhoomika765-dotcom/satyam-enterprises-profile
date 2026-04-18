import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/satyam-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container-wide grid md:grid-cols-4 gap-10 mb-10">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg p-2 inline-block mb-4 shadow-card">
            <img src={logo} alt="Satyam Enterprises logo" className="h-14 w-auto object-contain" />
          </div>
          <div className="mb-3">
            <div className="font-bold">Satyam Enterprises</div>
            <div className="text-[10px] uppercase tracking-widest text-white/60">Proprietorship · Est. 2017</div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            A trusted multi-category supplier serving government and institutional clients across India.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-accent">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Highlights", "#highlights"],
              ["Partners", "#partners"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="text-white/75 hover:text-accent transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-accent">Services</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li>IT & Electronics</li>
            <li>NCC Supplies</li>
            <li>Textile & Uniforms</li>
            <li>Defence & Army</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-accent">Contact</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-2.5">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
              <span>Bhopal, Madhya Pradesh — 462039</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
              <div className="flex flex-col">
                <a href="tel:+917224821685" className="hover:text-accent transition-colors">+91 72248 21685</a>
                <a href="tel:+918827563652" className="hover:text-accent transition-colors">+91 88275 63652</a>
              </div>
            </li>
            <li className="flex gap-2.5">
              <Mail className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
              <a href="mailto:satyamenterprises497@gmail.com" className="hover:text-accent transition-colors break-all">
                satyamenterprises497@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-wide pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} Satyam Enterprises. All rights reserved.
        </p>
        <p className="text-sm font-semibold text-white/90 italic font-serif">
          Driven by Discipline <span className="text-accent mx-2">|</span> Powered by Trust
        </p>
      </div>
    </footer>
  );
};

export default Footer;

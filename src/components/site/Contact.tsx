import { useState } from "react";
import { MapPin, User, Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for reaching out!",
      description: "Our team will get back to you within 24 hours.",
    });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-semibold tracking-widest uppercase mb-5">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Let's Build a Reliable Partnership
          </h2>
          <p className="text-muted-foreground text-lg">
            Reach out for tenders, OEM enquiries or institutional supply requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 p-8 rounded-2xl bg-gradient-navy text-primary-foreground shadow-elegant">
            <h3 className="text-2xl font-bold mb-6 font-sans">Contact Details</h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mb-1">Proprietor</div>
                  <div className="font-semibold">Raksha Gautam</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mb-1">Head Office</div>
                  <div className="text-sm leading-relaxed text-white/90">
                    F2/G2/234, Chanayak Apartment,<br />
                    Gulmohar Colony, Bawadiya Kalan,<br />
                    Bhopal, Madhya Pradesh — 462039
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mb-1">Business Type</div>
                  <div className="font-semibold">Proprietorship · Est. 2017</div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-accent text-accent-foreground font-semibold hover:shadow-accent transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          <form onSubmit={submit} className="lg:col-span-3 p-8 rounded-2xl bg-card border border-border shadow-card space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Your Name
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3.5 rounded-md border border-border bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Phone Number
              </label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3.5 rounded-md border border-border bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3.5 rounded-md border border-border bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                placeholder="Tell us about your requirement..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary-glow transition-all shadow-card hover:shadow-elegant"
            >
              <Send className="w-4 h-4" />
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Shield, TrendingUp, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-semibold tracking-widest uppercase mb-5">
            About Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Founded on Discipline.<br />
            Built on <span className="text-accent">Trust.</span>
          </h2>

          <div className="border-l-4 border-accent pl-6 py-2 my-8 bg-accent-soft/40 rounded-r-md">
            <p className="font-sanskrit text-2xl md:text-3xl text-primary font-semibold leading-relaxed mb-2">
              "आपद्गतं न जहाति, ददाति काले।"
            </p>
            <p className="text-sm text-muted-foreground italic">
              One who never leaves in difficult times — and delivers at the right moment.
            </p>
          </div>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Established in <strong className="text-primary">2017</strong> by a former Indian Army soldier, Satyam Enterprises was born from a soldier's commitment to duty, reliability, and timely execution.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Today we are a trusted multi-category supplier serving the <strong>Indian Army, Navy, Air Force, NCC, and MP State Schools</strong> — driven by uncompromising values and a steady <strong>10% annual growth</strong>.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { icon: Shield, title: "Trusted by Forces", text: "Serving Indian Army, Navy, Air Force, NCC and MP State Schools." },
            { icon: TrendingUp, title: "Steady Growth", text: "Consistent 10% year-on-year growth since inception in 2017." },
            { icon: MapPin, title: "Pan-India Presence", text: "Operations across Madhya Pradesh, West Bengal & New Delhi." },
            { icon: Shield, title: "Core Values", text: "Reliability, responsibility & on-time delivery — always." },
          ].map((c, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="w-11 h-11 rounded-md bg-gradient-navy flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2 font-sans tracking-tight">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

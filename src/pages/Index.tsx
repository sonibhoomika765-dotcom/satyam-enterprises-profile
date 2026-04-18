import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Highlights from "@/components/site/Highlights";
import Partners from "@/components/site/Partners";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import Offices from "@/components/site/Offices";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Highlights />
        <Partners />
        <WhyChooseUs />
        <Offices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

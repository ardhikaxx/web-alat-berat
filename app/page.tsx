import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import EquipmentCatalog from "@/components/EquipmentCatalog";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeUp from "@/components/FadeUp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FadeUp>
          <Trust />
        </FadeUp>
        <FadeUp>
          <Services />
        </FadeUp>
        <FadeUp>
          <EquipmentCatalog />
        </FadeUp>
        <Projects />
        <FadeUp>
          <WhyChooseUs />
        </FadeUp>
        <FadeUp>
          <HowItWorks />
        </FadeUp>
        <CTASection />
        <FadeUp>
          <ContactSection />
        </FadeUp>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

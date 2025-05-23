
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { PlatformSection } from "@/components/PlatformSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { platformData } from "@/data/platformData";
import { testimonialsData } from "@/data/testimonialsData";
import { faqData } from "@/data/faqData";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PlatformSection 
          id="services-section" 
          platforms={platformData} 
        />
        <TestimonialsSection testimonials={testimonialsData} />
        <FaqSection faqs={faqData} />
      </main>
      <Footer />
      {/* Removed CookieConsent component */}
    </>
  );
};

export default Index;

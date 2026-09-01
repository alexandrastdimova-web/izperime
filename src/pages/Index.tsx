import SiteHeader from "@/components/home/SiteHeader";
import HomeHero from "@/components/home/HomeHero";
import ServiceCards from "@/components/home/ServiceCards";
import TechSection from "@/components/home/TechSection";
import AboutSection from "@/components/home/AboutSection";
import PricingSection from "@/components/home/PricingSection";
import FinalCta from "@/components/home/FinalCta";
import SiteFooter from "@/components/home/SiteFooter";
import ResultsGallery from "@/components/home/ResultsGallery";
import FactsSection from "@/components/home/FactsSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "@/lib/scrollToSection";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    scrollToSection(id);
  }, [hash]);

  return (
    <div className="min-h-screen bg-cream">
      <div className="relative bg-cream">
        <SiteHeader />
        <main>
          <HomeHero />
        </main>
      </div>
      <main>
        <ServiceCards />
        <TechSection />
        <ResultsGallery />
        <AboutSection />
        <PricingSection />
        <FactsSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;

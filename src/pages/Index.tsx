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
import { secondaryServices } from "@/components/home/ServiceCards";

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
        <div className="mt-12 border-t border-ink/10 pt-10">
          <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
            Още услуги
          </span>
          <ul className="mt-8 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0">
            {secondaryServices.map((service) => (
              <li key={service.slug} className="min-w-[62%] shrink-0 snap-center sm:min-w-0">
                <Link
                  to={`/${service.slug}`}
                  className="group flex flex-col items-center text-center outline-none"
                >
                  <span className="relative flex w-full items-end justify-center">
                    <span
                      aria-hidden="true"
                      className="absolute bottom-4 h-16 w-[52%] rounded-full bg-primary/15 blur-2xl transition-all duration-500 group-hover:bg-primary/30"
                    />
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      width={900}
                      height={900}
                      className="relative w-full max-w-[190px] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-[2deg] motion-reduce:transform-none"
                    />
                  </span>
                  <h3 className="mt-1 font-display text-[17px] font-bold leading-snug text-ink">
                    <span className="bg-gradient-to-r from-primary to-primary bg-[length:0%_0.4rem] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_0.4rem] group-focus-visible:bg-[length:100%_0.4rem]">
                      {service.title}
                    </span>
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink opacity-60 transition-all duration-300 group-hover:gap-2.5 group-hover:opacity-100">
                    Виж повече
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
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

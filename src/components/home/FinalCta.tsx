import { Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCta = () => {
  return (
    <section id="contact" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-cream md:rounded-[2.5rem] md:px-14 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-[100px]"
          />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <h2 className="font-display text-[2.1rem] font-extrabold leading-[1.08] text-balance sm:text-[2.8rem]">
                Запазете час за пране на мека мебел или автомобилен салон
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70">
                Свържете се с нас за безплатна оферта или запазване на час.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-14 rounded-full bg-primary px-8 text-base font-semibold text-ink hover:bg-primary/90"
                >
                  <a href="tel:+359884555884">
                    Обади се сега
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-14 rounded-full border-cream/25 bg-transparent px-8 text-base font-medium text-cream hover:bg-cream/10 hover:text-cream"
                >
                  <a href="#services">Разгледай услугите</a>
                </Button>
              </div>
            </div>

            <div className="space-y-5 lg:border-l lg:border-cream/15 lg:pl-12">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cream/10">
                  <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[13px] uppercase tracking-[0.14em] text-cream/50">
                    Телефон
                  </p>
                  <a
                    href="tel:+359884555884"
                    className="font-display text-xl font-bold transition-opacity hover:opacity-80"
                  >
                    +359 884 555 884
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cream/10">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[13px] uppercase tracking-[0.14em] text-cream/50">
                    Адрес
                  </p>
                  <p className="text-[15px] leading-relaxed text-cream/80">
                    гр. Велико Търново, ж.к. Бузлуджа,
                    <br />
                    ул. Георги Измирлиев 17
                  </p>
                </div>
              </div>

              <p className="pt-2 text-[15px] leading-relaxed text-cream/60">
                Работим във Велико Търново и региона. Прането на мека мебел извършваме
                на място във вашия дом или офис.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;

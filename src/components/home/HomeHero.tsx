import { Link } from "react-router-dom";
import handDivan from "@/assets/redesign/hand-divan.webp";
import handMatrak from "@/assets/redesign/hand-matrak.webp";
import handSedalka from "@/assets/redesign/hand-avto-sedalka.webp";
import handVolan from "@/assets/redesign/hand-volan.webp";

const heroServices = [
  {
    label: "Дивани",
    slug: "prane-na-divani-veliko-tarnovo",
    image: handDivan,
    alt: "Ръка с жълта почистваща ръкавица държи миниатюрен текстилен диван",
  },
  {
    label: "Матраци",
    slug: "prane-na-matraci-veliko-tarnovo",
    image: handMatrak,
    alt: "Ръка с жълта почистваща ръкавица държи миниатюрен матрак",
  },
  {
    label: "Автосалони",
    slug: "prane-na-avtomobilni-saloni-veliko-tarnovo",
    image: handSedalka,
    alt: "Ръка с жълта почистваща ръкавица държи миниатюрна автомобилна седалка",
  },
  {
    label: "Детайлинг",
    slug: "interioren-detailing-veliko-tarnovo",
    image: handVolan,
    alt: "Ръка с жълта почистваща ръкавица държи миниатюрен волан",
  },
];

const HomeHero = () => {
  return (
    <section id="hero" className="relative bg-cream pt-4 md:pt-6">
      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
        <p className="font-display text-[2.4rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[3.4rem] lg:text-[4.6rem]">
          Професионално пране на:
        </p>


        <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-12 lg:grid-cols-4 lg:gap-x-6">
          {heroServices.map((service, index) => (
            <li key={service.slug}>
              <Link
                to={`/${service.slug}`}
                className="group flex flex-col items-center text-center outline-none"
              >
                <span className="relative flex w-full items-end justify-center">
                  <span
                    aria-hidden="true"
                    className="absolute bottom-6 h-20 w-[60%] rounded-full bg-primary/20 blur-2xl transition-all duration-500 group-hover:h-24 group-hover:bg-primary/35"
                  />
                  <img
                    src={service.image}
                    alt={service.alt}
                    width={600}
                    height={600}
                    loading="eager"
                    decoding="async"
                    {...(index === 0 ? ({ fetchpriority: "high" } as Record<string, string>) : {})}
                    className="relative aspect-square w-full max-w-[300px] transition-transform duration-500 ease-out group-hover:-translate-y-2 motion-reduce:transform-none"
                  />
                </span>

                <span className="mt-1 font-display text-lg font-bold text-ink md:text-2xl">
                  <span className="bg-gradient-to-r from-primary to-primary bg-[length:0%_0.45rem] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_0.45rem] group-focus-visible:bg-[length:100%_0.45rem]">
                    {service.label}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center md:mt-12">
          <a
            href="#prices"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-bold text-ink transition-all hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
          >
            Цени
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-2xl text-center md:mt-10">
          <h1 className="text-[15px] leading-relaxed text-ink md:text-base">
            Професионално пране на мека мебел и автомобилни салони във Велико Търново —
            дивани, матраци, авто салони, подхранване на кожени авто тапицерии и
            детайлинг за автомобили.
          </h1>

          <p className="mt-3 text-[14px] leading-relaxed text-ink-soft md:text-[15px]">
            Във Велико Търново и региона – на място във вашия дом, а за автомобили – в
            нашата база на ул. Георги Измирлиев 17, ж.к. Бузлуджа.
          </p>
        </div>
      </div>

      <div className="h-16 md:h-24" />
    </section>
  );
};

export default HomeHero;

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import handMekaMebel from "@/assets/redesign/hand-meka-mebel.webp";
import handKozha from "@/assets/redesign/hand-kozha.webp";
import handPremium from "@/assets/redesign/hand-premium.webp";


type MainService = {
  title: string;
  slug: string;
  text: string;
  image: string;
  alt: string;
};

const secondaryServices: MainService[] = [
  {
    title: "Пране на мека мебел",
    slug: "prane-na-meka-mebel-veliko-tarnovo",
    text: "",
    image: handMekaMebel,
    alt: "Ръка с жълта почистваща ръкавица държи миниатюрно текстилно кресло",
  },
  {
    title: "Кожени салони",
    slug: "pochistvane-podhranvane-kozheni-saloni-veliko-tarnovo",
    text: "",
    image: handKozha,
    alt: "Ръка с жълта почистваща ръкавица държи миниатюрна кожена автомобилна седалка",
  },
  {
    title: "Премиум автомобили",
    slug: "detailing-luksozni-avtomobili-veliko-tarnovo",
    text: "",
    image: handPremium,
    alt: "Ръка с жълта почистваща ръкавица държи миниатюрен луксозен автомобил",
  },
];
const mainServices = [
  {
    title: "Пране на мека мебел",
    slug: "prane-na-meka-mebel-veliko-tarnovo",
    paragraphs: [
      "Професионално пране на дивани, матраци и столове с дълбоко почистване на тапицерията и премахване на прах и петна според вида им.",
      "Меката мебел у дома събира голямо количество прах и замърсявания, които често не се виждат с просто око. Затова редовното изпиране е важно не само за външния вид, но и за по-чистата среда у дома.",
      "Препоръчваме дивани и матраци да се изпират редовно – според употребата, обичайно веднъж или два пъти годишно.",
    ],
  },
  {
    title: "Пране на автомобилни салони",
    slug: "prane-na-avtomobilni-saloni-veliko-tarnovo",
    paragraphs: [
      "Цялостно почистване на автомобилния салон, включващо седалки, под, стелки, багажник и всички текстилни повърхности.",
      "Премахваме натрупана мръсотия, петна и неприятни миризми, за да върнем чистия и свеж вид на интериора на автомобила.",
    ],
  },
  {
    title: "Детайлинг за автомобили",
    slug: "interioren-detailing-veliko-tarnovo",
    paragraphs: [
      "Професионален детайлинг на автомобили с внимание към всеки детайл – от интериора до външния вид на автомобила.",
      "Детайлингът включва прецизно почистване и освежаване на различните повърхности в купето, с внимание и към трудно достъпните места.",
    ],
  },
  {
    title: "Подхранване на кожени авто салони",
    slug: "pochistvane-podhranvane-kozheni-saloni-veliko-tarnovo",
    paragraphs: [
      "Почистване и подхранване на кожени автомобилни салони със специализирани препарати за кожа. Процедурата премахва замърсяванията и подхранва кожата, така че да е по-мека на допир и с по-свеж вид.",
      "Редовната грижа за кожения салон помага да се запази добрият му вид за по-дълго.",
    ],
  },
];

const ServiceCards = () => {
  return (
    <section id="services" className="bg-cream py-20 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
            Услуги
          </span>
          <h2 className="mt-4 font-display text-[2.1rem] font-extrabold leading-[1.08] text-ink text-balance sm:text-[2.9rem]">
            Изберете какво да изперем
          </h2>
        </div>

        <ul className="mt-14 grid gap-x-14 gap-y-12 border-t border-ink/10 pt-12 md:grid-cols-2">
          {mainServices.map((service) => (
            <li key={service.slug}>
              <h3 className="font-display text-[1.4rem] font-extrabold leading-tight text-ink sm:text-[1.6rem]">
                <Link
                  to={`/${service.slug}`}
                  className="transition-colors hover:text-ink-soft"
                >
                  {service.title}
                </Link>
              </h3>
              <span
                aria-hidden="true"
                className="mt-4 block h-[3px] w-14 rounded-full bg-primary"
              />
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-soft md:text-base">
                {service.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <Link
                to={`/${service.slug}`}
                className="group mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink transition-all hover:gap-2.5"
              >
                Виж повече
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
          </ul>

      </div>
    </section>
  );
};

export default ServiceCards;

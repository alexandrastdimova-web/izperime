const priceItems = [
  { label: "Пране на стандартен триместен диван", price: "от 35 до 45 €" },
  { label: "Пране на едностранен двоен матрак", price: "от 38 до 48 €" },
  { label: "Пране на автомобилен салон (седалки + под + багажник)", price: "от 70 до 120 €" },
  { label: "Пране само на автомобилни седалки", price: "12 € / брой" },
  { label: "Пране на стол с текстилна тапицерия", price: "от 4 до 8 €" },
  { label: "Пране на детски матрак", price: "от 20 до 30 €" },
];

const PricingSection = () => {
  return (
    <section id="prices" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
            Цени
          </span>
          <h2 className="mt-4 font-display text-[2.1rem] font-extrabold leading-[1.08] text-ink text-balance sm:text-[2.8rem]">
            Ориентировъчни цени
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Цената за изпиране на всеки диван, матрак или автомобилен салон зависи от
            неговия размер и степента на замърсяване. Посочените по-долу цени са в
            ориентировъчни диапазони, точна цена ще ви дадем след оглед на място или
            след като ни изпратите подробности и снимки.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-ink/10 bg-paper shadow-soft">
          <ul className="divide-y divide-ink/10">
            {priceItems.map((item) => (
              <li
                key={item.label}
                className="flex flex-col gap-1.5 px-6 py-5 transition-colors hover:bg-sand/50 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:px-8 md:py-6"
              >
                <span className="text-[16px] font-medium text-ink md:text-[17px]">
                  {item.label}
                </span>
                <span className="font-display text-lg font-bold text-ink whitespace-nowrap">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          Ако не намирате точна цена за това, което желаете да бъде изпрано, моля
          свържете се с нас по телефона, за да обсъдим вашите нужди и да ви дадем точна
          цена.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;

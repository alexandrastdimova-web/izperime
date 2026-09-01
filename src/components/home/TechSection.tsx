const points = [
  {
    title: "Kärcher Puzzi 10/1",
    text: "Професионален екстрактор, който впръсква разтвора дълбоко в тапицерията и веднага го изсмуква обратно заедно с разтворените замърсявания.",
  },
  {
    title: "Препарат според материята",
    text: "Използваме специализирани препарати, подбрани според вида на плата или кожата и според конкретното замърсяване.",
  },
  {
    title: "98% хипоалергенни препарати",
    text: "98% от препаратите, с които работим, са хипоалергенни — избор, който има значение за домове с деца и домашни любимци.",
  },
];

const TechSection = () => {
  return (
    <section id="tech" className="bg-ink py-20 text-cream md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-primary">
              Техниката зад резултата
            </span>
            <h2 className="mt-4 font-display text-[2.1rem] font-extrabold leading-[1.08] text-balance sm:text-[2.8rem]">
              Дълбоко изпиране, а не повърхностно избърсване
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/70">
              Резултатът зависи от три неща: техниката, препаратът и това колко добре
              са съобразени с материята. Затова работим с екстракторна технология и
              подбираме препарата за всеки конкретен случай.
            </p>
          </div>

          <ol className="space-y-0 divide-y divide-cream/15 border-t border-cream/15">
            {points.map((point, index) => (
              <li key={point.title} className="flex gap-6 py-7">
                <span className="font-display text-sm font-bold text-primary">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">{point.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-cream/70">
                    {point.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TechSection;

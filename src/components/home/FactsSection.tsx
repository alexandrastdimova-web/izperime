const facts = [
  {
    title: "Какво се задържа в матрака",
    text: "Матракът е една от повърхностите в дома, която ползваме най-дълго време. С годините в тапицерията и повърхностния слой се задържат прах, косми, микрочастици и петна. Професионалното пране премахва видимите замърсявания и натрупания прах и оставя матрака по-чист и свеж.",
  },
  {
    title: "Какво събира диванът",
    text: "Меката мебел в дома ежедневно събира прах, трохи, петна и различни замърсявания, които проникват дълбоко в тапицерията. Професионалното пране на дивани премахва дълбоко натрупаните видими замърсявания и освежава вида и усещането на мебелите.",
  },
  {
    title: "Чиста среда за децата",
    text: "Децата прекарват много време на дивана и на пода, а точно там прахът се задържа най-лесно. Редовното пране на меката мебел поддържа по-чиста домашна среда и намалява количеството натрупан прах в тапицерията.",
  },
  {
    title: "Редовното пране удължава живота на мебелите",
    text: "Прахът и микрочастиците в тапицерията с времето износват плата. Професионалното пране премахва тези замърсявания, освежава вида на плата и помага диваните и столовете да запазят добрия си вид за по-дълго.",
  },
];

const FactsSection = () => {
  return (
    <section id="facts" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
            Полезно
          </span>
          <h2 className="mt-4 font-display text-[2.1rem] font-extrabold leading-[1.08] text-ink text-balance sm:text-[2.8rem]">
            Знаете ли че?
          </h2>
        </div>

        <dl className="mt-12 grid gap-x-14 gap-y-10 border-t border-ink/10 pt-12 md:grid-cols-2">
          {facts.map((fact, index) => (
            <div key={fact.title}>
              <span className="font-display text-sm font-bold text-primary">
                0{index + 1}
              </span>
              <dt className="mt-2 font-display text-[1.25rem] font-extrabold leading-tight text-ink">
                {fact.title}
              </dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-ink-soft md:text-base">
                {fact.text}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FactsSection;

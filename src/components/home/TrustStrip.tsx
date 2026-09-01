import { Home, Car, Droplets, Wrench } from "lucide-react";

const items = [
  {
    icon: Home,
    title: "Пране на място",
    text: "Идваме с цялата техника при вас — не е нужно да местите или транспортирате мебелите.",
  },
  {
    icon: Car,
    title: "Автомобили в базата",
    text: "Автомобилните салони почистваме в базата ни на ул. Георги Измирлиев 17, ж.к. Бузлуджа.",
  },
  {
    icon: Droplets,
    title: "Препарати по материя",
    text: "Подбираме препарат според вида на тапицерията и замърсяването. 98% от препаратите са хипоалергенни.",
  },
  {
    icon: Wrench,
    title: "Екстракторна техника",
    text: "Работим с професионален екстрактор Kärcher Puzzi 10/1 за дълбоко изпиране и изсмукване.",
  },
];

const TrustStrip = () => {
  return (
    <section className="bg-paper py-16 md:py-20">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand text-ink transition-colors group-hover:bg-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;

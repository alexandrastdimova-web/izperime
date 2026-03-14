import { Sparkles, Shield, Leaf } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Високо качество",
      description: "Професионална техника за отлични резултати",
    },
    {
      icon: Shield,
      title: "Надеждност",
      description: "Опитен екип с доказани умения",
    },
    {
      icon: Leaf,
      title: "Еко препарати",
      description: "Безопасни за хора и домашни любимци",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            За нас
          </h2>
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4 text-left">
            <p>
              Ние сме малка семейна фирма от Велико Търново, създадена през 2023 година. Предлагаме професионално пране на дивани, матраци, мека мебел, килими и автомобилни салони с внимание към всеки детайл.
            </p>
            <p>
              Работим с професионална техника и хипоалергенни препарати, които са безопасни за деца, възрастни и домашни любимци, защото чистотата у дома трябва да бъде не само видима, но и безопасна.
            </p>
            <p>
              Като семейство с дете и куче отлично знаем колко бързо меката мебел у дома се замърсява и колко важна е редовната и качествена поддръжка. Затова работим така, както бихме искали да бъде почистен и нашият собствен дом.
            </p>
            <p>
              Предлагаме професионално пране на мека мебел и авто салони във Велико Търново и региона, като целта ни е след всяка услуга домът или автомобилът ви да бъдат по-чисти, по-свежи и по-приятни за вас и вашето семейство.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

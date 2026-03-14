import { Card, CardContent } from "@/components/ui/card";

const Prices = () => {
  const priceItems = [
    "Пране на стандартен триместен диван — от 35 до 45 евро",
    "Пране на едностранен двоен матрак — от 38 до 48 евро",
    "Пране на автомобилен салон (седалки + под + багажник) — от 70 до 120 евро",
    "Пране само на автомобилни седалки — 12 евро / брой",
    "Пране на стол с текстилна тапицерия — от 4 до 8 евро",
    "Пране на детски матрак — от 20 до 30 евро",
    "Пране на килими — цена по договаряне",
  ];

  return (
    <section id="prices" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Цени
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Цената за изпиране на всеки диван, матрак или автомобилен салон зависи от неговия размер и степента на замърсяване. Посочените по-долу цени са в ориентировъчни диапазони, точна цена ще ви дадем след оглед на място или след като ни изпратите подробности и снимки.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 hover:border-primary transition-all hover:shadow-lg rounded-2xl">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {priceItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm max-w-2xl mx-auto">
          Ако не намирате точна цена за това, което желаете да бъде изпрано, моля свържете се с нас по телефона, за да обсъдим вашите нужди и да ви дадем точна цена.
        </p>
      </div>
    </section>
  );
};

export default Prices;

import { Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Facts = () => {
  const facts = [
    {
      title: "Акарите в леглото",
      text: "В един матрак живеят между 100 000 и 10 млн. прахови акари! Редовното почистване намалява алергиите с до 80%.",
    },
    {
      title: "Бактерии в дивана",
      text: "Мека мебел може да съдържа повече бактерии от тоалетна седалка. Дълбокото пране унищожава 99.9% от микробите.",
    },
    {
      title: "Прах в килимите",
      text: "Един килим може да задържи до 2 кг прах годишно! Професионалното пране премахва дълбоко вкоренената мръсотия.",
    },
    {
      title: "Здравето на децата",
      text: "Чисти повърхности намаляват риска от респираторни заболявания при децата с до 40%.",
    },
    {
      title: "Дълготрайност на мебелите",
      text: "Редовното професионално почистване удължава живота на мебелите с до 50%.",
    },
  ];

  return (
    <section id="facts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Знаете ли че?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Интересни факти за чистотата и хигиената
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {facts.map((fact, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all hover:shadow-lg rounded-2xl bg-card"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Info className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{fact.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {fact.text}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;

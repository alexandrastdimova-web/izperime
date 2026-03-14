import { Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Facts = () => {
  const facts = [
    {
      title: "Акари в леглото",
      text: "Матраците са едно от местата в дома, където се натрупват най-много прахови акари, бактерии и микроскопични замърсявания. В един матрак могат да живеят между 100 000 и над 10 милиона акари. Професионалното пране на матраци помага да се премахнат прахът, алергените и микроорганизмите и подобрява качеството на съня.",
    },
    {
      title: "Бактерии в дивана",
      text: "Меката мебел в дома ежедневно събира прах, трохи, петна и различни замърсявания, които проникват дълбоко в тапицерията. Професионалното пране на дивани премахва дълбоко натрупаната мръсотия, бактерии и алергени и възстановява свежия вид на мебелите.",
    },
    {
      title: "Здравето на децата",
      text: "Прахът, акарите и алергените, които се натрупват в матраците и диваните, могат да повишат риска от алергии и респираторни проблеми при децата. Редовното професионално пране на мека мебел създава по-чиста и здравословна домашна среда.",
    },
    {
      title: "Редовното пране удължава живота на мебелите",
      text: "Прахът и микрочастиците в тапицерията действат като абразив и с времето износват плата. Професионалното пране на мека мебел премахва тези замърсявания, освежава цветовете и помага диваните и столовете да запазят добрия си вид за по-дълго.",
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

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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

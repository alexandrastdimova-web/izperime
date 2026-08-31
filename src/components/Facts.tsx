import { Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Facts = () => {
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

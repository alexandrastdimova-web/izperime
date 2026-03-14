import { Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const FacebookResults = () => {
  return (
    <section id="results" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Резултати преди и след
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Вижте резултати преди и след почистването, видеа от нашата работа и още интересна информация. Последвайте ни във Facebook, за да виждате реални резултати от изпиране на дивани, матраци, мека мебел и автомобилни салони.
          </p>
          <Button
            size="lg"
            className="bg-[hsl(221,44%,41%)] text-white hover:bg-[hsl(221,44%,35%)] rounded-full text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <a
              href="https://www.facebook.com/share/18yK3SstqK/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              <Facebook className="w-6 h-6" />
              Последвайте ни във Facebook
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FacebookResults;

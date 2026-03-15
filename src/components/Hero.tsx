import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import logoTransparent from "@/assets/logo-transparent.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Професионално почистване"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col items-center text-center">
        <img
          src={logoTransparent}
          alt="izperi.me лого"
          className="w-48 h-auto md:w-72 lg:w-96 mb-8"
        />
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight max-w-4xl">
          Професионално пране на мека мебел и автомобилни салони
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-medium mb-6 max-w-3xl">
          дивани, матраци, авто салони, подхранване на кожени авто тапицерии и детайлинг за автомобили
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl">
          Във Велико Търново и региона – на място във вашия дом, а за автомобили – в нашата база на ул. Георги Измирлиев 17, ж.к. Бузлуджа.
        </p>
        
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
        >
          Запази час
        </Button>
      </div>
    </section>
  );
};

export default Hero;

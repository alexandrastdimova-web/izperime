import { useState } from "react";
import { X, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const images = [
  { src: gallery1, alt: "Пране на автомобилен салон – преди и след" },
  { src: gallery2, alt: "Почистване на автобусен салон – преди и след" },
  { src: gallery3, alt: "Пране на авто седалки – преди и след" },
  { src: gallery4, alt: "Почистване на авто седалки – преди и след" },
  { src: gallery5, alt: "Пране на диван – преди и след" },
  { src: gallery6, alt: "Почистване на багажник – преди и след" },
  { src: gallery7, alt: "Пране на автомобилен салон – преди и след" },
  { src: gallery8, alt: "Почистване на микробус – преди и след" },
];

const ResultsGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
              Галерия
            </span>
            <h2
              id="results"
              className="mt-4 font-display text-[2.1rem] font-extrabold leading-[1.08] text-ink text-balance sm:text-[2.8rem]"
            >
              Резултати преди и след
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Реални резултати от нашата работа – пране на дивани, матраци, мека мебел и
              автомобилни салони.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="h-13 shrink-0 rounded-full border-ink/20 bg-transparent px-7 py-3 text-[15px] font-medium text-ink hover:bg-sand"
          >
            <a
              href="https://www.facebook.com/share/18yK3SstqK/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="mr-2 h-4 w-4" aria-hidden="true" />
              Още във Facebook
            </a>
          </Button>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setLightboxIndex(index)}
              className="group mb-5 block w-full overflow-hidden rounded-[1.5rem] border border-ink/10 bg-sand shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`Отвори по-голямо: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
            aria-label="Затвори"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className="max-h-[88vh] max-w-full rounded-2xl object-contain shadow-lift"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default ResultsGallery;

import { useState } from "react";
import { X } from "lucide-react";

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

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Галерия
          </h2>
          <p className="text-lg text-muted-foreground">
            Вижте реални резултати от нашата работа – пране на дивани, матраци,
            мека мебел и автомобилни салони.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setLightboxIndex(index)}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-background hover:text-primary transition-colors z-10"
            aria-label="Затвори"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;

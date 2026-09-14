"use client";

import { useCallback, useEffect, useId, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowIcon } from "@/components/ArrowIcon";

export default function Carousel({
  items,
  renderItem,
  label,
  previousLabel = "Anterior",
  nextLabel = "Próximo",
  loop = true,
  className = "",
  viewportClassName = "",
  containerClassName = "",
  slideClassName = "",
  variant = "default",
  options = {},
}) {
  const [viewportRef, emblaApi] = useEmblaCarousel({ loop, ...options });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselId = useId();

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return undefined;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      className={`carousel carousel-shell carousel-${variant} ${className}`}
      aria-roledescription="carrossel"
      aria-label={label}
    >
      <button
        type="button"
        className="carousel-arrow prev"
        onClick={scrollPrev}
        disabled={!loop && !emblaApi?.canScrollPrev()}
        aria-label={previousLabel}
        aria-controls={carouselId}
      >
        <ArrowIcon direction="left" />
      </button>
      <div
        id={carouselId}
        className={`carousel-viewport ${viewportClassName}`}
        ref={viewportRef}
      >
        <div className={`carousel-container ${containerClassName}`}>
          {items.map((item, index) => (
            <div
              className={`carousel-slide ${slideClassName}`}
              key={item.id ?? item.src ?? item.image ?? index}
              aria-label={`${index + 1} de ${items.length}`}
            >
              {renderItem(item, index, selectedIndex === index)}
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="carousel-arrow next"
        onClick={scrollNext}
        disabled={!loop && !emblaApi?.canScrollNext()}
        aria-label={nextLabel}
        aria-controls={carouselId}
      >
        <ArrowIcon />
      </button>
      <p className="carousel-meta" aria-live="polite">
        {selectedIndex + 1} de {items.length}
      </p>
    </section>
  );
}

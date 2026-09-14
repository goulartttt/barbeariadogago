"use client";

import { useCallback, useEffect, useId, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowIcon } from "@/components/ArrowIcon";

export default function Carousel({
  items,
  renderItem,
  label,
  previousLabel = "Slide anterior",
  nextLabel = "Próximo slide",
  variant = "gallery",
  loop = true,
  options = {},
}) {
  const [viewportRef, api] = useEmblaCarousel({ loop, align: "start", ...options });
  const [selected, setSelected] = useState(0);
  const id = useId();

  const updateSelected = useCallback((embla) => {
    setSelected(embla.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return undefined;
    updateSelected(api);
    api.on("select", updateSelected);
    api.on("reInit", updateSelected);
    return () => {
      api.off("select", updateSelected);
      api.off("reInit", updateSelected);
    };
  }, [api, updateSelected]);

  const previous = useCallback(() => api?.scrollPrev(), [api]);
  const next = useCallback(() => api?.scrollNext(), [api]);

  return (
    <section className={`dogago-carousel dogago-carousel--${variant}`} aria-label={label} aria-roledescription="carrossel">
      <button className="dogago-carousel__control dogago-carousel__control--previous" type="button" onClick={previous} aria-label={previousLabel} aria-controls={id}>
        <ArrowIcon direction="left" />
      </button>
      <div className="dogago-carousel__viewport" id={id} ref={viewportRef} tabIndex="0" role="region" aria-label={`${label}: slide ${selected + 1} de ${items.length}`}>
        <div className="dogago-carousel__container">
          {items.map((item, index) => (
            <article className="dogago-carousel__slide" key={item.id ?? index} aria-roledescription="slide" aria-label={`${index + 1} de ${items.length}`}>
              {renderItem(item, index, selected === index)}
            </article>
          ))}
        </div>
      </div>
      <button className="dogago-carousel__control dogago-carousel__control--next" type="button" onClick={next} aria-label={nextLabel} aria-controls={id}>
        <ArrowIcon />
      </button>
      <p className="dogago-carousel__status" aria-live="polite">{selected + 1} de {items.length}</p>
    </section>
  );
}

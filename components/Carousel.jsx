"use client";

import { Children, useCallback, useEffect, useId, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowIcon } from "@/components/icons";

const pad = (value) => String(value).padStart(2, "0");

// Recebe os slides como children (renderizados no servidor) e cuida só da
// navegação no navegador.
export default function Carousel({
  children,
  label,
  itemLabel = "Slide",
  previousLabel = "Slide anterior",
  nextLabel = "Próximo slide",
  variant,
  className = "",
  options,
}) {
  // inViewThreshold: só conta como visível o slide que aparece quase inteiro.
  const [viewportRef, api] = useEmblaCarousel({ loop: true, align: "start", inViewThreshold: 0.7, ...options });
  const [selected, setSelected] = useState(0);
  const [inView, setInView] = useState(null);
  const id = useId();
  const slides = Children.toArray(children);
  const total = slides.length;

  useEffect(() => {
    if (!api) return undefined;
    const update = () => setSelected(api.selectedScrollSnap());
    const updateInView = () => setInView(api.slidesInView());
    update();
    updateInView();
    api.on("select", update).on("reInit", update).on("slidesInView", updateInView);
    return () => {
      api.off("select", update).off("reInit", update).off("slidesInView", updateInView);
    };
  }, [api]);

  const previous = useCallback(() => api?.scrollPrev(), [api]);
  const next = useCallback(() => api?.scrollNext(), [api]);

  const onKeyDown = (event) => {
    if (event.key === "ArrowLeft") { event.preventDefault(); previous(); }
    if (event.key === "ArrowRight") { event.preventDefault(); next(); }
  };

  return (
    <div
      className={`carousel carousel--${variant} ${className}`}
      role="region"
      aria-roledescription="carrossel"
      aria-label={label}
      style={{ "--progress": (selected + 1) / total }}
      data-reveal
    >
      <div className="carousel__viewport" id={id} ref={viewportRef} tabIndex={0} onKeyDown={onKeyDown}>
        <div className="carousel__track">
          {slides.map((slide, index) => (
            <div
              className="carousel__slide"
              key={slide.key}
              role="group"
              aria-roledescription="slide"
              aria-label={`${itemLabel} ${index + 1} de ${total}`}
              data-in-view={inView ? inView.includes(index) : undefined}
              style={{ "--i": index }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
      <div className="carousel__controls">
        <p className="carousel__status" aria-live="polite">
          <span className="sr-only">{itemLabel} </span>
          {pad(selected + 1)}
          <span aria-hidden="true"> / </span>
          <span className="sr-only"> de </span>
          {pad(total)}
        </p>
        <span className="carousel__progress" aria-hidden="true" />
        <button className="carousel__button" type="button" onClick={previous} aria-controls={id} aria-label={previousLabel}>
          <ArrowIcon direction="left" />
        </button>
        <button className="carousel__button" type="button" onClick={next} aria-controls={id} aria-label={nextLabel}>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}

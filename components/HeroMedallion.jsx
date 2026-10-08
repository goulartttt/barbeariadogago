"use client";

import { useEffect, useRef } from "react";
import { business } from "@/data/siteData";

const RING_TEXT = `${business.name} · ${business.address.district} · ${business.address.city} · `;

// Selo decorativo do hero. Acompanha o mouse só em telas com ponteiro fino e
// sem "reduzir movimento"; escreve variáveis CSS direto no elemento para não
// re-renderizar o React a cada movimento.
export default function HeroMedallion() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const media = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!element || !media.matches) return undefined;

    let frame = 0;
    const onMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 18;
        const y = (event.clientY / window.innerHeight - 0.5) * 14;
        element.style.setProperty("--tilt-x", `${x.toFixed(1)}px`);
        element.style.setProperty("--tilt-y", `${y.toFixed(1)}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="medallion" ref={ref} aria-hidden="true">
      {/* O corpo tem animação própria de entrada; o elemento externo só acompanha o mouse. */}
      <div className="medallion__body">
        <svg className="medallion__ring" viewBox="0 0 200 200">
          <defs>
            <path id="medallion-circle" d="M100 100m-82 0a82 82 0 1 1 164 0a82 82 0 1 1-164 0" />
          </defs>
          <text>
            <textPath href="#medallion-circle" textLength="512">{RING_TEXT.repeat(2)}</textPath>
          </text>
        </svg>
        <span className="medallion__mark">DG</span>
      </div>
    </div>
  );
}

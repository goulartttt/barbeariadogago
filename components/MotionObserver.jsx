"use client";

import { useEffect } from "react";

const COUNT_DURATION = 1400;

// Anima um número de 0 até o valor de data-count (aceita vírgula decimal: "5,0").
function countUp(element) {
  const target = element.dataset.count;
  const decimals = target.split(",")[1]?.length ?? 0;
  const end = Number(target.replace(",", "."));
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / COUNT_DURATION, 1);
    const eased = 1 - (1 - progress) ** 3;
    element.textContent = (end * eased).toFixed(decimals).replace(".", ",");
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Liga as animações de entrada. Sem JavaScript ou com "reduzir movimento",
// a classe .motion nunca é aplicada e todo o conteúdo fica visível e parado.
export default function MotionObserver() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          entry.target.classList.add("is-in");
          entry.target.querySelectorAll("[data-count]").forEach(countUp);
        });
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    // O que já está na tela ao carregar aparece sem animar (evita piscar).
    document.querySelectorAll("[data-reveal]").forEach((element) => {
      const { top, bottom } = element.getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) element.classList.add("is-in");
      else observer.observe(element);
    });
    document.documentElement.classList.add("motion");

    return () => observer.disconnect();
  }, []);

  return null;
}

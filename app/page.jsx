"use client";

import { useEffect, useState } from "react";
import { Header, Footer } from "@/components/layout";
import { About, Club, Contact, Gallery, Hero, Location, Products, Services, Testimonials } from "@/components/sections";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, hover: false, label: "" });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    const onMove = (event) => {
      const target = event.target;
      const interactive = target?.closest("a,button,.gallery-frame,.service-visual");
      const image = target?.closest(".gallery-frame,.service-visual");
      setCursor({ x: event.clientX, y: event.clientY, hover: Boolean(interactive), label: image ? "VIEW" : interactive ? "OPEN" : "" });
      setTilt({ x: (event.clientX / window.innerWidth - 0.5) * 8, y: (event.clientY / window.innerHeight - 0.5) * -6 });
    };
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("mousemove", onMove); observer.disconnect(); };
  }, []);

  return <main><div className="grain" aria-hidden="true" /><div className="custom-cursor" style={{ left: cursor.x, top: cursor.y }} data-active={cursor.hover}>{cursor.label && <span>{cursor.label}</span>}</div><Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrolled={scrolled} /><Hero tilt={tilt} /><About /><Services /><Products /><Club /><Gallery /><Testimonials /><Location /><Contact /><Footer /></main>;
}

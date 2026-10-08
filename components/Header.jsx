"use client";

import { useEffect, useRef, useState } from "react";
import { ActionLink, Logo } from "@/components/common";
import { links, navItems } from "@/data/siteData";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  // Ao escolher uma seção, o foco segue para ela; nos outros casos volta ao botão.
  const restoreFocus = useRef(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const toggle = toggleRef.current;
    // Com o menu aberto, o resto da página fica inerte (fora do Tab e do leitor de tela).
    // A janela de aviso (dialog) fica de fora: ela pode ser aberta pelo próprio menu.
    const background = document.querySelectorAll("body > :not(.site-header, dialog)");
    // Com a janela de aviso aberta, o Esc fecha só ela (o menu continua aberto).
    const onKeyDown = (event) => {
      if (event.key === "Escape" && !document.querySelector("dialog[open]")) setOpen(false);
    };
    const closeOnDesktop = window.matchMedia("(min-width: 64rem)");
    const onResize = () => closeOnDesktop.matches && setOpen(false);

    restoreFocus.current = true;
    document.documentElement.classList.add("menu-open");
    background.forEach((element) => { element.inert = true; });
    menuRef.current?.querySelector("a")?.focus();
    document.addEventListener("keydown", onKeyDown);
    closeOnDesktop.addEventListener("change", onResize);
    return () => {
      document.documentElement.classList.remove("menu-open");
      background.forEach((element) => { element.inert = false; });
      document.removeEventListener("keydown", onKeyDown);
      closeOnDesktop.removeEventListener("change", onResize);
      if (restoreFocus.current) toggle?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);
  const goToSection = () => {
    restoreFocus.current = false;
    setOpen(false);
  };

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <a className="site-header__logo" href="#inicio" aria-label="Barbearia DoGago, voltar ao início" onClick={close}>
        <Logo sizes="(min-width: 64rem) 150px, 112px" preload />
      </a>

      <nav className="site-nav" aria-label="Seções">
        <ul>
          {navItems.filter((item) => item.desktop).map(({ label, id }) => (
            <li key={id}><a href={`#${id}`}>{label}</a></li>
          ))}
        </ul>
      </nav>

      <ActionLink className="site-header__cta" href={links.demo} variant="line">Agendar</ActionLink>

      <button
        ref={toggleRef}
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
        <i aria-hidden="true" />
        <i aria-hidden="true" />
      </button>

      <nav id="menu-mobile" ref={menuRef} className="mobile-menu" aria-label="Menu" hidden={!open}>
        <ul>
          {navItems.map(({ label, id }, index) => (
            <li key={id} style={{ "--i": index }}><a href={`#${id}`} onClick={goToSection}>{label}</a></li>
          ))}
        </ul>
        <ActionLink href={links.demo}>Agendar horário</ActionLink>
      </nav>
    </header>
  );
}

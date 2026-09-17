"use client";

import { ArrowIcon } from "@/components/ArrowIcon";
import { Logo } from "@/components/common";
import { booking, links, navItems } from "@/data/siteData";

export function Header({ menuOpen, setMenuOpen, scrolled }) {
  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="logo-link" href="#inicio"><Logo /></a>
        <nav className="desktop-nav">
          {navItems.slice(1, 5).map(([label, id]) => <a href={`#${id}`} key={id}>{label.toUpperCase()}</a>)}
        </nav>
        <a className="header-cta" href={booking} target="_blank" rel="noopener noreferrer" data-analytics="booking_click">AGENDAR <ArrowIcon /></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-controls="mobile-navigation" aria-expanded={menuOpen}><i /><i /></button>
      </header>
      <nav id="mobile-navigation" className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-label="Navegação móvel">
        <p className="eyebrow">BARBEARIA CONTEMPORÂNEA · SANTANA</p>
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label.toUpperCase()}</a>)}
        <a className="button button-bronze" href={booking} target="_blank" rel="noopener noreferrer" data-analytics="booking_click">AGENDAR HORÁRIO <ArrowIcon /></a>
      </nav>
    </>
  );
}

export function Footer() {
  return <footer><div className="footer-bottom"><a className="logo-link" href="#inicio"><Logo /></a><div><p><a href={links.instagram} target="_blank" rel="noopener noreferrer" data-analytics="instagram_click">@abarbeariadogago</a></p><p><a href={links.whatsapp} target="_blank" rel="noopener noreferrer" data-analytics="whatsapp_click">(11) 94725-6071</a></p><p>R. Conselheiro Moreira de Barros, 2511 - Loja 7<br />Santana - São Paulo/SP</p></div><nav>{navItems.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav></div><div className="footer-credit">BARBEARIA DOGAGO · SANTANA, SÃO PAULO</div></footer>;
}

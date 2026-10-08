import Image from "next/image";
import { ActionLink, TitleLines } from "@/components/common";
import HeroMedallion from "@/components/HeroMedallion";
import { business, heroImage, links } from "@/data/siteData";

// A abertura (foto acendendo, linhas, selo e botões) é só CSS: ver sections.css.
export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <Image className="hero__image" src={heroImage.src} alt={heroImage.alt} fill preload sizes="100vw" />
      <div className="hero__shade" aria-hidden="true" />
      <HeroMedallion />

      <div className="hero__content">
        <h1 id="hero-title" className="hero__title">
          <TitleLines lines={["Seu estilo.", <><em>Nosso</em> trabalho.</>]} />
        </h1>
        <p className="hero__lead">
          {business.name} em {business.address.district}, Zona Norte de São Paulo.
        </p>
        <div className="hero__actions">
          <ActionLink href={links.demo}>Agendar horário</ActionLink>
          <ActionLink href="#servicos" variant="line" icon="down">Ver serviços e preços</ActionLink>
        </div>
      </div>
    </section>
  );
}

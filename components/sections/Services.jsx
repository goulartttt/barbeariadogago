import Image from "next/image";
import { ActionLink, PriceList, SectionHeading } from "@/components/common";
import { club, extras, gallery, links, services } from "@/data/siteData";

export default function Services() {
  const photo = gallery[0];
  return (
    <section id="servicos" className="section section--ink services" aria-labelledby="servicos-title">
      <SectionHeading id="servicos-title" kicker="Serviços" lines={["Cuidado", <em>no ponto.</em>]}>
        <p>
          Preços públicos e transparentes. Membros do {club.name} têm {club.discount} OFF nos serviços extras elegíveis.
        </p>
      </SectionHeading>

      <div className="services__grid">
        <div className="services__main">
          <h3 className="list-title">Cortes e serviços</h3>
          <PriceList items={services} label="Cortes e serviços" />
        </div>
        <figure className="services__photo curtain" data-reveal>
          <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 64rem) 40vw, 100vw" />
          <figcaption>Imagem ilustrativa</figcaption>
        </figure>
        <div className="services__extras">
          <h3 className="list-title">Extras</h3>
          <PriceList items={extras} columns={2} label="Serviços extras" />
        </div>
      </div>

      <ActionLink className="section__cta" href={links.demo}>Agendar horário</ActionLink>
    </section>
  );
}

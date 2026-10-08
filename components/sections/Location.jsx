import { ActionLink, AddressLines, SectionHeading } from "@/components/common";
import OpeningHours from "@/components/OpeningHours";
import { business, links } from "@/data/siteData";

export default function Location() {
  const { address, phone } = business;
  return (
    <section id="onde-estamos" className="section section--paper location" aria-labelledby="onde-estamos-title">
      <SectionHeading id="onde-estamos-title" kicker="Onde estamos" lines={["Zona Norte.", <em>São Paulo.</em>]} />

      <div className="location__grid">
        <div className="location__info" data-reveal>
          <address>
            <p className="lead">
              <AddressLines address={address} withPostalCode />
            </p>
            <p>
              <span className="location__phone" aria-hidden="true">{phone}</span>
              <span className="sr-only">Telefone oculto nesta demonstração</span>
            </p>
          </address>
          <OpeningHours />
          <div className="location__actions">
            <ActionLink href={links.demo} variant="line">Como chegar</ActionLink>
          </div>
        </div>

        <div className="location__map curtain" data-reveal>
          <iframe
            title={`Mapa com a localização da ${business.name}`}
            src={links.mapsEmbed}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

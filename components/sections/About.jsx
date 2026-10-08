import { ActionLink, SectionHeading } from "@/components/common";
import { links } from "@/data/siteData";

export default function About() {
  return (
    <section id="sobre" className="section section--paper about" aria-labelledby="sobre-title">
      <SectionHeading id="sobre-title" kicker="A casa" lines={["Um lugar", <>para <em>você.</em></>]}>
        <p className="lead">
          A Barbearia DoGago é um espaço para cuidar do visual, trocar uma ideia e sair daqui se sentindo bem.
        </p>
        <p>
          Um endereço na Zona Norte onde técnica encontra proximidade. Onde o detalhe importa, o atendimento é leve
          e cada visita tem seu próprio ritmo.
        </p>
        <ActionLink href={links.instagram} variant="line">Ver no Instagram</ActionLink>
      </SectionHeading>
    </section>
  );
}

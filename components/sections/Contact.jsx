import { ActionLink, TitleLines } from "@/components/common";
import { links } from "@/data/siteData";

export default function Contact() {
  return (
    <section id="contato" className="section section--navy contact" aria-labelledby="contato-title">
      <div className="contact__body" data-reveal>
        <p className="kicker">Agendamento</p>
        <h2 id="contato-title"><TitleLines lines={["Seu próximo corte", <em>começa aqui.</em>]} /></h2>
        <p className="lead">Agende seu horário com a Barbearia DoGago.</p>
        <div className="contact__actions">
          <ActionLink href={links.demo}>Agendar horário</ActionLink>
        </div>
      </div>
    </section>
  );
}

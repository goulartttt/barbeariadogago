import { ActionLink } from "@/components/common";
import { business, links } from "@/data/siteData";

// Texto do aviso de demonstração. Usado na janela (DemoDialog) e na página
// /sobre-este-site, que é o caminho dos botões quando o JavaScript não carrega.
// "back" muda conforme o lugar: fecha a janela ou volta para a página inicial.
export default function DemoNotice({ back, asPage = false }) {
  const Title = asPage ? "h1" : "h2";
  return (
    <div className="demo-notice">
      <p className="kicker">Projeto de portfólio</p>
      <Title id="demo-title" className="demo-notice__title">Este é um site de demonstração.</Title>
      <p>
        Ele foi criado para mostrar como pode ser o site de uma barbearia. Os botões de agendamento, assinatura,
        contato e rota são apenas ilustrativos e não levam a nenhum atendimento.
      </p>
      <p>Para conhecer a {business.name}, visite o perfil oficial no Instagram.</p>
      <div className="demo-notice__actions">
        <ActionLink href={links.instagram}>Ver {business.instagram.handle}</ActionLink>
        {back}
      </div>
    </div>
  );
}

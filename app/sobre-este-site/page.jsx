import DemoNotice from "@/components/DemoNotice";
import { ActionLink } from "@/components/common";

export const metadata = {
  title: "Site de demonstração | Barbearia DoGago",
};

// Página de reserva do aviso: aparece quando o JavaScript não abre a janela.
export default function SobreEsteSite() {
  return (
    <main id="conteudo" className="section section--navy demo-page">
      <DemoNotice asPage back={<ActionLink href="/" variant="line" icon="left">Voltar ao site</ActionLink>} />
    </main>
  );
}

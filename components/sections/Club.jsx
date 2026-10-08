import { ActionLink, SectionHeading } from "@/components/common";
import { club, links } from "@/data/siteData";

export default function Club() {
  return (
    <section id="clube" className="section section--navy club" aria-labelledby="clube-title">
      <SectionHeading id="clube-title" kicker={club.name} lines={["Seu estilo", <em>em dia.</em>]}>
        <p className="lead">{club.pitch}</p>
        <p className="club__terms">{club.terms}</p>
      </SectionHeading>

      <h3 className="list-title club__subtitle">Escolha o seu plano</h3>
      <ul className="plans" data-reveal>
        {club.plans.map((plan, index) => (
          <li className={`plan${plan.badge ? " plan--featured" : ""}`} key={plan.name} style={{ "--i": index }}>
            {plan.badge && <p className="plan__badge">{plan.badge}</p>}
            <h4 className="plan__name">{plan.name}</h4>
            <p className="plan__description">{plan.description}</p>
            <p className="plan__price">
              <strong>{plan.price}</strong>
              <span>/mês</span>
            </p>
            <ActionLink href={links.demo} variant={plan.badge ? "bronze" : "line"}>
              Assinar {plan.name}
            </ActionLink>
          </li>
        ))}
      </ul>

      <div className="club__details">
        <div data-reveal>
          <h3 className="list-title">O que muda sendo membro</h3>
          <ul className="benefits">
            {club.benefits.map((benefit, index) => (
              <li key={benefit.title} style={{ "--i": index }}>
                <strong>{benefit.title}</strong>
                <span>{benefit.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal>
          <h3 className="list-title">Como entrar</h3>
          <ol className="steps">
            {club.steps.map((step, index) => (
              <li key={step.title} style={{ "--i": index }}>
                <strong>{step.title}</strong>
                <span>{step.text}</span>
              </li>
            ))}
          </ol>
          <p className="steps__note">Leva menos de dois minutos, direto do celular.</p>
        </div>
      </div>
    </section>
  );
}

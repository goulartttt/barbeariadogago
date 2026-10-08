import { AddressLines, Logo, SmartLink } from "@/components/common";
import { business, links, navItems } from "@/data/siteData";
import { portfolioNotice } from "@/lib/site";

export default function Footer() {
  const { address } = business;
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <Logo sizes="180px" />
          <p>{business.tagline}</p>
        </div>

        <div className="site-footer__contact">
          <h2 className="site-footer__title">Contato</h2>
          <address>
            <SmartLink href={links.instagram}>Instagram {business.instagram.handle}</SmartLink>
            <p><AddressLines address={address} /></p>
          </address>
        </div>

        <nav className="site-footer__nav" aria-label="Rodapé">
          <h2 className="site-footer__title">Navegue</h2>
          <ul>
            {navItems.map(({ label, id }) => (
              <li key={id}><a href={`#${id}`}>{label}</a></li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="site-footer__credit">{portfolioNotice}</p>
    </footer>
  );
}

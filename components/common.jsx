import { Fragment } from "react";
import Image from "next/image";
import { ArrowIcon } from "@/components/icons";
import { links } from "@/data/siteData";
import logo from "@/public/imagens/logo-dogago.png";

export function Logo({ className = "", sizes = "140px", preload = false }) {
  return (
    <Image
      className={`logo ${className}`}
      src={logo}
      alt="Barbearia DoGago"
      sizes={sizes}
      preload={preload}
    />
  );
}

// Link que abre sites externos em nova aba, com rel seguro e aviso para leitores
// de tela. Links para o aviso de demonstração ganham data-demo (ver DemoDialog).
export function SmartLink({ href, children, ...props }) {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...(href === links.demo && { "data-demo": true, "aria-haspopup": "dialog" })}
      {...props}
    >
      {children}
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  );
}

export function ActionLink({ href, variant = "bronze", icon = "right", children, className = "" }) {
  return (
    <SmartLink className={`button button--${variant} ${className}`} href={href}>
      <span>{children}</span>
      {icon && <ArrowIcon direction={icon} />}
    </SmartLink>
  );
}

export function AddressLines({ address, withPostalCode = false }) {
  return (
    <>
      {address.street}
      {" "}<br />
      {address.district}, {address.city} - {address.state}
      {withPostalCode && <>{" "}<br />{address.postalCode}</>}
    </>
  );
}

// Título em linhas; cada linha pode ser revelada separadamente (ver motion.css).
export function TitleLines({ lines }) {
  return lines.map((line, index) => (
    <Fragment key={index}>
      {index > 0 && " "}
      <span className="line">
        <span className="line__inner" style={{ "--i": index }}>{line}</span>
      </span>
    </Fragment>
  ));
}

// data-reveal: o bloco anima quando entra na tela (ver MotionObserver).
export function SectionHeading({ kicker, lines, children, id }) {
  return (
    <header className="section-heading" data-reveal>
      <div>
        <p className="kicker">{kicker}</p>
        <h2 id={id}><TitleLines lines={lines} /></h2>
      </div>
      {children && <div className="section-heading__aside">{children}</div>}
    </header>
  );
}

export function PriceList({ items, columns = 1, label }) {
  return (
    <ul className={`price-list price-list--${columns}`} aria-label={label} data-reveal>
      {items.map(({ name, price }, index) => (
        <li className="price-list__row" key={name} style={{ "--i": index }}>
          <span className="price-list__name">{name}</span>
          <span className="price-list__leader" aria-hidden="true" />
          <span className="price-list__price">{price}</span>
        </li>
      ))}
    </ul>
  );
}

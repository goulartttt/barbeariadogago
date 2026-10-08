import { PriceList, SectionHeading } from "@/components/common";
import { club, productGroups } from "@/data/siteData";

export default function Products() {
  return (
    <section id="produtos" className="section section--paper products" aria-labelledby="produtos-title">
      <SectionHeading id="produtos-title" kicker="Produtos" lines={["Para levar", <em>a casa.</em>]}>
        <p className="lead">Cuidados para continuar em casa.</p>
        <p>Valores cheios para o público. Membros do {club.name} têm {club.discount} OFF em cosméticos.</p>
      </SectionHeading>

      <div className="products__groups">
        {productGroups.map((group) => (
          <div className="products__group" key={group.name}>
            <h3 className="list-title">{group.name}</h3>
            <PriceList items={group.items} label={`Produtos: ${group.name}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

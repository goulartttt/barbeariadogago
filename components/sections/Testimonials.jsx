import Carousel from "@/components/Carousel";
import { SectionHeading } from "@/components/common";
import { Stars } from "@/components/icons";
import { rating, reviews } from "@/data/siteData";

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="section section--ink testimonials" aria-labelledby="avaliacoes-title">
      <SectionHeading id="avaliacoes-title" kicker="Avaliações" lines={["O que nossos", <em>clientes dizem.</em>]}>
        <p className="rating">
          <strong aria-hidden="true" data-count={rating.score}>{rating.score}</strong>
          <Stars label={`Nota ${rating.score} de 5`} />
          <span>no {rating.source}</span>
        </p>
      </SectionHeading>

      <Carousel
        variant="reviews"
        label="Avaliações de clientes"
        itemLabel="Avaliação"
        previousLabel="Avaliação anterior"
        nextLabel="Próxima avaliação"
      >
        {reviews.map((review) => (
          <figure className="review" key={review.text}>
            <Stars />
            <blockquote>
              <p>{review.text}</p>
            </blockquote>
            <figcaption>{review.name}</figcaption>
          </figure>
        ))}
      </Carousel>
    </section>
  );
}

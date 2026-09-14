"use client";

import { useEffect, useState } from "react";

const wa = "https://wa.me/5511947256071";
const booking = `${wa}?text=${encodeURIComponent(
  "Olá! Vim pelo site da Barbearia DoGago e gostaria de agendar um horário."
)}`;
const clubLink = `${wa}?text=${encodeURIComponent(
  "Olá! Vi o Clube DoGago no site e gostaria de saber mais sobre o plano de R$ 109,90."
)}`;
const maps =
  "https://www.google.com/maps/search/?api=1&query=R.%20Conselheiro%20Moreira%20de%20Barros%2C%202511%20-%20Loja%207%20-%20Santana%2C%20S%C3%A3o%20Paulo";
const instagram = "https://www.instagram.com/abarbeariadogago/";

const services = [
  ["Corte", "R$ 60,00"],
  ["Barba", "R$ 40,00"],
  ["Corte + Barba", "R$ 90,00"],
  ["Progressiva", "R$ 80,00"],
  ["Luzes", "R$ 70,00"],
  ["Platinado", "R$ 140,00"],
  ["Hidratação", "R$ 20,00"],
  ["Limpeza facial", "R$ 20,00"],
];
const extras = [
  ["Luzes", "R$ 70,00"],
  ["Platinado", "R$ 140,00"],
  ["Hidratação", "R$ 20,00"],
  ["Depilação na cera", "R$ 30,00"],
  ["Relaxamento", "R$ 20,00"],
  ["Desondulação dos fios", "R$ 80,00"],
  ["Ozonioterapia", "R$ 20,00"],
  ["Limpeza facial", "R$ 20,00"],
  ["Sobrancelha", "R$ 10,00"],
  ["Cone Hindu", "R$ 40,00"],
];
const products = [
  ["Pomada Pó", "R$ 57,50"],
  ["Pomada Seco Médio", "R$ 38,50"],
  ["Pomada Seco Alta", "R$ 38,50"],
  ["Pomada Molhado Alta", "R$ 38,50"],
  ["Balm Menta", "R$ 65,50"],
  ["Minoxidil", "R$ 100,00"],
  ["Shampoo Barba Menta", "R$ 60,50"],
  ["Óleo de Barba Sândalo e Almíscar", "R$ 80,00"],
  ["Laquê", "R$ 50,00"],
  ["Balm Café e Baunilha", "R$ 65,50"],
  ["Shampoo Café e Baunilha", "R$ 60,50"],
  ["Balm Sândalo e Almíscar", "R$ 65,50"],
  ["Shampoo Sândalo e Almíscar", "R$ 60,50"],
  ["Óleo Café e Baunilha", "R$ 85,00"],
  ["Leave-in", "R$ 75,00"],
  ["Kit Minoxidil 8%", "R$ 122,00"],
  ["Leave-in Teen", "R$ 75,00"],
  ["Pomada Teen", "R$ 38,50"],
  ["Pente de madeira", "R$ 30,00"],
  ["Shampoo cabelo", "R$ 65,00"],
  ["Condicionador cabelo", "R$ 65,00"],
];
const gallery = [
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1300&q=88",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1300&q=88",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1300&q=88",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1300&q=88",
];
const dogagoLogo = <img src="/Imagens/logo-gago.png" alt="Barbearia Dogago" />;

const clubSlides = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QJABC37k4cYs6uqDeetiyqAt7yvFtJ.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1x3MYL4a9fqI6vvL3IEP5o8TosX1Bi.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rcaC0A9uFu6OyKv7IjeRRG1gYoWILt.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3iSk9zAu02jYCaTjCwoZCR67dmaWDZ.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ftFgd1E9oy5fMbU9wymcDxFElC0E3k.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ypOHCnIYu8HCCMbI6AdQmNjxtLeAwk.png",
];
const reviews = [
  [
    "Fernando Ferreira",
    "Barbearia com clube fidelidade! Excelentes profissionais. Ambiente agradável.",
  ],
  [
    "Henris A",
    "Ambiente incrível e profissionais excelentes. Agradecimento em especial ao barbeiro Caio pelo atendimento impecável 😁",
  ],
  [
    "Formiga dando grau",
    "Ja sou cliente a um tempo, o corte é bom, ambiente agradável e os barbeiros são gente boa.",
  ],
  [
    "André Andrade Vasconcellos",
    "A melhor barbearia do Lauzane o Gago é sua equipe atendem muito bem, além do lugar ser super bacana você se sente em casa.",
  ],
  [
    "Cassiano Valentim",
    "Barbearia top!! Os meninos são feras e o atendimento diferenciado Lucas, Gabriel e Guilherme. Aplicativo para agendar facilitou muito, sempre estão trazendo novidades para os clientes.",
  ],
  [
    "Ariane Cristina Ramos",
    "Atendimento excelente ambiente limpo e organizado, o barbeiro Guilherme é bem atencioso com todos inclusive com as crianças detalhe ele sabe cuidar do cabelo afro.",
  ],
  [
    "Alberto Junior",
    "Sensacional, um ambiente muito agradável com ar condicionado, sem contar a excelência no atendimento e habilidade no corte. Um profissional de alta qualidade!",
  ],
  ["Hernando Almeida", "O melhor barbeiro da região, sem dúvidas!!!"],
  [
    "Ramonstro Italo",
    "Melhor barbearia que já cortei, ótimo ambiente, barbeiros bem atenciosos, e um trabalho impecável, preços e condições muito boa para os clientes!!",
  ],
  [
    "Kayky Queiroz",
    "Muito bom, ambiente agradável, os meninos são gente boa demais. Trabalharam muito bem!! Barbearia excelente.",
  ],
  [
    "Marcos Junior",
    "Atendimento top. Diferenciado. Pessoal acolhedor. Ambiente muito legal.",
  ],
  [
    "Douglas Messias",
    "Ótimo ambiente, barbeiro educado e prestativo, além de ser talentoso, pretendo virar freguês 👍👍",
  ],
];

function ArrowIcon({ direction = "right" }) {
  const rotations = { right: 0, left: 180, down: 90 };
  return (
    <svg className="arrow-icon" viewBox="0 0 20 20" aria-hidden="true" style={{ transform: `rotate(${rotations[direction]}deg)` }}>
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}

function Reveal({ children, className = "" }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
function Rows({ rows, product = false }) {
  return (
    <div className={product ? "price-rows product-rows" : "price-rows"}>
      {rows.map(([name, price]) => (
        <div className="price-row" key={name}>
          <strong>{name}</strong>
          <span>{price}</span>
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, hover: false, label: "" });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [slide, setSlide] = useState(0);
  const [clubSlide, setClubSlide] = useState(0);
  const [review, setReview] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 48);
    const move = (e) => {
      const el = e.target?.closest("a,button,.gallery-frame,.service-visual");
      const image = Boolean(
        e.target?.closest(".gallery-frame,.service-visual")
      );
      setCursor({
        x: e.clientX,
        y: e.clientY,
        hover: Boolean(el),
        label: image ? "VIEW" : el ? "OPEN" : "",
      });
      setTilt({
        x: (e.clientX / window.innerWidth - 0.5) * 8,
        y: (e.clientY / window.innerHeight - 0.5) * -6,
      });
    };
    const observer = new IntersectionObserver(
      (es) =>
        es.forEach(
          (e) => e.isIntersecting && e.target.classList.add("is-visible")
        ),
      { threshold: 0.12 }
    );
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("mousemove", move);
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);
  const nextSlide = () => setSlide((slide + 1) % gallery.length);
  const prevSlide = () =>
    setSlide((slide + gallery.length - 1) % gallery.length);
  const nextReview = () => setReview((review + 1) % reviews.length);
  const prevReview = () =>
    setReview((review + reviews.length - 1) % reviews.length);
  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <div
        className="custom-cursor"
        style={{ left: cursor.x, top: cursor.y }}
        data-active={cursor.hover}
      >
        {cursor.label && <span>{cursor.label}</span>}
      </div>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="logo-lockup logo-image-lockup" href="#inicio">
          {dogagoLogo}
        </a>
        <nav className="desktop-nav">
          <a href="#sobre">A CASA</a>
          <a href="#servicos">SERVIÇOS</a>
          <a href="#produtos">PRODUTOS</a>
          <a href="#clube">CLUBE</a>
          <a href="#contato">CONTATO</a>
        </nav>
        <a
          className="header-cta"
          href={booking}
          target="_blank"
          rel="noreferrer"
        >
          AGENDAR <ArrowIcon />
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
        >
          <i />
          <i />
        </button>
      </header>
      <div id="mobile-navigation" className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <p className="eyebrow">BARBEARIA CONTEMPORÂNEA · SANTANA</p>
        {[
          ["início", "inicio"],
          ["a casa", "sobre"],
          ["seu estilo", "servicos"],
          ["produtos", "produtos"],
          ["clube", "clube"],
          ["galeria", "galeria"],
          ["quem conhece", "quem-conhece"],
          ["onde estamos", "onde-estamos"],
        ].map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
            {label.toUpperCase()}
          </a>
        ))}
        <a className="button button-bronze" href={booking}>
          AGENDAR HORÁRIO <ArrowIcon />
        </a>
      </div>
      <section id="inicio" className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <Reveal>
            <h1>
              SEU ESTILO.
              <br />
              <em>NOSSO</em> TRABALHO.
            </h1>
          </Reveal>
          <Reveal>
            <a
              className="button button-light"
              href={booking}
              target="_blank"
              rel="noreferrer"
            >
              AGENDAR HORÁRIO <ArrowIcon />
            </a>
            <a className="hero-secondary" href="#servicos">
              CONHECER SERVIÇOS <ArrowIcon direction="down" />
            </a>
          </Reveal>
        </div>
        <div
          className="hero-object"
          style={{
            transform: `translate3d(${tilt.x}px,${tilt.y}px,0) rotate(-18deg)`,
          }}
        >
          <span>DG</span>
          <div className="object-ring" />
        </div>
        <div className="scroll-note">ROLE PARA EXPLORAR</div>
      </section>
      <section id="sobre" className="story section-pad">
        <Reveal>
          <p className="eyebrow bronze">A CASA</p>
        </Reveal>
        <div className="story-grid">
          <Reveal>
            <h2>
              UM LUGAR
              <br />
              PARA <span>VOCÊ.</span>
            </h2>
          </Reveal>
          <Reveal className="story-text">
            <p className="lead">
              A Barbearia DoGago é um espaço para cuidar do visual, trocar uma
              ideia e sair daqui se sentindo bem.
            </p>
            <p>
              Um endereço na Zona Norte onde técnica encontra proximidade. Onde
              o detalhe importa, o atendimento é leve e cada visita tem seu
              próprio ritmo.
            </p>
            <a
              className="text-link"
              href={instagram}
              target="_blank"
              rel="noreferrer"
            >
              CONHECER <ArrowIcon />
            </a>
          </Reveal>
        </div>
      </section>
      <section id="servicos" className="services section-pad">
        <Reveal>
          <p className="eyebrow bronze">SEU ESTILO</p>
          <div className="services-heading">
            <h2>
              CUIDADO
              <br />
              <span>NO PONTO.</span>
            </h2>
            <p>
              Preços públicos e transparentes. Membros do Clube DoGago têm 10%
              OFF nos serviços extras elegíveis.
            </p>
          </div>
        </Reveal>
        <div className="service-layout">
          <div>
            <h3 className="subheading">CORTES / SERVIÇOS</h3>
            <Rows rows={services} />
          </div>
          <div className="service-visual">
            <div
              className="service-visual-image"
              style={{ backgroundImage: `url(${gallery[0]})` }}
            />
            <span>DO GAGO EM CENA</span>
          </div>
        </div>
        <div className="extras-block">
          <h3 className="subheading">EXTRAS</h3>
          <Rows rows={extras} />
        </div>
        <a className="button button-bronze" href={booking}>
          AGENDAR HORÁRIO <ArrowIcon />
        </a>
      </section>
      <section id="produtos" className="products section-pad">
        <Reveal>
          <p className="eyebrow bronze">PRODUTOS</p>
          <div className="products-heading">
            <h2>
              PARA LEVAR
              <br />
              <span>A CASA.</span>
            </h2>
            <p>
              Valores cheios para o público. Membros do Clube DoGago têm 10% OFF
              em cosméticos.
            </p>
          </div>
        </Reveal>
        <div className="products-layout">
          <div className="product-feature">
            <div className="product-placeholder">DG</div>
            <p>SELEÇÃO DOGAGO</p>
            <h3>
              Cuidados para
              <br />
              continuar em casa.
            </h3>
          </div>
          <Rows rows={products} product />
        </div>
      </section>
      <section id="clube" className="club section-pad">
        <Reveal>
          <p className="eyebrow">CLUBE DOGAGO</p>
          <div className="club-heading">
            <div>
              <h2>
                SEU ESTILO
                <br />
                <em>EM DIA.</em>
              </h2>
            </div>
          </div>
        </Reveal>
        <div className="club-carousel carousel">
          <button
            className="carousel-arrow prev"
            onClick={() =>
              setClubSlide(
                (clubSlide + clubSlides.length - 1) % clubSlides.length
              )
            }
            aria-label="Print anterior"
          >
            <ArrowIcon direction="left" />
          </button>
          <div
            className="club-track gallery-track"
            onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
            onTouchEnd={(event) => {
              if (touchStart === null) return;
              const distance = event.changedTouches[0].clientX - touchStart;
              if (Math.abs(distance) > 45)
                setClubSlide(
                  (clubSlide + (distance < 0 ? 1 : clubSlides.length - 1)) %
                    clubSlides.length
                );
              setTouchStart(null);
            }}
          >
            {clubSlides.map((image, index) => (
              <div
                key={image}
                className={`club-slide gallery-frame ${
                  index === clubSlide ? "is-current" : ""
                }`}
                style={{
                  transform: `translateX(calc(${(index - clubSlide) * 108}% + ${
                    (index - clubSlide) * 24
                  }px))`,
                }}
              >
                <img
                  src={image}
                  alt={`Informações do Clube DoGago, slide ${index + 1} de ${
                    clubSlides.length
                  }`}
                  draggable="false"
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-arrow next"
            onClick={() => setClubSlide((clubSlide + 1) % clubSlides.length)}
            aria-label="Próximo print"
          >
            <ArrowIcon />
          </button>
        </div>
        <div className="carousel-meta" aria-live="polite">
          <span>
            Slide {clubSlide + 1} de {clubSlides.length}
          </span>
        </div>
        <a
          className="button button-dark club-cta"
          href={clubLink}
          target="_blank"
          rel="noreferrer"
        >
          QUERO CONHECER O CLUBE <ArrowIcon />
        </a>
      </section>
      <section id="galeria" className="gallery section-pad">
        <Reveal>
          <p className="eyebrow bronze">GALERIA</p>
          <h2>
            FEITO PARA
            <br />
            <span>SER VISTO.</span>
          </h2>
        </Reveal>
        <div className="carousel">
          <button
            className="carousel-arrow prev"
            onClick={prevSlide}
            aria-label="Imagem anterior"
          >
            <ArrowIcon direction="left" />
          </button>
          <div
            className="gallery-track"
            onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
            onTouchEnd={(event) => {
              if (touchStart === null) return;
              const distance = event.changedTouches[0].clientX - touchStart;
              if (Math.abs(distance) > 45) (distance < 0 ? nextSlide : prevSlide)();
              setTouchStart(null);
            }}
            role="region"
            aria-label="Galeria de imagens da Barbearia DoGago"
          >
            {gallery.map((image, index) => (
              <div
                key={image}
                className={`gallery-frame ${
                  index === slide ? "is-current" : ""
                }`}
                style={{
                  transform: `translateX(calc(${(index - slide) * 108}% + ${
                    (index - slide) * 24
                  }px))`,
                }}
              >
                <div style={{ backgroundImage: `url(${image})` }} />
                <span>{["CORTE", "BARBA", "DETALHES", "AMBIENTE"][index]}</span>
              </div>
            ))}
          </div>
          <button
            className="carousel-arrow next"
            onClick={nextSlide}
            aria-label="Próxima imagem"
          >
            <ArrowIcon />
          </button>
        </div>
        <div className="carousel-meta" aria-live="polite">
          <span>
            Imagem {slide + 1} de {gallery.length}
          </span>
        </div>
      </section>
      <section id="quem-conhece" className="testimonials section-pad">
        <Reveal>
          <p className="eyebrow bronze">QUEM CONHECE</p>
          <h2>
            O QUE NOSSOS
            <br />
            <span>CLIENTES DIZEM.</span>
          </h2>
        </Reveal>
        <div className="rating">
          <strong>5,0 ★</strong>
          <span>GOOGLE</span>
        </div>
        <div className="review-carousel">
          <button
            className="carousel-arrow prev"
            onClick={prevReview}
            aria-label="Avaliação anterior"
          >
            <ArrowIcon direction="left" />
          </button>
          <div
            className="review-viewport"
            role="region"
            aria-label="Avaliações de clientes"
            onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
            onTouchEnd={(event) => {
              if (touchStart === null) return;
              const distance = event.changedTouches[0].clientX - touchStart;
              if (Math.abs(distance) > 45)
                (distance < 0 ? nextReview : prevReview)();
              setTouchStart(null);
            }}
          >
            <div
              className="review-track"
              style={{
                transform: `translateX(calc(-${review} * (var(--review-card) + var(--review-gap))))`,
              }}
            >
              {reviews.map(([name, text]) => (
                <article className="review-card" key={name}>
                  <span className="review-mark">“</span>
                  <div className="review-stars" aria-label="5 estrelas">
                    ★★★★★
                  </div>
                  <blockquote>{text}</blockquote>
                  <p>
                    <strong>{name}</strong>
                    <span>AVALIAÇÃO DE CLIENTE</span>
                  </p>
                </article>
              ))}
            </div>
          </div>
          <button
            className="carousel-arrow next"
            onClick={nextReview}
            aria-label="Próxima avaliação"
          >
            <ArrowIcon />
          </button>
        </div>
      </section>
      <section id="onde-estamos" className="location section-pad">
        <Reveal>
          <p className="eyebrow bronze">ONDE ESTAMOS</p>
          <h2>
            ZONA NORTE.
            <br />
            <span>SÃO PAULO.</span>
          </h2>
        </Reveal>
        <div className="location-grid">
          <div>
            <p className="lead">
              R. Conselheiro Moreira de Barros, 2511 - Loja 7<br />
              Santana, São Paulo - SP
              <br />
              02430-001
            </p>
            <p className="phone">(11) 94725-6071</p>
            <a
              className="text-link"
              href={maps}
              target="_blank"
              rel="noreferrer"
            >
              COMO CHEGAR <ArrowIcon />
            </a>
          </div>
          <div className="map-card">
            <span>
              SANTANA
              <br />
              <b>02430-001</b>
            </span>
            <i />
          </div>
        </div>
      </section>
      <section id="contato" className="contact section-pad">
        <Reveal>
          <p className="eyebrow bronze">BARBEARIA DOGAGO</p>
          <h2>
            SEU PRÓXIMO CORTE
            <br />
            <em>COMEÇA AQUI.</em>
          </h2>
          <p>Agende seu horário com a Barbearia DoGago.</p>
        </Reveal>
        <a className="button button-bronze" href={booking}>
          AGENDAR HORÁRIO <ArrowIcon />
        </a>
      </section>
      <footer>
        <div className="footer-bottom">
          <a className="logo-lockup logo-image-lockup" href="#inicio">
            {dogagoLogo}
          </a>
          <div>
            <p>@abarbeariadogago</p>
            <p>(11) 94725-6071</p>
            <p>
              R. Conselheiro Moreira de Barros, 2511 - Loja 7<br />
              Santana - São Paulo/SP
            </p>
          </div>
          <nav>
            <a href="#inicio">Início</a>
            <a href="#sobre">A Casa</a>
            <a href="#servicos">Seu Estilo</a>
            <a href="#produtos">Produtos</a>
            <a href="#clube">Clube DoGago</a>
            <a href="#galeria">Galeria</a>
            <a href="#quem-conhece">Quem Conhece</a>
            <a href="#onde-estamos">Onde Estamos</a>
          </nav>
        </div>
        <div className="footer-credit">
          BARBEARIA DOGAGO · SANTANA, SÃO PAULO
        </div>
      </footer>
    </main>
  );
}

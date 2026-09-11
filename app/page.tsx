'use client'

import { useEffect, useState } from 'react'

const whatsapp = 'https://wa.me/5511947256071?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Barbearia%20DoGago%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.'
const instagram = 'https://www.instagram.com/barbearia_dogago/'
const maps = 'https://www.google.com/maps/search/?api=1&query=R.%20Conselheiro%20Moreira%20de%20Barros%2C%202511%20-%20Loja%207%20-%20Santana%2C%20S%C3%A3o%20Paulo'

const services = [
  ['01', 'Corte de cabelo', 'R$ 60,00', 'Precisão, presença e aquele acabamento que muda o dia.'],
  ['02', 'Progressiva', 'R$ 80,00', 'Textura alinhada para um estilo que fala por você.'],
  ['03', 'Hidratação', 'R$ 20,00', 'Cuidado essencial para cabelo com aparência saudável.'],
  ['04', 'Ozonioterapia', 'R$ 20,00', 'Uma pausa de cuidado para couro cabeludo e barba.'],
  ['05', 'Limpeza facial', 'R$ 20,00', 'Renove a pele e complete a experiência.'],
  ['06', 'Depilação de nariz', 'R$ 30,00', 'Os detalhes também fazem parte do estilo.'],
]

const gallery = [
  ['01 / CORTE', 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=85'],
  ['02 / BARBA', 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=85'],
  ['03 / DETALHES', 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=85'],
  ['04 / AMBIENTE', 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85'],
]

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])

  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="wordmark" href="#inicio" aria-label="Barbearia DoGago início">DO<span>G</span>AGO</a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {['sobre', 'servicos', 'clube', 'avaliacoes', 'contato'].map((item) => <a key={item} href={`#${item}`}>{item === 'servicos' ? 'SERVIÇOS' : item.toUpperCase()}</a>)}
        </nav>
        <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">AGENDAR <span>↗</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}><i /><i /></button>
      </header>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <p className="eyebrow">BARBEARIA CONTEMPORÂNEA · SANTANA</p>
        {['início', 'sobre', 'serviços', 'clube', 'contato'].map((item) => <a key={item} href={`#${item === 'início' ? 'inicio' : item.replace('ç', 'c')}`} onClick={() => setMenuOpen(false)}>{item.toUpperCase()}</a>)}
        <a className="button button-bronze" href={whatsapp} target="_blank" rel="noreferrer">AGENDAR HORÁRIO <span>↗</span></a>
      </div>

      <section id="inicio" className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <Reveal><p className="eyebrow">ZONA NORTE · SÃO PAULO</p></Reveal>
          <Reveal><h1>SEU ESTILO.<br /><em>NOSSO</em> TRABALHO.</h1></Reveal>
          <Reveal><div className="hero-bottom"><p>Cabelo, barba, conversa<br />e amigos.</p><a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">MARCAR MEU HORÁRIO <span>↗</span></a></div></Reveal>
        </div>
        <div className="hero-object" aria-hidden="true"><span>DG</span><div className="object-ring" /></div>
        <div className="scroll-note">ROLE PARA EXPLORAR <span>↓</span></div>
      </section>

      <section id="sobre" className="story section-pad">
        <Reveal><p className="eyebrow bronze">01 — A CASA</p></Reveal>
        <div className="story-grid"><Reveal><h2>CABELO.<br />BARBA.<br /><span>CONVERSA.</span><br />AMIGOS.</h2></Reveal><Reveal className="story-text"><p className="lead">A Barbearia DoGago é um espaço para cuidar do visual, trocar uma ideia e sair daqui se sentindo bem.</p><p>Um endereço na Zona Norte onde técnica encontra proximidade. Onde o detalhe importa, o atendimento é leve e cada visita tem seu próprio ritmo.</p><a className="text-link" href={instagram} target="_blank" rel="noreferrer">CONHEÇA A DOGAGO <span>↗</span></a></Reveal></div>
      </section>

      <section className="experience section-pad" id="experiencia"><Reveal><p className="eyebrow bronze">02 — O QUE FICA</p><h2>NÃO É SÓ<br /><span>UM CORTE.</span></h2></Reveal><div className="experience-list">{['ESTILO', 'PRECISÃO', 'CUIDADO', 'ATENDIMENTO'].map((item, index) => <Reveal key={item}><div className="experience-row"><span>0{index + 1}</span><h3>{item}</h3><p>{['A sua assinatura começa nos detalhes.', 'Os pequenos detalhes fazem a diferença.', 'Porque se sentir bem também é parte do resultado.', 'Chegue como é. Saia ainda mais você.'][index]}</p><b>↗</b></div></Reveal>)}</div></section>

      <section className="services section-pad" id="servicos"><Reveal><p className="eyebrow bronze">03 — O MENU</p><div className="services-heading"><h2>ESCOLHA<br /><span>SEU ESTILO.</span></h2><p>Serviços pensados para acompanhar a sua rotina, do primeiro detalhe ao último acabamento.</p></div></Reveal><div className="service-layout"><div className="service-list">{services.map(([num, title, price, desc], index) => <button className={`service-item ${activeService === index ? 'active' : ''}`} key={title} onMouseEnter={() => setActiveService(index)} onFocus={() => setActiveService(index)} onClick={() => setActiveService(index)}><span>{num}</span><strong>{title}</strong><small>{activeService === index ? desc : 'VER DETALHES'}</small><b>{price}</b></button>)}</div><div className="service-visual"><div className="service-visual-image" style={{ backgroundImage: `url(${gallery[activeService % gallery.length][1]})` }} /><span>{services[activeService][1].toUpperCase()}</span></div></div><a className="button button-bronze" href={whatsapp} target="_blank" rel="noreferrer">AGENDAR ESTE MOMENTO <span>↗</span></a></section>

      <section className="category-band"><p>CABELO <span>·</span> BARBA <span>·</span> ESTÉTICA <span>·</span> DEPILAÇÃO</p></section>
      <section className="craft section-pad"><Reveal><p className="eyebrow bronze">04 — A MATÉRIA</p><h2>O DETALHE<br /><span>É O LUXO.</span></h2></Reveal><div className="craft-grid">{[['TÉCNICA', 'A base de tudo.'], ['PRECISÃO', 'Os pequenos detalhes fazem a diferença.'], ['ESTILO', 'A sua assinatura, sem esforço.'], ['CUIDADO', 'Tempo bem investido em você.']].map(([title, text], index) => <Reveal key={title} className="craft-item"><div className={`craft-number n${index + 1}`}>0{index + 1}</div><h3>{title}</h3><p>{text}</p></Reveal>)}</div></section>

      <section className="gallery section-pad"><Reveal><p className="eyebrow bronze">05 — DO GAGO EM CENA</p><h2>FEITO PARA<br /><span>SER VISTO.</span></h2></Reveal><div className="gallery-grid">{gallery.map(([label, image], index) => <Reveal key={label} className={`gallery-card card-${index + 1}`}><div className="gallery-image" style={{ backgroundImage: `url(${image})` }} /><span>{label}</span></Reveal>)}</div></section>

      <section className="club section-pad" id="clube"><div className="club-mark">DG</div><Reveal><p className="eyebrow">06 — CLUBE DOGAGO</p><h2>SEU ESTILO.<br /><em>SEMPRE</em><br />EM DIA.</h2><p className="club-copy">O Clube DoGago foi pensado para quem gosta de manter o visual em dia e transformar o cuidado com cabelo e barba em parte da rotina.</p><a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">QUERO SABER COMO FUNCIONA <span>↗</span></a></Reveal></section>

      <section className="testimonials section-pad" id="avaliacoes"><Reveal><p className="eyebrow bronze">07 — QUEM CONHECE</p><h2>QUEM CONHECE,<br /><span>VOLTA.</span></h2></Reveal><div className="rating"><strong>5,0</strong><span>★ GOOGLE</span></div><div className="quotes"><Reveal><blockquote>“Muito bom, ambiente agradável, os meninos são gente boa demais.”</blockquote></Reveal><Reveal><blockquote>“Meu filho adorou o dono da barbearia Lucas e o atendimento é muito bom.”</blockquote></Reveal><Reveal><blockquote>“Melhor barbearia da Zona Norte e região.”</blockquote></Reveal></div></section>

      <section className="location section-pad"><Reveal><p className="eyebrow bronze">08 — ONDE ESTAMOS</p><h2>ZONA NORTE.<br /><span>SÃO PAULO.</span></h2></Reveal><div className="location-grid"><div><p className="lead">R. Conselheiro Moreira de Barros, 2511 - Loja 7<br />Santana, São Paulo - SP<br />02430-001</p><a className="text-link" href={maps} target="_blank" rel="noreferrer">COMO CHEGAR <span>↗</span></a></div><div className="map-card"><div className="map-lines" /><span>SANTANA<br /><b>02430-001</b></span><i /></div></div></section>

      <section className="contact section-pad" id="contato"><Reveal><p className="eyebrow">09 — A PRÓXIMA CONVERSA</p><h2>VAMOS<br /><em>MARCAR?</em></h2><a className="contact-link" href={whatsapp} target="_blank" rel="noreferrer">(11) 94725-6071 <span>↗</span></a><p>@barbearia_dogago</p></Reveal></section>
      <footer><div className="footer-top"><p className="eyebrow bronze">BARBEARIA DOGAGO</p><h2>SEU PRÓXIMO CORTE<br /><span>COMEÇA AQUI.</span></h2><a className="button button-bronze" href={whatsapp} target="_blank" rel="noreferrer">AGENDAR HORÁRIO <span>↗</span></a></div><div className="footer-bottom"><a className="wordmark" href="#inicio">DO<span>G</span>AGO</a><p>R. Conselheiro Moreira de Barros, 2511 - Loja 7 · Santana - São Paulo/SP</p><a href={instagram} target="_blank" rel="noreferrer">@barbearia_dogago ↗</a></div></footer>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp">WHATSAPP <span>↗</span></a>
    </main>
  )
}

# Barbearia DoGago: contexto do projeto

Site de página única da Barbearia DoGago, em Santana, Zona Norte de São Paulo.

**Status (out/2026): projeto de portfólio do Alexandre.** A barbearia fechou com
outro fornecedor e não é mais cliente. O site fica publicado só como
demonstração, com estas proteções (não remover):
- selo fixo "Projeto conceito · não é o site oficial" e aviso no rodapé
  (`portfolioNotice` em `lib/site.js`);
- fora dos buscadores: `noindex` no layout, `robots.txt` bloqueando tudo, sem
  sitemap e sem dados estruturados de empresa;
- depoimentos só com as iniciais dos autores (LGPD);
- **nenhum botão leva aos canais da barbearia.** Agendar, assinar e
  "Como chegar" apontam para `links.demo` (`/sobre-este-site`); o `DemoDialog`
  abre o aviso `DemoNotice` na própria página. Endereço é texto simples.
  **Nada de WhatsApp em lugar nenhum**, e o telefone aparece mascarado
  ("(11) XXXXX-XXXX"). Os únicos dados de contato visíveis são o Instagram
  oficial (único link real, autorizado pelo Alexandre) e o endereço.
  O texto do aviso é neutro: não fala de vínculo nem de negociação.

Não há mais fotos nem informações novas a receber do cliente.

Estas regras complementam o `~/.claude/CLAUDE.md` global. Em caso de conflito,
vale este arquivo.

## Stack e comandos

- Next.js 16 (App Router), React 19, **JavaScript** (sem TypeScript), **npm**.
- CSS próprio em `app/styles/` (sem Tailwind). Carrossel com `embla-carousel-react`.
- Fontes via `next/font/google`: **Fraunces** (títulos) e **Barlow** (textos e rótulos).
- Este Next tem mudanças grandes em relação ao que você conhece. Antes de usar
  uma API, leia a documentação em `node_modules/next/dist/docs/`
  (ex.: `priority` virou `preload` no `next/image`; `images.qualities` padrão é `[75]`).

```bash
npm run dev      # desenvolvimento
npm run build    # obrigatório passar antes de dizer "pronto"
npm start        # serve o build
npm run prints   # prints em 390, 768 e 1440 px na pasta prints/ (site rodando, Node 22+)
```

## Onde ficam as coisas

- `data/siteData.js`: **fonte única** dos dados do negócio (nome, contatos,
  endereço, horário, links, preços, planos do Clube, fotos e avaliações).
  Nenhum desses dados fica escrito direto nos componentes. Os textos de
  apresentação de cada seção (títulos e parágrafos) ficam no próprio componente da seção.
- `components/sections/`: uma seção por arquivo, renderizadas no servidor.
- Componentes de cliente (`"use client"`) só onde há interação: `Header`,
  `Carousel`, `HeroMedallion`, `MotionObserver`, `OpeningHours` e `DemoDialog`.
  O `Carousel` e o `DemoDialog` recebem o conteúdo como `children` para que ele
  continue sendo renderizado no servidor.
- `app/styles/tokens.css`: cores, tipografia e espaços. Use os tokens e não
  valores soltos. Cada seção troca os papéis de cor com `section--navy`,
  `--coal`, `--ink` ou `--paper`.
- `lib/site.js`: URL do site e texto do aviso de portfólio.
- `next.config.mjs`: cabeçalhos de segurança e CSP. Todo serviço de terceiros
  novo precisa ser liberado ali.

## Identidade visual (decidida, não mudar sem pedido)

- Azul-marinho (#07152f) com bronze (#c89b45) e papel (#e9e4da). Sobre o papel,
  o bronze de texto é `--bronze-ink` (#7d5a1f) para manter o contraste AA.
- Títulos em caixa alta na Fraunces. A palavra de destaque vai em itálico bronze (`<em>`).
- Rótulo de seção com linha e losango, no estilo dos posts da marca no Instagram.
- Listas de preço com pontilhado de cardápio.
- Movimento (decidido com o Alexandre em out/2026): **sóbrio, coerente com uma
  barbearia, "nada purpurinoso"**. Tudo em `app/styles/motion.css`:
  - abertura do topo em cerca de 1,5 s (foto acende, linhas do título saem de
    trás de uma faixa, selo DG entra rolando, botões por último);
  - entradas ao rolar, uma vez por visita, via `data-reveal` e `MotionObserver`
    (títulos por linha, rótulo se desenha, fotos com cortina, preços em cascata
    com o pontilhado se desenhando, cards em sequência, nota "5,0" contando);
  - fundo das seções mudando de cor ao rolar e profundidade nas fotos (CSS
    `animation-timeline`, só onde o navegador suporta);
  - mouse: passada única de luz no botão bronze, zoom leve na galeria, card que
    levanta; no toque, o botão "afunda";
  - carrosséis **não** passam sozinhos.
- Regras do movimento: sem bibliotecas de animação; conteúdo visível sem
  JavaScript (a classe `.motion` só é ligada pelo script); "reduzir movimento"
  deixa tudo parado; animar só transform, opacidade, clip-path e cor.
- O logo é branco e ornamental (`public/imagens/logo-dogago.png`), então só funciona sobre fundo escuro.

## Regras de conteúdo

- Nunca inventar dados da barbearia. O que não se sabe aparece como "a confirmar"
  ou fica de fora do site.
- As fotos do topo, da galeria e de serviços são de banco de imagens (Unsplash)
  e vão continuar assim, porque não haverá fotos do cliente.
- Horário de funcionamento: `openingHours` no `siteData`, tirado do perfil no
  Google em out/2026 (segunda confirmada pelo Alexandre: igual aos outros dias
  úteis). O status "Aberto agora" é calculado no navegador, no fuso de São Paulo.
- A seção do Clube mostra planos, benefícios e passos em texto (`club` no
  `siteData`), transcritos dos posts oficiais do Instagram. O carrossel com os
  posts foi retirado a pedido do Alexandre: só os cartões ficam.
- Os grupos de produtos (Cabelo, Barba, Crescimento, Acessórios) foram definidos
  por nós, não pelo cliente.
- Em out/2026 o Google Maps mostrava nota 5,0 com 118 avaliações.

## Branches e publicação

Segue o fluxo HML/PROD do CLAUDE.md global. Nunca trabalhe nem faça merge na `main`.

- Versões iniciais: `HML-V1.0` e `PROD-V1.0`, iguais ao site antigo.
- Primeira demanda: `feature/PROD-V1.0/revisao-completa` (revisão completa do
  site), que vai para `HML-V1.1` e depois `PROD-V1.1`.
- Na Vercel, o Alexandre troca manualmente a branch de cada ambiente.
- O `origin` usa HTTPS porque a chave SSH desta máquina não tem acesso ao GitHub.
- O Alexandre testa e faz os commits dele. Não faça commit nem push sem pedido.

## Histórico de decisões

- **Out/2026: saída da ferramenta de geração antiga.** O site foi gerado por uma
  ferramenta externa ligada ao repositório. As branches dela foram apagadas e
  nenhum arquivo do projeto deve citar essa ferramenta nem IA. O histórico do
  Git foi mantido de propósito (reescrever seria irreversível, e as PRs antigas
  não podem ser apagadas). Pendente: só apagar o projeto na ferramenta antiga
  depois que a `PROD-V1.1` estiver no ar, porque a `PROD-V1.0` ainda carrega
  imagens hospedadas lá.
- **Revisão completa (V1.1):**
  - Página passou a ser renderizada no servidor.
  - Saíram o cursor personalizado e as animações genéricas antigas; depois
    entrou o sistema de movimento descrito em "Identidade visual".
  - Saíram Tailwind, shadcn, TypeScript e pnpm.
  - Entraram CSS organizado, ícones e imagem de compartilhamento próprios,
    cabeçalhos de segurança e robots.
  - O mapa foi corrigido (apontava para outra rua) e as legendas da galeria também (estavam trocadas).
- **CSP sem nonce:** scripts inline liberados para manter a página estática.
  Se o site passar a ter formulários ou dados de usuários, reavaliar. No preview
  (HML) a CSP também libera o `vercel.live`, para a barra de comentários da Vercel.
- **Segurança de dependências:** em out/2026 o Next foi de 16.3.3 para 16.3.8 por
  causa de uma vulnerabilidade crítica. A versão é fixa (sem `^`) de propósito.

## Antes de dizer "pronto"

1. `npm run build` sem erros.
2. `npm run prints` e conferir celular, tablet e computador.
3. Navegar pelo teclado (Tab, Enter, setas nos carrosséis, Esc no menu).
4. `npm audit` sem vulnerabilidade grave.
5. Conferir os cabeçalhos com `curl -I` no `npm start`.

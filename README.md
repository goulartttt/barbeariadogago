# Barbearia DoGago

**Projeto conceito de portfólio**: site da **Barbearia DoGago**, em Santana, Zona Norte de São Paulo.
Não é o site oficial da barbearia e fica fora dos buscadores.
É uma página única com serviços e preços, produtos, Clube DoGago, galeria,
avaliações, horário e mapa. Os botões de agendamento e contato abrem um aviso
de demonstração (`/sobre-este-site`); só o link do Instagram é real.

## Tecnologias

- [Next.js 16](https://nextjs.org) (App Router) e React 19, em JavaScript
- CSS próprio, organizado em `app/styles/`
- [Embla Carousel](https://www.embla-carousel.com) nos carrosséis
- Fontes Fraunces e Barlow servidas pelo próprio site (`next/font`)
- Vercel Analytics
- Hospedagem na Vercel

## Como rodar

Requisito: Node.js 20.9 ou mais novo.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Outros comandos:

| Comando | O que faz |
|---|---|
| `npm run build` | Gera a versão de produção (rode antes de publicar) |
| `npm start` | Serve a versão de produção gerada pelo build |
| `npm run prints` | Tira prints do site no celular, tablet e computador (pasta `prints/`). Precisa do site rodando, do Google Chrome e do Node 22 ou mais novo |

## Variáveis de ambiente

Copie `.env.example` para `.env.local` se precisar. A única variável é
`NEXT_PUBLIC_SITE_URL` (endereço público do site). Na Vercel ela é opcional:
sem ela, o site usa o domínio de produção do projeto.

## Onde editar o conteúdo

Todos os dados do negócio ficam em **`data/siteData.js`**: telefone, endereço,
links, preços, produtos, fotos, posts do Clube e avaliações. Para trocar uma
foto, coloque o arquivo em `public/imagens/` e atualize o caminho nesse arquivo.

O que não se sabe sobre a barbearia aparece como "a confirmar" ou fica de fora.

## Estrutura

```
app/
  layout.jsx          fontes e metadados (noindex)
  page.jsx            monta as seções da página
  styles/             tokens, base, componentes, seções e movimento
  icon.png, apple-icon.png, opengraph-image.png
  robots.js           bloqueia buscadores (projeto de portfólio)
components/
  sections/           uma seção da página por arquivo
  Header.jsx, Footer.jsx, Carousel.jsx, HeroMedallion.jsx,
  OpeningHours.jsx, MotionObserver.jsx, DemoDialog.jsx, DemoNotice.jsx
  common.jsx          Logo, botões, títulos de seção e listas de preço
  icons.jsx           ícones em SVG
data/siteData.js      conteúdo do site
lib/site.js           URL do site e aviso de portfólio
public/imagens/       logo
scripts/prints.mjs    prints para conferir o visual
```

## Publicação

O projeto usa dois ambientes na Vercel, cada um acompanhando uma branch:

- **Homologação**: `HML-Vx.y`, onde se testa antes de publicar.
- **Produção**: `PROD-Vx.y`, o site no ar.

Cada demanda nasce da última `PROD` numa branch própria
(`feature/`, `refac/` ou `hotfix/`), vai para uma nova `HML` e, depois de
aprovada, para uma nova `PROD`.

## Segurança

Os cabeçalhos de segurança (CSP, HSTS, X-Frame-Options e outros) ficam em
`next.config.mjs`. Ao incluir um serviço de terceiros (script, iframe ou
imagem externa), libere o domínio dele na CSP.

// Endereço público do site. Ordem: variável definida por nós, domínio de
// produção que a Vercel injeta, e localhost para desenvolvimento.
const rawUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  "http://localhost:3000";

// Aceita o domínio com ou sem "https://" e sem barra no final.
export const siteUrl = (/^https?:\/\//.test(rawUrl) ? rawUrl : `https://${rawUrl}`).replace(/\/+$/, "");

// Projeto de portfólio: usa a marca de uma empresa real que não é cliente.
// Por isso o site fica fora dos buscadores (layout.jsx e robots.js) e mostra
// este aviso no selo fixo e no rodapé.
export const portfolioNotice = "Projeto conceito de portfólio. Não é o site oficial da Barbearia DoGago.";

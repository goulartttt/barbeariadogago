// Projeto de portfólio: bloqueia todos os buscadores (ver lib/site.js).
export default function robots() {
  return { rules: { userAgent: "*", disallow: "/" } };
}

const isDev = process.env.NODE_ENV === "development";
const onVercel = Boolean(process.env.VERCEL);
// Homologação roda como preview na Vercel: libera a barra de comentários
// (vercel.live) para o cliente revisar. Produção não recebe essa liberação.
const isPreview = process.env.VERCEL_ENV === "preview";
const toolbar = (sources) => (isPreview ? ` ${sources}` : "");

// Política de conteúdo. Scripts inline ficam liberados porque a página é
// estática (nonce exigiria renderização dinâmica) e o site não recebe dados
// de usuários. O mapa do Google é o único conteúdo de terceiros em produção.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}${toolbar("https://vercel.live")}`,
  `style-src 'self' 'unsafe-inline'${toolbar("https://vercel.live")}`,
  `img-src 'self' data: blob:${toolbar("https://vercel.live https://vercel.com")}`,
  `font-src 'self'${toolbar("https://vercel.live https://assets.vercel.com")}`,
  `connect-src 'self'${toolbar("https://vercel.live wss://ws-us3.pusher.com")}`,
  `frame-src https://www.google.com https://maps.google.com${toolbar("https://vercel.live")}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  // Só na Vercel (sempre HTTPS). No `npm start` local, em http, quebraria o CSS e o JS.
  ...(onVercel ? ["upgrade-insecure-requests"] : []),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  // O CLAUDE.md do projeto já orienta sobre a documentação do Next; evita que o
  // `next dev` acrescente um bloco próprio nele.
  agentRules: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Fotos ilustrativas do topo, da galeria e de serviços vêm do Unsplash.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;

import { Analytics } from "@vercel/analytics/next";
import { Barlow, Fraunces } from "next/font/google";
import { business } from "@/data/siteData";
import { portfolioNotice, siteUrl } from "@/lib/site";
import "./globals.css";

// Fontes servidas pelo próprio site (sem requisição ao Google no navegador).
const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  variable: "--font-display",
  display: "swap",
});

const text = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-text",
  display: "swap",
});

// Projeto de portfólio: título e descrição deixam isso claro, e o site fica
// fora dos buscadores (sem dados estruturados de empresa).
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: `${business.name} | Projeto conceito`,
  description: portfolioNotice,
  robots: { index: false, follow: false },
  openGraph: {
    title: `${business.name} | ${business.tagline}`,
    description: portfolioNotice,
    url: "/",
    siteName: business.name,
    type: "website",
    locale: "pt_BR",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  colorScheme: "dark",
  themeColor: "#07152f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${text.variable}`}>
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}

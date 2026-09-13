import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Barbearia DoGago | Barbearia contemporânea em Santana, São Paulo',
  description: 'Barbearia DoGago em Santana, Zona Norte de São Paulo. Conheça nossos serviços, o Clube DoGago e agende seu horário pelo WhatsApp.',
  generator: 'v0.app',
  openGraph: {
    title: 'Barbearia DoGago | Seu estilo. Nosso trabalho.',
    description: 'Serviços, produtos e Clube DoGago em Santana, Zona Norte de São Paulo.',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#07152f',
  userScalable: true,
}

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'Barbershop',
  name: 'Barbearia DoGago',
  telephone: '+55 11 94725-6071',
  address: { '@type': 'PostalAddress', streetAddress: 'R. Conselheiro Moreira de Barros, 2511 - Loja 7', addressLocality: 'Santana', addressRegion: 'SP', postalCode: '02430-001', addressCountry: 'BR' },
  areaServed: 'Zona Norte de São Paulo',
  sameAs: ['https://www.instagram.com/barbearia_dogago/'],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', bestRating: '5', ratingCount: '3' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className="bg-background"><body className="antialiased"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

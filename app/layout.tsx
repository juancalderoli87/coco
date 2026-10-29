import type { Metadata, Viewport } from 'next';
import { Jost } from 'next/font/google';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { TopBar } from '@/components/layout/TopBar';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { site } from '@/data/site';
import { siteUrl } from '@/lib/url';
import './globals.css';

const jost = Jost({ subsets: ['latin'], variable: '--font-jost', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Bachas de concreto de diseño`,
    template: `%s — ${site.name}`,
  },
  description:
    'Bachas de concreto de alto desempeño, diseñadas y fabricadas a mano en Paraguay. Envíos a todo el país.',
  openGraph: {
    type: 'website',
    locale: 'es_PY',
    siteName: site.name,
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: '#f5f2ec',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={jost.variable}>
      <body className="flex min-h-dvh flex-col font-sans">
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-hueso focus:p-3">
          Saltar al contenido
        </a>
        <TopBar />
        <Header />
        <div id="contenido" className="flex-1">
          {children}
        </div>
        <Footer />
        <WhatsAppFloat />
        <CartDrawer />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from 'next';
import { Jost, Outfit } from 'next/font/google';
import { site } from '@/data/site';
import './globals.css';

const jost = Jost({ subsets: ['latin'], variable: '--font-jost', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });

export const metadata: Metadata = {
  title: `${site.name} — Bachas de concreto de diseño`,
  description:
    'Bachas de concreto de alto desempeño, diseñadas y fabricadas a mano en Paraguay. Envíos a todo el país.',
};

export const viewport: Viewport = {
  themeColor: '#f5f2ec',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${jost.variable} ${outfit.variable}`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}

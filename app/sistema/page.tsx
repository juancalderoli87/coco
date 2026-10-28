import type { Metadata } from 'next';
import Image from 'next/image';
import { ButtonLink } from '@/components/Button';
import { FontSwitcher } from '@/components/FontSwitcher';
import { BagIcon, WhatsAppIcon } from '@/components/icons';
import { Logo } from '@/components/Logo';
import { ProductCard } from '@/components/ProductCard';
import { bestSellers, colors } from '@/data/products';
import { site, whatsappMessages } from '@/data/site';
import { whatsappLink } from '@/lib/format';

export const metadata: Metadata = {
  title: 'Sistema de diseño — COCO',
  robots: { index: false },
};

const palette = [
  { name: 'Hueso', token: 'hueso', hex: '#F5F2EC', use: 'Fondo general' },
  { name: 'Beige', token: 'beige', hex: '#E0DCD3', use: 'Isologo beige · bloques' },
  { name: 'Arena', token: 'arena', hex: '#CBC4B7', use: 'Bordes y divisores' },
  { name: 'Concreto', token: 'concreto', hex: '#6E6B65', use: 'Texto secundario' },
  { name: 'Carbón', token: 'carbon', hex: '#32363C', use: 'Isologo gris · texto y botones' },
  { name: 'Tinta', token: 'tinta', hex: '#1F2226', use: 'Hover y fondos oscuros' },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-arena py-14 md:py-20">
      <h2 className="mb-10 text-xs font-medium tracking-[var(--tracking-label)] text-concreto uppercase">{title}</h2>
      {children}
    </section>
  );
}

export default function SistemaPage() {
  return (
    <>
      {/* Barra superior + header de muestra */}
      <div className="bg-carbon py-2 text-center text-[11px] tracking-[0.16em] text-hueso uppercase">
        {site.topBarMessages[0]}
      </div>
      <header className="sticky top-0 z-30 border-b border-arena bg-hueso/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          <Logo className="h-5 w-auto md:h-6" priority />
          <nav className="hidden gap-7 text-xs tracking-[0.14em] uppercase lg:flex">
            {['Shop', 'Profesionales', 'Muestras', 'Nosotros', 'Cuidado y garantía'].map((l) => (
              <span key={l}>{l}</span>
            ))}
          </nav>
          <BagIcon />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-6 py-14 md:flex-row md:items-end md:justify-between md:py-20">
          <div>
            <p className="mb-3 text-xs tracking-[var(--tracking-label)] text-concreto uppercase">Fase 1</p>
            <h1 className="text-4xl font-light tracking-tight md:text-6xl">Sistema de diseño</h1>
          </div>
          <FontSwitcher />
        </div>

        <Section id="tipografia" title="Tipografía">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div className="space-y-6">
              <p className="text-xs tracking-[var(--tracking-label)] uppercase">{site.tagline}</p>
              <p className="text-5xl leading-[1.05] font-light tracking-tight md:text-7xl">Bachas de concreto de diseño</p>
            </div>
            <div className="space-y-8">
              <div>
                <p className="mb-2 text-[11px] text-concreto">H2 · 36 / light</p>
                <p className="text-3xl font-light md:text-4xl">Concreto de alto desempeño</p>
              </div>
              <div>
                <p className="mb-2 text-[11px] text-concreto">H3 · 16 / medium / mayúsculas</p>
                <p className="text-base font-medium tracking-[0.12em] uppercase">Bacha New York</p>
              </div>
              <div>
                <p className="mb-2 text-[11px] text-concreto">Texto · 16 / regular</p>
                <p className="max-w-prose leading-relaxed">
                  Cada bacha se fabrica a mano en nuestro taller de San Lorenzo, con una mezcla propia desarrollada y
                  probada durante años. Resistente, durable y con acabado mate sellado.
                </p>
              </div>
              <div>
                <p className="mb-2 text-[11px] text-concreto">Etiqueta · 12 / mayúsculas espaciadas</p>
                <p className="text-xs tracking-[var(--tracking-label)] uppercase">{site.madeIn}</p>
              </div>
              <div>
                <p className="mb-2 text-[11px] text-concreto">Precio</p>
                <p className="text-lg">Gs 1.050.500</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="paleta" title="Paleta">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {palette.map((c) => (
              <div key={c.token}>
                <div className="aspect-[4/5] ring-1 ring-black/5" style={{ backgroundColor: c.hex }} />
                <p className="mt-3 text-sm font-medium">{c.name}</p>
                <p className="text-xs text-concreto">{c.hex}</p>
                <p className="mt-1 text-xs text-concreto">{c.use}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 mb-4 text-xs text-concreto">Colores de las bachas (selector)</p>
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            {colors.map((c) => (
              <div key={c.slug} className="flex items-center gap-2">
                <span className="size-6 rounded-full ring-1 ring-black/10" style={{ backgroundColor: c.hex }} />
                <span className="text-sm">{c.name}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="marca" title="Logos">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="grid h-48 place-items-center bg-white px-10">
              <Logo className="h-8 w-auto" />
            </div>
            <div className="grid h-48 place-items-center bg-carbon px-10">
              <Logo tone="beige" className="h-8 w-auto" />
            </div>
            <div className="grid h-48 place-items-center bg-beige px-10">
              <Logo variant="isologo" className="h-12 w-auto" />
            </div>
          </div>
        </Section>

        <Section id="botones" title="Botones">
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href="/shop">Ver colección</ButtonLink>
            <ButtonLink href={whatsappLink(whatsappMessages.general)} variant="secondary">
              <WhatsAppIcon className="size-4" />
              Consultá por WhatsApp
            </ButtonLink>
            <ButtonLink href="/cuidado-y-garantia" variant="link">
              Cuidado y garantía
            </ButtonLink>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 bg-carbon p-8">
            <ButtonLink href={whatsappLink(whatsappMessages.b2b)} variant="light">
              Programa para profesionales
            </ButtonLink>
            <ButtonLink href="/shop" variant="secondary" className="border-hueso text-hueso hover:bg-hueso hover:text-carbon">
              Ver colección
            </ButtonLink>
          </div>
        </Section>

        <Section id="producto" title="Tarjeta de producto">
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-6 lg:grid-cols-4">
            {bestSellers().map((p, i) => (
              <ProductCard key={p.slug} product={p} priority={i < 2} />
            ))}
          </div>
          <p className="mt-8 text-xs text-concreto">
            Elegí un color: la foto cambia al color real. Precios simbólicos hasta confirmar.
          </p>
        </Section>

        <Section id="hero" title="Bloque con foto (ejemplo)">
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[16/7]">
            <Image
              src="/images/ambientes/bano-gris-azulado-griferia-dorada.webp"
              alt="Bacha COCO gris azulado en un baño con grifería dorada"
              fill
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tinta/60 via-tinta/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-hueso md:p-12">
              <p className="mb-3 text-xs tracking-[var(--tracking-label)] uppercase">{site.tagline}</p>
              <p className="max-w-xl text-3xl leading-tight font-light md:text-5xl">{site.voice}</p>
            </div>
          </div>
        </Section>
      </main>

      {/* Botón flotante de WhatsApp */}
      <a
        href={whatsappLink(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        className="fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-carbon text-hueso shadow-lg shadow-tinta/20 transition-colors hover:bg-tinta md:right-8 md:bottom-8"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  );
}

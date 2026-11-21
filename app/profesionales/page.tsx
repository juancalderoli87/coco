import type { Metadata } from 'next';
import Image from 'next/image';
import { ButtonLink, buttonClass } from '@/components/Button';
import { WhatsAppIcon } from '@/components/icons';
import { PageHeader } from '@/components/PageHeader';
import { colors, products } from '@/data/products';
import { site, whatsappMessages } from '@/data/site';
import { whatsappLink } from '@/lib/format';

export const metadata: Metadata = {
  title: 'Programa para profesionales',
  description:
    'Programa COCO para arquitectos, diseñadores, constructoras y revendedores: precios especiales, atención directa y volumen para obras. Descargá el catálogo.',
};

const benefits = [
  { title: 'Precios especiales', text: 'Condiciones para profesionales y revendedores.' },
  { title: 'Atención directa', text: 'Hablás con nuestro equipo, sin intermediarios.' },
  { title: 'Volumen para obras', text: 'Coordinamos cantidades y plazos para tu proyecto.' },
];

const steps = [
  'Escribinos por WhatsApp y contanos a qué te dedicás.',
  'Te enviamos las condiciones del programa.',
  'Coordinamos tu pedido: modelos, colores, cantidades y entrega.',
];

export default function ProfesionalesPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <PageHeader
          eyebrow="Programa para profesionales"
          title="Para arquitectos, diseñadores, constructoras y revendedores"
          intro={`${products.length} modelos en ${colors.length} colores, en concreto de alta performance, para tus proyectos y tus clientes.`}
        />
      </div>

      <section className="bg-carbon text-hueso">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/ambientes/bano-carbon-mesada-madera.webp"
              alt="Bacha COCO color carbón sobre mesada de madera"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <ul className="flex flex-col">
              {benefits.map((b) => (
                <li key={b.title} className="border-t border-hueso/20 py-6 last:border-b">
                  <h2 className="text-lg font-normal">{b.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-hueso/70">{b.text}</p>
                </li>
              ))}
            </ul>
            <ButtonLink href={whatsappLink(whatsappMessages.b2b)} variant="light" className="mt-10">
              <WhatsAppIcon className="size-4" />
              Sumate al programa
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-3 text-[11px] tracking-[var(--tracking-label)] text-concreto uppercase">Cómo funciona</p>
          <h2 className="text-3xl leading-tight font-light md:text-5xl">Tres pasos para empezar</h2>
          <ol className="mt-10 flex flex-col">
            {steps.map((s, i) => (
              <li key={s} className="flex items-center gap-5 border-t border-arena py-5 last:border-b">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-carbon font-light">
                  {i + 1}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col justify-between gap-10 bg-beige p-8 md:p-12">
          <div>
            <p className="mb-3 text-[11px] tracking-[var(--tracking-label)] text-concreto uppercase">Catálogo 2026</p>
            <h2 className="text-3xl leading-tight font-light md:text-4xl">Todo en un PDF para tu cliente</h2>
            <p className="mt-4 max-w-md leading-relaxed text-concreto">
              Los {products.length} modelos con fotos, medidas, peso y los {colors.length} colores disponibles.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={site.catalogUrl} download data-track="catalogo_descarga" className={buttonClass('primary')}>
              Descargar catálogo (PDF)
            </a>
            <ButtonLink href="/shop" variant="secondary">
              Ver colección
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}

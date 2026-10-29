import type { Metadata } from 'next';
import Image from 'next/image';
import { ButtonLink } from '@/components/Button';
import { ImageTriptych } from '@/components/ImageTriptych';
import { WhatsAppIcon } from '@/components/icons';
import { PageHeader } from '@/components/PageHeader';
import { colors, productImage } from '@/data/products';
import { site, whatsappMessages } from '@/data/site';
import { whatsappLink } from '@/lib/format';

export const metadata: Metadata = {
  title: `Muestras — ${site.name}`,
  description: `Pedí muestras físicas de los ${colors.length} colores y terminaciones de las bachas COCO, para tu proyecto o tu obra.`,
};

const steps = [
  'Escribinos por WhatsApp.',
  'Contanos qué colores te interesan y para qué proyecto.',
  `Coordinamos la entrega o tu visita al showroom en ${site.showroom.city}.`,
];

export default function MuestrasPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 md:px-8">
      <PageHeader
        eyebrow="Muestras"
        title="Tocá el material antes de elegir"
        intro={`Muestras físicas de nuestros ${colors.length} colores y del acabado mate sellado, para arquitectos, diseñadores y clientes.`}
      />

      <ImageTriptych
        priority
        images={[
          { src: '/images/ambientes/cantos-colores.webp', alt: 'Cantos de bachas COCO en distintos colores' },
          { src: '/images/ambientes/detalle-canto-blanco.webp', alt: 'Detalle del canto de una bacha COCO blanco hueso' },
          { src: '/images/ambientes/detalle-arcilla.webp', alt: 'Detalle de una bacha COCO color arcilla' },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-light md:text-5xl">{colors.length} colores</h2>
          <p className="max-w-sm text-sm leading-relaxed text-concreto">
            Los tonos varían levemente de una pieza a otra: por eso recomendamos verlos en persona.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 md:gap-x-6 lg:grid-cols-4 xl:grid-cols-6">
          {colors.map((c) => (
            <li key={c.slug}>
              <div className="relative aspect-square overflow-hidden bg-white">
                <Image
                  src={productImage('new-york', c.slug)}
                  alt={`Bacha COCO en color ${c.name}`}
                  fill
                  sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 flex items-center gap-2 text-sm">
                <span className="size-3 rounded-full ring-1 ring-black/10" style={{ backgroundColor: c.hex }} aria-hidden="true" />
                {c.name}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-12 bg-beige p-8 md:p-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-3 text-[11px] tracking-[var(--tracking-label)] text-concreto uppercase">Cómo pedirlas</p>
          <h2 className="text-3xl leading-tight font-light md:text-4xl">Pedí tus muestras en tres pasos</h2>
          <ButtonLink href={whatsappLink(whatsappMessages.samples)} className="mt-8">
            <WhatsAppIcon className="size-4" />
            Pedí muestras
          </ButtonLink>
        </div>
        <ol className="flex flex-col">
          {steps.map((s, i) => (
            <li key={s} className="flex items-center gap-5 border-t border-carbon/20 py-5 last:border-b">
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-carbon font-light">{i + 1}</span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

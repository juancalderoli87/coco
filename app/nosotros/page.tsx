import type { Metadata } from 'next';
import Image from 'next/image';
import { ButtonLink } from '@/components/Button';
import { ImageTriptych } from '@/components/ImageTriptych';
import { PageHeader } from '@/components/PageHeader';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: `Nosotros — ${site.name}`,
  description:
    'La historia de COCO: bachas de concreto de diseño creadas en Paraguay por el arquitecto Juan Calderoli.',
};

const story = [
  {
    title: 'Nace en la pandemia',
    text: 'COCO empezó como una búsqueda personal: llevar el concreto a piezas de diseño, hechas a mano en Paraguay.',
  },
  {
    title: 'Dos años de prueba y error',
    text: 'Mezclas, moldes, curados y terminaciones. Cada pieza fallida nos enseñó algo sobre el material.',
  },
  {
    title: 'Formación en Estados Unidos',
    text: 'Con la beca YLAI (Young Leaders of the Americas Initiative), Juan pasó 40 días en Concreteworks, en San Francisco, y se formó con el Concrete Countertop Institute.',
  },
  {
    title: 'Una mezcla propia',
    text: 'De vuelta en Paraguay, desarrollamos nuestro concreto de alto desempeño, adaptado a insumos locales y probado durante años.',
  },
];

export default function NosotrosPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <PageHeader eyebrow="Nosotros" title={site.voice} />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ImageTriptych
          priority
          images={[
            { src: '/images/ambientes/composicion-pedestal-02.webp', alt: 'Bachas COCO sobre un pedestal' },
            { src: '/images/ambientes/coleccion-grilla-vertical.webp', alt: 'Bachas COCO de distintos colores ordenadas en grilla' },
            { src: '/images/ambientes/coleccion-cuadradas-02.webp', alt: 'Bachas cuadradas COCO en fila' },
          ]}
        />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <p className="mb-3 text-[11px] tracking-[var(--tracking-label)] text-concreto uppercase">Nuestra historia</p>
            <h2 className="text-3xl leading-tight font-light md:text-5xl">Del taller en Paraguay a una categoría nueva</h2>
          </div>
          <ol className="flex flex-col">
            {story.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-arena py-6 last:border-b">
                <span className="text-sm text-concreto tabular-nums">0{i + 1}</span>
                <div>
                  <h3 className="text-lg font-normal">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-concreto">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-beige">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* TODO: reemplazar por la foto de Juan cuando la tengamos */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/ambientes/detalle-canto-blanco.webp"
              alt="Detalle del canto de una bacha COCO blanco hueso"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-[11px] tracking-[var(--tracking-label)] text-concreto uppercase">Fundador</p>
            <h2 className="text-3xl font-light md:text-5xl">Juan Calderoli</h2>
            <p className="mt-2 text-sm tracking-[0.12em] uppercase">Arquitecto</p>
            <p className="mt-6 max-w-lg leading-relaxed">
              Más de 15 años en diseño y construcción. Juan diseña cada modelo de COCO con mirada de arquitecto:
              proporción, espesor y detalle pensados para el espacio donde va a vivir la pieza.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-tinta text-hueso">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-32">
          <p className="mb-6 text-[11px] tracking-[var(--tracking-label)] text-hueso/60 uppercase">Visión</p>
          <p className="max-w-4xl text-3xl leading-tight font-light md:text-6xl">
            Crear la categoría de concreto de diseño desde Paraguay hacia el mundo.
          </p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/shop" variant="light">
              Ver colección
            </ButtonLink>
            <ButtonLink href="/muestras" variant="secondary" className="border-hueso text-hueso hover:bg-hueso hover:text-carbon">
              Pedí muestras
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}

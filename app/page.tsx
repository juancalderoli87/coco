import Image from 'next/image';
import { AutoplayVideo } from '@/components/AutoplayVideo';
import { ButtonLink } from '@/components/Button';
import { BestSellers } from '@/components/home/BestSellers';
import { PlusIcon, WhatsAppIcon } from '@/components/icons';
import { faq } from '@/data/faq';
import { bestSellers, lowestPrice } from '@/data/products';
import { site, whatsappMessages } from '@/data/site';
import { formatGs, whatsappLink } from '@/lib/format';
import { siteUrl } from '@/lib/url';

const container = 'mx-auto max-w-7xl px-4 md:px-8';
const eyebrow = 'text-[11px] tracking-[var(--tracking-label)] text-concreto uppercase';
const h2 = 'text-3xl leading-tight font-light tracking-tight md:text-5xl';

const steps = [
  { title: 'Elegí tu bacha y tu color', text: 'Recorré la colección y armá tu pedido en el carrito.' },
  { title: 'Enviá tu pedido por WhatsApp', text: 'Te respondemos, confirmamos disponibilidad y coordinamos el pago.' },
  { title: 'Te la entregamos en todo el país', text: 'Entrega en Asunción y Gran Asunción. Al interior, por encomienda.' },
];

const instagram = [
  { src: 'composicion-pedestal-01', alt: 'Tres bachas COCO sobre un pedestal' },
  { src: 'bano-arcilla-marmol', alt: 'Bacha COCO color arcilla sobre mesada de mármol' },
  { src: 'cantos-colores', alt: 'Cantos de bachas COCO en distintos colores' },
  { src: 'bano-acanalada-carbon-marmol', alt: 'Bacha acanalada COCO color carbón en un baño' },
  { src: 'coleccion-cuadradas-01', alt: 'Bachas cuadradas COCO en varios colores' },
  { src: 'detalle-arcilla', alt: 'Detalle de una bacha COCO color arcilla' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: site.name,
  slogan: site.tagline,
  url: siteUrl,
  logo: `${siteUrl}/images/marca/isologo-gris.png`,
  image: `${siteUrl}/images/ambientes/bano-gris-azulado-griferia-dorada.webp`,
  telephone: `+${site.whatsapp.international}`,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.showroom.address,
    addressLocality: site.showroom.city,
    addressCountry: 'PY',
  },
  sameAs: [site.instagram.url],
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section className="lg:grid lg:min-h-[calc(100dvh-6rem)] lg:grid-cols-12">
        <div className="relative aspect-square sm:aspect-[16/11] lg:order-2 lg:col-span-7 lg:aspect-auto">
          <Image
            src="/images/ambientes/bano-gris-azulado-griferia-dorada.webp"
            alt="Bacha COCO gris azulado sobre una mesada clara, con grifería de pared dorada"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-[35%_70%]"
          />
        </div>
        <div className="flex flex-col justify-center gap-5 px-4 py-10 md:gap-6 md:px-8 lg:col-span-5 lg:py-16 lg:pr-12 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          <p className={eyebrow}>{site.madeIn}</p>
          <p lang="en" className="text-[2.75rem] leading-[1.02] font-light tracking-tight md:text-7xl">
            Sculpted.
            <br />
            Refined.
            <br />
            Timeless.
          </p>
          <h1 className="max-w-sm text-lg leading-relaxed text-concreto">
            Bachas de concreto de diseño, hechas a mano una por una.
          </h1>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/shop">Ver colección</ButtonLink>
            <ButtonLink href={whatsappLink(whatsappMessages.general)} variant="secondary">
              <WhatsAppIcon className="size-4" />
              Consultá por WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section className={`${container} py-20 md:py-28`}>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={`${eyebrow} mb-3`}>Best sellers</p>
            <h2 className={h2}>Las más elegidas</h2>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-sm text-concreto">Desde {formatGs(lowestPrice())}</p>
            <ButtonLink href="/shop" variant="link" className="text-xs">
              Ver toda la colección
            </ButtonLink>
          </div>
        </div>
        <BestSellers products={bestSellers()} />
      </section>

      {/* Concreto de alto desempeño */}
      <section className="bg-beige">
        <div className={`${container} grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center lg:gap-20`}>
          <div className="relative aspect-[4/5] overflow-hidden lg:aspect-[5/6]">
            <Image
              src="/images/ambientes/coleccion-grilla-cenital.webp"
              alt="Bachas COCO de distintos colores vistas desde arriba"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className={`${eyebrow} mb-3`}>El material</p>
            <h2 className={h2}>Concreto de alto desempeño</h2>
            <p className="mt-6 max-w-lg leading-relaxed">
              Es un concreto más denso y resistente que el tradicional. Lo trabajamos con una mezcla propia,
              desarrollada y probada durante años, después de formarnos en Estados Unidos con el Concrete Countertop
              Institute y en Concreteworks, San Francisco.
            </p>
            <dl className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                { t: 'Resistente', d: 'Firme y compacta, pensada para el uso diario de un baño.' },
                { t: 'Durable', d: 'Hecha para acompañar tu espacio durante años.' },
                { t: 'Mate sellado', d: 'Suave al tacto, sin brillos y protegida para el día a día.' },
              ].map((b) => (
                <div key={b.t} className="border-t border-carbon/25 pt-4">
                  <dt className="text-sm font-medium tracking-[0.12em] uppercase">{b.t}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-concreto">{b.d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Diseño y calidad */}
      <section className={`${container} py-20 md:py-28`}>
        <div className="mb-12 max-w-2xl">
          <p className={`${eyebrow} mb-3`}>Diseño y calidad</p>
          <h2 className={h2}>Una pieza de autor, hecha a mano en Paraguay</h2>
        </div>
        <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 px-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden [&>*]:w-[78%] [&>*]:shrink-0 [&>*]:snap-start md:[&>*]:w-auto">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/ambientes/detalle-desague.webp"
              alt="Detalle del desagüe de una bacha COCO"
              fill
              sizes="(min-width: 768px) 33vw, 78vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-white">
            <AutoplayVideo
              src="/videos/bacha-new-york.mp4"
              poster="/videos/bacha-new-york-poster.webp"
              label="Video de la bacha New York"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/ambientes/detalle-acanaladas.webp"
              alt="Detalle de bachas acanaladas COCO"
              fill
              sizes="(min-width: 768px) 33vw, 78vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {[
            { t: 'Diseñada por un arquitecto', d: 'Cada modelo nace de un proceso de diseño: proporción, espesor y detalle pensados para tu espacio.' },
            { t: 'Hecha a mano', d: `La fabricamos una por una en nuestro taller de ${site.workshop.city}.` },
            { t: 'Cada bacha es única', d: 'Las variaciones naturales del concreto hacen que no haya dos iguales.' },
          ].map((b) => (
            <div key={b.t}>
              <h3 className="text-sm font-medium tracking-[0.12em] uppercase">{b.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-concreto">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo pedir */}
      <section className="border-y border-arena">
        <div className={`${container} py-20 md:py-28`}>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className={`${eyebrow} mb-3`}>Simple y directo</p>
              <h2 className={h2}>Cómo pedir</h2>
            </div>
            <ButtonLink href="/shop" variant="secondary" className="self-start md:self-auto">
              Elegí tu bacha
            </ButtonLink>
          </div>
          <ol className="grid gap-10 md:grid-cols-3 md:gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5 md:flex-col">
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-carbon text-lg font-light">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-normal">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-concreto">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Profesionales */}
      <section id="profesionales" className="scroll-mt-20 bg-carbon text-hueso">
        <div className={`${container} grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center lg:gap-20`}>
          <div className="lg:order-2">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/ambientes/bano-carbon-mesada-madera.webp"
                alt="Bacha COCO color carbón sobre mesada de madera"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="mb-3 text-[11px] tracking-[var(--tracking-label)] text-hueso/70 uppercase">Programa para profesionales</p>
            <h2 className={h2}>Para arquitectos, diseñadores, constructoras y revendedores</h2>
            <ul className="mt-10 flex flex-col">
              {['Precios especiales para profesionales', 'Atención directa con nuestro equipo', 'Volumen para obras'].map((b) => (
                <li key={b} className="flex items-center gap-4 border-t border-hueso/20 py-4">
                  <span className="size-2 rounded-full bg-beige" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappLink(whatsappMessages.b2b)} variant="light">
                <WhatsAppIcon className="size-4" />
                Sumate al programa
              </ButtonLink>
              <ButtonLink
                href="/muestras"
                variant="secondary"
                className="border-hueso text-hueso hover:bg-hueso hover:text-carbon"
              >
                Pedí muestras
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className={`${container} py-20 md:py-28`}>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={`${eyebrow} mb-3`}>Seguinos en Instagram</p>
            <h2 className={h2}>{site.instagram.handle}</h2>
          </div>
          <ButtonLink href={site.instagram.url} variant="link" className="self-start text-xs md:self-auto">
            Ver perfil
          </ButtonLink>
        </div>
        <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {instagram.map((img) => (
            <li key={img.src}>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden"
              >
                <Image
                  src={`/images/ambientes/${img.src}.webp`}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="bg-beige">
        <div className={`${container} grid gap-10 py-20 md:py-28 lg:grid-cols-[1fr_1.6fr] lg:gap-20`}>
          <div>
            <p className={`${eyebrow} mb-3`}>FAQ</p>
            <h2 className={h2}>Preguntas frecuentes</h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-concreto">¿Tenés otra duda? Escribinos y te respondemos.</p>
            <ButtonLink href={whatsappLink(whatsappMessages.general)} variant="link" className="mt-4 text-xs">
              Consultá por WhatsApp
            </ButtonLink>
          </div>
          <div className="border-b border-carbon/20">
            {faq.map((item) => (
              <details key={item.question} className="group border-t border-carbon/20">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <PlusIcon className="size-5 shrink-0 transition-transform group-open:rotate-45" />
                </summary>
                <p className="max-w-prose pb-6 text-sm leading-relaxed text-concreto">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

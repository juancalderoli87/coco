import type { Metadata } from 'next';
import Image from 'next/image';
import { ButtonLink } from '@/components/Button';
import { WhatsAppIcon } from '@/components/icons';
import { PageHeader } from '@/components/PageHeader';
import { careSections, warranty } from '@/data/care';
import { site, whatsappMessages } from '@/data/site';
import { whatsappLink } from '@/lib/format';

export const metadata: Metadata = {
  title: `Cuidado y garantía — ${site.name}`,
  description: 'Cómo limpiar y cuidar tu bacha de concreto COCO, y cómo funciona la garantía.',
};

export default function CuidadoPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 md:px-8">
      <PageHeader
        eyebrow="Cuidado y garantía"
        title="Cuidala simple, disfrutala por años"
        intro="Tu bacha tiene un acabado mate sellado pensado para el uso diario. Con estos cuidados básicos se mantiene como el primer día."
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden lg:sticky lg:top-24 lg:self-start">
          <Image
            src="/images/ambientes/bano-gris-marmol.webp"
            alt="Bacha COCO gris sobre mesada de mármol"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          {careSections.map((s) => (
            <section key={s.title} className="border-t border-arena py-8">
              <h2 className="text-xs font-medium tracking-[var(--tracking-label)] uppercase">{s.title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-carbon" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section id="garantia" className="mt-4 scroll-mt-24 bg-beige p-8 md:p-10">
            <h2 className="text-3xl font-light">Garantía</h2>
            <p className="mt-4 leading-relaxed">{warranty.text}</p>
            <p className="mt-3 text-sm text-concreto">{warranty.pending}</p>
            <ButtonLink href={whatsappLink(whatsappMessages.general)} variant="secondary" className="mt-8">
              <WhatsAppIcon className="size-4" />
              Consultá por WhatsApp
            </ButtonLink>
          </section>
        </div>
      </div>
    </main>
  );
}

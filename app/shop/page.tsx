import type { Metadata } from 'next';
import { ButtonLink } from '@/components/Button';
import { ShopGrid } from '@/components/shop/ShopGrid';
import { colors, lowestPrice, products } from '@/data/products';
import { site, whatsappMessages } from '@/data/site';
import { formatGs, whatsappLink } from '@/lib/format';

export const metadata: Metadata = {
  title: `Shop — ${site.name}`,
  description: `${products.length} modelos de bachas de concreto de alto desempeño en ${colors.length} colores. Desde ${formatGs(lowestPrice())}. Envíos a todo el Paraguay.`,
};

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pt-12 pb-24 md:px-8 md:pt-16">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-[11px] tracking-[var(--tracking-label)] text-concreto uppercase">{site.tagline}</p>
          <h1 className="text-4xl font-light tracking-tight md:text-6xl">La colección</h1>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-concreto">
          {products.length} modelos en {colors.length} colores. Entrega inmediata hasta {site.maxImmediateUnits}{' '}
          unidades por modelo y envíos a todo el Paraguay.
        </p>
      </div>

      <ShopGrid products={products} />

      <div className="mt-24 flex flex-col items-start gap-6 bg-beige p-8 md:flex-row md:items-center md:justify-between md:p-12">
        <div>
          <p className="mb-2 text-[11px] tracking-[var(--tracking-label)] text-concreto uppercase">Programa para profesionales</p>
          <p className="text-2xl font-light md:text-3xl">¿Comprás para una obra o para revender?</p>
        </div>
        <ButtonLink href={whatsappLink(whatsappMessages.b2b)}>Consultá por WhatsApp</ButtonLink>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/Button';
import { ProductCard } from '@/components/ProductCard';
import { ProductDetail } from '@/components/shop/ProductDetail';
import { getProduct, productImage, products } from '@/data/products';
import { site } from '@/data/site';
import { formatDimensions, formatGs } from '@/lib/format';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  const title = `Bacha ${product.name} — ${site.name}`;
  const description = `${product.shortDescription} ${formatDimensions(product.dimensions)}. ${formatGs(product.price)}. Concreto de alto desempeño, hecha a mano en Paraguay.`;
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: productImage(product.slug), width: 1600, height: 1600 }] },
  };
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const index = products.indexOf(product);
  const related = [1, 2, 3, 4].map((n) => products[(index + n) % products.length]);

  return (
    <main className="mx-auto max-w-7xl px-4 pt-6 pb-24 md:px-8 md:pt-10">
      <nav aria-label="Ruta" className="mb-6 text-xs text-concreto">
        <Link href="/shop" className="hover:text-carbon hover:underline">
          Shop
        </Link>{' '}
        / <span className="text-carbon">{product.name}</span>
      </nav>

      <ProductDetail product={product} />

      <section className="mt-20 grid gap-10 border-t border-arena pt-12 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-[11px] tracking-[var(--tracking-label)] text-concreto uppercase">Sobre esta bacha</h2>
          <p className="mt-4 max-w-prose leading-relaxed">
            {product.longDescription ||
              `La bacha ${product.name} está fabricada a mano en nuestro taller de ${site.workshop.city}, en concreto de alto desempeño con acabado mate sellado. Cada pieza tiene pequeñas variaciones naturales que la hacen única.`}
          </p>
        </div>
        <div>
          <h2 className="text-[11px] tracking-[var(--tracking-label)] text-concreto uppercase">Cuidado</h2>
          <p className="mt-4 max-w-prose leading-relaxed">{site.careSummary}</p>
          <ButtonLink href="/cuidado-y-garantia" variant="link" className="mt-4 text-xs">
            Cuidado y garantía
          </ButtonLink>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-8 text-2xl font-light md:text-3xl">También te puede gustar</h2>
        <div className="grid grid-cols-2 gap-x-3 gap-y-12 sm:gap-x-6 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}

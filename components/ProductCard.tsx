import Image from 'next/image';
import Link from 'next/link';
import { colors, productImage, type Product } from '@/data/products';
import { formatDimensions, formatGs } from '@/lib/format';

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

// Tarjeta simple: toda la tarjeta lleva a la página del producto, donde se elige el color.
export function ProductCard({ product, priority }: ProductCardProps) {
  const available = colors.filter((c) => product.colors.includes(c.slug));
  return (
    <article className="group relative flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-white">
        <Image
          src={productImage(product.slug)}
          alt={`Bacha ${product.name}`}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          priority={priority}
        />
        {product.bestSeller && (
          <span className="absolute top-3 left-3 bg-hueso/90 px-2 py-1 text-[10px] font-medium tracking-[0.16em] uppercase">
            Best seller
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 pt-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
          <h3 className="text-base font-medium tracking-[0.12em] uppercase">
            <Link href={`/shop/${product.slug}`} className="after:absolute after:inset-0">
              {product.name}
            </Link>
          </h3>
          <p className="shrink-0 text-sm">{formatGs(product.price)}</p>
        </div>
        <p className="text-sm leading-relaxed text-concreto">{product.shortDescription}</p>
        <p className="text-xs tracking-wide text-concreto">{formatDimensions(product.dimensions)}</p>
        <div className="mt-auto flex items-center gap-2 pt-2">
          <span className="flex shrink-0 -space-x-1.5" aria-hidden="true">
            {available.map((c) => (
              <span key={c.slug} className="size-3 rounded-full ring-1 ring-hueso" style={{ backgroundColor: c.hex }} />
            ))}
          </span>
          <span className="text-xs whitespace-nowrap text-concreto">{available.length} colores</span>
        </div>
      </div>
    </article>
  );
}

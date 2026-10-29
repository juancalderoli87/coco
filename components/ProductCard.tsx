'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getColor, productImage, type ColorSlug, type Product } from '@/data/products';
import { cart } from '@/lib/cart';
import { formatDimensions, formatGs } from '@/lib/format';
import { buttonClass } from './Button';
import { ColorSwatches } from './ColorSwatches';

type ProductCardProps = {
  product: Product;
  onAdd?: (product: Product, color: ColorSlug) => void;
  priority?: boolean;
};

export function ProductCard({ product, onAdd, priority }: ProductCardProps) {
  const [color, setColor] = useState<ColorSlug | null>(null);
  const [added, setAdded] = useState(false);
  const href = `/shop/${product.slug}`;

  function handleAdd() {
    if (!color) return;
    if (onAdd) onAdd(product, color);
    else cart.add(product.slug, color);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  }

  return (
    <article className="group flex flex-col">
      <Link href={href} className="relative block aspect-square overflow-hidden bg-white">
        <Image
          src={productImage(product.slug, color ?? undefined)}
          alt={`Bacha ${product.name}${color ? ` en color ${getColor(color).name}` : ''}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          priority={priority}
        />
        {product.bestSeller && (
          <span className="absolute top-3 left-3 bg-hueso/90 px-2 py-1 text-[10px] font-medium tracking-[0.16em] uppercase">
            Best seller
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-3 pt-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
          <h3 className="text-base font-medium tracking-[0.12em] uppercase">
            <Link href={href}>{product.name}</Link>
          </h3>
          <p className="shrink-0 text-sm">{formatGs(product.price)}</p>
        </div>
        {product.shortDescription && (
          <p className="text-sm leading-relaxed text-concreto">{product.shortDescription}</p>
        )}
        <p className="text-xs tracking-wide text-concreto">{formatDimensions(product.dimensions)}</p>

        <div className="mt-auto flex flex-col gap-3 pt-1">
          <div>
            <p className="mb-2 text-xs text-concreto">
              Color: <span className="text-carbon">{color ? getColor(color).name : 'elegí uno'}</span>
            </p>
            <ColorSwatches
              available={product.colors}
              value={color}
              onChange={setColor}
              name={`color-${product.slug}`}
            />
          </div>
          <button
            type="button"
            onClick={handleAdd}
            disabled={!color}
            className={buttonClass(
              'secondary',
              'h-11 w-full px-3 text-[11px] tracking-[0.08em] whitespace-nowrap sm:px-7 sm:text-xs sm:tracking-[0.14em]',
            )}
          >
            {added ? 'Agregado ✓' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </article>
  );
}

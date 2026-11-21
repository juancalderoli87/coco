'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { productImage, type Product } from '@/data/products';
import { formatGs } from '@/lib/format';
import { ArrowIcon } from '../icons';

export function BestSellers({ products }: { products: Product[] }) {
  const track = useRef<HTMLUListElement>(null);

  function scroll(direction: 1 | -1) {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: 'smooth' });
  }

  return (
    <div className="relative">
      <ul
        ref={track}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 [scrollbar-width:none] md:-mx-8 md:scroll-px-8 md:gap-6 md:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {products.map((p) => (
          <li key={p.slug} className="w-[72%] shrink-0 snap-start sm:w-[44%] lg:w-[calc((100%-4.5rem)/4)]">
            <Link href={`/shop/${p.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-white">
                <Image
                  src={productImage(p.slug)}
                  alt={`Bacha ${p.name}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 44vw, 72vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-baseline justify-between gap-3 pt-4">
                <h3 className="text-sm font-medium tracking-[0.12em] uppercase">{p.name}</h3>
                <p className="text-sm text-concreto">{formatGs(p.price)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {products.length > 4 && (
        <div className="mt-6 hidden justify-end gap-2 md:flex">
          <button type="button" onClick={() => scroll(-1)} aria-label="Anteriores" className="grid size-11 place-items-center rounded-full border border-carbon hover:bg-carbon hover:text-hueso">
            <ArrowIcon direction="left" />
          </button>
          <button type="button" onClick={() => scroll(1)} aria-label="Siguientes" className="grid size-11 place-items-center rounded-full border border-carbon hover:bg-carbon hover:text-hueso">
            <ArrowIcon />
          </button>
        </div>
      )}
    </div>
  );
}

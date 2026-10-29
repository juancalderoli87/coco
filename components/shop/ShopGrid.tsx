'use client';

import { useMemo, useState } from 'react';
import type { Product } from '@/data/products';
import { ProductCard } from '../ProductCard';

type Order = 'destacados' | 'precio-asc' | 'precio-desc';

const orders: { value: Order; label: string }[] = [
  { value: 'destacados', label: 'Destacados' },
  { value: 'precio-asc', label: 'Precio: menor a mayor' },
  { value: 'precio-desc', label: 'Precio: mayor a menor' },
];

export function ShopGrid({ products }: { products: Product[] }) {
  const [order, setOrder] = useState<Order>('destacados');

  const sorted = useMemo(() => {
    const list = [...products];
    if (order === 'precio-asc') return list.sort((a, b) => a.price - b.price);
    if (order === 'precio-desc') return list.sort((a, b) => b.price - a.price);
    return list.sort((a, b) => Number(b.bestSeller) - Number(a.bestSeller));
  }, [products, order]);

  return (
    <>
      <div className="mb-8 flex items-center justify-between gap-4 border-y border-arena py-3">
        <p className="text-xs text-concreto">{products.length} modelos</p>
        <label className="flex items-center gap-2 text-xs">
          <span className="text-concreto">Ordenar por</span>
          <select
            value={order}
            onChange={(e) => setOrder(e.target.value as Order)}
            className="cursor-pointer rounded-full border border-arena bg-transparent py-2 pr-8 pl-3 text-xs"
          >
            {orders.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <h2 className="sr-only">Modelos</h2>
      <div className="grid grid-cols-2 gap-x-3 gap-y-12 sm:gap-x-6 md:grid-cols-3 xl:grid-cols-4">
        {sorted.map((p, i) => (
          <ProductCard key={p.slug} product={p} priority={i < 4} />
        ))}
      </div>
    </>
  );
}

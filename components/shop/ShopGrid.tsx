'use client';

import { useMemo, useState } from 'react';
import { shapes, type Product, type Shape } from '@/data/products';
import { ProductCard } from '../ProductCard';

type Order = 'destacados' | 'precio-asc' | 'precio-desc';
type Filter = 'todas' | Shape | 'con-tapa';

const orders: { value: Order; label: string }[] = [
  { value: 'destacados', label: 'Destacados' },
  { value: 'precio-asc', label: 'Precio: menor a mayor' },
  { value: 'precio-desc', label: 'Precio: mayor a menor' },
];

const filters: { value: Filter; label: string }[] = [
  { value: 'todas', label: 'Todas' },
  ...shapes.map((s) => ({ value: s.slug as Filter, label: s.label })),
  { value: 'con-tapa', label: 'Con tapa' },
];

export function ShopGrid({ products }: { products: Product[] }) {
  const [order, setOrder] = useState<Order>('destacados');
  const [filter, setFilter] = useState<Filter>('todas');

  const visible = useMemo(() => {
    const list = products.filter((p) =>
      filter === 'todas' ? true : filter === 'con-tapa' ? p.drainCover : p.shape === filter,
    );
    if (order === 'precio-asc') return list.sort((a, b) => a.price - b.price);
    if (order === 'precio-desc') return list.sort((a, b) => b.price - a.price);
    return list.sort((a, b) => Number(b.bestSeller) - Number(a.bestSeller));
  }, [products, order, filter]);

  return (
    <>
      <div
        role="group"
        aria-label="Filtrar por forma"
        className="-mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            aria-pressed={filter === f.value}
            onClick={() => setFilter(f.value)}
            className={`h-11 shrink-0 rounded-full border px-5 text-xs tracking-[0.12em] uppercase transition-colors ${
              filter === f.value
                ? 'border-carbon bg-carbon text-hueso'
                : 'border-arena text-carbon hover:border-carbon'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mb-8 flex items-center justify-between gap-4 border-y border-arena py-3">
        <p className="text-xs text-concreto" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'modelo' : 'modelos'}
        </p>
        <label className="flex items-center gap-2 text-xs">
          <span className="text-concreto">Ordenar por</span>
          <select
            value={order}
            onChange={(e) => setOrder(e.target.value as Order)}
            className="h-11 cursor-pointer rounded-full border border-arena bg-transparent pr-8 pl-3 text-xs"
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
      <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-6 md:grid-cols-3 xl:grid-cols-4">
        {visible.map((p, i) => (
          <ProductCard key={p.slug} product={p} priority={i < 4} />
        ))}
      </div>
    </>
  );
}

'use client';

import { cart, useCart } from '@/lib/cart';
import { BagIcon } from '../icons';

export function CartButton({ className = '' }: { className?: string }) {
  const { items } = useCart();
  const count = items.reduce((n, i) => n + i.quantity, 0);
  return (
    <button
      type="button"
      onClick={cart.open}
      aria-label={count > 0 ? `Abrir carrito, ${count} ${count === 1 ? 'unidad' : 'unidades'}` : 'Abrir carrito'}
      className={`relative p-2 ${className}`}
    >
      <BagIcon />
      {count > 0 && (
        <span className="absolute top-0.5 right-0 grid min-w-4 place-items-center rounded-full bg-carbon px-1 text-[10px] leading-4 text-hueso tabular-nums">
          {count}
        </span>
      )}
    </button>
  );
}

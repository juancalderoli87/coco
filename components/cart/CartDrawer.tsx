'use client';

import Image from 'next/image';
import Link from 'next/link';
import { track } from '@vercel/analytics';
import { useEffect, useRef, useState } from 'react';
import { productImage } from '@/data/products';
import { site } from '@/data/site';
import { cart, useCart } from '@/lib/cart';
import { formatGs, whatsappLink } from '@/lib/format';
import { needsAvailabilityCheck, orderLines, orderMessage, orderTotal, type Customer } from '@/lib/order';
import { buttonClass } from '../Button';
import { CloseIcon, WhatsAppIcon } from '../icons';
import { QuantityInput } from './QuantityInput';

const CUSTOMER_KEY = 'coco-cliente';

function loadCustomer(): Customer {
  try {
    const saved = JSON.parse(window.localStorage.getItem(CUSTOMER_KEY) ?? '{}');
    return { name: String(saved.name ?? ''), city: String(saved.city ?? '') };
  } catch {
    return { name: '', city: '' };
  }
}

export function CartDrawer() {
  const { items, open } = useCart();
  const [customer, setCustomer] = useState<Customer>(() =>
    typeof window === 'undefined' ? { name: '', city: '' } : loadCustomer(),
  );

  function updateCustomer(patch: Partial<Customer>) {
    const next = { ...customer, ...patch };
    setCustomer(next);
    try {
      window.localStorage.setItem(CUSTOMER_KEY, JSON.stringify(next));
    } catch {
      // sin almacenamiento: queda en memoria
    }
  }

  const panel = useRef<HTMLDivElement>(null);
  const lines = orderLines(items);
  const total = orderTotal(lines);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    panel.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && cart.close();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      previous?.focus();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button type="button" aria-label="Cerrar carrito" onClick={cart.close} className="absolute inset-0 bg-tinta/40" />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="carrito-titulo"
        tabIndex={-1}
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-hueso shadow-2xl outline-none"
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-arena px-5">
          <h2 id="carrito-titulo" className="text-xs tracking-[var(--tracking-label)] uppercase">
            Tu pedido {lines.length > 0 && `(${lines.reduce((n, l) => n + l.quantity, 0)})`}
          </h2>
          <button type="button" onClick={cart.close} aria-label="Cerrar carrito" className="-mr-2 p-2">
            <CloseIcon />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 text-center">
            <p className="text-2xl font-light">Tu carrito está vacío</p>
            <p className="text-sm text-concreto">Elegí tu bacha y tu color para armar el pedido.</p>
            <Link href="/shop" onClick={cart.close} className={buttonClass('primary')}>
              Ver colección
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-arena overflow-y-auto px-5">
              {lines.map((l) => (
                <li key={`${l.slug}-${l.color}`} className="flex gap-4 py-5">
                  <Link
                    href={`/shop/${l.slug}`}
                    onClick={cart.close}
                    className="relative size-24 shrink-0 overflow-hidden bg-white"
                  >
                    <Image
                      src={productImage(l.slug, l.color)}
                      alt={`Bacha ${l.product.name} en color ${l.colorName}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-sm font-medium tracking-[0.12em] uppercase">{l.product.name}</p>
                      <p className="shrink-0 text-sm">{formatGs(l.subtotal)}</p>
                    </div>
                    <p className="text-xs text-concreto">
                      {l.colorName} · {formatGs(l.product.price)} c/u
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <QuantityInput
                        size="sm"
                        label={`Cantidad de ${l.product.name} ${l.colorName}`}
                        value={l.quantity}
                        min={0}
                        onChange={(q) => cart.setQuantity(l.slug, l.color, q)}
                      />
                      <button
                        type="button"
                        onClick={() => cart.remove(l.slug, l.color)}
                        className="text-xs text-concreto underline underline-offset-4 hover:text-carbon"
                      >
                        Quitar
                      </button>
                    </div>
                    {needsAvailabilityCheck(lines, l.slug) && (
                      <p role="status" className="mt-2 bg-beige px-3 py-2 text-xs leading-relaxed">
                        Para más de {site.maxUnitsWithoutCheck} unidades, consultá disponibilidad por WhatsApp.
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="shrink-0 border-t border-arena px-5 pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <div className="flex items-baseline justify-between">
                <p className="text-xs tracking-[var(--tracking-label)] uppercase">Total estimado</p>
                <p className="text-lg">{formatGs(total)}</p>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-concreto">
                Sin instalación. Coordinamos el pago y la entrega por WhatsApp.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <label className="text-xs text-concreto">
                  Tu nombre
                  <input
                    type="text"
                    autoComplete="name"
                    value={customer.name}
                    onChange={(e) => updateCustomer({ name: e.target.value })}
                    className="mt-1 h-11 w-full rounded-none border border-arena bg-white px-3 text-base text-carbon"
                  />
                </label>
                <label className="text-xs text-concreto">
                  Tu ciudad
                  <input
                    type="text"
                    autoComplete="address-level2"
                    value={customer.city}
                    onChange={(e) => updateCustomer({ city: e.target.value })}
                    className="mt-1 h-11 w-full rounded-none border border-arena bg-white px-3 text-base text-carbon"
                  />
                </label>
              </div>
              <a
                href={whatsappLink(orderMessage(lines, customer))}
                target="_blank"
                rel="noopener noreferrer"
                data-track="off"
                onClick={() =>
                  track('pedido_enviado', { unidades: lines.reduce((n, l) => n + l.quantity, 0), total })
                }
                className={buttonClass('primary', 'mt-4 w-full')}
              >
                <WhatsAppIcon className="size-4" />
                Enviar pedido por WhatsApp
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

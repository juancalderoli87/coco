'use client';

import Image from 'next/image';
import { useState } from 'react';
import { colors, getColor, productImage, type ColorSlug, type Product } from '@/data/products';
import { site, whatsappMessages } from '@/data/site';
import { cart } from '@/lib/cart';
import { formatDimensions, formatGs, whatsappLink } from '@/lib/format';
import { buttonClass } from '../Button';
import { QuantityInput } from '../cart/QuantityInput';
import { ColorSwatches } from '../ColorSwatches';
import { WhatsAppIcon } from '../icons';

export function ProductDetail({ product }: { product: Product }) {
  const [color, setColor] = useState<ColorSlug | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(false);
  const colorName = color ? getColor(color).name : undefined;
  const available = colors.filter((c) => product.colors.includes(c.slug));
  const gallery: (ColorSlug | undefined)[] = [undefined, ...available.map((c) => c.slug)];

  function selectColor(c: ColorSlug | undefined) {
    if (c) {
      setColor(c);
      setError(false);
    }
  }

  function handleAdd() {
    if (!color) {
      setError(true);
      return;
    }
    cart.add(product.slug, color, quantity);
    cart.open();
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
      {/* Galería */}
      <div className="flex flex-col gap-3">
        <div className="relative aspect-square overflow-hidden bg-white">
          <Image
            key={color ?? 'principal'}
            src={productImage(product.slug, color ?? undefined)}
            alt={`Bacha ${product.name}${colorName ? ` en color ${colorName}` : ''}`}
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
        <ul className="grid grid-cols-6 gap-2" aria-label="Fotos por color">
          {gallery.map((c) => {
            const active = (c ?? null) === color;
            return (
              <li key={c ?? 'principal'}>
                <button
                  type="button"
                  onClick={() => (c ? selectColor(c) : setColor(null))}
                  aria-label={c ? `Ver en ${getColor(c).name}` : 'Ver foto principal'}
                  aria-pressed={active}
                  className={`relative block aspect-square w-full overflow-hidden bg-white ring-1 transition ${
                    active ? 'ring-carbon' : 'ring-transparent hover:ring-arena'
                  }`}
                >
                  <Image src={productImage(product.slug, c)} alt="" fill sizes="80px" className="object-cover" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Información */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <p className="mb-3 text-[11px] tracking-[var(--tracking-label)] text-concreto uppercase">Bacha</p>
        <h1 className="text-4xl font-light tracking-tight md:text-5xl">{product.name}</h1>
        <p className="mt-4 text-xl">{formatGs(product.price)}</p>
        <p className="mt-6 leading-relaxed">{product.shortDescription}</p>

        <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-arena py-4 text-sm">
          <div>
            <dt className="text-xs text-concreto">Medidas (largo × ancho × alto)</dt>
            <dd className="mt-1">{formatDimensions(product.dimensions)}</dd>
          </div>
          <div>
            <dt className="text-xs text-concreto">Material</dt>
            <dd className="mt-1">Concreto de alto desempeño</dd>
          </div>
        </dl>

        <div className="mt-8">
          <p className="mb-3 text-sm">
            Color: <span className="text-concreto">{colorName ?? 'elegí uno'}</span>
          </p>
          <ColorSwatches
            available={product.colors}
            value={color}
            onChange={selectColor}
            name={`color-${product.slug}`}
            size="md"
          />
          {error && (
            <p role="alert" className="mt-3 text-sm text-[#9a3b2a]">
              Elegí un color para agregar la bacha al carrito.
            </p>
          )}
        </div>

        <div className="mt-8 flex gap-3">
          <QuantityInput label="Cantidad" value={quantity} onChange={(q) => setQuantity(Math.max(1, q))} />
          <button type="button" onClick={handleAdd} className={buttonClass('primary', 'min-w-0 flex-1 px-4')}>
            Agregar al carrito
          </button>
        </div>
        {quantity > site.maxImmediateUnits && (
          <p role="status" className="mt-3 bg-beige px-3 py-2 text-xs leading-relaxed">
            Para más de {site.maxImmediateUnits} unidades, consultá disponibilidad por WhatsApp.
          </p>
        )}
        <a
          href={whatsappLink(whatsappMessages.product(product.name, colorName))}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass('secondary', 'mt-3 w-full')}
        >
          <WhatsAppIcon className="size-4" />
          Consultar por WhatsApp
        </a>

        <ul className="mt-8 flex flex-col gap-2 text-xs text-concreto">
          <li>— Entrega inmediata hasta {site.maxImmediateUnits} unidades</li>
          <li>— Envíos a todo el Paraguay</li>
          <li>— Se vende sin instalación</li>
          <li>— {site.madeIn}</li>
        </ul>
      </div>
    </div>
  );
}

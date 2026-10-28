'use client';

import { colors, type ColorSlug } from '@/data/products';

type ColorSwatchesProps = {
  available: ColorSlug[];
  value: ColorSlug | null;
  onChange: (color: ColorSlug) => void;
  name: string;
  size?: 'sm' | 'md';
};

export function ColorSwatches({ available, value, onChange, name, size = 'sm' }: ColorSwatchesProps) {
  const dot = size === 'sm' ? 'size-5' : 'size-8';
  return (
    <fieldset>
      <legend className="sr-only">Color</legend>
      <div className="flex flex-wrap gap-1.5">
        {colors
          .filter((c) => available.includes(c.slug))
          .map((c) => {
            const selected = value === c.slug;
            return (
              <label
                key={c.slug}
                title={c.name}
                className={`relative grid cursor-pointer place-items-center rounded-full p-0.5 ring-1 transition ${
                  selected ? 'ring-carbon' : 'ring-transparent hover:ring-arena'
                }`}
              >
                <input
                  type="radio"
                  name={name}
                  value={c.slug}
                  checked={selected}
                  onChange={() => onChange(c.slug)}
                  className="peer sr-only"
                />
                <span
                  className={`${dot} block rounded-full ring-1 ring-black/10 ring-inset peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-carbon`}
                  style={{ backgroundColor: c.hex }}
                />
                <span className="sr-only">{c.name}</span>
              </label>
            );
          })}
      </div>
    </fieldset>
  );
}

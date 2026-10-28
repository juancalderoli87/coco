'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';

const options = [
  { id: 'a', name: 'Opción A — Jost' },
  { id: 'b', name: 'Opción B — Outfit' },
] as const;

// Solo para la página de muestra de la Fase 1: cambia la tipografía de todo el sitio.
export function FontSwitcher() {
  // ?font=b en la URL abre directo la opción B
  const fromUrl = useSyncExternalStore(
    () => () => {},
    () => (new URLSearchParams(window.location.search).get('font') === 'b' ? 'b' : 'a'),
    () => 'a' as const,
  );
  const [chosen, setFont] = useState<'a' | 'b' | null>(null);
  const font = chosen ?? fromUrl;

  useEffect(() => {
    document.documentElement.dataset.font = font;
  }, [font]);

  return (
    <div role="radiogroup" aria-label="Tipografía" className="inline-flex rounded-full border border-carbon p-1">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          role="radio"
          aria-checked={font === o.id}
          onClick={() => setFont(o.id)}
          className={`rounded-full px-4 py-2 text-xs tracking-[0.12em] uppercase transition-colors ${
            font === o.id ? 'bg-carbon text-hueso' : 'text-carbon hover:bg-beige'
          }`}
        >
          {o.name}
        </button>
      ))}
    </div>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { site } from '@/data/site';
import { BagIcon, CloseIcon, MenuIcon } from '../icons';
import { Logo } from '../Logo';

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-arena/70 bg-hueso/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="-ml-2 p-2 lg:hidden"
        >
          <MenuIcon />
        </button>

        <Link href="/" aria-label="COCO, ir al inicio" className="lg:mr-auto">
          <Logo className="h-5 w-auto md:h-6" priority />
        </Link>

        <nav aria-label="Principal" className="hidden gap-8 text-xs tracking-[0.14em] uppercase lg:flex">
          {site.nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? 'page' : undefined}
              className="py-2 underline-offset-[6px] hover:underline aria-[current=page]:underline"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* El carrito se conecta en la Fase 3 */}
        <Link href="/shop" aria-label="Carrito" className="-mr-2 p-2 lg:ml-8">
          <BagIcon />
        </Link>
      </div>

      {open && (
        <div id="menu-mobile" role="dialog" aria-modal="true" aria-label="Menú" className="fixed inset-0 z-50 bg-hueso lg:hidden">
          <div className="flex h-16 items-center justify-between border-b border-arena/70 px-4">
            <Logo className="h-5 w-auto" />
            <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar menú" className="-mr-2 p-2">
              <CloseIcon />
            </button>
          </div>
          <nav aria-label="Principal" className="flex flex-col px-4 pt-6">
            {site.nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-arena/60 py-5 text-2xl font-light"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="absolute inset-x-0 bottom-8 text-center text-[11px] tracking-[var(--tracking-label)] text-concreto uppercase">
            {site.madeIn}
          </p>
        </div>
      )}
    </header>
  );
}

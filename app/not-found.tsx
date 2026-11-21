import { ButtonLink } from '@/components/Button';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60dvh] max-w-7xl flex-col items-start justify-center gap-6 px-4 py-24 md:px-8">
      <p className="text-[11px] tracking-[var(--tracking-label)] text-concreto uppercase">Error 404</p>
      <h1 className="text-4xl font-light tracking-tight md:text-6xl">No encontramos esta página</h1>
      <p className="max-w-md leading-relaxed text-concreto">Puede que el link haya cambiado. Seguí recorriendo la colección.</p>
      <ButtonLink href="/shop">Ver colección</ButtonLink>
    </main>
  );
}

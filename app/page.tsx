import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { site } from '@/data/site';

// Home provisoria hasta la Fase 2.
export default function Home() {
  return (
    <main className="grid min-h-dvh place-items-center px-4 text-center">
      <div className="flex flex-col items-center gap-6">
        <Logo variant="isologo" className="h-14 w-auto" priority />
        <p className="text-xs tracking-[var(--tracking-label)] uppercase">{site.tagline}</p>
        <Link href="/sistema" className="text-sm underline underline-offset-4">
          Ver sistema de diseño
        </Link>
      </div>
    </main>
  );
}

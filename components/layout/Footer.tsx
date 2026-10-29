import Link from 'next/link';
import { site, whatsappMessages } from '@/data/site';
import { whatsappLink } from '@/lib/format';
import { Logo } from '../Logo';

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 text-[11px] tracking-[var(--tracking-label)] text-hueso/60 uppercase">{title}</h2>
      <div className="flex flex-col gap-2 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-tinta text-hueso">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <Logo variant="isologo" tone="beige" className="h-10 w-auto self-start" />
          <p className="text-xs tracking-[var(--tracking-label)] uppercase">{site.tagline}</p>
          <p className="max-w-xs text-sm leading-relaxed text-hueso/70">
            Bachas de concreto de alto desempeño, hechas a mano una por una.
          </p>
        </div>

        <Column title="Visitanos">
          <p>
            {site.showroom.label}
            <br />
            <span className="text-hueso/70">
              {site.showroom.address}, {site.showroom.city}
            </span>
          </p>
          <p>
            {site.workshop.label}
            <br />
            <span className="text-hueso/70">{site.workshop.city}</span>
          </p>
        </Column>

        <Column title="Contacto">
          <a href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="hover:underline">
            WhatsApp {site.whatsapp.display}
          </a>
          <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
            Instagram {site.instagram.handle}
          </a>
          <a href={`mailto:${site.email}`} className="break-all hover:underline">
            {site.email}
          </a>
        </Column>

        <Column title="Navegá">
          {site.nav.map((l) => (
            <Link key={l.href} href={l.href} className="hover:underline">
              {l.label}
            </Link>
          ))}
        </Column>
      </div>

      <div className="border-t border-hueso/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-[11px] tracking-[0.14em] text-hueso/60 uppercase md:flex-row md:justify-between md:px-8">
          <p className="text-hueso">{site.madeIn}</p>
          <p>
            © {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

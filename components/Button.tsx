import Link from 'next/link';

type Variant = 'primary' | 'secondary' | 'light' | 'link';

const base =
  'inline-flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-[0.14em] transition-colors disabled:cursor-not-allowed disabled:opacity-40';

const variants: Record<Variant, string> = {
  primary: 'h-12 rounded-full bg-carbon px-7 text-hueso hover:bg-tinta',
  secondary: 'h-12 rounded-full border border-carbon px-7 text-carbon hover:bg-carbon hover:text-hueso',
  light: 'h-12 rounded-full bg-hueso px-7 text-carbon hover:bg-beige',
  link: 'h-auto px-0 text-carbon underline decoration-arena underline-offset-[6px] hover:decoration-carbon',
};

export function buttonClass(variant: Variant = 'primary', extra = '') {
  return `${base} ${variants[variant]} ${extra}`;
}

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({ href, variant = 'primary', className = '', children }: ButtonLinkProps) {
  const external = href.startsWith('http');
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass(variant, className)}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {children}
    </Link>
  );
}

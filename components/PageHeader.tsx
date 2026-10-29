type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: React.ReactNode;
};

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-6 pt-12 pb-12 md:flex-row md:items-end md:justify-between md:pt-16 md:pb-16">
      <div>
        <p className="mb-3 text-[11px] tracking-[var(--tracking-label)] text-concreto uppercase">{eyebrow}</p>
        <h1 className="text-4xl leading-tight font-light tracking-tight md:text-6xl">{title}</h1>
      </div>
      {intro && <div className="max-w-md text-sm leading-relaxed text-concreto md:text-base">{intro}</div>}
    </header>
  );
}

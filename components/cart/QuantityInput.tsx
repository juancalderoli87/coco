'use client';

type QuantityInputProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  label: string;
  size?: 'sm' | 'md';
};

export function QuantityInput({ value, onChange, min = 1, label, size = 'md' }: QuantityInputProps) {
  const h = size === 'sm' ? 'h-9' : 'h-12';
  const w = size === 'sm' ? 'w-9' : 'w-11';
  return (
    <div className={`inline-flex ${h} shrink-0 items-center rounded-full border border-arena`} role="group" aria-label={label}>
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        aria-label="Restar una unidad"
        className={`${w} h-full text-lg disabled:opacity-30`}
      >
        −
      </button>
      <span aria-live="polite" className="min-w-6 text-center text-sm tabular-nums">
        {value}
      </span>
      <button type="button" onClick={() => onChange(value + 1)} aria-label="Sumar una unidad" className={`${w} h-full text-lg`}>
        +
      </button>
    </div>
  );
}

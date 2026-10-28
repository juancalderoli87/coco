import { site } from '@/data/site';

/** 1050500 → "Gs 1.050.500" */
export function formatGs(amount: number): string {
  return `Gs ${Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
}

/** 40 → "40", 11.5 → "11,5" */
export function formatCm(value: number): string {
  return value.toString().replace('.', ',');
}

export function formatDimensions(d: { length: number; width: number; height: number }): string {
  return `${formatCm(d.length)} × ${formatCm(d.width)} × ${formatCm(d.height)} cm`;
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp.international}?text=${encodeURIComponent(message)}`;
}

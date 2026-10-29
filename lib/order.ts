import { getColor, getProduct, type Product } from '@/data/products';
import { site } from '@/data/site';
import type { CartItem } from './cart';
import { formatGs } from './format';

export type OrderLine = CartItem & { product: Product; colorName: string; subtotal: number };

export function orderLines(items: CartItem[]): OrderLine[] {
  return items.flatMap((item) => {
    const product = getProduct(item.slug);
    if (!product) return [];
    return [{ ...item, product, colorName: getColor(item.color).name, subtotal: product.price * item.quantity }];
  });
}

export function orderTotal(lines: OrderLine[]): number {
  return lines.reduce((sum, l) => sum + l.subtotal, 0);
}

/** Unidades por modelo, sumando todos los colores */
export function unitsByModel(lines: OrderLine[]): Map<string, number> {
  const units = new Map<string, number>();
  for (const l of lines) units.set(l.slug, (units.get(l.slug) ?? 0) + l.quantity);
  return units;
}

export function exceedsImmediateStock(lines: OrderLine[], slug: string): boolean {
  return (unitsByModel(lines).get(slug) ?? 0) > site.maxImmediateUnits;
}

export function orderMessage(lines: OrderLine[]): string {
  const rows = lines.map((l) => {
    const row = `• Bacha ${l.product.name} – ${l.colorName} × ${l.quantity} — ${formatGs(l.product.price)} c/u`;
    return exceedsImmediateStock(lines, l.slug) ? `${row}\n  (consultar disponibilidad)` : row;
  });
  return [
    'Hola COCO, quiero consultar por:',
    ...rows,
    `Total estimado: ${formatGs(orderTotal(lines))}`,
    'Nombre: ___ · Ciudad: ___',
  ].join('\n');
}

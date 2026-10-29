import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { siteUrl } from '@/lib/url';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/shop', '/muestras', '/nosotros', '/cuidado-y-garantia'];
  return [
    ...pages.map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: 'monthly' as const, priority: path ? 0.8 : 1 })),
    ...products.map((p) => ({ url: `${siteUrl}/shop/${p.slug}`, changeFrequency: 'monthly' as const, priority: 0.7 })),
  ];
}

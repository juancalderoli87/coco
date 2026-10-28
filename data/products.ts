// Catálogo de bachas COCO. Editá precios, best sellers y colores acá; los componentes leen de este archivo.
// Fuente de medidas y peso: contenido/pdf/catalogo COCO vert-comprimido.pdf
// Fotos: /public/images/productos/<slug>/<color>.webp (+ principal.webp)

export type ColorSlug =
  | 'gris-azulado'
  | 'amarillo-ambar'
  | 'blanco-hueso'
  | 'lavanda'
  | 'arcilla'
  | 'chocolate'
  | 'ocre'
  | 'verde-oliva'
  | 'gris'
  | 'gris-ceniza'
  | 'carbon';

// hex: tono aproximado para el selector de color (la foto muestra el color real)
export const colors: { slug: ColorSlug; name: string; hex: string }[] = [
  { slug: 'gris-azulado', name: 'Gris azulado', hex: '#8FA3B5' },
  { slug: 'amarillo-ambar', name: 'Amarillo ámbar', hex: '#E3BE6E' },
  { slug: 'blanco-hueso', name: 'Blanco hueso', hex: '#E9E3D8' },
  { slug: 'lavanda', name: 'Lavanda', hex: '#ADA0AE' },
  { slug: 'arcilla', name: 'Arcilla', hex: '#DDB9A0' },
  { slug: 'chocolate', name: 'Chocolate', hex: '#8C7364' },
  { slug: 'ocre', name: 'Ocre', hex: '#C97A55' },
  { slug: 'verde-oliva', name: 'Verde oliva', hex: '#8B8441' },
  { slug: 'gris', name: 'Gris', hex: '#C4C6C6' },
  { slug: 'gris-ceniza', name: 'Gris ceniza', hex: '#8E8D8C' },
  { slug: 'carbon', name: 'Carbón', hex: '#4A4C50' },
];

const allColors = colors.map((c) => c.slug);

export type Product = {
  slug: string;
  name: string;
  /** Precio al consumidor en guaraníes. */
  price: number;
  /** Medidas en cm: largo × ancho × alto */
  dimensions: { length: number; width: number; height: number };
  weightKg: number;
  colors: ColorSlug[];
  bestSeller: boolean;
  shortDescription: string; // TODO Fase 3 para los modelos vacíos
  longDescription: string; // TODO Fase 3
};

// TODO: precios simbólicos (Gs 750.000) — corregir antes de publicar. Opciones: 815000 · 930000 · 1050500 · 1180000 · 1300000
export const products: Product[] = [
  { slug: 'san-francisco', name: 'San Francisco', price: 750000, dimensions: { length: 32, width: 32, height: 11.2 }, weightKg: 7.9, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'new-york', name: 'New York', price: 750000, dimensions: { length: 36, width: 36, height: 9 }, weightKg: 8.5, colors: allColors, bestSeller: true, shortDescription: 'Cuadrada de bordes suaves, para apoyar.', longDescription: '' },
  { slug: 'chicago', name: 'Chicago', price: 750000, dimensions: { length: 40, width: 25, height: 11.5 }, weightKg: 7.6, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'dubai', name: 'Dubai', price: 750000, dimensions: { length: 53, width: 35, height: 8 }, weightKg: 21, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'roma', name: 'Roma', price: 750000, dimensions: { length: 40, width: 30, height: 8.5 }, weightKg: 10.8, colors: allColors, bestSeller: true, shortDescription: 'Rectangular con orificio para grifería integrado.', longDescription: '' },
  { slug: 'dublin', name: 'Dublin', price: 750000, dimensions: { length: 43, width: 34, height: 8 }, weightKg: 15.7, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  // TODO: confirmar peso de Paris (el catálogo dice 18,9 kg; Montevideo, de igual tamaño, pesa 11,7 kg)
  { slug: 'paris', name: 'Paris', price: 750000, dimensions: { length: 40, width: 23, height: 9 }, weightKg: 18.9, colors: allColors, bestSeller: true, shortDescription: 'Ovalada, de líneas puras y bordes redondeados.', longDescription: '' },
  { slug: 'london', name: 'London', price: 750000, dimensions: { length: 45, width: 25, height: 10 }, weightKg: 10.4, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'milan', name: 'Milan', price: 750000, dimensions: { length: 38, width: 38, height: 12 }, weightKg: 10.7, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'lisboa', name: 'Lisboa', price: 750000, dimensions: { length: 60, width: 39.5, height: 7 }, weightKg: 24, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'amsterdam', name: 'Amsterdam', price: 750000, dimensions: { length: 33, width: 33, height: 9 }, weightKg: 11.8, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'barcelona', name: 'Barcelona', price: 750000, dimensions: { length: 46, width: 16.5, height: 12 }, weightKg: 11, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'valencia', name: 'Valencia', price: 750000, dimensions: { length: 38, width: 38, height: 9 }, weightKg: 10.3, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'madrid', name: 'Madrid', price: 750000, dimensions: { length: 47, width: 27, height: 12 }, weightKg: 11.5, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'lima', name: 'Lima', price: 750000, dimensions: { length: 56, width: 36, height: 9 }, weightKg: 14.3, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'medellin', name: 'Medellin', price: 750000, dimensions: { length: 48.5, width: 35, height: 11 }, weightKg: 21.6, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'asuncion', name: 'Asuncion', price: 750000, dimensions: { length: 31, width: 31, height: 10 }, weightKg: 9.7, colors: allColors, bestSeller: true, shortDescription: 'Redonda, de perfil limpio y desagüe centrado.', longDescription: '' },
  { slug: 'montevideo', name: 'Montevideo', price: 750000, dimensions: { length: 40, width: 23, height: 11 }, weightKg: 11.7, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'rio', name: 'Rio', price: 750000, dimensions: { length: 37, width: 25, height: 9 }, weightKg: 10.4, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'galapagos', name: 'Galapagos', price: 750000, dimensions: { length: 39, width: 28, height: 12.5 }, weightKg: 11.8, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'buenos-aires', name: 'Buenos Aires', price: 750000, dimensions: { length: 49, width: 34, height: 6 }, weightKg: 13.1, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'curitiba', name: 'Curitiba', price: 750000, dimensions: { length: 38.5, width: 38.5, height: 11 }, weightKg: 13.1, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'sydney', name: 'Sydney', price: 750000, dimensions: { length: 37, width: 26, height: 9 }, weightKg: 10.5, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'auckland', name: 'Auckland', price: 750000, dimensions: { length: 54, width: 36, height: 9 }, weightKg: 23.3, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  // TODO: modelo 25 — se agrega más adelante
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getColor = (slug: ColorSlug) => colors.find((c) => c.slug === slug)!;
export const bestSellers = () => products.filter((p) => p.bestSeller);
export const productImage = (slug: string, color?: ColorSlug) =>
  `/images/productos/${slug}/${color ?? 'principal'}.webp`;

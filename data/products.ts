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

export const colors: { slug: ColorSlug; name: string }[] = [
  { slug: 'gris-azulado', name: 'Gris azulado' },
  { slug: 'amarillo-ambar', name: 'Amarillo ámbar' },
  { slug: 'blanco-hueso', name: 'Blanco hueso' },
  { slug: 'lavanda', name: 'Lavanda' },
  { slug: 'arcilla', name: 'Arcilla' },
  { slug: 'chocolate', name: 'Chocolate' },
  { slug: 'ocre', name: 'Ocre' },
  { slug: 'verde-oliva', name: 'Verde oliva' },
  { slug: 'gris', name: 'Gris' },
  { slug: 'gris-ceniza', name: 'Gris ceniza' },
  { slug: 'carbon', name: 'Carbón' },
];

const allColors = colors.map((c) => c.slug);

export type Product = {
  slug: string;
  name: string;
  /** Precio al consumidor en guaraníes. null = pendiente de confirmar. */
  price: number | null;
  /** Medidas en cm: largo × ancho × alto */
  dimensions: { length: number; width: number; height: number };
  weightKg: number;
  colors: ColorSlug[];
  bestSeller: boolean;
  shortDescription: string; // TODO Fase 3
  longDescription: string; // TODO Fase 3
};

// TODO: precio de cada modelo (opciones: 815000 · 930000 · 1050500 · 1180000 · 1300000)
export const products: Product[] = [
  { slug: 'san-francisco', name: 'San Francisco', price: null, dimensions: { length: 32, width: 32, height: 11.2 }, weightKg: 7.9, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'new-york', name: 'New York', price: null, dimensions: { length: 36, width: 36, height: 9 }, weightKg: 8.5, colors: allColors, bestSeller: true, shortDescription: '', longDescription: '' },
  { slug: 'chicago', name: 'Chicago', price: null, dimensions: { length: 40, width: 25, height: 11.5 }, weightKg: 7.6, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'dubai', name: 'Dubai', price: null, dimensions: { length: 53, width: 35, height: 8 }, weightKg: 21, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'roma', name: 'Roma', price: null, dimensions: { length: 40, width: 30, height: 8.5 }, weightKg: 10.8, colors: allColors, bestSeller: true, shortDescription: '', longDescription: '' },
  { slug: 'dublin', name: 'Dublin', price: null, dimensions: { length: 43, width: 34, height: 8 }, weightKg: 15.7, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  // TODO: confirmar peso de Paris (el catálogo dice 18,9 kg; Montevideo, de igual tamaño, pesa 11,7 kg)
  { slug: 'paris', name: 'Paris', price: null, dimensions: { length: 40, width: 23, height: 9 }, weightKg: 18.9, colors: allColors, bestSeller: true, shortDescription: '', longDescription: '' },
  { slug: 'london', name: 'London', price: null, dimensions: { length: 45, width: 25, height: 10 }, weightKg: 10.4, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'milan', name: 'Milan', price: null, dimensions: { length: 38, width: 38, height: 12 }, weightKg: 10.7, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'lisboa', name: 'Lisboa', price: null, dimensions: { length: 60, width: 39.5, height: 7 }, weightKg: 24, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'amsterdam', name: 'Amsterdam', price: null, dimensions: { length: 33, width: 33, height: 9 }, weightKg: 11.8, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'barcelona', name: 'Barcelona', price: null, dimensions: { length: 46, width: 16.5, height: 12 }, weightKg: 11, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'valencia', name: 'Valencia', price: null, dimensions: { length: 38, width: 38, height: 9 }, weightKg: 10.3, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'madrid', name: 'Madrid', price: null, dimensions: { length: 47, width: 27, height: 12 }, weightKg: 11.5, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'lima', name: 'Lima', price: null, dimensions: { length: 56, width: 36, height: 9 }, weightKg: 14.3, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'medellin', name: 'Medellin', price: null, dimensions: { length: 48.5, width: 35, height: 11 }, weightKg: 21.6, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'asuncion', name: 'Asuncion', price: null, dimensions: { length: 31, width: 31, height: 10 }, weightKg: 9.7, colors: allColors, bestSeller: true, shortDescription: '', longDescription: '' },
  { slug: 'montevideo', name: 'Montevideo', price: null, dimensions: { length: 40, width: 23, height: 11 }, weightKg: 11.7, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'rio', name: 'Rio', price: null, dimensions: { length: 37, width: 25, height: 9 }, weightKg: 10.4, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'galapagos', name: 'Galapagos', price: null, dimensions: { length: 39, width: 28, height: 12.5 }, weightKg: 11.8, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'buenos-aires', name: 'Buenos Aires', price: null, dimensions: { length: 49, width: 34, height: 6 }, weightKg: 13.1, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'curitiba', name: 'Curitiba', price: null, dimensions: { length: 38.5, width: 38.5, height: 11 }, weightKg: 13.1, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'sydney', name: 'Sydney', price: null, dimensions: { length: 37, width: 26, height: 9 }, weightKg: 10.5, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  { slug: 'auckland', name: 'Auckland', price: null, dimensions: { length: 54, width: 36, height: 9 }, weightKg: 23.3, colors: allColors, bestSeller: false, shortDescription: '', longDescription: '' },
  // TODO: modelo 25 — no figura en el catálogo ni en las fotos
];

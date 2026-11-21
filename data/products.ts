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

export type Shape = 'rectangular' | 'cuadrada' | 'redonda' | 'ovalada';

export const shapes: { slug: Shape; label: string }[] = [
  { slug: 'rectangular', label: 'Rectangulares' },
  { slug: 'cuadrada', label: 'Cuadradas' },
  { slug: 'redonda', label: 'Redondas' },
  { slug: 'ovalada', label: 'Ovaladas' },
];

export type Product = {
  slug: string;
  name: string;
  shape: Shape;
  /** Tiene video en /public/videos/bacha-<slug>.mp4 */
  video?: boolean;
  /** Precio al consumidor en guaraníes. */
  price: number;
  /** Medidas en cm: largo × ancho × alto */
  dimensions: { length: number; width: number; height: number };
  /** Opcional: aclaración que se muestra debajo de las medidas en la página del producto. */
  dimensionsNote?: string;
  weightKg: number;
  colors: ColorSlug[];
  bestSeller: boolean;
  /** La bacha incluye tapa de desagüe de concreto. La sopapa nunca viene incluida. */
  drainCover?: boolean;
  shortDescription: string;
  /** Opcional: si está vacío, la página de producto usa el texto general del material. */
  longDescription: string;
};

// Precios al consumidor en guaraníes (5 niveles: 815.000 · 930.000 · 1.050.500 · 1.180.000 · 1.300.000).
// Los modelos con tapa de desagüe tienen un precio mayor por su diseño.
export const products: Product[] = [
  { slug: 'san-francisco', name: 'San Francisco', shape: 'cuadrada', video: true, price: 815000, dimensions: { length: 32, width: 32, height: 11.2 }, weightKg: 7.9, colors: allColors, bestSeller: false, shortDescription: 'Cuadrada, de paredes altas y bordes redondeados.', longDescription: '' },
  { slug: 'new-york', name: 'New York', shape: 'cuadrada', video: true, price: 815000, dimensions: { length: 36, width: 36, height: 9 }, weightKg: 8.5, colors: allColors, bestSeller: true, shortDescription: 'Cuadrada de bordes suaves, para apoyar.', longDescription: '' },
  { slug: 'chicago', name: 'Chicago', shape: 'rectangular', video: true, price: 815000, dimensions: { length: 40, width: 25, height: 11.5 }, weightKg: 7.6, colors: allColors, bestSeller: false, shortDescription: 'Rectangular, de paredes altas y bordes redondeados.', longDescription: '' },
  { slug: 'dubai', name: 'Dubai', shape: 'rectangular', video: true, price: 1050500, dimensions: { length: 53, width: 35, height: 8 }, weightKg: 21, colors: allColors, bestSeller: false, shortDescription: 'Rectangular amplia, con orificio para grifería.', longDescription: '' },
  { slug: 'roma', name: 'Roma', shape: 'rectangular', price: 1050500, dimensions: { length: 40, width: 30, height: 8.5 }, weightKg: 10.8, colors: allColors, bestSeller: true, shortDescription: 'Rectangular con orificio para grifería integrado.', longDescription: '' },
  { slug: 'dublin', name: 'Dublin', shape: 'rectangular', video: true, price: 1050500, dimensions: { length: 43, width: 34, height: 8 }, weightKg: 15.7, colors: allColors, bestSeller: false, shortDescription: 'Rectangular, de líneas rectas y cuenco amplio.', longDescription: '' },
  { slug: 'paris', name: 'Paris', shape: 'ovalada', price: 815000, dimensions: { length: 40, width: 23, height: 9 }, weightKg: 18.9, colors: allColors, bestSeller: true, shortDescription: 'Ovalada, de líneas puras y bordes redondeados.', longDescription: '' },
  { slug: 'london', name: 'London', shape: 'ovalada', price: 930000, dimensions: { length: 45, width: 25, height: 10 }, weightKg: 10.4, colors: allColors, bestSeller: false, shortDescription: 'Ovalada, de forma orgánica y bordes finos.', longDescription: '' },
  { slug: 'milan', name: 'Milan', shape: 'redonda', price: 930000, dimensions: { length: 38, width: 38, height: 12 }, weightKg: 10.7, colors: allColors, bestSeller: false, shortDescription: 'Redonda, de paredes rectas y cuenco profundo.', longDescription: '' },
  { slug: 'lisboa', name: 'Lisboa', shape: 'rectangular', price: 1300000, dimensions: { length: 60, width: 39.5, height: 7 }, weightKg: 24, colors: allColors, bestSeller: false, drainCover: true, shortDescription: 'Rectangular de perfil bajo, con tapa central que oculta el desagüe.', longDescription: '' },
  { slug: 'amsterdam', name: 'Amsterdam', shape: 'redonda', price: 815000, dimensions: { length: 33, width: 33, height: 9 }, weightKg: 13, colors: allColors, bestSeller: false, shortDescription: 'Redonda y compacta, de bordes gruesos redondeados.', longDescription: '' },
  { slug: 'barcelona', name: 'Barcelona', shape: 'ovalada', price: 1050500, dimensions: { length: 46, width: 27, height: 12 }, weightKg: 11, colors: allColors, bestSeller: false, shortDescription: 'Ovalada, con exterior acanalado.', longDescription: '' },
  { slug: 'valencia', name: 'Valencia', shape: 'redonda', price: 1050500, dimensions: { length: 38, width: 38, height: 9 }, weightKg: 10.3, colors: allColors, bestSeller: false, shortDescription: 'Redonda, con borde exterior acanalado.', longDescription: '' },
  { slug: 'madrid', name: 'Madrid', shape: 'ovalada', price: 1050500, dimensions: { length: 47, width: 27, height: 12 }, weightKg: 11.5, colors: allColors, bestSeller: false, shortDescription: 'Ovalada y profunda, con exterior acanalado.', longDescription: '' },
  { slug: 'lima', name: 'Lima', shape: 'rectangular', price: 1180000, dimensions: { length: 56, width: 36, height: 9 }, weightKg: 14.3, colors: allColors, bestSeller: false, drainCover: true, shortDescription: 'Rectangular amplia, con tapa de desagüe cuadrada.', longDescription: '' },
  { slug: 'medellin', name: 'Medellín', shape: 'rectangular', price: 1180000, dimensions: { length: 48.5, width: 35, height: 11 }, weightKg: 21.6, colors: allColors, bestSeller: false, drainCover: true, shortDescription: 'Rectangular, con tapa de desagüe rectangular.', longDescription: '' },
  { slug: 'asuncion', name: 'Asunción', shape: 'redonda', price: 930000, dimensions: { length: 31, width: 31, height: 10 }, dimensionsNote: '31 cm de diámetro arriba, 33 cm en la base.', weightKg: 9.7, colors: allColors, bestSeller: true, drainCover: true, shortDescription: 'Redonda, de perfil limpio y tapa de desagüe redonda.', longDescription: '' },
  { slug: 'montevideo', name: 'Montevideo', shape: 'ovalada', price: 930000, dimensions: { length: 40, width: 23, height: 11 }, weightKg: 18.9, colors: allColors, bestSeller: false, drainCover: true, shortDescription: 'Ovalada, de paredes altas y tapa de desagüe redonda.', longDescription: '' },
  { slug: 'rio', name: 'Rio', shape: 'rectangular', price: 1050500, dimensions: { length: 37, width: 25, height: 9 }, weightKg: 10.4, colors: allColors, bestSeller: false, drainCover: true, shortDescription: 'Rectangular compacta, con tapa de desagüe cuadrada.', longDescription: '' },
  { slug: 'galapagos', name: 'Galápagos', shape: 'rectangular', price: 1050500, dimensions: { length: 39, width: 28, height: 12.5 }, weightKg: 11.8, colors: allColors, bestSeller: false, drainCover: true, shortDescription: 'Rectangular de esquinas redondeadas, con tapa de desagüe redonda.', longDescription: '' },
  { slug: 'buenos-aires', name: 'Buenos Aires', shape: 'rectangular', price: 1050500, dimensions: { length: 49, width: 34, height: 6 }, weightKg: 13.1, colors: allColors, bestSeller: false, drainCover: true, shortDescription: 'Rectangular y de perfil muy bajo, con tapa de desagüe cuadrada.', longDescription: '' },
  { slug: 'curitiba', name: 'Curitiba', shape: 'redonda', price: 1050500, dimensions: { length: 38.5, width: 38.5, height: 11 }, weightKg: 13.1, colors: allColors, bestSeller: false, drainCover: true, shortDescription: 'Redonda, de paredes rectas y tapa de desagüe redonda.', longDescription: '' },
  { slug: 'sydney', name: 'Sydney', shape: 'rectangular', price: 815000, dimensions: { length: 37, width: 26, height: 9 }, weightKg: 10.5, colors: allColors, bestSeller: false, shortDescription: 'Rectangular compacta, de líneas rectas.', longDescription: '' },
  { slug: 'auckland', name: 'Auckland', shape: 'rectangular', price: 1180000, dimensions: { length: 54, width: 36, height: 9 }, weightKg: 23.3, colors: allColors, bestSeller: false, shortDescription: 'Rectangular amplia, de borde ancho y líneas rectas.', longDescription: '' },
  { slug: 'maldives', name: 'Maldives', shape: 'rectangular', price: 930000, dimensions: { length: 48, width: 34, height: 12 }, weightKg: 14.5, colors: allColors, bestSeller: false, shortDescription: 'Rectangular amplia, de paredes altas y esquinas redondeadas.', longDescription: '' },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getColor = (slug: ColorSlug) => colors.find((c) => c.slug === slug)!;
export const bestSellers = () => products.filter((p) => p.bestSeller);
export const productImage = (slug: string, color?: ColorSlug) =>
  `/images/productos/${slug}/${color ?? 'principal'}.webp`;
/** Precio más bajo de la colección, para el "desde Gs ..." */
export const lowestPrice = () => Math.min(...products.map((p) => p.price));

/** Modelos parecidos: primero la misma forma, después el precio más cercano. */
export const relatedProducts = (product: Product, count = 4) =>
  products
    .filter((p) => p.slug !== product.slug)
    .sort(
      (a, b) =>
        Number(b.shape === product.shape) - Number(a.shape === product.shape) ||
        Math.abs(a.price - product.price) - Math.abs(b.price - product.price),
    )
    .slice(0, count);

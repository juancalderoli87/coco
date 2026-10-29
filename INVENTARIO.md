# Inventario — Fase 0

Originales sin tocar en `contenido/`. Versiones web optimizadas en `public/`.

## Estructura en `public/`

| Carpeta | Contenido | Peso |
|---|---|---|
| `images/productos/<modelo>/` | 24 modelos × 12 fotos: `principal.webp` + 11 colores (`gris-azulado.webp`, `carbon.webp`, …). WebP, máx. 1600 px | 12 MB |
| `images/ambientes/` | 17 imágenes de ambientación (baños, colección, detalles). WebP, máx. 2000 px | 1,2 MB |
| `images/marca/` | `isologo-*`, `logo-principal-*`, `logo-secundario-*` en beige, blanco, gris y negro (PNG transparente) | 1,1 MB |
| `videos/` | 5 videos verticales (Chicago, Dubai, Dublin, New York, San Francisco), 720 px, sin audio, + poster | 4,5 MB |

De ~800 MB de originales a ~19 MB para la web.

## Códigos de las fotos originales

`COCO-<MODELO>-<COLOR>`. Modelo: SFR San Francisco, NYK New York, CHI Chicago, DXB Dubai, ROM Roma, DUB Dublin, PAR Paris, LON London, MIL Milan, LIS Lisboa, AMS Amsterdam, BCN Barcelona, VLC Valencia, MAD Madrid, LIM Lima, MDE Medellin, ASU Asuncion, MVD Montevideo, RIO Rio, GPS Galapagos, BUE Buenos Aires, CWB Curitiba, SYD Sydney, AKL Auckland.
Color: 00 principal, GAZ gris azulado, AMB amarillo ámbar, BLH blanco hueso, LAV lavanda, ARC arcilla, CHO chocolate, OCR ocre, OLI verde oliva, GRI gris, GCE gris ceniza, CAR carbón.

## Datos encontrados

- **24 modelos** con medidas (cm) y peso, del catálogo PDF. Cargados en `data/products.ts`.
- **11 colores**, los mismos para todos los modelos.
- **Fotos completas**: los 24 modelos tienen foto en los 11 colores.
- **Paleta de marca** (de los logos): beige `#E0DCD3`, gris `#32363C`.
- **Best sellers** (del brief): Roma, Paris, Asuncion, New York.

## Decisiones de Juan

- Arrancamos con 24 modelos; el 25 se agrega después.
- Precio simbólico de Gs 750.000 en todos los modelos. Se corrige antes de publicar.
- Dirección del showroom: Sucre 1862 c/ Ocampos Lanzoni.
- WhatsApp: 0992 901700.
- Se usan todas las imágenes de ambientes en el diseño.

## Pendientes antes de publicar

1. Precios reales de cada modelo.
2. Peso de Paris (catálogo: 18,9 kg; Montevideo, de igual tamaño, 11,7 kg). La web no muestra el peso por ahora.
2b. Ancho de Barcelona: el catálogo dice 16,5 cm y en la foto parece más ancha.
3. Modelo 25.
4. Para el FAQ y Cuidado y garantía: plazo de entrega, formas de pago, productos de limpieza, plazo de garantía, grifería compatible.
5. Foto de Juan para Nosotros.
6. Texto de cuidado (`careSummary` en `data/site.ts` y `data/care.ts`) y respuestas del FAQ marcadas con TODO en `data/faq.ts`.
7. Garantía: plazo y condiciones (`data/care.ts`). Hoy la página dice "a confirmar".
8. Muestras: si tienen costo y cómo se entregan.

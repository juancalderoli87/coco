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

## Datos que faltan o no coinciden

1. **Modelo 25**: no está en el catálogo ni en las fotos. El catálogo tiene 24 modelos.
2. **Precios**: el catálogo no tiene precios. Falta el precio de cada uno de los 24 modelos.
3. **Dirección del showroom**: el brief dice Sucre 1846; el catálogo dice "Sucre 1862 c/ Ocampos Lanzoni".
4. **Teléfono**: el catálogo tiene +595 981 418847; el brief usa 0992 901700 para WhatsApp.
5. **Peso de Paris**: el catálogo dice 18,9 kg. Montevideo, con las mismas medidas, pesa 11,7 kg.
6. **Medidas en pulgadas del catálogo**: New York dice 22" para 36 cm (debería ser 14,2"). La web usa solo cm.
7. **Imágenes de ambientación** (`images/ambientes/`): son generadas con IA (Magnific). No tienen personas, pero hay que confirmar que las bachas no cambiaron de forma antes de usarlas.
8. **Para el FAQ y Cuidado y garantía**: plazo de entrega, formas de pago, productos de limpieza recomendados, plazo de garantía, grifería compatible.
9. **Foto de Juan** para Nosotros: no hay.
10. **Descripciones de producto**: no hay textos por modelo. Los redacto en la Fase 3 a partir de la forma de cada bacha, salvo que me pases los tuyos.

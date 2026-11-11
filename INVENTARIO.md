# Inventario — Fase 0

Originales sin tocar en `contenido/`. Versiones web optimizadas en `public/`.

## Catálogo PDF

`contenido/pdf/catalogo-COCO-2026.pdf` es el catálogo vigente (29 páginas, con Maldives). El original queda como referencia en `contenido/pdf/catalogo COCO vert-comprimido.pdf`.

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

- Modelo 25: Maldives (48 × 34 × 12 cm, 14,5 kg, Gs 930.000, sin tapa ni orificio). Fotos de color generadas a partir de las fotos reales (`contenido/fotos/maldives`).
- Precios al consumidor cargados: de Gs 815.000 a Gs 1.300.000 en 5 niveles. La tapa de desagüe sube el nivel.
- Dirección del showroom: Sucre 1862 c/ Ocampos Lanzoni.
- WhatsApp: 0992 901700.
- Se usan todas las imágenes de ambientes en el diseño.
- No hay entrega inmediata: la entrega de pedidos es a partir de 10 días.
- Pesos confirmados: Paris y Montevideo 18,9 kg, Amsterdam 13 kg, Curitiba 13,1 kg. Barcelona 46 × 27 × 12 cm.
- Por ahora no hay programa de muestras: /muestras está oculta (`samplesEnabled` en `data/site.ts`).
- Lisboa incluye tapa.
- Envíos por transportadora; el envío al interior lo paga el cliente.
- Pago por transferencia o efectivo al retirar; seña del 50% para comenzar la fabricación.
- Showroom solo con cita previa.
- Garantía: 1 año contra defectos de fabricación; se repone la bacha. COCO responde por daños de transporte (aviso dentro de 48 h).
- La sopapa no viene incluida. Los modelos con tapa de desagüe la incluyen.
- La web queda protegida en Vercel (solo con sesión de Vercel) hasta ajustar todo.

## Mejoras de la auditoría (aplicadas)

- Shop: tarjetas simples que llevan a la página del producto; filtros por forma y "con tapa".
- Producto: barra de compra fija en celular, peso, video (Chicago, Dubai, Dublin, New York, San Francisco), sugeridos por parecido.
- Carrito: nombre y ciudad del cliente, que van en el mensaje de WhatsApp.
- Botón flotante de WhatsApp: en la página de una bacha nombra el modelo.
- /profesionales con descarga del catálogo (`public/catalogo-coco-2026.pdf`).
- Analítica: Vercel Web Analytics + eventos `whatsapp_click`, `pedido_enviado`, `catalogo_descarga`. Hay que activarla en Vercel.
- Tildes en Asunción, Medellín y Galápagos. Títulos SEO con "de concreto". Se borró /sistema.

## Pendientes antes de publicar

1. Activar Web Analytics en el proyecto de Vercel.
2. Dominio propio y quitar la protección de Vercel.
3. Pasar el repo de GitHub a privado.
4. Datos legales: razón social, RUC, términos y privacidad.
5. Fotos reales de obras y testimonios (sección Proyectos).
6. Diámetro del desagüe de cada modelo.
7. Si se cambia el catálogo PDF, copiarlo también a `public/catalogo-coco-2026.pdf`.

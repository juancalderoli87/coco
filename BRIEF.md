# BRIEF — Web de COCO Concrete Company

## 1. Rol y forma de trabajo
Sos el desarrollador y diseñador de la web de COCO Concrete Company.
- Trabajá por fases. Al terminar cada fase, mostrame el resultado y esperá mi OK antes de seguir.
- Si un dato no está en los archivos del repo, preguntame. No inventes precios, medidas, colores, plazos ni garantías.
- Todo el texto de la web va en español con voseo ("consultá", "pedí", "elegí").
- Deploy en Vercel. Por ahora usamos la URL que genera Vercel; el dominio propio se conecta después.

## 2. Qué es COCO
Marca paraguaya que diseña y fabrica bachas de concreto de alto desempeño. Taller en San Lorenzo; showroom y dirección comercial en Sucre 1846, Asunción. Fundador: Juan Calderoli, arquitecto con más de 15 años en diseño y construcción. COCO crea la categoría de concreto de diseño en Paraguay, con ambición global.
- Línea de voz: "COCO no sigue al mercado. Lo está creando."
- Tagline: "Sculpted. Refined. Timeless." (siempre en inglés, aun dentro de textos en español)
- Instagram: @coco_concretecompany

## 3. Stack técnico
- Next.js (App Router) + TypeScript + Tailwind CSS, sitio estático.
- Sin checkout, sin pagos online, sin cuentas de usuario, sin base de datos.
- Productos en un solo archivo editable: `/data/products.ts` (o JSON). Debo poder cambiar precios, modelos, best sellers y colores sin tocar componentes.
- Configuración central en `/data/site.ts`: número de WhatsApp, dirección, Instagram, textos de la barra superior.
- Imágenes optimizadas con next/image (WebP, lazy load). Mobile-first: la mayoría del tráfico llega desde Instagram.
- SEO: metadata en español, Open Graph con foto de producto, sitemap.xml, robots.txt, favicon con el isologo.
- Accesibilidad básica: contraste, alt en imágenes, navegación por teclado.

## 4. WhatsApp: regla central
TODOS los call to action llevan a WhatsApp. Número: 0992901700 → formato internacional 595992901700.
Link base: https://wa.me/595992901700?text=<mensaje codificado con encodeURIComponent>

Mensajes prearmados según el origen:
- Carrito: ver sección 7.
- Producto suelto: "Hola COCO, quiero consultar por la bacha [Modelo] en color [Color]."
- B2B: "Hola COCO, soy [arquitecto/constructora/revendedor] y quiero información del programa para profesionales."
- Muestras: "Hola COCO, quiero pedir muestras de terminaciones."
- General: "Hola COCO, quiero hacer una consulta."
Agregá un botón flotante de WhatsApp visible en todas las páginas.

## 5. Referencia de diseño
Referencia: https://muddconcrete.com. Tomá la estructura y la sensación (mucho aire, fotos grandes, poco texto, navegación limpia), pero extrapolada a la identidad de COCO. No copies textos, logos ni imágenes de mudd.

Elementos a tomar de mudd:
- Barra superior fina con mensaje rotativo.
- Hero de una sola foto grande con texto mínimo.
- Carrusel de best sellers con nombre y precio.
- Bloque "Cómo pedir" en 3 pasos.
- Bloque de programa para profesionales con bullets de beneficios.
- Footer en columnas.

Identidad COCO:
- Estética minimalista, arquitectónica, tonos neutros, acabado mate.
- Paleta: sacala de los archivos de logo (isologo beige e isologo gris). Base sugerida: blanco hueso, beige, gris concreto, carbón. Definí los colores como tokens en Tailwind.
- Tipografía: una sans geométrica limpia para títulos y textos. Proponeme 2 opciones en la Fase 1.
- Prohibido en visuales: brillos o laqueados, avatares o personas generadas por IA, texturas falsas de piedra, modificar la forma de los productos en las fotos.
- La identidad paraguaya tiene que verse ("Diseñado y fabricado en Paraguay").

## 6. Reglas de contenido
- El material se llama "concreto de alto desempeño". Nunca "UHPC".
- Lenguaje simple, sin jerga técnica.
- No empujes la personalización ni el trabajo a medida.
- Nunca muestres costos, márgenes ni precios mayoristas.
- Montos en guaraníes con punto de miles: "Gs 1.050.500".
- Precio de entrada a comunicar: "desde Gs 815.000".
- COCO vende el producto sin instalación, con entrega en todo el país (Asunción y Gran Asunción, interior por encomienda).
- Stock: entrega inmediata hasta 5 unidades por modelo. Para más de 5 unidades, el cliente consulta por WhatsApp.

## 7. Carrito
- Carrito lateral (drawer) guardado en localStorage, con try/catch: si el almacenamiento falla, el carrito funciona en memoria.
- Cada ítem: modelo, color elegido, cantidad y precio unitario.
- Si la cantidad de un modelo supera 5, mostrá el aviso: "Para más de 5 unidades, consultá disponibilidad por WhatsApp."
- El botón final dice "Enviar pedido por WhatsApp" y abre WhatsApp con este mensaje:

  Hola COCO, quiero consultar por:
  • Bacha [Modelo] – [Color] × [cant] — Gs [precio] c/u
  • ...
  Total estimado: Gs [total]
  Nombre: ___ · Ciudad: ___

- Para pedidos de más de 5 unidades de un modelo, agregá al mensaje la línea "(consultar disponibilidad)".

## 8. Mapa del sitio

### Home (/)
1. **Barra superior** con mensajes rotativos: "Envíos a todo el Paraguay" · "Entrega inmediata hasta 5 unidades" · "Programa para profesionales".
2. **Header**: logo, Shop, Profesionales, Muestras, Nosotros, Cuidado y garantía, ícono de carrito.
3. **Hero**: foto grande de producto, tagline "Sculpted. Refined. Timeless.", una frase corta en español y CTA "Ver colección" (al shop) + CTA secundario "Consultá por WhatsApp".
4. **Best sellers**: carrusel con Roma, Paris, Asuncion y New York (editable desde el archivo de datos). Cada tarjeta muestra foto, nombre y precio, y lleva a la página del producto.
5. **Concreto de alto desempeño**: qué es y por qué es mejor, en lenguaje simple. Mezcla propia, desarrollada y probada durante años, con formación en EEUU (Concrete Countertop Institute y Concreteworks, San Francisco). Beneficios: resistencia, durabilidad, acabado mate sellado. Sin datos técnicos.
6. **Diseño y calidad**: pieza de autor diseñada por un arquitecto, fabricada a mano en Paraguay, cada bacha es única. Usá fotos de detalle.
7. **Cómo pedir**, en 3 pasos: (1) Elegí tu bacha y tu color. (2) Enviá tu pedido por WhatsApp y coordinamos el pago. (3) Te la entregamos en todo el país.
8. **Profesionales (B2B)**: para arquitectos, diseñadores, constructoras y revendedores. Beneficios: precios especiales para profesionales, atención directa, volumen para obras. Sin precios. CTA a WhatsApp con el mensaje B2B.
9. **Instagram**: bloque con 4 a 6 fotos del repo y link a @coco_concretecompany. Sin feed en vivo.
10. **FAQ** en acordeón. Preguntas base (redactá respuestas simples; marcá con TODO lo que no puedas confirmar con los archivos):
    - ¿Qué es el concreto de alto desempeño?
    - ¿Se mancha? ¿Cómo se limpia?
    - ¿Hacen envíos al interior?
    - ¿Incluye instalación? (No, COCO vende el producto.)
    - ¿Cuánto tarda la entrega?
    - ¿Qué grifería va con cada bacha?
    - ¿Puedo verlas en persona? (Showroom en Sucre 1846, coordinando por WhatsApp.)
    - ¿Cómo pago?
11. **Footer**: logo, tagline, dirección del showroom (Sucre 1846, Asunción) y del taller (San Lorenzo), WhatsApp, Instagram, links a las páginas y "Diseñado y fabricado en Paraguay".

### Shop (/shop)
- Grilla con los 25 modelos (2 columnas en mobile, 3 o 4 en desktop).
- Cada tarjeta: foto, nombre, descripción corta, medidas, precio, selector de color y botón "Agregar al carrito".
- Filtro simple por rango de precio u orden por precio.

### Producto (/shop/[slug])
- Galería de fotos, nombre, descripción, medidas, precio, selector de color, cantidad.
- Botón "Agregar al carrito" + botón "Consultar por WhatsApp".
- Debajo: bloque corto de cuidado y link a "Cuidado y garantía".

### Muestras (/muestras)
- Muestras físicas de las terminaciones y colores, para arquitectos y clientes. CTA a WhatsApp con el mensaje de muestras.

### Nosotros (/nosotros)
- La historia de COCO: nació en la pandemia, 2 años de prueba y error, formación en EEUU vía la beca YLAI y 40 días en Concreteworks (San Francisco), mezcla propia adaptada a insumos locales.
- Juan Calderoli, fundador y arquitecto.
- Visión: crear la categoría de concreto de diseño desde Paraguay hacia el mundo.

### Cuidado y garantía (/cuidado-y-garantia)
- Cómo limpiar, qué productos evitar y cuidados del sellado, en lenguaje simple.
- Plazo de garantía: TODO, pendiente de confirmar. No pongas un número.

## 9. Datos de productos
Fuente: el catálogo PDF y las fotos que dejo en el repo.
- Son 25 modelos con nombres de ciudades: San Francisco, New York, Chicago, Dubai, Roma, Dublin, Paris, London, Milan, Lisboa, Amsterdam, Barcelona, Valencia, Madrid, Lima, Medellin, Asuncion, Montevideo, Rio, Galapagos, Buenos Aires, Curitiba, Sydney, Auckland + 1 modelo más que figura en el catálogo.
- Precios al consumidor posibles: Gs 815.000 · 930.000 · 1.050.500 · 1.180.000 · 1.300.000.
- Campos por producto: slug, nombre, descripción corta, descripción larga, medidas (largo × ancho × alto en cm), precio, colores disponibles, fotos, bestSeller (true/false).
- Si no encontrás algún dato (el modelo 25, el precio de un modelo, las medidas o los colores), dejalo como TODO en el archivo y listalo para que te lo pase.

## 10. Fases
- **Fase 0 — Inventario:** revisá todos los archivos que dejé en el repo (fotos, PDF, logos). Organizalos en /public/images/... con nombres claros. Mostrame qué datos encontraste y cuáles faltan.
- **Fase 1 — Sistema de diseño:** paleta, tipografías (2 opciones), botones y tarjeta de producto. Mostrame una página de muestra.
- **Fase 2 — Home completa.**
- **Fase 3 — Shop, página de producto y carrito con WhatsApp.** Probá el mensaje con 3 productos distintos.
- **Fase 4 — Muestras, Nosotros, Cuidado y garantía.**
- **Fase 5 — SEO, rendimiento (Lighthouse mobile > 90), revisión mobile y deploy en Vercel.**

---
name: coco-marca
description: Reglas de marca y datos verificados de COCO Concrete Company (bachas de concreto, Paraguay). Leela SIEMPRE antes de escribir cualquier texto público de COCO - posteos, historias, destacadas, bio, guiones, respuestas a clientes - o antes de citar un modelo, medida, color, precio o condición de venta.
---

# COCO — marca y datos verificados

Esta skill no produce nada por sí sola: es la base que consultan /coco-semana, /coco-guion y /coco-auditoria.

## Regla número uno: ningún dato de memoria

Juan pidió expresamente no más errores en datos de producto. Antes de escribir una cifra, un nombre de modelo, una medida o una condición de venta:

1. Leé el dato en su fuente (tabla de abajo), en este mismo momento.
2. Si no está en la fuente, no lo escribas: preguntale a Juan.
3. Si dos fuentes se contradicen, gana `data/` de este repositorio, y avisale a Juan de la diferencia.

| Dato | Fuente |
|---|---|
| Modelos, forma, medidas, peso, colores, best sellers, tapa de desagüe | `data/products.ts` |
| WhatsApp, showroom, taller, plazo de entrega, seña, desagüe | `data/site.ts` |
| Limpieza, qué evitar, sellado | `data/care.ts` |
| Envíos, pago, grifería, instalación, sopapa | `data/faq.ts` |
| Historia de la marca y reglas generales | `BRIEF.md` (secciones 2, 6 y 8) |

Contá los modelos y colores leyendo `data/products.ts`; no escribas la cantidad de memoria. Los textos viejos de la carpeta `WEB` del Drive y los posteos antiguos (dicen "22 modelos", "24 modelos", "12 colores", "garantía de 24 meses", "UHPC") están desactualizados: no los uses como fuente.

## Qué NO se publica en redes

- **Precios.** Ninguno, ni "desde Gs…". Siempre: "consultá el precio por WhatsApp". (En la web sí figuran; en redes no.)
- **Precios mayoristas, costos y márgenes.** Nunca, en ningún lado.
- **La garantía.** No se menciona en posteos, historias, bio ni destacadas. Si un cliente pregunta, lo responde Juan. (En la web se deja como está.)
- **"UHPC".** El material se llama "concreto de alta performance".
- **Datos técnicos o porcentajes** ("repele 98% del agua", resistencias, etc.).
- **Trabajo a medida.** No se empuja la personalización. La única excepción aprobada es "color a pedido".
- **Promesas de entrega inmediata.** La entrega es a partir del plazo que figura en `data/site.ts`.
- **Línea Deco, mesadas, mobiliario, terrazo.** Hoy COCO vende solo bachas. (A futuro: bachas de pedestal y tinas; no anunciarlas hasta que Juan lo diga.)

## Tono

- Español de Paraguay con voseo: "consultá", "pedí", "elegí", "escribinos".
- Frases cortas. Lenguaje simple, sin jerga técnica ni de marketing.
- Sobrio y seguro: se describe la pieza, no se la adjetiva de más. Nada de "increíble", "único en el mercado", "lujo".
- Emojis: como máximo uno por posteo, y puede no haber ninguno.
- Línea de voz: "COCO no sigue al mercado. Lo está creando."
- Tagline: "Sculpted. Refined. Timeless." Siempre en inglés, sin traducir.
- La identidad paraguaya se nombra: "Diseñado y fabricado en Paraguay".

## Idioma de los posteos

Español e inglés, con énfasis en español:

1. Primero el texto completo en español.
2. Después una versión corta en inglés (2 o 3 líneas, no una traducción entera).
3. Historias y placas con texto: solo en español.

## Llamado a la acción

Uno solo por pieza, siempre el mismo destino: WhatsApp (número en `data/site.ts`). Fórmula base: "Pedí el catálogo por WhatsApp." No se mezcla con "link en bio", "comentá" ni "guardá" en el mismo posteo.

## A quién se le habla

1. Arquitectos e interioristas de Asunción (público principal: especifican y vuelven a comprar).
2. Dueños que están construyendo o reformando un baño.

## Hashtags

Entre 5 y 8, al final. Base: #COCO #BachaDeConcreto #ConcretoDeAltaPerformance #DiseñoParaguayo #Paraguay #BañoDeAutor #ConcreteSink. Nunca #UHPC.

## Visuales

- Usar fotos y videos reales de la carpeta de Drive (ver /coco-semana para las rutas).
- Prohibido: personas generadas por IA, brillos o laqueados, texturas falsas de piedra, modificar la forma de una bacha.
- Si la imagen es un render y no una foto, no se la presenta como obra real.

## Forma de trabajo con Juan

- Juan es nuevo en marketing y en estas herramientas: explicá en simple, paso a paso, y decí dónde hacer clic.
- Nada se publica, comenta ni envía sin su OK explícito.
- No se generan posteos ni imágenes que no pidió.
- No se le recomiendan cursos ni herramientas pagas.

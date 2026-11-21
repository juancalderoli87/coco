---
name: coco-semana
description: Arma los 6 posteos de Instagram de COCO de lunes a sábado para que Juan los apruebe. Usala cuando Juan escriba /coco-semana o pida "los posteos de la semana", "el contenido de la semana" o "qué publico esta semana".
---

# /coco-semana — los 6 posteos de la semana

Prepara la semana completa. Juan solo lee, corrige y aprueba. Esta skill nunca publica.

## Antes de escribir

1. Leé la skill `coco-marca` completa y las fuentes de datos que indica.
2. Definí la semana: si Juan no dice cuál, es la próxima que empieza en lunes. Escribí las fechas exactas.
3. Mirá qué ya se publicó, para no repetir modelo ni tema:
   - carpeta `marketing/PUBLISHED` del Drive (ruta abajo),
   - la última entrega de /coco-semana,
   - el último informe de /coco-auditoria, si existe: lo que funcionó se repite, lo que no se cambia.
4. Revisá qué material real hay. Si para un día no hay foto o video que sirva, no lo inventes: marcá ese día como "FALTA MATERIAL" y decí exactamente qué hay que filmar o fotografiar (y sugerí correr /coco-guion).

## Calendario fijo (estrategia aprobada el 11/11/2026)

| Día | Tipo de contenido | Formato |
|---|---|---|
| Lunes | Proceso en taller: vaciado, desmolde, lijado | Reel |
| Martes | Modelo de la semana: medidas, colores, para qué espacio | Carrusel |
| Miércoles | Bacha instalada en un baño real, con crédito al fotógrafo | Foto o carrusel |
| Jueves | Guía para decidir: colores, cuidado, grifería, cómo elegir | Carrusel |
| Viernes | Detalle de producto o de color | Reel |
| Sábado | Clientes y obras, o detrás de escena | Reel o foto + historia con caja de preguntas |

Objetivo que ordena todo: pasar de 5 o 6 consultas por mes a 15. El problema de COCO es el alcance, no el cierre: priorizá lo que llega a gente que todavía no sigue la cuenta (reels de proceso y de producto).

El modelo de la semana rota por los modelos de `data/products.ts` sin repetir hasta completar la vuelta; empezá por los best sellers.

## Dónde está el material

Carpeta de Drive `CONTENIDO COCO` (en esta computadora: `G:\.shortcut-targets-by-id\1WX3FBl3HkIrmS5K8zDZ3VwTxlKlQ-Poh\CONTENIDO COCO`):

- `CATALOGO COCO\CATÁLOGO\<n>_BACHA <CIUDAD>\` — fotos y video de cada modelo.
- `CATALOGO COCO\CATÁLOGO\COLORES CON SKU\` — cada modelo en cada color.
- `CATALOGO COCO\CATÁLOGO\BACHAS PRINCIPAL\` — fotos principales.
- `fotos\imagenes de obras\` — fotos REALES de bachas instaladas (profesionales con crédito "© Renato Duria" y fotos de clientes por WhatsApp). Es el material para miércoles y sábado. Se acredita al fotógrafo (Renato Duria es @renatoduria). El arquitecto no se nombra ni se etiqueta salvo que Juan lo pida.
- `CATALOGO COCO\CATÁLOGO\marketing\` — posteos por fecha; `PUBLISHED\` son los ya publicados. Los archivos de la semana se guardan como `SEMANA_<n>_<Tipo>_<Tema>.txt`. Los archivos `MODELO_*` y `APOYO_*` son de un plan anterior (3 posteos por semana): no se pisan ni se usan como fuente de datos.
- `Logos\`, `Plantillas\`, `Tipografía\`, `Manual de Marca - COCO.pdf` — identidad.

Muchas imágenes de esas carpetas son renders o están generadas con IA (nombres que empiezan con `freepik_` o `magnific_`). Sirven para martes, jueves y viernes. No sirven para miércoles ni sábado: ahí va solo obra real.

## Qué entregar por cada día

- **Fecha y tipo** (ej.: "Lunes 16/11 — Proceso en taller — Reel").
- **Material:** ruta exacta del archivo o archivos a usar. Para carruseles, el orden de las placas y el texto de cada una.
- **Texto del posteo:** español completo + versión corta en inglés, un solo llamado a la acción, hashtags. Sin precios.
- **Historia del día:** qué subir y con qué sticker (encuesta, pregunta o enlace a WhatsApp).
- **Mejor hora:** la que indique el último informe de /coco-auditoria; si no hay, decí que todavía no hay dato.

## Cómo entregarlo

1. Guardá cada día en `marketing\<AAAA-MM-DD>_<Dia>\<TIPO>_<Tema>.txt`, con el mismo formato de los archivos que ya hay ahí (FORMATO / CAPTION / STORY / MATERIAL NECESARIO).
2. Mostrale a Juan en el chat un resumen en tabla (día, tipo, material, primera línea del texto) y los 6 textos completos.
   **Siempre** mostrale la semana como una página interactiva publicada como Artifact (pedido de Juan, 21/11/2026), igual a "Semana COCO 23–28 nov" (https://claude.ai/artifact/4tDHGkY1zL3i6QSPW9zdN3): un celular por día con el posteo como se ve en Instagram, los carruseles se pasan con flechas o deslizando, los reels se reproducen con play, el texto completo debajo, la historia del día y el estado (listo, falta tu OK, falta filmar). Cada semana nueva es una página nueva con el mismo diseño: partí de la página de la semana anterior (leela con la acción read del Artifact) y cambiá contenido y archivos. Los días sin material muestran una placa "falta filmar" con el guion. No le muestres imágenes sueltas. `vista_previa.py` (PNG fijo) queda solo para cuando no se pueda publicar la página.
3. Listá aparte: datos a confirmar y material que falta. Antes de preguntarle algo a Juan, verificalo vos: si un posteo ya se publicó o cuál es la cuenta de alguien se mira en Instagram (Claude in Chrome); qué muestra un video se mira sacándole cuadros. Preguntale solo lo que únicamente él sabe (nombres, permisos, decisiones), y si la pregunta es sobre una imagen, mostrásela.
4. Esperá su aprobación. Corregí lo que pida.

## Comprobación final, antes de mostrar nada

- [ ] Cada cifra y cada nombre de modelo fue leído hoy en `data/`.
- [ ] Ningún precio, ninguna mención a garantía, ningún "UHPC".
- [ ] Un solo llamado a la acción por posteo, a WhatsApp.
- [ ] Miércoles y sábado usan solo material real.
- [ ] Todo reel termina con la placa del logo (`contenido/logos/cierre-video-1080x1920.png`). Para agregarla con ffmpeg a un video de 1080x1920 (ajustá `offset` = duración del video − 0,5):
  `ffmpeg -i reel.mp4 -loop 1 -t 2.5 -framerate 30 -i cierre-video-1080x1920.png -filter_complex "[1:v]format=yuv420p,setsar=1,fps=30,settb=AVTB[c];[0:v]format=yuv420p,setsar=1,fps=30,settb=AVTB[v];[v][c]xfade=transition=fade:duration=0.5:offset=DURACION_MENOS_0.5[vo];[0:a]apad,atrim=0:DURACION_MAS_2,afade=t=out:st=DURACION_MENOS_0.4:d=2.4[ao]" -map "[vo]" -map "[ao]" -c:v libx264 -crf 20 -c:a aac -movflags +faststart reel-con-logo.mp4`
- [ ] No se repite un modelo ni un tema de las últimas 4 semanas.

## Después de la aprobación

Juan publica desde el celular o deja programado en el Planificador de Meta Business Suite. Cuando un día queda publicado, su carpeta se mueve a `marketing\PUBLISHED\`. Esta skill no publica ni programa nada por su cuenta.

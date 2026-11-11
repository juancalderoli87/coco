# Brief de marketing COCO: traspaso a una sesión local con Chrome

Este documento resume lo conversado en una sesión anterior en la nube, que no tenía acceso a Instagram. Sirve para continuar desde la computadora de Juan con la extensión Claude in Chrome.

## El negocio

- **COCO Concrete Company**: bachas de concreto diseñadas y fabricadas en Paraguay. Fundador: Juan Calderoli, arquitecto.
- **Catálogo**: 24 modelos, cada uno con nombre de ciudad (Asunción, Barcelona, Dubai, Curitiba, etc.), en 11 colores más colores a pedido. Está en `contenido/pdf/`.
- **Instagram**: `@coco_concretecompany`.
- **Sitio web**: existe, pero el link todavía no fue informado. Pedírselo a Juan.
- **Números actuales**: 5 o 6 consultas por mes, 2 o 3 ventas, ticket promedio Gs. 850.000. No hay producto estrella.

## El diagnóstico

El cierre es bueno (cerca de la mitad de las consultas compra). El problema es que entran muy pocas consultas.

## Lo que Juan pidió

1. Publicar de lunes a sábado sin tener que armar cada posteo: quiere un sistema que prepare los posteos y él solo apruebe.
2. Una estrategia y skills que se encarguen de eso, antes de producir contenido.
3. Que se revise primero su Instagram: qué se publicó, qué funcionó y qué falta.
4. Que se revisen sus guardados de Instagram (cursos y skills de marketing con Claude) y se le diga cuáles valen la pena. No quiere mandar capturas.
5. No quiere pagar herramientas extra como Metricool.

## Orden de trabajo

1. **Auditoría con Claude in Chrome**: perfil, bio, destacadas, grilla, y estadísticas de los últimos 30 días (alcance, visitas al perfil, seguidores vs. no seguidores, mejores posteos).
2. **Guardados**: recorrerlos y decir cuáles sirven para COCO y cuáles son solo venta de cursos.
3. **Estrategia en una página**: a quién se le habla, 4 o 5 tipos de contenido fijos, calendario de lunes a sábado. Esperar la aprobación de Juan.
4. **Skills propias de COCO** en `.claude/skills/` de este repositorio:
   - `coco-marca`: tono, datos verificados de cada bacha, colores, frases que no se usan.
   - `/coco-auditoria`: lectura mensual de estadísticas.
   - `/coco-semana`: arma los 6 posteos de la semana para aprobar.
   - `/coco-guion`: lista de tomas para filmar en el taller.
5. **Probar la carga de posteos** en el Planificador de Meta Business Suite (gratis) desde Chrome.

## Reglas

- No generar posteos ni imágenes antes de que Juan apruebe la estrategia. Ya pasó una vez y no le gustó.
- No publicar, comentar ni enviar mensajes sin su OK explícito.
- Nunca pedir la contraseña de Instagram. Se usa la sesión que ya está abierta en su Chrome.
- Navegar a ritmo humano para no disparar alertas de actividad automatizada.
- Responder en español, breve y concreto. No recomendar comprar cursos.

## Lo ya evaluado

- **Skill `Jakeschincariol/instagram-agent-skill`** (vista en un post de Instagram): es gratis, de licencia libre y segura (los scripts corren en local, sin red ni contraseñas). Está en inglés y pensada para creadores que hablan a cámara, así que no se instala tal cual; sirve como referencia de estructura para las skills propias.
- **Metricool**: descartado por Juan.

## Material disponible en el repositorio

- `contenido/fotos/`: 9 fotos de producto (códigos AKL, AMS, ASU, BCN, BUE, CHI, CWB, DUB, DXB).
- `contenido/pdf/`: catálogo de 28 páginas.
- `contenido/logos/`: logos e isologos en varios colores.
- `contenido/posteos/semana-01/` (solo en la rama `claude/sleepy-thompson-77j41j`): borrador de 6 posteos que Juan no había pedido. Queda pendiente que decida si se conserva o se borra.

## Detalles a corregir en el catálogo

- Las fichas dicen "Lenght" y "Witdh"; lo correcto es "Length" y "Width".
- La Bacha Barcelona figura con 16,5 cm de ancho; confirmar si es un error.

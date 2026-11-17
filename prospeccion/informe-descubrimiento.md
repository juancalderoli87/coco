# Informe de descubrimiento (nov 2026)

4 agentes buscaron empresas nuevas en Gran Asunción. Los agentes reportaron 103 fichas (12 + 37 + 33 + 20, según sus informes); quedaron **98 únicas** tras quitar duplicados contra `exclusion.txt`, contra los IDs ya cargados (`ids.json`) y entre agentes. Ninguno llegó a la meta de 50: el espacio ya estaba cubierto por la lista de exclusión (297 nombres). Datos consolidados en `datos/descubrimiento/consolidado.json`.

## Totales por segmento y fit

| Segmento | A | B | C | Total |
|---|---|---|---|---|
| Arquitectura | 0 | 10 | 2 | 12 |
| Interiorismo (incl. cocinas, baños, showrooms) | 9 | 18 | 9 | 36 |
| Constructora | 0 | 14 | 17 | 31 |
| Desarrolladora | 4 | 11 | 4 | 19 |
| **Total** | **13** | **53** | **32** | **98** |

Calidad de los datos: solo 6 empresas tienen actividad "si" confirmada; el resto es "dudosa". La mayoría no tiene contacto publicado (los agentes abrieron muy pocas webs para ahorrar). Verificar antes de contactar.

## Las A más prometedoras

Solo hay 13 con fit A (no llegan a 20).

1. **Cresia** (desarrolladora, Asunción): actividad confirmada (palada de Link Center, oct-2026), boutiques premiadas; tiene web, teléfono y email.
2. **Paraguay Development** (desarrolladora): torres de alta gama (The Tower, 132 deptos de lujo); web, teléfono y WhatsApp.
3. **Distrito Perseverancia** (desarrolladora): master plan de Sordo Madaleno y torre Bulnesia de 22 niveles; sin contacto publicado.
4. **Brique Real Estate** (desarrolladora): torre Eje Residence de 100 m; sin contacto, actividad por confirmar.
5. **Lorena Macías Arquitectura e Interiorismo** (Asunción): vivienda en barrios cerrados, diseño atemporal; web, teléfono, email y WhatsApp.
6. **Íntima Studio** (interiorismo): estudio boutique con taller propio y estética de gama alta; email y WhatsApp.
7. **Casa Fika** (interiorismo): interiorismo de autor con materiales locales; sin contacto.
8. **CasaPro (ex Pasamar)**: showroom de bachas, sanitarios y griferías de importación; canal natural para bachas UHPC.
9. **JV Butique Asunción**: boutique de griferías y lozas sanitarias (marca Deca); WhatsApp publicado.
10. **Orans (Grupo Mega Star)**: muebles de baño y sanitarios de diseño italiano; teléfono publicado.
11. **Carrara SRL**: mármol, granito y cuarzo Quarella; terminaciones de lujo, posible aliado.
12. **Santa Teresa Mármoles & Granitos**: mesadas de baño y cocina para constructoras y viviendas.
13. **Marmopar** (San Lorenzo): marmolería y cocinas; competidor o aliado directo en mesadas.

## Planilla

La planilla "COCO · Prospección Paraguay" quedó así:

- **Prospectos:** IDs 039–108 de la ronda 2 cargados con `consolidar_r2.py` (las 001–038 ya estaban). Los textos largos van recortados con "…"; el detalle completo está en `datos/ronda2/`. También se repararon los teléfonos y WhatsApp de las filas 001–038 que mostraban #ERROR!.
- **Seguimiento:** 70 filas nuevas con Estado "Por contactar". Las columnas E a J no se tocaron.
- **Descubrimiento:** pestaña nueva con las 98 empresas ordenadas por fit (A, B, C), encabezado y 4 primeras columnas fijas, filtro y lista desplegable de Estado.

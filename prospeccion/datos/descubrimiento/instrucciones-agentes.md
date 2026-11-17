# Instrucciones comunes — Descubrimiento masivo COCO (nov 2026)

COCO Concrete Company (Paraguay) fabrica bachas, mesadas y mobiliario en concreto UHPC: piezas finas, minimalistas, gama media-alta/alta.
Buscamos VOLUMEN de empresas nuevas que especifican o compran terminaciones de baño/cocina.

## Reglas
1. Solo datos comerciales publicados por la empresa. Nunca inventar ni deducir email, teléfono, WhatsApp o nombre. Si no está publicado → null.
2. Verificar que la empresa exista abriendo su web, Instagram o Facebook con WebFetch (o una nota de prensa/directorio reciente). Si no se puede abrir nada propio, igual puede ir, pero con "activa":"dudosa".
3. "activa":"si" solo si hay post, obra o nota de los últimos 12 meses (desde nov 2025) con URL y fecha en evidencia_actividad. Si no, "dudosa".
4. NO incluir empresas de la lista de exclusión (prospeccion/datos/descubrimiento/exclusion.txt — leela entera; compará por nombre comercial, ignorando S.A./S.R.L./tildes/paréntesis). No repetir dentro de tu propio archivo.
5. Solo Paraguay. Solo los 4 segmentos: "arquitectura", "interiorismo" (incluye amoblamientos cocina/baño, carpintería de diseño, showrooms de terminaciones), "constructora", "desarrolladora".
6. No perder tiempo en perfiles profundos: ficha liviana, pero todo verificable. Meta: 40+ empresas nuevas (más es mejor).
7. Fuentes útiles: Google/búsqueda web, Instagram (instagram.com/<usuario>/), Facebook, ArchDaily/Plataforma Arquitectura, InfoCasas, Clasipar, CAPACO, DNCP (contrataciones.gov.py), prensa (ABC, La Nación, Última Hora, 5días, MarketData), Páginas Amarillas/guías locales, Google Maps, directorios de expos (Expo Construcción, Casa FOA/Casacor Paraguay, Expo Mariano), listados de premios/bienales.
8. Guardá avances en el archivo cada ~10 empresas (sobrescribiendo con el JSON completo y válido) para no perder trabajo.

## Ficha por empresa
{"nombre":"", "segmento":"arquitectura|interiorismo|constructora|desarrolladora", "ciudad":"", "region":"Gran Asunción|Cordillera y Central|Itapúa|Alto Paraná|Resto del país",
 "que_hacen":"1 frase", "web":null, "instagram":null, "facebook":null, "telefono":null, "email":null, "whatsapp":null,
 "contacto_fuente":"URL donde se vio el contacto (preferentemente de la propia empresa) o null",
 "activa":"si|dudosa", "evidencia_actividad":"URL + fecha (AAAA-MM o AAAA-MM-DD)",
 "fit_estimado":"A|B|C", "motivo_fit":"1 frase", "fuente":"URL principal"}

fit_estimado: A = estética contemporánea/minimalista + gama media-alta/alta (o volumen grande de baños/cocinas premium); B = encaja parcialmente (gama media, estilo mixto, o volumen sin estética clara); C = poco encaje.

## Salida
Archivo prospeccion/datos/descubrimiento/<nn>-<tema>.json con la forma:
{"agente":"<nn>-<tema>", "empresas":[ ... ]}
JSON válido (verificalo con `python3 -m json.tool archivo > /dev/null`). No hagas git commit/push. No toques otros archivos.
Al terminar respondé solo: cantidad de empresas, cuántas A/B/C, cuántas activas "si", y las 3 fuentes que más rindieron.

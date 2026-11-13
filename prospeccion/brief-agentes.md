# Brief común — Agentes de prospección COCO

## Contexto
COCO Concrete Company (Paraguay) fabrica bachas, mesadas y mobiliario en concreto UHPC
(ultra alto desempeño): piezas finas, livianas, estética minimalista, alta gama.
Objetivo: construir una base de empresas que especifican o compran terminaciones
de baño/cocina, para luego diseñar la estrategia comercial.

## Zona — fase piloto
Gran Asunción: Asunción, Luque, San Lorenzo, Lambaré, Fernando de la Mora,
Mariano Roque Alonso, Capiatá, Ñemby, Villa Elisa, San Antonio, Limpio.
(Fase siguiente: todo Paraguay.)

## Fuentes sugeridas
Google / Google Maps, web propia, Instagram (vitrina principal en PY), Facebook,
LinkedIn, CAPACO, Asociación Paraguaya de Arquitectos, DNCP (contrataciones públicas),
InfoCasas y portales inmobiliarios, prensa (ABC Color, La Nación, Última Hora, 5días),
ArchDaily / Plataforma Arquitectura (proyectos paraguayos), revistas de diseño.

## Reglas
1. Solo datos comerciales publicados por la empresa. Nada de datos personales privados.
2. NUNCA inventar ni deducir un email, teléfono o nombre. Si no está publicado → null.
3. Cada dato relevante con su URL de fuente.
4. Lo que no pudiste confirmar (p.ej. Instagram bloqueado) → anotarlo en `pendiente_verificar`.
5. Empresas activas (actividad visible en los últimos ~18 meses).
6. Priorizar las que encajan con COCO: residencial premium, interiores cuidados,
   estética minimalista/contemporánea, uso de concreto visto/microcemento, obras de alta gama.
   Igual incluir empresas grandes aunque el estilo no sea minimalista (volumen de obra).

## Formato de salida (JSON, array de objetos)
{
  "nombre": "",
  "segmento": "estudio_arquitectura | constructora | desarrolladora | interiorismo",
  "ciudad": "",
  "direccion": null,
  "anio_fundacion": null,
  "que_hacen": "2-3 frases concretas",
  "tipo_proyectos": ["residencial", "edificios en altura", "comercial", "corporativo", "hotelero", "público", "..."],
  "estilo": "",
  "proyectos_destacados": [{"nombre": "", "anio": null, "link": ""}],
  "usa_concreto_visto": {"valor": "si | no | desconocido", "evidencia": ""},
  "tamano_aprox": "",
  "decisores": [{"nombre": "", "cargo": "", "fuente": ""}],
  "web": null, "instagram": null, "seguidores_ig": null,
  "facebook": null, "linkedin": null,
  "email": null, "telefono": null, "whatsapp": null,
  "fuentes": [""],
  "fecha_verificacion": "AAAA-MM-DD",
  "confianza": "alta | media | baja",
  "angulo_venta_coco": "por qué y cómo les serviría COCO, 1-2 frases",
  "fit_preliminar": {"nivel": "A | B | C", "motivo": ""},
  "pendiente_verificar": ""
}
Además: un array aparte `candidatos_extra` con [{"nombre","link","ciudad"}] de empresas
encontradas pero no perfiladas (para la fase de escala).

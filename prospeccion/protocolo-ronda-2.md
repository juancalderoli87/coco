# Protocolo de investigación profunda — Ronda 2

Complementa `brief-agentes.md`. Objetivo: fichas de nivel profesional, con contactos
verificados en fuente primaria, listas para que COCO salga a vender.

## Principio
Calidad sobre velocidad. Cada agente Sonnet estudia **máximo 5 empresas** y se toma el
tiempo necesario. Una ficha incompleta pero honesta vale más que una completa e inventada.

## Recorrido obligatorio por empresa (en este orden)
1. **Web propia**: home, "nosotros", proyectos/portfolio, contacto, footer. Anotar todo
   teléfono, email, WhatsApp (links wa.me), dirección y redes que aparezcan.
2. **Instagram**: bio, link de la bio, seguidores, fecha del último post, temas de los
   últimos 12 posts (¿baños?, ¿cocinas?, ¿hormigón visto?, ¿obras en curso?).
3. **Facebook y LinkedIn** de la empresa; LinkedIn de socios/fundadores (solo cargo y
   trayectoria pública).
4. **Google Maps / Business**: dirección, teléfono, horario, cantidad y nota de reseñas.
5. **Prensa** (mínimo 2 búsquedas): ABC Color, La Nación, Última Hora, 5días,
   Infonegocios, MarketData. Buscar proyectos nuevos, inversiones, premios.
6. **Portales de arquitectura**: ArchDaily, Plataforma Arquitectura, Archello, Divisare.
7. **Solo constructoras**: DNCP (contrataciones.gov.py) para ver obras públicas y escala.
8. **Solo desarrolladoras**: InfoCasas / portales; listar proyectos EN VENTA o EN OBRA.

Si una fuente no carga, probar una alternativa (otra URL, búsqueda con `site:`) antes de
rendirse, y anotarlo en `notas_investigacion`.

## Verificación de contactos
- Un contacto es **verificado** solo si aparece en una fuente de la propia empresa
  (web, Instagram, Facebook o ficha de Google Maps de la empresa).
- Si solo aparece en prensa o directorios de terceros → `no_verificado`.
- Nunca deducir emails (ej. info@dominio) aunque sea probable.
- Datos personales privados (celular personal de un empleado, domicilio) → no se registran.

## Campos nuevos (además del formato del brief)
```
"actividad_reciente": {"fecha": "AAAA-MM", "evidencia": "último post / obra / nota", "url": ""},
"proyectos_en_curso": [{"nombre": "", "tipo": "", "etapa": "en venta | en obra | anunciado", "unidades": null, "link": ""}],
"banos_cocinas_protagonistas": {"valor": "si | no | desconocido", "evidencia": ""},
"materiales_y_proveedores_visibles": "marcas de griferías, bachas, mesadas que se ven o mencionan",
"resenas_google": {"cantidad": null, "nota": null},
"contactos_verificados": {"telefono": true, "email": false, "whatsapp": false, "instagram": true},
"puntaje": {"estetica": 0, "volumen": 0, "gama": 0, "accesibilidad": 0, "oportunidad_inmediata": 0, "total": 0},
"notas_investigacion": "qué fuentes se leyeron, qué falló, dudas"
```

## Puntaje (0–100)
| Criterio | Máx | Qué mide |
|---|---|---|
| estetica | 30 | Afinidad con COCO: minimalismo, hormigón visto, materiales nobles |
| volumen | 25 | Obras/año, unidades en desarrollo, tamaño del equipo |
| gama | 20 | Público premium / medio-alto |
| accesibilidad | 15 | Contactos verificados y decisor identificado |
| oportunidad_inmediata | 10 | Proyectos en obra o por arrancar donde entran bachas/mesadas |

Fit: **A ≥ 70**, **B 45–69**, **C < 45**. Justificar cada número en una línea.

## Control de calidad (orquestador Opus)
- Revisar cada lote: JSON válido, links que abren, coherencia entre puntaje y evidencia.
- Re-verificar personalmente al menos 1 contacto por lote (20%).
- Lote con datos dudosos → devolver al agente con observaciones concretas.

## Orden de trabajo
1. **Ronda 2a**: re-perfilar a fondo las 38 empresas del piloto (`datos/piloto/`).
2. **Ronda 2b**: perfilar las candidatas extra del piloto (descartar inactivas).
3. **Ronda 3 — País**: descubrimiento + perfilado por región:
   - Central restante y Cordillera (San Bernardino, Areguá: casas de fin de semana premium)
   - Itapúa (Encarnación)
   - Alto Paraná (Ciudad del Este, Hernandarias, Presidente Franco)
   - Amambay (Pedro Juan Caballero)
   - Caaguazú y Guairá (Coronel Oviedo, Villarrica)
   - Chaco Central (Filadelfia, Loma Plata, Neuland)
   - Resto del país (Concepción, Misiones, Ñeembucú, San Pedro…)

## Salida
- JSON por lote en `datos/ronda2/` y `datos/pais/<region>/`.
- Actualizar la planilla Google Sheets **COCO · Prospección Paraguay**
  (id `1EKKLsVdLjF1WbbL59IqmQrCKX3ckMaGike0effJjAU4`) en el mismo archivo, sin crear otro,
  y sin pisar lo que el usuario haya escrito en la pestaña Seguimiento.
- Commit y push al terminar cada lote.

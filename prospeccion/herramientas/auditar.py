"""Chequeo rápido de un lote: suma del puntaje, topes, fit coherente, contactos."""
import json, sys
LIM = {'estetica': 30, 'volumen': 25, 'gama': 20, 'accesibilidad': 15, 'oportunidad_inmediata': 10}
for f in sys.argv[1:]:
    d = json.load(open(f))
    print('==', f, len(d['empresas']), 'empresas,', len(d.get('candidatos_extra', [])), 'extra')
    for e in d['empresas']:
        p = e['puntaje']; s = sum(p[k] for k in LIM)
        fit = 'A' if s >= 70 else 'B' if s >= 45 else 'C'
        warn = [k for k in LIM if p[k] > LIM[k]]
        if s != p.get('total'): warn.append(f'total {p.get("total")}!=suma {s}')
        if e['fit_preliminar']['nivel'] != fit: warn.append(f'fit {e["fit_preliminar"]["nivel"]}!={fit}')
        if not e.get('puntaje_justificacion'): warn.append('sin justificacion')
        print(f' {s:3d} {fit} | {e["nombre"][:45]:45} | {e.get("segmento")} | tel={e.get("telefono")} mail={e.get("email")} | {e["contactos_verificados"]} | {len(e.get("fuentes") or [])}f', warn or '')

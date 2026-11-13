"""Consolida las fichas de ronda 2/3 en filas para la planilla, con IDs estables.
Uso: python3 consolidar_r2.py <salida.json> <dir1> [<dir2> ...]
- IDs: herramientas/ids.json (ID -> nombre). Se buscan por nombre normalizado, alias ("id_planilla"
  en la ficha tiene prioridad). Las empresas nuevas reciben el siguiente ID y se agregan a ids.json.
- Región: campo "region" de la ficha; si falta, se toma del directorio (pais/<region>) o "Gran Asunción"."""
import json, glob, sys, re, os, unicodedata

out, dirs = sys.argv[1], sys.argv[2:]
HERE = os.path.dirname(os.path.abspath(__file__))
IDS_PATH = os.path.join(HERE, "ids.json")
ids = json.load(open(IDS_PATH))
SEG = {"estudio_arquitectura": "Estudio de arquitectura", "constructora": "Constructora",
       "desarrolladora": "Desarrolladora", "interiorismo": "Interiorismo"}
REG = {"central-cordillera": "Central y Cordillera", "itapua": "Itapúa", "alto-parana": "Alto Paraná",
       "amambay": "Amambay", "caaguazu-guaira": "Caaguazú y Guairá", "chaco": "Chaco Central",
       "resto": "Resto del país"}


def key(n):
    n = unicodedata.normalize("NFKD", str(n)).encode("ascii", "ignore").decode().lower()
    n = re.sub(r"\(.*?\)", "", n)
    n = re.sub(r"\b(s\.?a\.?|s\.?r\.?l\.?|e\.?a\.?s\.?|constructora|arquitectos?|arquitectura)\b", "", n)
    return re.sub(r"[^a-z0-9]", "", n.split("/")[0])


CANON = [("gran asunci", "Gran Asunción"), ("central", "Central y Cordillera"), ("cordillera", "Central y Cordillera"),
         ("itap", "Itapúa"), ("alto paran", "Alto Paraná"), ("amambay", "Amambay"), ("caaguaz", "Caaguazú y Guairá"),
         ("guair", "Caaguazú y Guairá"), ("chaco", "Chaco Central"), ("resto", "Resto del país")]


def region(r):
    r0 = unicodedata.normalize("NFKD", str(r)).encode("ascii", "ignore").decode().lower()
    for k, v in CANON:
        if r0.startswith(unicodedata.normalize("NFKD", k).encode("ascii", "ignore").decode()):
            return v
    return str(r).split("(")[0].strip()


def cut(s, n):
    s = " ".join(str(s or "").split())
    return s if len(s) <= n else s[:n - 1].rstrip() + "…"


def val(v):
    return "" if v in (None, "", [], {}) else str(v)


bykey = {key(n): i for i, n in ids.items()}
emp = {}
extra = []
descartadas = []
for d0 in dirs:
    reg_dir = REG.get(os.path.basename(d0.rstrip("/")))
    for f in sorted(glob.glob(f"{d0}/*.json")):
        d = json.load(open(f))
        for c in d.get("empresas", []):
            if c.get("descartada") or c.get("duplicada_de"):
                motivo = c.get("motivo_descarte") or (f'Duplicada de {c["duplicada_de"]}' if c.get("duplicada_de") else "")
                fu = [u for u in (c.get("fuentes") or []) if u]
                descartadas.append([cut(c["nombre"], 80), SEG.get(c.get("segmento"), c.get("segmento") or ""),
                                    cut(c.get("ciudad"), 40), cut(fu[0] if fu else "", 150), cut("Descartada: " + motivo, 200)])
                continue
            pid = c.get("id_planilla") or bykey.get(key(c["nombre"]))
            if not pid:
                pid = f"{max(int(i) for i in ids) + 1:03d}"
                ids[pid] = c["nombre"]
                bykey[key(c["nombre"])] = pid
                print("nuevo ID", pid, c["nombre"])
            c["_region"] = region(c.get("region") or reg_dir or "Gran Asunción")
            prev = emp.get(pid)
            if prev is None or (c.get("puntaje") or {}).get("total", 0) >= (prev.get("puntaje") or {}).get("total", 0):
                emp[pid] = c
        for x in d.get("candidatos_extra", []):
            extra.append([cut(x.get("nombre"), 80), SEG.get(x.get("segmento"), x.get("segmento") or ""),
                          cut(x.get("ciudad"), 40), cut(x.get("link"), 150), "Sin perfilar"])

json.dump(ids, open(IDS_PATH, "w"), ensure_ascii=False, indent=1)


def proyectos(c):
    p = c.get("proyectos_en_curso") or []
    return cut("; ".join(f'{x.get("nombre")} ({x.get("etapa") or "?"}{", " + str(x["unidades"]) + " u." if x.get("unidades") else ""})'
                         for x in p if x.get("nombre")), 170)


def contactos(c):
    v = c.get("contactos_verificados") or {}
    return ", ".join(k for k, ok in v.items() if ok is True) or "ninguno"


rows = []
for pid in sorted(emp):
    c = emp[pid]
    fit = c.get("fit_preliminar") or {}
    uc = c.get("usa_concreto_visto") or {}
    pt = c.get("puntaje") or {}
    ar = c.get("actividad_reciente") or {}
    dec = "; ".join(f'{x.get("nombre")} ({x.get("cargo")})' for x in (c.get("decisores") or []) if x.get("nombre"))
    fuentes = [u for u in (c.get("fuentes") or []) if u]
    segs = SEG.get(c.get("segmento"), c.get("segmento") or "")
    det = f'Est {pt.get("estetica", 0)} · Vol {pt.get("volumen", 0)} · Gama {pt.get("gama", 0)} · Acc {pt.get("accesibilidad", 0)} · Op {pt.get("oportunidad_inmediata", 0)}'
    rows.append([f"'{pid}", cut(c["nombre"], 80), segs, cut(c.get("ciudad"), 40),
                 val(fit.get("nivel")), cut(fit.get("motivo"), 140), cut(c.get("que_hacen"), 170),
                 cut(", ".join(c.get("tipo_proyectos") or []), 120), cut(c.get("estilo"), 80),
                 val(uc.get("valor")), cut(dec, 110),
                 cut(c.get("web"), 90), cut(c.get("instagram"), 60), cut(c.get("telefono"), 60),
                 cut(c.get("email"), 60), cut(c.get("whatsapp"), 60),
                 cut(c.get("angulo_venta_coco"), 170), val(c.get("confianza")),
                 cut(c.get("pendiente_verificar"), 130), cut(fuentes[0] if fuentes else "", 150),
                 val(c.get("fecha_verificacion")),
                 pt.get("total", ""), proyectos(c),
                 cut(f'{ar.get("fecha") or "?"}: {ar.get("evidencia") or ""}', 110) if ar else "",
                 contactos(c), c["_region"], det])

# Extra: candidatas sin perfilar (sin duplicar las ya perfiladas) + descartadas con motivo
perf = {key(c["nombre"]) for c in emp.values()} | {key(n) for n in ids.values()}
seen, ex2 = set(), []
for r in extra:
    k = key(r[0])
    if k in perf or k in seen or any(k and (k in p or p in k) for p in perf if len(p) > 4):
        continue
    seen.add(k)
    ex2.append(r)
extra = descartadas + ex2
json.dump({"rows": rows, "extra": extra}, open(out, "w"), ensure_ascii=False)
print(len(rows), "empresas,", len(extra), "extra")

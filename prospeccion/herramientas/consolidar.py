"""Une los JSON de un directorio de datos, quita duplicados y genera filas para la planilla.
Uso: python3 consolidar.py <dir_datos> <salida.json>"""
import json, glob, sys, re

src, out = sys.argv[1], sys.argv[2]
SEG = {"estudio_arquitectura": "Estudio de arquitectura", "constructora": "Constructora",
       "desarrolladora": "Desarrolladora", "interiorismo": "Interiorismo"}


def key(n):
    n = re.sub(r"\(.*?\)", "", n.lower())
    return re.sub(r"[^a-z0-9]", "", n.split("/")[0])


def cut(s, n):
    s = " ".join(str(s or "").split())
    return s if len(s) <= n else s[:n - 1].rstrip() + "…"


def val(v):
    return "" if v in (None, "", [], {}) else str(v)


emp, extra = {}, []
for f in sorted(glob.glob(f"{src}/*.json")):
    d = json.load(open(f))
    for c in d["empresas"]:
        k = key(c["nombre"])
        s = SEG.get(c.get("segmento") or d["segmento"], d["segmento"])
        if k in emp:
            if s not in emp[k]["_segs"]:
                emp[k]["_segs"].append(s)
            continue
        c["_segs"] = [s]
        emp[k] = c
    for x in d.get("candidatos_extra", []):
        extra.append([cut(x.get("nombre"), 80), SEG.get(d["segmento"]),
                      cut(x.get("ciudad"), 40), cut(x.get("link"), 150)])

order = {"A": 0, "B": 1, "C": 2}
lst = sorted(emp.values(), key=lambda c: (order.get((c.get("fit_preliminar") or {}).get("nivel"), 3),
                                          c["_segs"][0], c["nombre"]))
rows = []
for i, c in enumerate(lst, 1):
    fit = c.get("fit_preliminar") or {}
    uc = c.get("usa_concreto_visto") or {}
    dec = "; ".join(f'{x.get("nombre")} ({x.get("cargo")})' for x in (c.get("decisores") or []) if x.get("nombre"))
    fuentes = [u for u in (c.get("fuentes") or []) if u]
    rows.append([f"'{i:03d}", cut(c["nombre"], 80), " / ".join(c["_segs"]), cut(c.get("ciudad"), 40),
                 val(fit.get("nivel")), cut(fit.get("motivo"), 200), cut(c.get("que_hacen"), 260),
                 cut(", ".join(c.get("tipo_proyectos") or []), 120), cut(c.get("estilo"), 80),
                 val(uc.get("valor")), cut(dec, 150),
                 cut(c.get("web"), 90), cut(c.get("instagram"), 60), cut(c.get("telefono"), 90),
                 cut(c.get("email"), 60), cut(c.get("whatsapp"), 60),
                 cut(c.get("angulo_venta_coco"), 220), val(c.get("confianza")),
                 cut(c.get("pendiente_verificar"), 220), cut(fuentes[0] if fuentes else "", 150),
                 val(c.get("fecha_verificacion"))])

json.dump({"rows": rows, "extra": extra}, open(out, "w"), ensure_ascii=False)
print(len(rows), "empresas únicas,", len(extra), "extra")

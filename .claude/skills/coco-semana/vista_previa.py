#!/usr/bin/env python3
"""Vista previa de un posteo de COCO tal como se ve en el feed de Instagram.

Genera un PNG con el celular (primera imagen, texto cortado en "... más", puntos del
carrusel) y, al lado, el resto de las placas en el orden en que se deslizan.

Uso:
  python3 vista_previa.py posteo.json salida.png

posteo.json:
{
  "dia": "Miércoles 25 de noviembre",
  "tipo": "carrusel",              # carrusel | foto | reel
  "imagenes": ["Foto 1.jpg", "Foto 2.jpg"],
  "texto": "texto completo del posteo",
  "logo": "ruta/al/Isologo negro.png"   # opcional
}

Para un reel, "imagenes" lleva un solo cuadro del video (la portada).
Necesita Playwright (ya instalado en las sesiones en la nube).
"""
import base64
import html
import json
import mimetypes
import subprocess
import sys
from pathlib import Path

CORTE = 125  # caracteres que muestra el feed antes del "... más"
CUENTA = "coco_concretecompany"


def data_uri(ruta):
    mime = mimetypes.guess_type(str(ruta))[0] or "image/png"
    return f"data:{mime};base64," + base64.b64encode(Path(ruta).read_bytes()).decode()


def texto_cortado(texto):
    plano = " ".join(texto.split())
    if len(plano) <= CORTE:
        return html.escape(plano), False
    corte = plano[:CORTE].rsplit(" ", 1)[0]
    return html.escape(corte), True


ICONOS = {
    "like": '<path d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.6 3.4 5 7 5c2 0 3.4 1.1 5 3 1.6-1.9 3-3 5-3 3.6 0 5.8 3.6 4.5 6.8C19.5 16.4 12 21 12 21z"/>',
    "comment": '<path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.6-4.3A8.5 8.5 0 1 1 20.5 11.5z"/>',
    "send": '<path d="M21.5 3 10 14.5M21.5 3l-7 18-4.5-6.5L3.5 10z"/>',
    "save": '<path d="M19 21l-7-5-7 5V4.5A1.5 1.5 0 0 1 6.5 3h11A1.5 1.5 0 0 1 19 4.5z"/>',
}


def icono(nombre):
    return (f'<svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="#111" '
            f'stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round">{ICONOS[nombre]}</svg>')


def armar_html(p, base):
    imgs = [base / i for i in p["imagenes"]]
    n = len(imgs)
    tipo = p.get("tipo", "carrusel")
    corto, hay_mas = texto_cortado(p["texto"])
    logo = p.get("logo")
    avatar = (f'<img src="{data_uri(base / logo)}">' if logo else "")

    contador = f'<div class="contador">1/{n}</div>' if tipo == "carrusel" and n > 1 else ""
    reel = '<div class="reel">▶ Reel</div>' if tipo == "reel" else ""
    puntos = ""
    if tipo == "carrusel" and n > 1:
        puntos = '<div class="puntos">' + "".join(
            f'<span class="{"on" if k == 0 else ""}"></span>' for k in range(n)) + "</div>"

    resto = ""
    if n > 1:
        miniaturas = "".join(
            f'<figure><img src="{data_uri(im)}"><figcaption>{k + 2}/{n}</figcaption></figure>'
            for k, im in enumerate(imgs[1:]))
        resto = f'<section class="resto"><h2>Deslizando →</h2><div class="mini">{miniaturas}</div></section>'

    mas = '<span class="gris">... más</span>' if hay_mas else ""
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>
*{{box-sizing:border-box;margin:0;padding:0}}
body{{font-family:Inter,-apple-system,Helvetica,Arial,sans-serif;background:#ece8e2;color:#111;
  display:flex;gap:40px;padding:36px;align-items:flex-start;width:max-content}}
.titulo{{position:absolute;top:10px;left:36px;font-size:15px;font-weight:600;letter-spacing:.04em;color:#33363d;text-transform:uppercase}}
.cel{{flex:0 0 390px;width:390px;background:#fff;border-radius:38px;border:10px solid #111;overflow:hidden;
  box-shadow:0 18px 40px rgba(0,0,0,.18);margin-top:12px}}
.barra{{height:30px;display:flex;justify-content:space-between;align-items:center;padding:0 22px;font-size:13px;font-weight:600}}
.cab{{display:flex;align-items:center;gap:10px;padding:8px 12px}}
.av{{width:34px;height:34px;border-radius:50%;background:#fff;border:1px solid #ddd;display:flex;align-items:center;justify-content:center;overflow:hidden}}
.av img{{width:26px}}
.cab b{{font-size:14px}} .cab .pts{{margin-left:auto;font-size:18px;letter-spacing:1px}}
.foto{{position:relative;width:100%;aspect-ratio:4/5;background:#000}}
.foto img{{width:100%;height:100%;object-fit:cover;display:block}}
.contador,.reel{{position:absolute;top:12px;right:12px;background:rgba(0,0,0,.6);color:#fff;font-size:12px;
  padding:4px 9px;border-radius:12px;font-weight:600}}
.acc{{display:flex;align-items:center;gap:14px;padding:10px 12px 4px;position:relative}}
.acc .der{{margin-left:auto}}
.puntos{{position:absolute;left:50%;transform:translateX(-50%);display:flex;gap:4px}}
.puntos span{{width:6px;height:6px;border-radius:50%;background:#c8c8c8}} .puntos .on{{background:#3897f0}}
.cap{{padding:4px 12px 4px;font-size:14px;line-height:1.35}}
.gris{{color:#8e8e8e}}
.fecha{{padding:4px 12px 18px;font-size:11px;color:#8e8e8e}}
.resto{{margin-top:12px;flex:0 0 560px}}
.resto h2{{font-size:15px;color:#33363d;margin-bottom:12px;font-weight:600}}
.mini{{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}}
.mini figure{{background:#fff;border-radius:6px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,.08)}}
.mini img{{width:100%;aspect-ratio:4/5;object-fit:cover;display:block}}
.mini figcaption{{font-size:12px;color:#666;padding:5px 8px}}
</style></head><body>
<div class="titulo">{html.escape(p.get("dia", ""))}</div>
<div class="cel">
  <div class="barra"><span>9:41</span><span>●●● ▮</span></div>
  <div class="cab"><div class="av">{avatar}</div><b>{CUENTA}</b><span class="pts">···</span></div>
  <div class="foto"><img src="{data_uri(imgs[0])}">{contador}{reel}</div>
  <div class="acc">{icono("like")}{icono("comment")}{icono("send")}{puntos}<span class="der">{icono("save")}</span></div>
  <div class="cap"><b>{CUENTA}</b> {corto}{mas}</div>
  <div class="fecha">{html.escape(p.get("dia", ""))}</div>
</div>
{resto}
</body></html>"""


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    entrada, salida = Path(sys.argv[1]), Path(sys.argv[2])
    p = json.loads(entrada.read_text(encoding="utf-8"))
    pagina = armar_html(p, entrada.parent)
    html_tmp = salida.with_suffix(".html")
    html_tmp.write_text(pagina, encoding="utf-8")
    # Playwright de Node: viene instalado en las sesiones en la nube.
    script = """
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ deviceScaleFactor: 2, viewport: { width: 1100, height: 800 } });
  await p.goto('file://' + process.argv[1], { waitUntil: 'load' });
  await p.locator('body').screenshot({ path: process.argv[2] });
  await b.close();
})();"""
    subprocess.run(["node", "-e", script, str(html_tmp.resolve()), str(salida.resolve())], check=True)
    html_tmp.unlink()
    print(salida)


if __name__ == "__main__":
    main()

"""Arma el Excel del CRM de prospección COCO a partir de filas.json (salida de consolidar.py).
Uso: python3 armar_planilla.py <filas.json> <salida.xlsx>"""
import json, sys
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.formatting.rule import FormulaRule
from openpyxl.comments import Comment
from openpyxl.utils import get_column_letter

data = json.load(open(sys.argv[1]))
rows, extra = data["rows"], data["extra"]
N = len(rows)
FONT = "Arial"
HEAD_FILL = PatternFill("solid", fgColor="2F3B33")
HEAD_FONT = Font(name=FONT, bold=True, color="FFFFFF", size=10)
BODY = Font(name=FONT, size=10)
INPUT_FILL = PatternFill("solid", fgColor="FFF6D5")
thin = Side(style="thin", color="D0D0D0")
BORDER = Border(top=thin, bottom=thin, left=thin, right=thin)


def header(ws, cols, widths, row=1):
    for j, (h, w) in enumerate(zip(cols, widths), 1):
        c = ws.cell(row=row, column=j, value=h)
        c.font, c.fill, c.border = HEAD_FONT, HEAD_FILL, BORDER
        c.alignment = Alignment(vertical="center", wrap_text=True)
        ws.column_dimensions[get_column_letter(j)].width = w
    ws.row_dimensions[row].height = 30


def body(ws, r0, r1, ncols, wrap=True):
    for r in range(r0, r1 + 1):
        for j in range(1, ncols + 1):
            c = ws.cell(row=r, column=j)
            c.font, c.border = BODY, BORDER
            c.alignment = Alignment(vertical="top", wrap_text=wrap)


wb = Workbook()

# Prospectos
ws = wb.active
ws.title = "Prospectos"
cols = ["ID", "Empresa", "Segmento", "Ciudad", "Fit", "Motivo del fit", "Qué hacen", "Tipo de proyectos",
        "Estilo", "Usa concreto visto", "Decisores", "Web", "Instagram", "Teléfono", "Email", "WhatsApp",
        "Ángulo de venta COCO", "Confianza", "Pendiente de verificar", "Fuente principal", "Verificado el"]
widths = [6, 28, 20, 14, 6, 36, 44, 26, 20, 12, 28, 24, 20, 22, 22, 16, 40, 11, 40, 36, 12]
header(ws, cols, widths)
for i, r in enumerate(rows, 2):
    for j, v in enumerate(r, 1):
        ws.cell(row=i, column=j, value=v.lstrip("'") if j == 1 else v)
body(ws, 2, N + 1, len(cols))
ws.freeze_panes = "C2"
ws.auto_filter.ref = f"A1:{get_column_letter(len(cols))}{N + 1}"
ws["A1"].comment = Comment(
    "Fuente: investigación web de agentes de prospección COCO, ronda 1 (piloto Gran Asunción), "
    "2026-11-13. Solo resúmenes de buscador; webs propias sin leer. Fuente de cada fila en la columna "
    "'Fuente principal'; detalle completo en el repo coco, prospeccion/datos/piloto.", "COCO")
for col, color in (("A", "D9EAD3"), ("B", "FFF2CC"), ("C", "F4CCCC")):
    ws.conditional_formatting.add(f"E2:E{N + 200}",
                                  FormulaRule(formula=[f'$E2="{col}"'], fill=PatternFill("solid", fgColor=color)))

# Seguimiento
ss = wb.create_sheet("Seguimiento")
scols = ["ID", "Empresa", "Fit", "Estado", "Canal", "Contacto (persona)", "Fecha 1er contacto",
         "Próximo paso", "Fecha próximo paso", "Notas"]
header(ss, scols, [6, 28, 6, 18, 14, 22, 14, 30, 14, 44])
for i in range(2, N + 2):
    ss.cell(row=i, column=1, value=f"=Prospectos!A{i}")
    ss.cell(row=i, column=2, value=f"=Prospectos!B{i}")
    ss.cell(row=i, column=3, value=f"=Prospectos!E{i}")
    ss.cell(row=i, column=4, value="Por contactar")
body(ss, 2, N + 1, len(scols))
for i in range(2, N + 2):
    for j in range(4, 11):
        ss.cell(row=i, column=j).fill = INPUT_FILL
estados = DataValidation(type="list", allow_blank=True, formula1='"Por contactar,Contactado,Respondió,Reunión agendada,Muestra enviada,Presupuesto enviado,Ganado,Perdido,No interesa"')
canales = DataValidation(type="list", allow_blank=True, formula1='"WhatsApp,Instagram,Email,Llamada,Visita,Referido,Evento"')
ss.add_data_validation(estados)
ss.add_data_validation(canales)
estados.add(f"D2:D{N + 200}")
canales.add(f"E2:E{N + 200}")
ss.freeze_panes = "C2"
ss.cell(row=N + 3, column=2, value="Celdas en amarillo: para completar a mano.").font = Font(name=FONT, italic=True, size=9)

# Extra
se = wb.create_sheet("Extra")
header(se, ["Empresa", "Segmento", "Ciudad", "Link"], [34, 22, 18, 60])
for i, r in enumerate(extra, 2):
    for j, v in enumerate(r, 1):
        se.cell(row=i, column=j, value=v)
body(se, 2, len(extra) + 1, 4, wrap=False)
se.freeze_panes = "A2"
se["A1"].comment = Comment("Fuente: candidatos encontrados por los agentes, ronda 1, 2026-11-13. "
                           "Sin perfilar todavía.", "COCO")

# Resumen
sr = wb.create_sheet("Resumen", 0)
sr["A1"] = "Prospección COCO, piloto Gran Asunción"
sr["A1"].font = Font(name=FONT, bold=True, size=14)
sr["A2"] = "Empresas perfiladas por segmento y fit. Se actualiza solo con la pestaña Prospectos."
sr["A2"].font = Font(name=FONT, italic=True, size=9, color="666666")
segs = ["Estudio de arquitectura", "Constructora", "Desarrolladora", "Interiorismo"]
hdr = ["Segmento", "A", "B", "C", "Total"]
for j, h in enumerate(hdr, 1):
    c = sr.cell(row=4, column=j, value=h)
    c.font, c.fill, c.border = HEAD_FONT, HEAD_FILL, BORDER
for i, s in enumerate(segs, 5):
    sr.cell(row=i, column=1, value=s)
    for j, col in enumerate("BCD", 2):
        sr.cell(row=i, column=j, value=f'=COUNTIFS(Prospectos!$C:$C,"*"&$A{i}&"*",Prospectos!$E:$E,{col}$4)')
    sr.cell(row=i, column=5, value=f"=SUM(B{i}:D{i})")
t = 5 + len(segs)
sr.cell(row=t, column=1, value="Empresas únicas")
for j, col in enumerate("BCD", 2):
    sr.cell(row=t, column=j, value=f'=COUNTIF(Prospectos!$E:$E,{col}$4)')
sr.cell(row=t, column=5, value="=SUM(B{0}:D{0})".format(t))
for j in range(1, 6):
    sr.cell(row=t, column=j).font = Font(name=FONT, bold=True, size=10)
body(sr, 5, t - 1, 5)
for j in range(1, 6):
    sr.cell(row=t, column=j).border = BORDER
sr.cell(row=t + 1, column=1, value="Una empresa en dos segmentos cuenta en ambos; la fila de empresas únicas no la repite.").font = Font(name=FONT, italic=True, size=9, color="666666")
sr.cell(row=t + 3, column=1, value="Estado comercial").font = Font(name=FONT, bold=True, size=11)
estados_l = ["Por contactar", "Contactado", "Respondió", "Reunión agendada", "Muestra enviada",
             "Presupuesto enviado", "Ganado", "Perdido", "No interesa"]
for i, e in enumerate(estados_l, t + 4):
    sr.cell(row=i, column=1, value=e).font = BODY
    sr.cell(row=i, column=2, value=f'=COUNTIF(Seguimiento!$D:$D,$A{i})').font = BODY
sr.cell(row=t + 4 + len(estados_l) + 1, column=1, value="Candidatas sin perfilar (pestaña Extra)").font = BODY
sr.cell(row=t + 4 + len(estados_l) + 1, column=2, value="=COUNTA(Extra!A:A)-1").font = BODY
sr.column_dimensions["A"].width = 38
for c in "BCDE":
    sr.column_dimensions[c].width = 10

wb.save(sys.argv[2])
print("ok", N, "filas")

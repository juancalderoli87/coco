// Contenido de Cuidado y garantía.

import { site } from './site';

export const careSections: { title: string; items: string[] }[] = [
  {
    title: 'Limpieza diaria',
    items: [
      'Usá agua, jabón neutro y un paño suave o una esponja no abrasiva.',
      'Enjuagá y secá la bacha después de limpiarla para evitar marcas de agua.',
    ],
  },
  {
    title: 'Qué evitar',
    items: [
      'Lavandina, vinagre y limpiadores ácidos.',
      'Polvos limpiadores, cremas abrasivas y esponjas metálicas.',
      'Dejar apoyados por mucho tiempo productos con colorantes, como tinturas o maquillaje.',
    ],
  },
  {
    title: 'El sellado',
    items: [
      'Cada bacha sale del taller con un sellado profesional, hecho con productos importados especialmente para concreto de alto desempeño.',
      'El sellado protege la bacha del uso diario y mantiene su acabado mate.',
    ],
  },
  {
    title: 'Un material vivo',
    items: [
      'El concreto tiene variaciones naturales de tono y textura: cada bacha es única.',
    ],
  },
];

export const warranty = {
  period: '1 año',
  summary: 'Todas las bachas COCO tienen 1 año de garantía contra defectos de fabricación, desde la entrega.',
  terms: [
    { title: 'Cubre', text: 'Defectos de fabricación: fisuras o rajaduras estructurales, filtraciones a través del concreto y fallas del sellado de origen.' },
    {
      title: 'No cubre',
      text: 'Golpes, caídas o mal uso; instalación incorrecta; uso de productos que dañan el sellado, como lavandina, ácidos o abrasivos; desgaste normal por uso; y las variaciones naturales de tono y textura, que son parte del material.',
    },
    { title: 'Daños de transporte', text: 'Revisá tu bacha al recibirla. Si llegó dañada, avisanos dentro de las 48 horas y la reponemos.' },
    { title: 'Cómo reclamar', text: 'Escribinos por WhatsApp con fotos y tu comprobante de compra. Revisamos el caso y, si corresponde, reponemos la bacha.' },
    { title: 'Responsable', text: `${site.name}, ${site.showroom.address}, ${site.showroom.city}.` },
  ],
};

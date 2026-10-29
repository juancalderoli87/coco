// Preguntas frecuentes de la Home. Las marcadas con TODO necesitan confirmación de Juan antes de publicar.

import { site } from './site';

export const faq: { question: string; answer: string }[] = [
  {
    question: '¿Qué es el concreto de alto desempeño?',
    answer:
      'Es un concreto más denso y resistente que el tradicional. Usamos una mezcla propia, desarrollada y probada durante años en nuestro taller, que permite piezas más finas, firmes y duraderas.',
  },
  {
    // TODO: confirmar productos de limpieza recomendados y a evitar
    question: '¿Se mancha? ¿Cómo se limpia?',
    answer:
      'Cada bacha tiene un acabado mate sellado que la protege del uso diario. Para limpiarla alcanza con agua, jabón neutro y un paño suave. Evitá productos abrasivos o muy ácidos. En Cuidado y garantía tenés todos los detalles.',
  },
  {
    question: '¿Hacen envíos al interior?',
    answer:
      'Sí, entregamos en todo el país. En Asunción y Gran Asunción coordinamos la entrega directa, y al interior enviamos por encomienda.',
  },
  {
    question: '¿Incluye instalación?',
    answer:
      'No. COCO vende la bacha, sin instalación. La instalación la hace tu plomero de confianza.',
  },
  {
    // TODO: confirmar plazos de entrega por zona
    question: '¿Cuánto tarda la entrega?',
    answer: `Tenemos entrega inmediata hasta ${site.maxImmediateUnits} unidades por modelo. El plazo exacto depende de tu ciudad: te lo confirmamos por WhatsApp al coordinar tu pedido.`,
  },
  {
    // TODO: confirmar recomendación de grifería por modelo
    question: '¿Qué grifería va con cada bacha?',
    answer:
      'Roma y Dubai tienen orificio para grifería de mesada. El resto de los modelos va con grifería de pared o grifería alta de mesada. Si tenés dudas, escribinos y te asesoramos.',
  },
  {
    question: '¿Puedo verlas en persona?',
    answer: `Sí. Tenemos showroom en ${site.showroom.address}, ${site.showroom.city}. Coordiná tu visita por WhatsApp.`,
  },
  {
    // TODO: confirmar medios de pago
    question: '¿Cómo pago?',
    answer: 'Coordinamos el pago por WhatsApp cuando confirmás tu pedido.',
  },
];

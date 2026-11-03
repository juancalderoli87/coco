// Preguntas frecuentes de la Home.

import { warranty } from './care';
import { site } from './site';

export const faq: { question: string; answer: string }[] = [
  {
    question: '¿Qué es el concreto de alto desempeño?',
    answer:
      'Es un concreto más denso y resistente que el tradicional. Usamos una mezcla propia, desarrollada y probada durante años en nuestro taller, que permite piezas más finas, firmes y duraderas.',
  },
  {
    question: '¿Se mancha? ¿Cómo se limpia?',
    answer:
      'Cada bacha sale del taller con un sellado profesional que la protege del uso diario. Para limpiarla alcanza con agua, jabón neutro y un paño suave. Evitá productos abrasivos o muy ácidos. En Cuidado y garantía tenés todos los detalles.',
  },
  {
    question: '¿Hacen envíos al interior?',
    answer:
      'Sí, enviamos a todo el país por transportadora. El envío al interior corre por cuenta del cliente y su costo depende de la ciudad: te lo cotizamos por WhatsApp.',
  },
  {
    question: '¿Incluye instalación?',
    answer:
      'No. COCO vende la bacha, sin instalación. La instalación la hace tu plomero de confianza.',
  },
  {
    question: '¿Incluye la sopapa?',
    answer:
      'No, la sopapa no viene incluida. Los modelos con tapa de desagüe, como Lima, Asuncion o Buenos Aires, incluyen la tapa de concreto.',
  },
  {
    question: '¿Cuánto tarda la entrega?',
    answer: `${site.deliveryTime}. El plazo exacto depende de tu ciudad: te lo confirmamos por WhatsApp al coordinar tu pedido.`,
  },
  {
    question: '¿Qué grifería va con cada bacha?',
    answer:
      'Roma y Dubai tienen orificio para grifería integrada en la bacha. El resto de los modelos va con grifería de pared o grifería alta de mesada. Si tenés dudas, escribinos y te asesoramos.',
  },
  {
    question: '¿Tienen garantía?',
    answer: `Sí. ${warranty.summary} Si tu bacha presenta un defecto de fabricación o llega dañada, la reponemos.`,
  },
  {
    question: '¿Puedo verlas en persona?',
    answer: `Sí, con cita previa. Tenemos showroom en ${site.showroom.address}, ${site.showroom.city}. Coordiná tu visita por WhatsApp.`,
  },
  {
    question: '¿Cómo pago?',
    answer: `Por transferencia bancaria, o en efectivo al retirar el producto. Para comenzar la fabricación pedimos una seña del ${site.deposit}.`,
  },
];

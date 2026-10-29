// Configuración central del sitio. Editá acá datos de contacto y textos generales.

export const site = {
  name: 'COCO Concrete Company',
  tagline: 'Sculpted. Refined. Timeless.',
  voice: 'COCO no sigue al mercado. Lo está creando.',
  madeIn: 'Diseñado y fabricado en Paraguay',

  whatsapp: {
    display: '0992 901 700',
    international: '595992901700',
  },
  instagram: {
    handle: '@coco_concretecompany',
    url: 'https://www.instagram.com/coco_concretecompany/',
  },
  email: 'cococoncretecompany@gmail.com',
  showroom: {
    label: 'Showroom y dirección comercial',
    address: 'Sucre 1862 c/ Ocampos Lanzoni',
    city: 'Asunción',
  },
  workshop: {
    label: 'Taller',
    city: 'San Lorenzo',
  },

  topBarMessages: [
    'Envíos a todo el Paraguay',
    'Entrega inmediata hasta 5 unidades',
    'Programa para profesionales',
  ],

  nav: [
    { label: 'Shop', href: '/shop' },
    { label: 'Profesionales', href: '/#profesionales' },
    { label: 'Muestras', href: '/muestras' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Cuidado y garantía', href: '/cuidado-y-garantia' },
  ],

  // TODO: confirmar texto de cuidado con Juan
  careSummary:
    'Limpiala con agua, jabón neutro y un paño suave. Evitá productos abrasivos o muy ácidos para cuidar el sellado.',

  /** Unidades por modelo con entrega inmediata */
  maxImmediateUnits: 5,
};

export const whatsappMessages = {
  general: 'Hola COCO, quiero hacer una consulta.',
  samples: 'Hola COCO, quiero pedir muestras de terminaciones.',
  b2b: 'Hola COCO, soy [arquitecto/constructora/revendedor] y quiero información del programa para profesionales.',
  product: (model: string, color?: string) =>
    color
      ? `Hola COCO, quiero consultar por la bacha ${model} en color ${color}.`
      : `Hola COCO, quiero consultar por la bacha ${model}.`,
};

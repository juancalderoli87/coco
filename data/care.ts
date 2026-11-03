// Contenido de Cuidado y garantía.

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

// TODO: plazo y condiciones de garantía. No poner un número hasta que Juan lo confirme.
export const warranty = {
  text: 'Si tenés cualquier inconveniente con tu bacha, escribinos por WhatsApp y lo resolvemos juntos.',
  pending: 'Plazo y condiciones de la garantía: a confirmar.',
};

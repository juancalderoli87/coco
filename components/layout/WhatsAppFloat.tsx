'use client';

import { usePathname } from 'next/navigation';
import { getProduct } from '@/data/products';
import { whatsappMessages } from '@/data/site';
import { whatsappLink } from '@/lib/format';
import { WhatsAppIcon } from '../icons';

export function WhatsAppFloat() {
  const pathname = usePathname();
  // en la página de una bacha, el mensaje ya nombra el modelo
  const product = pathname.startsWith('/shop/') ? getProduct(pathname.split('/')[2]) : undefined;
  const message = product ? whatsappMessages.product(product.name) : whatsappMessages.general;

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      data-origen="flotante"
      className="wa-float fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg shadow-tinta/25 transition-[transform,bottom] hover:scale-105 md:right-8 md:bottom-8"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}

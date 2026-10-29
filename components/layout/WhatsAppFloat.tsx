import { whatsappMessages } from '@/data/site';
import { whatsappLink } from '@/lib/format';
import { WhatsAppIcon } from '../icons';

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg shadow-tinta/25 transition-transform hover:scale-105 md:right-8 md:bottom-8"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}

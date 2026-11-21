'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/next';
import { track } from '@vercel/analytics';
import { useEffect } from 'react';

// Visitas (Vercel Web Analytics) + eventos de clic:
// - cualquier link a WhatsApp → "whatsapp_click"
// - cualquier elemento con data-track="nombre" → ese evento
export function Analytics() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as Element | null)?.closest<HTMLElement>('[data-track], a[href*="wa.me"]');
      if (!el) return;
      const name = el.dataset.track ?? 'whatsapp_click';
      if (name === 'off') return;
      track(name, { pagina: window.location.pathname, origen: el.dataset.origen ?? '' });
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return <VercelAnalytics />;
}

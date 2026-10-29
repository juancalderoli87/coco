'use client';

import { useEffect, useState } from 'react';
import { site } from '@/data/site';

export function TopBar() {
  const messages = site.topBarMessages;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % messages.length), 4000);
    return () => clearInterval(id);
  }, [messages.length]);

  return (
    <div className="bg-carbon text-hueso">
      <p
        key={index}
        aria-live="off"
        className="animate-[topbar_600ms_ease-out] py-2 text-center text-[11px] tracking-[0.16em] uppercase"
      >
        {messages[index]}
      </p>
    </div>
  );
}

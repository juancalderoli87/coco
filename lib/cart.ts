'use client';

import { useSyncExternalStore } from 'react';
import type { ColorSlug } from '@/data/products';

export type CartItem = { slug: string; color: ColorSlug; quantity: number };

type CartState = { items: CartItem[]; open: boolean };

const STORAGE_KEY = 'coco-carrito';
const EMPTY: CartState = { items: [], open: false };

let state: CartState = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

// Si el almacenamiento del navegador falla, el carrito sigue funcionando en memoria.
function readStorage(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((i) => i && i.slug && i.color && i.quantity > 0) : [];
  } catch {
    return [];
  }
}

function writeStorage(items: CartItem[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // sin almacenamiento: queda en memoria
  }
}

function ensureLoaded() {
  if (loaded || typeof window === 'undefined') return;
  loaded = true;
  state = { ...state, items: readStorage() };
  window.addEventListener('storage', (e) => {
    if (e.key !== STORAGE_KEY) return;
    state = { ...state, items: readStorage() };
    listeners.forEach((l) => l());
  });
}

function setState(next: Partial<CartState>) {
  state = { ...state, ...next };
  if (next.items) writeStorage(state.items);
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  ensureLoaded();
  return state;
}

export function useCart() {
  return useSyncExternalStore(subscribe, getSnapshot, () => EMPTY);
}

export const cart = {
  add(slug: string, color: ColorSlug, quantity = 1) {
    ensureLoaded();
    const exists = state.items.some((i) => i.slug === slug && i.color === color);
    const items = exists
      ? state.items.map((i) => (i.slug === slug && i.color === color ? { ...i, quantity: i.quantity + quantity } : i))
      : [...state.items, { slug, color, quantity }];
    setState({ items });
  },
  setQuantity(slug: string, color: ColorSlug, quantity: number) {
    const items =
      quantity <= 0
        ? state.items.filter((i) => !(i.slug === slug && i.color === color))
        : state.items.map((i) => (i.slug === slug && i.color === color ? { ...i, quantity } : i));
    setState({ items });
  },
  remove(slug: string, color: ColorSlug) {
    cart.setQuantity(slug, color, 0);
  },
  clear() {
    setState({ items: [] });
  },
  open() {
    setState({ open: true });
  },
  close() {
    setState({ open: false });
  },
};

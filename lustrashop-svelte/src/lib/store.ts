import { writable } from 'svelte/store';

export const products = writable<{ id: number, title: string, price: number }[]>([]);
export const cart = writable<{ id: number; title: string; price: number; quantity: number }[]>([]);

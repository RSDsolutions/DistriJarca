import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('es-EC', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function generateWhatsAppLink(text: string) {
  const phone = "593999999999";
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

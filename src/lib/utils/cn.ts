import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina classes Tailwind com clsx e tailwind-merge
 * Garante que conflitos de classes sejam resolvidos corretamente
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


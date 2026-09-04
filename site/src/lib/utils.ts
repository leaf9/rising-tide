import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** shadcn/ui class merger. Lovable-generated components expect this at @/lib/utils. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

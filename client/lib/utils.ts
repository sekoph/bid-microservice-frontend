import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authFormSchema =( type : string ) => z.object({
  email: type === "SignIN" ? z.string().optional() : z.string().email(),
  username: z.string().min(8),
  name: type === "SignIN" ? z.string().optional() : z.string().min(8),
  password:z.string().min(8),
})

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function wait(time: number) {
  return new Promise(res => setTimeout(res, time))
}


export function serializeData(object: unknown) {
  return JSON.parse(JSON.stringify(object))
}



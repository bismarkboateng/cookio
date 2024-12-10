import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const COLLECTION_NAMES = {
  users: "USERS",
  recipes: "RECIPES",
  categories: "CATEGORIES",
}
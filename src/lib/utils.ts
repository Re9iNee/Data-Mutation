import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type TransformToFieldErrorsType<T> = {
  [K in keyof T]?: T[K][] | undefined;
};

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const passwordSchema = z
  .string()
  .trim()
  .min(1, { message: "This field can not be empty" })
  .min(8, { message: "Password must be at least 8 characters long" })
  .regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter",
  })
  .regex(/\d/, { message: "Password must contain at least one numeric digit" })
  .regex(/[!@#$%^&*(),.?":{}|<>]/, {
    message: "Password must contain at least one special character",
  });

import { z } from "zod";

export const formSchema = z.object({
  FullName: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

export const signInFormSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

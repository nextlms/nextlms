import { z } from 'zod';

export const registerSchema = z.object({
  firstName: z.string().min(2).max(100),
  lastName: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(10).max(100),
});

export type TRegisterSchema = z.infer<typeof registerSchema>;

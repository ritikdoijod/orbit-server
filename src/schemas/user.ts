import { z } from "zod";

export const userSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, { message: "Username should be atleast 3 characters" })
    .max(255, { message: "Username should be less than 255 characters" }),
  name: z
    .string()
    .trim()
    .min(3, { message: "Name should be atleast 3 characters" })
    .max(100, { message: "Name should be less than 100 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/),
});

export type User = z.infer<typeof userSchema>;

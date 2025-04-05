// src/schemas/user.schema.ts
import { z } from "zod";

export const userSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Username must be at least 4 characters" })
    .regex(/^\S*$/, { message: "Username cannot contain spaces" })
    .refine((val) => !val.toLowerCase().includes("admin"), {
      message: "Username cannot contain 'admin'",
    }),
  email: z.string().email({ message: "Invalid email address" }),
});

// ✅ Optional: export TypeScript type too
export type UserSchema = z.infer<typeof userSchema>;

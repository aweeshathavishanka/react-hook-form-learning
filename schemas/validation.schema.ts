import { z } from "zod";

// Password validation schema
export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[a-z]/, "Must include a lowercase letter")
  .regex(/[A-Z]/, "Must include an uppercase letter")
  .regex(/\d/, "Must include a number")
  .regex(/[@$!%*?&#]/, "Must include a special character");

// Phone number validation schema (for Sri Lanka)
export const phoneSchema = z
  .string()
  .min(10, "Phone number must be at least 10 digits")
  .regex(/^(\+94|0)?7\d{8}$/, "Invalid Sri Lankan phone number");

// Address object schema
export const addressSchema = z.object({
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  zip: z.string().regex(/^\d{5}$/, "Invalid ZIP code"),
});

// Hobbies (array validation)
export const hobbiesSchema = z
  .array(z.string().min(1))
  .min(1, "At least one hobby is required");

// Full form validation schema with nested array (addresses, hobbies)
export const userProfileSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    phone: phoneSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

// Combining schemas (like extend but using merge)
export const fullUserProfileSchema = userProfileSchema.and(
  z.object({
    address: addressSchema, // Optional nested address
    hobbies: hobbiesSchema, // Hobbies (array of strings)
  })
);

export type UserProfile = z.infer<typeof fullUserProfileSchema>;

Here's a sample README file in Markdown format for your project using **React Hook Form** and **Zod** for validation, including nested fields, arrays, and custom validations. You can copy and paste this into your `README.md` file:

```markdown
# React Hook Form with Zod Validation

This is a simple form implementation using **React Hook Form** for managing form state and **Zod** for schema-based validation. The form includes various fields like name, phone number, password, and confirm password, with custom validation logic using Zod. It also demonstrates how to handle nested fields and arrays.

## Features

- **React Hook Form** for managing form state and submission.
- **Zod** for schema-based validation with custom validation logic.
- Validation for fields like **name**, **phone number**, **password**, and **confirm password**.
- Nested form fields (e.g., `address`).
- Array fields with custom validations (e.g., **hobbies**).
- Error messages displayed for invalid fields.

## Project Setup

### Prerequisites

Ensure you have the following installed:
- **Node.js** (LTS version recommended)
- **npm** (or **yarn**)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

2. Install dependencies:

```bash
npm install
```

or

```bash
yarn install
```

3. Start the development server:

```bash
npm start
```

or

```bash
yarn start
```

The app should now be running at `http://localhost:3000`.

## How It Works

This form uses **React Hook Form** along with **Zod** for validating user input. Here's a breakdown of the major steps:

1. **Schema Creation with Zod**:
   - The validation schema is created using **Zod** to define custom validations for each field.
   - The form fields include name, phone number, password, confirm password, and additional fields like `address` (nested field) and `hobbies` (array field).
   
2. **Form Handling with React Hook Form**:
   - We use `useForm()` from **React Hook Form** to manage the form state.
   - The form state is validated with the Zod schema via the `zodResolver`.

3. **Validation and Error Messages**:
   - Errors are displayed next to the corresponding fields if they fail validation. These errors come from the Zod schema.

## Example Code

### Form with Zod Validation

```tsx
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userProfileSchema, UserProfile } from "../schemas/validation.schema";

export default function NestedArrayWithValidateZodForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<UserProfile>({
    resolver: zodResolver(userProfileSchema),
  });

  const onSubmit = (data: UserProfile) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Create Your Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
          <input {...register("name")} placeholder="John Doe" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Phone</label>
          <input {...register("phone")} placeholder="0771234567" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
          <input type="password" {...register("password")} placeholder="••••••" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Confirm Password</label>
          <input type="password" {...register("confirmPassword")} placeholder="••••••" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {errors.confirmPassword && <p className="text-red-600 text-sm mt-1">{errors.confirmPassword.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors">Submit</button>
      </form>
    </div>
  );
}
```

### Zod Validation Schema

```ts
import { z } from "zod";

// Password validation schema
export const passwordSchema = z.string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[a-z]/, "Must include a lowercase letter")
  .regex(/[A-Z]/, "Must include an uppercase letter")
  .regex(/\d/, "Must include a number")
  .regex(/[@$!%*?&#]/, "Must include a special character");

// Phone number validation schema (for Sri Lanka)
export const phoneSchema = z.string()
  .min(10, "Phone number must be at least 10 digits")
  .regex(/^(\+94|0)?7\d{8}$/, "Invalid Sri Lankan phone number");

// Address object schema
export const addressSchema = z.object({
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  zip: z.string().regex(/^\d{5}$/, "Invalid ZIP code")
});

// Hobbies (array validation)
export const hobbiesSchema = z.array(z.string().min(1)).min(1, "At least one hobby is required");

// Full form validation schema with nested array (addresses, hobbies)
export const userProfileSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: phoneSchema,
  password: passwordSchema,
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match"
});

// Combining schemas (like extend but using merge)
export const fullUserProfileSchema = userProfileSchema.merge(z.object({
  address: addressSchema, // Optional nested address
  hobbies: hobbiesSchema // Hobbies (array of strings)
}));

export type UserProfile = z.infer<typeof fullUserProfileSchema>;
```

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

### How to Use This README:
1. Replace `your-username` and `your-repository-name` with your actual GitHub username and the repository name.
2. Adjust the code snippets, descriptions, and installation steps to match the specifics of your project.

This README covers the essentials for your React Hook Form and Zod validation setup and should help anyone unfamiliar with your project understand its setup, usage, and contributions. Let me know if you need further tweaks!

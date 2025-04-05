"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, UserSchema } from "../schemas/user.schema";

export default function SeparateSchemaZodForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: UserSchema) => {
    console.log("Form Data:", data);
    reset(); // Clear form on success
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <input
        {...register("username")}
        placeholder="Username"
        autoFocus
        className="border p-2 rounded w-full"
      />
      {errors.username && (
        <p className="text-red-600 text-sm">• {errors.username.message}</p>
      )}

      <input
        {...register("email")}
        placeholder="Email"
        className="border p-2 rounded w-full"
      />
      {errors.email && (
        <p className="text-red-600 text-sm">• {errors.email.message}</p>
      )}

      {isSubmitSuccessful && (
        <p className="text-green-600 text-sm">Form submitted successfully!</p>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Submit
      </button>
    </form>
  );
}

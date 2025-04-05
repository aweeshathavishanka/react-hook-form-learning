"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function MultipleErrorMessage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all", // Enables showing all validation errors
  });

  const onSubmit = (data: any) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Username Validation
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            {...register("username", {
              validate: {
                noAdmin: (value) =>
                  !value.toLowerCase().includes("admin", "biznez.lk") ||
                  "Username cannot contain 'admin' biznez.lk",
                minLength: (value) =>
                  value.length >= 4 || "Username must be at least 4 characters",
                noSpaces: (value) =>
                  !/\s/.test(value) || "Username cannot contain spaces",
              },
            })}
            placeholder="Enter your username"
            className={`w-full px-4 py-2 border ${
              errors.username ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />

          {errors.username && (
            <div className="text-sm text-red-600 mt-2 space-y-1">
              {Object.values(errors.username.types || {}).map((msg, i) => (
                <p key={i}>• {msg}</p>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
}

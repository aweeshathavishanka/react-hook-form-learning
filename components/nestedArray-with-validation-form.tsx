// src/components/ZodForm.tsx
"use client";
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  fullUserProfileSchema,
  UserProfile,
} from "../schemas/validation.schema";

export default function NestedArrayWithValidateZodForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<UserProfile>({
    resolver: zodResolver(fullUserProfileSchema), // Use full schema here
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "hobbies", // This is the nested array field
  });

  const onSubmit = (data: UserProfile) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Create Your Profile
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            {...register("name")}
            placeholder="John Doe"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            {...register("phone")}
            placeholder="0771234567"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            placeholder="••••••"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="••••••"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-600 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Address Fields */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Street
          </label>
          <input
            {...register("address.street")}
            placeholder="123 Main St"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.address?.street && (
            <p className="text-red-600 text-sm mt-1">
              {errors.address.street?.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            City
          </label>
          <input
            {...register("address.city")}
            placeholder="Colombo"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.address?.city && (
            <p className="text-red-600 text-sm mt-1">
              {errors.address.city?.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Zip Code
          </label>
          <input
            {...register("address.zip")}
            placeholder="10100"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.address?.zip && (
            <p className="text-red-600 text-sm mt-1">
              {errors.address.zip?.message}
            </p>
          )}
        </div>

        {/* Hobbies (nested array field) */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Hobbies
          </label>
          {fields.map((item, index) => (
            <div key={item.id} className="flex space-x-2">
              <input
                {...register(`hobbies.${index}` as const)}
                placeholder="Enter hobby"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-600">
                Remove
              </button>
            </div>
          ))}
          {errors.hobbies && (
            <p className="text-red-600 text-sm mt-1">
              {errors.hobbies.message}
            </p>
          )}
          <button
            type="button"
            onClick={() => append("")}
            className="mt-2 bg-green-600 text-white py-2 px-4 rounded-lg">
            Add Hobby
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors">
          Submit
        </button>
      </form>
    </div>
  );
}

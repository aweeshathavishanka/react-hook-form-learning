"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function CoreTrio() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Sign Up
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            {...register("username", { required: true, minLength: 3 })}
            placeholder="Enter your username"
            className={`w-full px-4 py-2 border ${
              errors.username ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.username?.type === "required" && (
            <p className="text-sm text-red-600 mt-1">Username is required</p>
          )}
          {errors.username?.type === "minLength" && (
            <p className="text-sm text-red-600 mt-1">
              Minimum 3 characters required
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
          Submit
        </button>
      </form>
    </div>
  );
}

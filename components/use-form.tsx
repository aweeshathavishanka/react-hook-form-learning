"use client";
import { useForm } from "react-hook-form";

export default function UseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const nameValue = watch("name"); // live watch

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          User Form
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            {...register("name", { required: true })}
            placeholder="Enter your name"
            className={`w-full px-4 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.name && (
            <span className="text-sm text-red-600 mt-1 block">
              Name is required
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
            Submit
          </button>
          <button
            type="button"
            className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            onClick={() => reset({ name: "John Doe" })}>
            Reset
          </button>
        </div>

        <p className="text-sm text-gray-500">
          Live watch:{" "}
          <span className="font-medium text-gray-800">{nameValue}</span>
        </p>
      </form>
    </div>
  );
}

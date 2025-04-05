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
    <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-4">
      <input
        {...register("name", { required: true })}
        placeholder="Your name"
        className=" p-4"
      />
      {errors.name && <span>Name is required</span>}

      <button type="submit" className=" bg-black text-white p-3">
        Submit
      </button>
      <button
        type="button"
        className=" bg-blue-500 text-white p-3"
        onClick={() => reset({ name: "John Doe" })}>
        Reset
      </button>
      <p className=" text-gray-500">Live watch: {nameValue}</p>
    </form>
  );
}

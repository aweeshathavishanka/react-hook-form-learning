"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-4">
      <input
        {...register("name", { required: true })}
        className=" p-3"
        placeholder="Name"
      />
      {errors.name && <p>Name is required</p>}

      <input
        {...register("email", { required: true })}
        className=" p-3"
        placeholder="Email"
      />
      {errors.email && <p>Email is required</p>}

      <button type="submit" className=" bg-black p-3 text-white">
        Submit
      </button>
    </form>
  );
}

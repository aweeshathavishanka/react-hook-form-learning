import BasicZodForm from "@/components/basic-zod-form";
import CoreTrio from "@/components/core-trio";
import MultipleErrorMessage from "@/components/multiple-error-message";
import MyForm from "@/components/react-basic-hook-form";
import SeparateSchemaZodForm from "@/components/separate-schema-zod";
import UseForm from "@/components/use-form";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" max-w-7xl mx-auto p-10">
      <div className=" flex flex-col gap-y-10">
        <div className=" bg-gray-50 p-5 rounded-lg">
          <h1 className=" text-indigo-600 font-medium text-3xl">
            Basic React Hook Form Understand
          </h1>
          <MyForm />
        </div>
        <div className="bg-gray-100 p-5 rounded-lg">
          <h1 className="text-indigo-600 font-medium text-3xl">
            Use Form Understand
          </h1>
          <UseForm />
        </div>
        <div className="bg-gray-100 p-5 rounded-lg">
          <h1 className="text-indigo-600 font-medium text-3xl">
            Use Form Understand
          </h1>
          <CoreTrio />
        </div>
        <div className="bg-gray-100 p-5 rounded-lg">
          <h1 className="text-indigo-600 font-medium text-3xl">
            Multiple Error Message
          </h1>
          <MultipleErrorMessage />
        </div>
        <div className="bg-gray-100 p-5 rounded-lg">
          <h1 className="text-indigo-600 font-medium text-3xl">
            Basic Zod Form
          </h1>
          <BasicZodForm />
        </div>
        <div className="bg-gray-100 p-5 rounded-lg">
          <h1 className="text-indigo-600 font-medium text-3xl">
            Separate File Schema in ZOD
          </h1>
          <SeparateSchemaZodForm />
        </div>
      </div>
    </main>
  );
}

import React from "react";
import { useForm } from "react-hook-form";
import "./task4.css";

const Input = ({
  label,
  name,
  type = "text",
  register,
  errors,
  max,
  ...rules
}) => (
  <div className="mb-4 ">
    <label className="block mb-1 font-medium text-black ">{label}</label>

    <input
      type={type}
      max={max}
      {...register(name, rules)}
      className="w-full rounded-lg border border-gray-700 p-2 focus:border-blue-500 focus:outline-none"
    />

    {errors[name] && (
      <p className="mt-1 text-sm text-red-500">{errors[name].message}</p>
    )}
  </div>
);

export default function Task4() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const today = new Date();
  const maxDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );

  const maxDob = maxDate.toISOString().split("T")[0];

  const onSubmit = (data) => {
    console.log(data);
    alert("Registration Successful!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 bg-cyan-500 p-4 rounded-lg">
      <div className="mx-auto max-w-2xl rounded-xl bg-purple-200 p-8 shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold">Student Information</h1>
          <p className="mt-2 text-gray-600">
            Fill out the registration form below.
          </p>
        </div>

        <nav className="mb-8 flex justify-center gap-6 border-b pb-4">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            Register
          </a>
          <a href="#" className="hover:text-blue-600">
            Students
          </a>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
        </nav>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Name"
            name="name"
            register={register}
            errors={errors}
            required="Name is required"
            minLength={{
              value: 3,
              message: "Minimum 3 characters",
            }}
            maxLength={{
              value: 10,
              message: "Maximum 10 characters",
            }}
            pattern={{
              value: /^[A-Za-z ]+$/,
              message: "Only letters are allowed",
            }}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            register={register}
            errors={errors}
            required="Email is required"
            pattern={{
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email",
            }}
          />
          <Input
            label="Age"
            name="age"
            type="number"
            register={register}
            errors={errors}
            required="Age is required"
            min={{ value: 18, message: "Minimum age is 18" }}
            max={{ value: 60, message: "Maximum age is 60" }}
          />
          <div className="mb-4">
            <label className="mb-1 block font-medium">Course</label>

            <select
              {...register("course", {
                required: "Please select a course",
              })}
              defaultValue=""
              className="w-full rounded-lg border 
              border-black-300 p-2 focus:border-blue-500 focus:outline-none"
            >
              <option value="" disabled>
                Select Course
              </option>
              <option value="IT">IT</option>
              <option value="AI & ML">AI & ML</option>
              <option value="Cyber">Cyber</option>
            </select>

            {errors.course && (
              <p className="mt-1 text-sm text-red-500">
                {errors.course.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="mb-2 block font-medium">Gender</label>

            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Male"
                  {...register("gender", {
                    required: "Please select your gender",
                  })}
                />
                Male
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Female"
                  {...register("gender", {
                    required: "Please select your gender",
                  })}
                />
                Female
              </label>
            </div>

            {errors.gender && (
              <p className="mt-1 text-sm text-red-500">
                {errors.gender.message}
              </p>
            )}
          </div>
          <Input
            label="Date of Birth"
            name="dob"
            type="date"
            max={maxDob}
            register={register}
            errors={errors}
            required="Date of Birth is required"
            validate={(value) => {
              const dob = new Date(value);
              let age = today.getFullYear() - dob.getFullYear();

              if (
                today.getMonth() < dob.getMonth() ||
                (today.getMonth() === dob.getMonth() &&
                  today.getDate() < dob.getDate())
              ) {
                age--;
              }

              return age >= 18 || "You must be at least 18 years old";
            }}
          />

          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
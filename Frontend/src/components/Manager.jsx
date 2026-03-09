import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Manager = ({setPasswords, editData }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      site: "",
      username: "",
      password: "",
    },
  });

  useEffect(() => {
    setFocus("site");
  }, []);

  useEffect(() => {
    if (editData) {
      setValue("site", editData.site);
      setValue("username", editData.username);
      setValue("password", editData.password);
    }
  }, [editData]);

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    const res = await axios.post("http://localhost:3000/save", data);
    reset();
    setPasswords((prev) => [...prev, res.data]);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center py-10">
      <div className="w-full max-w-6xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Password Manager
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <input
              placeholder="Enter Website"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register("site", {
                required: { value: true, message: "URL is Required!" },
              })}
            />
            {errors.site && (
              <p className="text-red-500 text-sm mt-1">{errors.site.message}</p>
            )}
          </div>

          <div>
            <input
              placeholder="Enter Username"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register("username", {
                required: { value: true, message: "Username is Required!" },
              })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register("password", {
                required: { value: true, message: "Password is Required!" },
              })}
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-gray-600"
            >
              {showPassword ? "🙈" : "👁"}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-500 hover:bg-green-600 transition text-white font-semibold py-3 rounded-lg shadow-md"
          >
            {isSubmitting ? "Saving..." : "Save Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Manager;

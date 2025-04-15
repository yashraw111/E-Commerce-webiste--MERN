import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import { getEvn } from "../../helpers/getEnv";
import { showToast } from "../../helpers/showToast";
const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate()

  async function signup(data) {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/auth/register`,
        data
      );
      console.log(response)
      if (response.status !== 200) {
        return showToast("error", response.data.message);
      }
      showToast("success", response.data.message);
      navigate("/login")
    } catch (error) {
      showToast("error", error.response?.data?.message || error.message);
    }
  }
  return (
    <section className="bg-gray-100 signup dark:bg-gray-900 min-h-screen flex items-center justify-center px-4 ">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
          Create an Account
        </h1>
        <form className="space-y-4 mt-6" onSubmit={handleSubmit(signup)}>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              Your Name
            </label>
            <input
              type="name"
              {...register("name", { required: "name is required" })}
              className="w-full p-2.5 mt-1 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 text-white text-white"
              placeholder="name1..."
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2.5 mt-1 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 text-white text-white"
              placeholder="name@company.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-2.5 mt-1 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 text-white"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPass", {
                required: "Please confirm your password",
              })}
              className="w-full p-2.5 mt-1 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 text-white"
              placeholder="••••••••"
            />
            {errors.confirmPass && (
              <p className="text-red-500 text-sm">
                {errors.confirmPass.message}
              </p>
            )}
          </div>
          {/* 
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 rounded border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400">
              I accept the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div> */}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-5 py-2.5 transition-all duration-200"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <NavLink to="/signin" className="text-blue-600 hover:underline">
              Login here
            </NavLink>
          </p>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SignUpPage;

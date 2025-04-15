import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { toast, ToastContainer } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import axios from "axios";
import { showToast } from "../../helpers/showToast";
import { useDispatch } from 'react-redux'
import { setUser } from "../slice/user.slice";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const dispatch =useDispatch()
  async function login(data) {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/auth/login`,
        data
      );
  
      if (response.status !== 200) {
        return showToast("error", response.data.message);
      }
  
      dispatch(setUser(response.data.user)); // NOTE: data.user → response.data.user
      showToast("success", response.data.message);
  
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      showToast("error", error.response?.data?.message || error.message);
    }
  }
  
  // function googleAuth() {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider)
  //     .then((res) => {
  //       // const result =GoogleAuthProvider.credentialFromResult(res)
  //       const user = res.user;
  //       console.log(user);
  //       toast.success("User login successfully", { position: "top-center" });
  //       // console.log(result.accessToken);
  //       window.location.href = "/";
  //       //     console.log(res.user);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       console.log(err);
  //       toast.error("Login failed", { position: "top-center" });
  //     });
  // }




  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Sign in to your account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(login)}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 text-white"
              placeholder="name@company.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 text-white"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4" />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Remember me</span>
            </label>
            <NavLink to="/forgotPass" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Forgot password?
            </NavLink>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Sign in
          </button>

          <div className="relative flex items-center my-4">
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
            <p className="px-3 text-sm text-gray-500 dark:text-gray-400">OR</p>
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          {/* <button onClick={googleAuth}
            className="w-full flex items-center justify-center px-4 py-2 border rounded-lg text-gray-700 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white transition"
          >
            <FcGoogle className="text-2xl mr-2" />
            Continue with Google
          </button>

          <button
          // onClick={facebookAuth}
          onClick={googleAuth}
            className="w-full flex items-center justify-center px-4 py-2 mt-2 border rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition"
          >
            <FaFacebook className="text-2xl mr-2" />
            Continue with Facebook
          </button> */}

          <p className="text-sm text-center text-gray-600 dark:text-gray-300">
            Don’t have an account yet?{" "}
            <NavLink to="/signup" className="text-blue-600 dark:text-blue-400 hover:underline">
              Sign up
            </NavLink>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;

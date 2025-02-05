import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
import axios from "axios";
const LoginPage = () => {

  const {register,handleSubmit,formState:{errors},reset} = useForm()
  const redirect = useNavigate()
  async  function regist(data){
    console.log(data)
    try {
        await axios.post(`${import.meta.env.VITE_BASE_URL_USER}/login`, data)
        .then((res)=>{
          res.redirect('/home')
        })
        .catch((err)=>{
          console.log(err)
        })
        // console.log(res)
        redirect("/home")
    } catch (error) {
        console.log(error)

    }
  }

  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900 h-full">
        <div class="flex flex-col items-center justify-center px-6  mx-auto  h-screen  md:h-screen lg:py-0">
      
          <h1 class="text-xl mb-6 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            
              <form class="space-y-4 md:space-y-6" action="#" onClick={handleSubmit(regist)}>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...register("email")}
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    {...register("password")}
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <NavLink to="/forgotPass">


                  <a
                    href="#"
                    class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                    Forgot password?
                  </a>
                    </NavLink>
                </div>
                <button
                  // type="submit"
                  class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4  focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign in
                </button>
                
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <NavLink to="/signup">
                  <a
                    href="#"
                    class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Sign up
                  </a>
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;

import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const SignUpPage = () => {

      const {register,handleSubmit,formState:{errors},reset} = useForm()
    async  function regist(data){
        console.log(data)
        try {
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL_USER}/SignUp`, data)
        } catch (error) {
            console.log(error)
        }
      }


  return (
    <section class="bg-gray-50 dark:bg-gray-900" h-full>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen   lg:py-0">
    
        <h1 class="text-xl font-bold leading-tight tracking-tight mb-4 text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                </h1>
        <div class="w-[80%]  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                
                <form class="space-y-4 md:space-y-6"   action="#" onClick={handleSubmit(regist)}>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" {...register("email")} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" {...register("password")} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input type="password" {...register("confirmPass")} name="confirmPass" id="confirmPass" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                    <div class="flex ">
                        <div class="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                        </div>
                        <div class="flex ml-3 text-sm">
                          <label for="terms" class="font-light text-gray-500 dark:text-gray-300 flex">I accept the <a class="font-medium text-blue-700 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                        </div>
                    </div>
                    <button  class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
                    <NavLink to='/'><p class="text-sm ms-2 flex font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <a href="#" class="ms-2 font-medium text-primary-600 hover:underline dark:text-blue-800">Login here</a>
                    </p></NavLink>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default SignUpPage
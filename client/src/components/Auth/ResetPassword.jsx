import React from 'react'

const ResetPassword = () => {
  return (
    <section class="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
  <div class="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
    {/* <div class="flex justify-center mb-6">
      <a href="#" class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
        Flowbite    
      </a>
    </div> */}
    
    <h2 class="text-xl font-bold text-gray-900 dark:text-white text-center mb-4">Change Password</h2>

    <form class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
        <input type="email" id="email" placeholder="name@company.com" required
          class="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400"/>
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-900 dark:text-white">New Password</label>
        <input type="password" id="password" placeholder="••••••••" required
          class="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400"/>
      </div>
      <div>
        <label for="confirm-password" class="block text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
        <input type="password" id="confirm-password" placeholder="••••••••" required
          class="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400"/>
      </div>
      <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="newsletter" aria-describedby="newsletter" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="newsletter" class="font-light text-gray-500 dark:text-gray-300 flex">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-blue-500" href="#">Terms and Conditions</a></label>
                  </div>
              </div>
      <button type="submit"
        class="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-sm transition focus:ring-2 focus:ring-blue-500 focus:outline-none">
        Reset Password
      </button>
    </form>
  </div>
</section>

  )
}

export default ResetPassword
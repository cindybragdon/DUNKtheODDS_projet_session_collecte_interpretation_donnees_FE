
import React, { Component, useEffect } from 'react'
import '../LogSign.css'

const LoginPage = () => {

  return (
    <div className={'overlay'}>
      <div className="flex max-h-screen text-center mt-5 p-5">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col  ">
          <img className="mx-auto max-w-xs" style={{ width: '64px' }} src={'./images/icone.png'} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className='space-y-6' action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-white">Email address</label>
              <div className="mt-2">
                <input type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-lg bg-white px-3 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-900 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-white">Password</label>
              </div >
              <div className="mt-2">
                <input type="password" name="password" id="password" autoComplete="current-password" required className="rounded-lg block w-full  bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4">Sign in</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            <a href="/Signin" className="font-semibold text-purple-600 hover:text-pink-500 mt-4">Create an account</a>
          </p>
        </div>
      </div>


    </div>

  )
}

export default LoginPage;
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Bot } from 'lucide-react'
export const Login = () => {
  return (
    <div className='min-h-[calc(100vh-128px)] max-w-7xl mx-auto px-6 pb-8 flex flex-col md:gap-4 items-center justify-center'>
      <div className='rounded-xl p-2 bg-[#e7e0fb] flex items-center'>
        <Bot size={40} className='text-[#7b38f8]' />
      </div>
      <div>
        <h1 className='font-bold text-center text-2xl md:text-3xl'>Welcome Back</h1>
        <span className='text-gray-500 text-base font-medium'>Log in to continue your journey</span>
      </div>
      <div className=' w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl'>
        <h2 className='font-medium text-sm p-1.5'>Email or Username</h2>
        <input type="text" placeholder='Enter your email or username' className='bg-[#fcfcfc] w-full max-w-sm p-1.5 rounded border border-gray-300 shadow font-medium' />
        <h2 className='font-medium text-sm p-1.5'>Password</h2>
        <input type="password" placeholder='Enter your password' className='bg-[#fcfcfc] w-full max-w-sm p-1.5 rounded border border-gray-300 shadow font-medium' />
        <button className='bg-[#8e51ff] mt-4 w-full max-w-sm text-white p-1.5 rounded-2xl active:bg-[#754bdf]  md:hover:bg-[#754bdf] md:transition-colors md:duration-200 cursor-pointer'>Log in</button>
        <h2 className='font-medium text-gray-500 text-sm p-1.5 text-center'>Don't have an account? <NavLink to='/register' className="text-[#5a2bd2] active:text-[#5a2bd2] md:hover:underline">Register</NavLink></h2>
      </div>
    </div>
  )
}

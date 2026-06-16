import React from 'react'
import { NavLink } from 'react-router-dom'

export const Register = () => {
    return (
        <div className='max-w-7xl mx-auto px-6 pb-8 flex flex-col mt-4 md:gap-4 items-center md:mt-6 '>
            <div>
                <p className='font-bold text-center text-2xl md:text-3xl'>Create Account</p>
                <span className='text-gray-500 text-base font-medium'>Join thousands preparing smarter</span>
            </div>
            <div className=' w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl'>
                <h2 className='font-medium text-sm p-1.5'>Full Name</h2>
                <input type="text" placeholder='Enter your full name' className='bg-[#fcfcfc] w-full max-w-sm p-1.5 rounded-xl shadow font-medium' />
                <h2 className='font-medium text-sm p-1.5'>Email Address</h2>
                <input type="email" placeholder='Enter your email' className='bg-[#fcfcfc] w-full max-w-sm p-1.5 rounded-xl shadow font-medium' />
                <h2 className='font-medium text-sm p-1.5'>Username</h2>
                <input type="text" placeholder='Enter your username' className='bg-[#fcfcfc] w-full max-w-sm p-1.5 rounded-xl shadow font-medium' />
                <h2 className='font-medium text-sm p-1.5'>Password</h2>
                <input type="password" placeholder='Enter your password' className='bg-[#fcfcfc] w-full max-w-sm p-1.5 rounded-xl shadow font-medium' />
                <h2 className='font-medium text-sm p-1.5'>Confirm Password</h2>
                <input type="password" placeholder='Confirm your password' className='bg-[#fcfcfc] w-full max-w-sm p-1.5 rounded-xl shadow font-medium' />
                <button className='bg-[#8e51ff] mt-4 w-full max-w-sm text-white p-1.5 rounded-2xl active:bg-[#754bdf]  md:hover:bg-[#754bdf] md:transition-colors md:duration-200 cursor-pointer'>Register</button>
                <h2 className='font-medium text-gray-500 text-sm p-1.5 text-center'>Already have an account? <NavLink to='/login' className="text-[#5a2bd2] active:text-[#5a2bd2] md:hover:underline">Log in</NavLink></h2>
            </div>
        </div >
    )
}

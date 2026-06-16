import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Bot, MailIcon } from 'lucide-react'

export const Register = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='min-h-[calc(100vh-135px)] max-w-7xl mx-auto px-6 pb-8 flex flex-col md:gap-4 mt-2 md:mt-4 items-center justify-center'>
            {show ? <div className='max-w-sm rounded-2xl bg-white p-6 shadow'>
                <div className='flex flex-col items-center'>
                    <div className='rounded-xl p-2 bg-[#e7e0fb] flex items-center'>
                        <MailIcon size={24} className='text-[#7b38f8]' />
                    </div>
                    <h1 className='font-bold text-xl'>Verify Your Email</h1>
                    <p className='text-gray-500 text-sm text-center'>We've sent a 6-digit code to your@email.com</p>
                    <input type="text" placeholder='Enter Otp' className='input mt-4' />
                    <button className='auth-btn'>Verify & Continue</button>
                    <button className="cursor-pointer mt-1 w-full max-w-sm" onClick={() => alert("ehh")}>Cancel</button>
                </div>
            </div> : <>
                <div>
                    <h1 className='font-bold text-center text-2xl md:text-3xl'>Create Account</h1>
                    <span className='text-gray-500 text-base font-medium'>Join thousands preparing smarter</span>
                </div>
                <div className=' w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl'>
                    <h2 className='font-medium text-sm p-1.5'>Full Name</h2>
                    <input type="text" placeholder='Enter your full name' className='input' />
                    <h2 className='font-medium text-sm p-1.5'>Email Address</h2>
                    <input type="email" placeholder='Enter your email' className='input' />
                    <h2 className='font-medium text-sm p-1.5'>Username</h2>
                    <input type="text" placeholder='Enter your username' className='input' />
                    <h2 className='font-medium text-sm p-1.5'>Password</h2>
                    <input type="password" placeholder='Enter your password' className='input' />
                    <h2 className='font-medium text-sm p-1.5'>Confirm Password</h2>
                    <input type="password" placeholder='Confirm your password' className='input' />
                    <button className='auth-btn'>Register</button>
                    <h2 className='font-medium text-gray-500 text-sm p-1.5 text-center'>Already have an account? <NavLink to='/login' className="text-[#5a2bd2] active:text-[#5a2bd2] md:hover:underline">Log in</NavLink></h2>
                </div>
            </>}
        </div >
    )
}

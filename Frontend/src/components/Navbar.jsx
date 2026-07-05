import React, { useState } from 'react'
import { Bot, Menu, X } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
export const Navbar = () => {

    const [show, setShow] = useState(false)
    const navigate = useNavigate();

    return (
        <nav className='bg-white shadow pt-6'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex gap-4 items-center md:cursor-pointer' onClick={() => {
                        navigate('/');
                    }}>
                        <div className='rounded-xl p-2 bg-[#f1ecfe]'>
                            <Bot size={16} className='text-[#a16efe]' />
                        </div>
                        <span className='font-bold text-lg'>Interview Buddy</span>
                    </div>
                    {show ?
                        <ul className="flex flex-col items-center absolute top-23 right-0 w-36 bg-white shadow-lg rounded-xl p-4 gap-4 transition duration-200 z-10 md:hidden">
                            <NavLink to="/interview" onClick={() => setShow(!show)} className="text-lg font-medium">Interview</NavLink>
                            <NavLink to="/wallet" onClick={() => setShow(!show)} className="text-lg font-medium">Wallet</NavLink>
                            <NavLink to="/profile" onClick={() => setShow(!show)} className="text-lg font-medium">Profile</NavLink>
                        </ul> :
                        <ul className='hidden md:flex items-center gap-6'>
                            <NavLink to="interview" className="text-lg font-medium border-b-2 border-transparent hover:border-b-lime-950">Interview</NavLink>
                            <NavLink to="/wallet" className="text-lg font-medium border-b-2 border-transparent hover:border-b-lime-950">Wallet</NavLink>
                            <NavLink to="/profile" className="text-lg font-medium border-b-2 border-transparent hover:border-b-lime-950">Profile</NavLink>
                        </ul>
                    }
                    <button className='md:hidden' onClick={() => setShow(!show)}>
                        {show ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
        </nav>
    )
}

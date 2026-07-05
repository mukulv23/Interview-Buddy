import React from 'react'
import { Auth } from '../contexts/AuthContext'
import { Edit2, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const { user } = Auth();
    const navigate = useNavigate();
    const API = import.meta.env.VITE_API_URL;
    return (
        <div className='min-h-[calc(100vh-128px)] max-w-7xl mx-auto px-6 pb-8 flex flex-col gap-2 mt-4 md:gap-4 justify-center '>
            <div className='flex justify-between items-center mt-4'>
                <div className='flex flex-col ml-2'>
                    <h3 className='font-serif'>PROFILE</h3>
                    <h1 className='font-bold text-2xl'>{user.name}</h1>
                </div>
                <div className='flex gap-2'>
                    <button className='rounded-xl p-2 h-10 bg-slate-100 active:bg-slate-200'>
                        <Settings size={20} />
                    </button>
                </div>
            </div>
            <div className='rounded-2xl shadow-xl'>
                <div className='w-full max-w-sm bg-[#f7f7fd] p-6'>
                    <button className='relative bottom-3 right-3 rounded-xl active:bg-[#754bdf] h-10 w-10 flex items-center justify-center bg-[#8e51ff]' onClick={() => { navigate(`/update/${user._id}`) }}>
                        <Edit2 size={20} className='text-white' />
                    </button>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <img src="DefaultPfp.jpg" className='h-25 rounded-full' alt="Profile" />
                        <h2 className='font-medium text-xl'>{user.username}</h2>
                    </div>
                </div>
                <div className='w-full max-w-sm p-6'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <h2 className='text-center font-medium text-3xl'>Create your first interview</h2>
                        <button className='auth-btn'>Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

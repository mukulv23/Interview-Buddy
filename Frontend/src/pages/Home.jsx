import React from 'react'
import { Sparkles, RocketIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../contexts/AuthContext.jsx'

export const Home = () => {
    const navigate = useNavigate();
    const { user } = Auth();
    return (
        <div className='max-w-7xl mx-auto px-4 flex flex-col gap-4 mt-2 md:flex-row md:mt-8 md:gap-10'>
            <div className='flex flex-col gap-2 mt-4 md:flex-1 md:mt-12'>
                <div className='flex items-center justify-center bg-[#8e51ff] gap-1 rounded-2xl px-2 h-6 w-28 md:h-8 md:w-32'>
                    <Sparkles size={16} className='text-white' />
                    <span className='text-white font-medium text-sm'>AI Powered</span>
                </div>
                <h1 className='text-3xl font-bold md:text-7xl'>Ace Your Next Interview</h1>
                <span className='text-gray-500 text-sm md:text-2xl'>Practice with AI-powered mock interviews and land your dream job.</span>
            </div>
            <div className='flex flex-col gap-4 md:flex-1 md:w-full'>
                <div className='bg-amber-500 rounded-2xl h-40 md:h-80 '></div>
                {user ?
                    <button className='bg-[#8e51ff] rounded-2xl h-12 flex items-center justify-center gap-2 text-white active:bg-[#754bdf]  md:hover:bg-[#754bdf] md:transition-colors md:duration-200 cursor-pointer' onClick={() => navigate('/login')}>
                        <RocketIcon size={16} />
                        <span className='font-bold'>Explore</span>
                    </button> :
                    <button className='bg-[#8e51ff] rounded-2xl h-12 flex items-center justify-center gap-2 text-white active:bg-[#754bdf]  md:hover:bg-[#754bdf] md:transition-colors md:duration-200 cursor-pointer' onClick={() => navigate('/login')}>
                        <RocketIcon size={16} />
                        <span className='font-bold'>Get Started</span>
                    </button>}
            </div>
        </div>
    )
}

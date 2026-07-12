import React from 'react'
import { Sparkles, RocketIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../contexts/AuthContext.jsx'

export const Home = () => {
    const navigate = useNavigate();
    // const { user } = Auth();
    return (
        <section className='px-6 py-12 md:px-54'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-25 items-center'>
                <div>
                    <div className='flex items-center mb-2 justify-center bg-[#8e51ff] gap-1 rounded-2xl px-2 h-6 w-28 md:h-8 md:w-32'>
                        <Sparkles size={16} className='text-white' />
                        <span className='text-white font-medium text-sm'>AI Powered</span>
                    </div>
                    <h1 className='text-3xl mb-2 sm:text-4xl font-bold max-w-full md:max-w-125 leading-tight'>Ace Your Next Interview</h1>
                    <span className='text-gray-500 mb-2 text-sm md:text-2xl'>Practice with AI-powered mock interviews and land your dream job.</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <img src="hero.png" alt="image" />
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
        </section>
    )
}

import React from 'react'
import { Sparkles, RocketIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../contexts/AuthContext.jsx'

export const Home = () => {
    const navigate = useNavigate();
    const { user } = Auth();
    return (
        // <section className='px-6 py-12 md:px-54'>
        //     <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-25 items-center'>
        //         <div>
        //             <div className='flex items-center mb-2 justify-center bg-[#8e51ff] gap-1 rounded-2xl px-2 h-6 w-28 md:h-8 md:w-32'>
        //                 <Sparkles size={16} className='text-white' />
        //                 <span className='text-white font-medium text-sm'>AI Powered</span>
        //             </div>
        //             <h1 className='text-3xl mb-2 sm:text-4xl font-bold max-w-full md:max-w-125 leading-tight'>Ace Your Next Interview</h1>
        //             <span className='text-gray-500 mb-2 text-sm md:text-2xl'>Practice with AI-powered mock interviews and land your dream job.</span>
        //         </div>
        //         <div className='flex flex-col gap-2'>
        //             <img src="hero.png" alt="image" />
        // {user ?
        //     <button className='bg-[#8e51ff] rounded-2xl h-12 flex items-center justify-center gap-2 text-white active:bg-[#754bdf]  md:hover:bg-[#754bdf] md:transition-colors md:duration-200 cursor-pointer' onClick={() => navigate('/login')}>
        //         <RocketIcon size={16} />
        //         <span className='font-bold'>Explore</span>
        //     </button> :
        //     <button className='bg-[#8e51ff] rounded-2xl h-12 flex items-center justify-center gap-2 text-white active:bg-[#754bdf]  md:hover:bg-[#754bdf] md:transition-colors md:duration-200 cursor-pointer' onClick={() => navigate('/login')}>
        //         <RocketIcon size={16} />
        //         <span className='font-bold'>Get Started</span>
        //     </button>}
        //         </div>
        //     </div>
        // </section>

        <section className="px-6 md:px-54 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-25 items-center">
                {/* Left Part */}
                <div>

                    <div className='flex items-center mb-2 justify-center bg-[#8e51ff] gap-1 rounded-2xl px-2 h-6 w-28 md:h-8 md:w-32'>
                        <Sparkles size={16} className='text-white' />
                        <span className='text-white font-medium text-sm'>AI Powered</span>
                    </div>
                    <h1 className='text-3xl sm:text-4xl max-w-full md:max-w-125 font-bold text-slate-900 leading-tight mb-2'>Ace Your Next Interview</h1>
                    <span className='text-[#566476] max-w-full md:max-w-135 mb-2 leading-6'>Practice with AI-powered mock interviews and land your dream job.</span>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <button className="bg-[#13A594] cursor-pointer border border-[#13A594] hover:bg-[#13A594]/90 text-white text-sm font-semibold rounded-md px-5 py-2.5">
                            Manage cookie settings
                        </button>

                        <button className="bg-white border font-semibold cursor-pointer border-[#CDD7E3] text-[#0D1B2E] hover:bg-white/10 text-sm rounded-md px-5 py-2.5">
                            Privacy Center
                        </button>
                    </div>

                    <a
                        href="#"
                        className="mt-4 inline-block text-sm font-medium text-[#13A594] hover:underline"
                    >
                        Learn about ZoikoMeds Trust Center →
                    </a>

                    <p className="mt-4 flex max-w-full md:max-w-[450px] items-start gap-2 text-sm leading-6 text-[#566476]">
                        <img
                            src="/cookie-settings/view.png"
                            alt="image"
                            height={15}
                            width={15}
                            className="mt-1 shrink-0"
                        />
                        <span>
                            Essential cookies keep the site working. Non-essential cookies
                            are used only according to your choices and applicable law.
                        </span>
                    </p>

                </div>

                {/* Right part */}

                <div className='flex flex-col gap-2'>
                    <img src="hero.png" alt="image" height={400} width={400} />
                    {user ?
                        <button className='bg-[#8e51ff] max-w-100 rounded-2xl px-5 py-3 flex items-center justify-center gap-2 text-white active:bg-[#754bdf]  md:hover:bg-[#754bdf] md:transition-colors md:duration-200 cursor-pointer' onClick={() => navigate('/login')}>
                            <RocketIcon size={16} />
                            <span className='font-bold'>Explore</span>
                        </button> :
                        <button className='bg-[#8e51ff] max-w-100 rounded-2xl px-5 py-3 flex items-center justify-center gap-2 text-white active:bg-[#754bdf]  md:hover:bg-[#754bdf] md:transition-colors md:duration-200 cursor-pointer' onClick={() => navigate('/login')}>
                            <RocketIcon size={16} />
                            <span className='font-bold'>Get Started</span>
                        </button>}
                </div>
            </div>
        </section>
    )
}

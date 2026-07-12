import React, { useEffect } from 'react'
import { Sparkles, RocketIcon, ArrowRight, Verified } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../contexts/AuthContext.jsx'

export const Home = () => {
    const show = ()=>{
        alert("Full Project is yet to complete for now you can see ui Only.");
    }
    useEffect(()=>{
        show();
    },[])
    const navigate = useNavigate();
    // const { user } = Auth();
    return (
        <>
            <section className='px-6 py-18 md:px-54'>
                <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-25 items-center'>
                    <div>
                        <div className='flex items-center mb-2 justify-center bg-[#8e51ff] gap-1 rounded-2xl px-2 h-6 w-28 md:h-8 md:w-32'>
                            <Sparkles size={16} className='text-white' />
                            <span className='text-white font-medium text-sm'>AI Powered</span>
                        </div>
                        <h1 className='text-3xl mb-2 md:text-[42px] font-bold max-w-full md:max-w-125 leading-tight'>The Smarter Way to Prepare {" "}
                            <span className='text-[#6e2aeb]'>for Interviews with Ai</span>
                        </h1>
                        <span className='text-gray-500 mb-2 text-[17px]'>Practice interviews anytime with
                            AI-generated questions, submit your answers, and receive instant
                            feedback to improve your interview performance.
                        </span>
                        <div className="flex flex-col sm:flex-row gap-4 mt-5 mb-3">
                            <button
                                onClick={() => navigate("/register")}
                                className="hero-btn"
                            >
                                Create Free Account
                                <ArrowRight size={22} className="text-white mt-1" />
                            </button>

                            <button
                                onClick={() => navigate("/interviews")}
                                className="border border-gray-300 ptr bg-white text-[#0b1f3f] px-6 py-3 rounded-2xl text-lg font-medium hover:bg-gray-50 transition-all duration-300"
                            >
                                Start Interview
                            </button>
                        </div>
                        <div className='flex gap-2'>
                            <Verified size={35} className='text-[#6e2aeb]' />
                            <span className='text-gray-400 text-[13.5px]'>Built for students and job seekers who are serious about
                                interview preparation. Practice mock interviews,
                                identify your strengths and weaknesses,
                                and improve with AI-powered feedback-all at little to no cost.
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <img src="hero.png" alt="image" className='rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18)]' />
                    </div>
                </div>
            </section>
        </>
    )
}

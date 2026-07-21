import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Mic, BarChart3, FileText, Briefcase, TrendingUp,
    Sparkles, RocketIcon, ArrowRight, Verified, Quote, XCircle, CheckCircle2,
    User, SlidersHorizontal, MessageCircle, Award, Clock, Scale,
} from "lucide-react";

const FEATURES = [
    {
        icon: Sparkles,
        title: "AI-Generated Questions",
        desc: "Get realistic, role-specific interview questions generated instantly by AI",
    },
    {
        icon: BarChart3,
        title: "Instant Performance Feedback",
        desc: "Receive detailed scoring and feedback immediately after each answer",
    },
    {
        icon: Briefcase,
        title: "Role-Specific Practice",
        desc: "Choose from Technical, HR, or Mixed interviews tailored to your job role",
    },
    {
        icon: TrendingUp,
        title: "Track Your Progress",
        desc: "Monitor your improvement over time with scores and performance analytics",
    },
];

const BLOCKERS = [
    {
        problem: "Unclear on personal weaknesses",
        solution: "Get AI-driven insight into your weak areas",
    },
    {
        problem: "Generic prep material",
        solution: "Personalized questions based on your role",
    },
    {
        problem: "No feedback loop",
        solution: "Instant, actionable feedback after every session",
    },
];

const TESTIMONIAL = {
    quote:
        "After a few mock sessions, I stopped freezing up in Aptitude rounds. The feedback was specific, practical, and helped me walk into my next interview with real confidence.",
    name: "Debasish Dey",
    role: "Full Stack developer, Interview Agent user",
};

const STEPS = [
    {
        number: 1,
        icon: User,
        title: "Create Your Profile",
        desc: "Sign up and tell us your target role and experience level",
    },
    {
        number: 2,
        icon: SlidersHorizontal,
        title: "Configure Your Session",
        desc: "Choose interview type, difficulty, and number of questions",
    },
    {
        number: 3,
        icon: MessageCircle,
        title: "Practice with AI",
        desc: "Answer AI-generated questions via voice or text in real time",
    },
    {
        number: 4,
        icon: Award,
        title: "Get Results & Improve",
        desc: "Receive a detailed report with scores, feedback, and growth tips",
    },
];

const PERKS = [
    {
        icon: Clock,
        title: "Practice Anytime",
        desc: "Available 24/7, no scheduling needed",
    },
    {
        icon: Scale,
        title: "Judgment-Free Zone",
        desc: "Practice freely without real-world pressure",
    },
    {
        icon: TrendingUp,
        title: "Measurable Growth",
        desc: "Track score improvements across sessions",
    },
];

export const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* Hero Section */}
            <section className='px-6 py-12 md:px-54'>
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
                                onClick={() => navigate("/interview")}
                                className="border border-gray-300 ptr bg-white text-[#0b1f3f] px-6 py-3 rounded-2xl text-lg font-medium hover:bg-gray-50 transition-all duration-300"
                            >
                                Start Interview
                            </button>
                        </div>
                        <div className='flex gap-2 items-center'>
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

            {/* What My project offer */}

            <section className='bg-[#F6F9Fc] px-6 py-12 md:px-54'>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-4">
                            <Sparkles className="w-3.5 h-3.5" />
                            WHAT WE OFFER
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            Everything You Need to Ace Your Interview
                        </h2>
                        <p className="text-sm text-gray-500 mt-2">
                            Explore the powerful features that make interview practice effortless and effective.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        {FEATURES.map(({ icon: Icon, title, desc }) => (
                            <div
                                key={title}
                                className="flex items-start gap-4 border bg-white border-gray-200 rounded-xl px-5 py-5 sm:px-6 sm:py-6 hover:shadow-sm transition-shadow"
                            >
                                <div className="shrink-0 w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center">
                                    <Icon className="w-4.5 h-4.5 text-purple-600" strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="text-[15px] font-semibold text-gray-900">{title}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why it matters */}

            <section className='bg-gray-50 px-6 py-12 md:px-54'>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-4">
                            WHY IT MATTERS
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            Interview Anxiety Shouldn't Hold You Back
                        </h2>
                        <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
                            Most candidates don't fail because they lack skill — they struggle because they lack practice, structure, and confidence under pressure.
                        </p>
                    </div>

                    {/* Stat card */}
                    <div className="relative bg-[#8e51ff] rounded-2xl p-6 sm:p-8 mb-6 overflow-hidden">
                        <span className="inline-block text-[11px] font-medium text-white/90 bg-white/15 px-3 py-1 rounded-full mb-4">
                            Mock Practice Impact
                        </span>
                        <div className="absolute top-6 right-6 w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                            <BarChart3 className="w-4.5 h-4.5 text-white" strokeWidth={2} />
                        </div>

                        <div className="text-white text-5xl sm:text-6xl font-bold">76%</div>
                        <p className="text-white/90 text-sm mt-2 mb-5">
                            of candidates feel underprepared for interviews
                        </p>

                        <div className="bg-white/15 rounded-xl px-4 py-3">
                            <p className="text-white text-sm font-medium">
                                3x higher confidence with regular mock practice
                            </p>
                            <p className="text-white/80 text-xs mt-1">
                                Build familiarity with real interview pacing, sharpen your answers, and reduce stress before the big day.
                            </p>
                        </div>
                    </div>

                    {/* Blockers card */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6">
                        <h3 className="text-base font-semibold text-gray-900">From uncertainty to readiness</h3>
                        <p className="text-sm text-gray-500 mt-1 mb-4">
                            Common interview blockers and how AI-powered practice removes them.
                        </p>

                        <div className="flex flex-col gap-2.5">
                            {BLOCKERS.map(({ problem, solution }) => (
                                <div key={problem} className="bg-gray-50 rounded-xl px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0" strokeWidth={2} />
                                        <span className="text-xs text-red-400 line-through">{problem}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-1.5">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0" strokeWidth={2} />
                                        <span className="text-sm text-gray-700">{solution}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 text-center max-w-md mx-auto">
                        <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                            <Quote className="w-4 h-4 text-purple-600" strokeWidth={2} />
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">"{TESTIMONIAL.quote}"</p>
                        <div className="mt-4">
                            <p className="text-sm font-semibold text-gray-900">{TESTIMONIAL.name}</p>
                            <p className="text-xs text-gray-500">{TESTIMONIAL.role}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it will help students */}

            <section className='bg-[#F6F9FC] px-6 py-12 md:px-54'>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-4">
                            HOW IT HELPS YOU
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            Your Path to Interview Success
                        </h2>
                        <p className="text-sm text-gray-500 mt-2">
                            A simple, guided process designed to build real confidence.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        {STEPS.map(({ number, icon: Icon, title, desc }) => (
                            <div key={number} className="border bg-white border-gray-200 rounded-xl p-5 hover:shadow-sm transition-shadow">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-semibold flex items-center justify-center">
                                        {number}
                                    </div>
                                    <Icon className="w-4 h-4 text-gray-300" strokeWidth={2} />
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                                <p className="text-xs text-gray-500 mt-1">{desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Perks */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        {PERKS.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="bg-white flex items-start gap-3 border border-gray-200 rounded-xl p-4">
                                <div className="shrink-0 w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                                    <Icon className="w-4 h-4 text-purple-600" strokeWidth={2} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
                                    <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="bg-linear-to-r from-purple-600 to-purple-400 rounded-2xl px-6 py-10 sm:py-14 text-center">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                            Ready to Ace Your Next Interview?
                        </h3>
                        <p className="text-sm text-white/85 mt-2">
                            Start practicing today and turn preparation into confidence.
                        </p>
                        <button
                            onClick={() => navigate('./interview')}
                            className="inline-flex ptr items-center gap-2 bg-white text-purple-700 text-sm font-semibold px-5 py-2.5 rounded-lg mt-6 hover:bg-white/90 transition-colors">
                            Start Free Interview
                            <ArrowRight className="w-4 h-4" strokeWidth={2} />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

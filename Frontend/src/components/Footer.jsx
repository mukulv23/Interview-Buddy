import { ImageDownIcon, Scale, ScanFace, SlashIcon, Bot } from "lucide-react";

const SOCIALS = [
    { icon: ImageDownIcon, href: "#" },
    { icon: Scale, href: "#" },
    { icon: ScanFace, href: "#" },
    { icon: SlashIcon, href: "#" },
];

const FOOTER_COLUMNS = [
    {
        title: "PLATFORM",
        links: ["Start Interview", "Dashboard"],
    },
    {
        title: "CONTACT",
        links: ["Contact Us", "About Us"],
    },
    {
        title: "SOCIAL",
        links: ["LinkedIn", "Github"]
    }
];

import React from 'react'

export const Footer = () => {
    return (
        <section className="w-full bg-linear-to-br from-[#1a0a2e] to-[#2d0f3d] px-6 sm:px-10 py-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className='flex gap-4 items-center md:cursor-pointer' onClick={() => {
                        navigate('/');
                    }}>
                        <div className='rounded-xl p-2'>
                            <Bot size={30} className='text-[#a16efe]' />
                        </div>
                        <span className='font-bold text-lg text-white'>Interview Buddy</span>
                    </div>

                    <div className="flex items-center gap-2">
                        {SOCIALS.map(({ icon: Icon, href }, i) => (
                            <a
                                key={i}
                                href={href}
                                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-white/15 mt-8 mb-10" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                    {FOOTER_COLUMNS.map(({ title, links }) => (
                        <div key={title}>
                            <h4 className="text-xs font-semibold text-white/90 tracking-wide mb-4">
                                {title}
                            </h4>
                            <ul className="flex flex-col gap-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div >
        </section >
    )
}
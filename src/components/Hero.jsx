import React from 'react'
import profileImg from '../Images/mi.ipg.png'
import altImg from '../Images/IMG.jpg.jpg' // الاحتفاظ بالاستيراد الأصلي تماماً
import { motion } from 'framer-motion'
import {
    Github,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    ChevronDown,
    ExternalLink,
    Sparkles,
    ArrowUpRight,
    Code2,
} from 'lucide-react'

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 md:px-8 overflow-hidden"
        >
            {/* Ambient Background Radial Lights */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-purple-600/12 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

                        {/* Left Column: Introduction & Details */}
                        <div className="lg:w-7/12 text-left">
                            {/* Top Status Pill */}
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-6 shadow-sm"
                            >
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <Sparkles size={13} className="text-purple-400" />
                                <span>Full-Stack .NET Developer • Available for Work</span>
                            </motion.div>

                            {/* Name */}
                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 tracking-tight leading-[1.1] text-white"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                MOHAMED{' '}
                                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                                    SHERIF KAMEL
                                </span>
                            </motion.h1>

                            {/* Description (النص الأصلي بالكامل) */}
                            <motion.p
                                className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-normal"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.45 }}
                            >
                                Motivated Full-Stack .NET Developer with a solid foundation in
                                building web applications using{' '}
                                <span className="text-white font-semibold">
                                    ASP.NET Core (MVC & Web API)
                                </span>
                                ,{' '}
                                <span className="text-white font-semibold">
                                    Entity Framework Core
                                </span>
                                , and{' '}
                                <span className="text-white font-semibold">SQL Server</span>.
                            </motion.p>

                            {/* Primary CTA Buttons */}
                            <motion.div
                                className="flex flex-wrap items-center gap-4 mb-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <a
                                    href="#projects"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 transition-all duration-300 group/btn cursor-pointer"
                                >
                                    <span>Let’s get started</span>
                                    <ArrowUpRight
                                        size={16}
                                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                                    />
                                </a>

                                <span className="text-xs md:text-sm text-gray-400 font-medium">
                                    View my projects and case studies
                                </span>
                            </motion.div>

                            {/* Freelance Platforms Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.75 }}
                                className="pt-6 border-t border-white/[0.08]"
                            >
                                <h4 className="text-gray-400 text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <Code2 size={14} className="text-purple-400" />
                                    <span>I work as a freelancer on</span>
                                </h4>

                                <div className="flex flex-wrap gap-3 items-center">
                                    {/* Khamsat */}
                                    <a
                                        href="https://khamsat.com/user/mohame2110"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Khamsat profile (opens in new tab)"
                                        className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#110e1b]/80 hover:bg-purple-600/25 border border-white/[0.08] hover:border-purple-400/40 text-xs md:text-sm font-semibold text-white transition-all duration-200 shadow-sm"
                                    >
                                        <span className="text-purple-400 font-bold">Khamsat</span>
                                        <ExternalLink
                                            size={14}
                                            className="text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                        />
                                    </a>

                                    {/* Mostaql */}
                                    <a
                                        href="https://mostaql.com/u/Mohamed21sherif"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Mostaql profile (opens in new tab)"
                                        className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#110e1b]/80 hover:bg-purple-600/25 border border-white/[0.08] hover:border-purple-400/40 text-xs md:text-sm font-semibold text-white transition-all duration-200 shadow-sm"
                                    >
                                        <span className="text-purple-400 font-bold">Mostaql</span>
                                        <ExternalLink
                                            size={14}
                                            className="text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                        />
                                    </a>

                                    {/* Upwork */}
                                    <a
                                        href="https://www.upwork.com/freelancers/~01f19741b8cdf17a15"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Upwork profile (opens in new tab)"
                                        className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#110e1b]/80 hover:bg-purple-600/25 border border-white/[0.08] hover:border-purple-400/40 text-xs md:text-sm font-semibold text-white transition-all duration-200 shadow-sm"
                                    >
                                        <span className="text-purple-400 font-bold">Upwork</span>
                                        <ExternalLink
                                            size={14}
                                            className="text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                        />
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Profile Image Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="lg:w-5/12 flex justify-center lg:justify-end"
                        >
                            <div className="relative group">
                                {/* Outer Ambient Glowing Ring */}
                                <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 opacity-40 blur-xl group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />

                                {/* Profile Image Container */}
                                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden p-2 bg-[#110e1b]/90 backdrop-blur-xl border border-white/15 shadow-2xl shadow-purple-950/50">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-700/20 via-transparent to-indigo-700/10 pointer-events-none z-10" />
                                    <img
                                        src={profileImg}
                                        alt="Mohamed Sherif Kamel"
                                        className="w-full h-full object-cover object-center rounded-full scale-100 group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Floating Tech Badge Overlays */}
                                <div className="absolute -bottom-2 -right-2 md:bottom-4 md:right-4 z-20 px-4 py-2 rounded-2xl bg-[#110e1b]/95 backdrop-blur-xl border border-white/15 shadow-xl flex items-center gap-2.5">
                                    <span className="w-3 h-3 rounded-full bg-purple-500 animate-ping absolute" />
                                    <span className="w-3 h-3 rounded-full bg-purple-500 relative" />
                                    <span className="text-xs font-bold text-white tracking-wide">
                                        .NET Developer
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
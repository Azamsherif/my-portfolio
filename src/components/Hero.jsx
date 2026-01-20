import React from 'react'
import profileImg from '../assets/profile.jpg?inline'
import altImg from '../Images/IMG.jpg.jpg'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Phone, ChevronDown, ExternalLink } from 'lucide-react'

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-6">
            <div className="mx-auto w-full max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10">
                        
                        <div className="lg:w-1/2 text-left">
                            

                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 gradient-text leading-tight"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                MOHAMED SHERIF KAMEL
                            </motion.h1>

                            <motion.p
                                className="text-gray-400 mb-6 max-w-2xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.45 }}
                            >
                                Motivated Full-Stack .NET Developer with a solid foundation in building web applications using ASP.NET Core (MVC & Web API), Entity Framework Core, and SQL Server.
                            </motion.p>

                            <motion.div
                                className="flex items-center gap-6 mb-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <a href="#projects" className="neon-btn px-6 py-3 rounded-md inline-block font-semibold shadow-lg">
                                    Let’s get started
                                </a>
                                <div className="text-sm text-gray-400">View my projects and case studies</div>
                            </motion.div>

                            
                            <div className="mt-8">
                                <h4 className="text-gray-400 text-sm mb-4">I work as a freelancer on</h4>
                                <div className="flex flex-wrap gap-4 items-center">
                                    <a
                                        href="https://khamsat.com/user/mohame2110"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Khamsat profile (opens in new tab)"
                                        className="freelance-btn"
                                    >
                                        <span>Khamsat</span>
                                        <ExternalLink size={14} />
                                    </a>
                                    <a
                                        href="https://mostaql.com/u/Mohamed21sherif"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Mostaql profile (opens in new tab)"
                                        className="freelance-btn"
                                    >
                                        <span>Mostaql</span>
                                        <ExternalLink size={14} />
                                    </a>
                                    <a
                                        href="https://www.upwork.com/freelancers/~01f19741b8cdf17a15"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Upwork profile (opens in new tab)"
                                        className="freelance-btn"
                                    >
                                        <span>Upwork</span>
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        
                        <div className="lg:w-1/2 flex justify-center lg:justify-end">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-8 ring-white/5 shadow-2xl floating">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-700/10 to-indigo-700/5 pointer-events-none" />
                                <img
                                    src={altImg}
                                    alt="Profile"
                                    className="w-full h-full object-cover object-center rounded-full"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero

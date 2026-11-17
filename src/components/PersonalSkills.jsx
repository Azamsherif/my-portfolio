import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Users, Zap, Palette, Sparkles } from 'lucide-react'

const PersonalSkills = () => {
    const skills = [
        {
            title: 'Problem-Solving & Analytical Thinking',
            icon: <Lightbulb size={26} />,
            description: 'Breaking down complex problems into manageable solutions',
        },
        {
            title: 'Team Collaboration & Communication',
            icon: <Users size={26} />,
            description: 'Effective teamwork and clear communication',
        },
        {
            title: 'Adaptability & Fast Learner',
            icon: <Zap size={26} />,
            description: 'Quickly adapting to new technologies and environments',
        },
        {
            title: 'Creative & Innovative',
            icon: <Palette size={26} />,
            description: 'Bringing creative solutions to technical challenges',
        },
    ]

    return (
        <section
            id="personal-skills"
            className="relative py-24 px-4 md:px-8 overflow-hidden"
        >
            {/* Ambient Subtle Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Editorial Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-4"
                    >
                        <Sparkles size={13} className="text-purple-400" />
                        <span>Interpersonal & Mindset Strengths</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3"
                    >
                        Personal{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                            Skills
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-sm md:text-base"
                    >
                        Core professional attributes that drive effective engineering collaboration and continuous growth.
                    </motion.p>
                </div>

                {/* 4-Column Refined Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-3xl bg-[#110e1b]/80 backdrop-blur-xl border border-white/[0.08] hover:border-purple-500/40 p-6 md:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-950/30 overflow-hidden"
                        >
                            {/* Top Ambient Glow Line */}
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Subtle Radial Corner Gradient */}
                            <div className="absolute -top-12 -right-12 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors duration-300 pointer-events-none" />

                            <div>
                                {/* Top Bar: Icon Container + Index Number */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-13 h-13 p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 group-hover:scale-105 group-hover:border-purple-400/40 transition-all duration-300 shadow-inner">
                                        {skill.icon}
                                    </div>

                                    <span className="text-xs font-mono font-bold text-white/20 group-hover:text-purple-400/60 transition-colors">
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-base md:text-lg font-bold text-white group-hover:text-purple-200 transition-colors leading-snug mb-3">
                                    {skill.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>

                            {/* Bottom Decorative Accent Bar */}
                            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center">
                                <div className="h-1 w-8 rounded-full bg-purple-500/30 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-fuchsia-400 transition-all duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PersonalSkills
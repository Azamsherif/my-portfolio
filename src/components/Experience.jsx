import React from 'react'
import { motion } from 'framer-motion'
import {
    Briefcase,
    Database,
    GitMerge,
    ShieldCheck,
    Gauge,
    Building2,
    Sparkles,
} from 'lucide-react'

const Experience = () => {
    const achievements = [
        {
            title: 'ERD Modeling',
            description:
                'Architected a comprehensive Entity Relationship Diagram (ERD) to map complex freelance platform workflows.',
            icon: GitMerge,
        },
        {
            title: 'Schema Implementation',
            description:
                'Developed and optimized a relational database schema using SQL Server based on the ERD.',
            icon: Database,
        },
        {
            title: 'Data Integrity',
            description:
                'Applied advanced normalization techniques (1NF, 2NF, 3NF) and constraints to ensure data consistency.',
            icon: ShieldCheck,
        },
        {
            title: 'Performance Tuning',
            description:
                'Wrote efficient T-SQL queries and stored procedures to handle high-volume data operations.',
            icon: Gauge,
        },
    ]

    return (
        <section
            id="experience"
            className="relative py-24 px-4 md:px-8 overflow-hidden"
        >
            {/* Ambient Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[360px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Editorial Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-4"
                    >
                        <Briefcase size={13} className="text-purple-400" />
                        <span>Work History & Impact</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3"
                    >
                        Professional{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                            Experience
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-sm md:text-base"
                    >
                        Delivering scalable database architectures and high-performance data solutions for real-world platforms.
                    </motion.p>
                </div>

                {/* Main Experience Architectural Card */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    viewport={{ once: true }}
                    className="group relative rounded-3xl bg-[#110e1b]/80 backdrop-blur-xl border border-white/[0.08] hover:border-purple-500/40 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/30"
                >
                    {/* Top Ambient Glow Line */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

                    {/* Role & Platform Header Banner */}
                    <div className="relative px-6 py-6 md:px-10 md:py-8 bg-gradient-to-br from-purple-600/20 via-indigo-600/10 to-transparent border-b border-white/[0.08]">
                        {/* Subtle Background Grid */}
                        <div
                            className="absolute inset-0 opacity-[0.05] pointer-events-none"
                            style={{
                                backgroundImage:
                                    'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
                                backgroundSize: '20px 20px',
                            }}
                        />

                        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-start sm:items-center gap-4 md:gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-[#0b0914]/85 border border-white/10 flex items-center justify-center text-purple-400 group-hover:scale-105 group-hover:border-purple-400/40 transition-all duration-300 shrink-0 shadow-inner">
                                    <Briefcase size={26} />
                                </div>

                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/25 text-[11px] font-semibold text-purple-300 mb-2">
                                        <Sparkles size={11} className="text-purple-400" />
                                        <span>Freelance Engineering Role</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                                        Database Design & Architecture
                                    </h3>
                                </div>
                            </div>

                            {/* Company / Platform Pill */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-purple-200 text-xs md:text-sm font-semibold self-start sm:self-center shrink-0">
                                <Building2 size={15} className="text-purple-400" />
                                <span>Khamsat</span>
                            </div>
                        </div>
                    </div>

                    {/* Key Contributions Grid */}
                    <div className="p-6 md:p-10">
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
                            Key Contributions & Deliverables
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                            {achievements.map((item, idx) => {
                                const IconComponent = item.icon
                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                                        viewport={{ once: true }}
                                        className="p-5 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.06] hover:border-purple-500/30 transition-all duration-200 flex items-start gap-4"
                                    >
                                        <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0 mt-0.5">
                                            <IconComponent size={18} />
                                        </div>

                                        <div>
                                            <h4 className="text-sm md:text-base font-bold text-white mb-1.5">
                                                {item.title}
                                            </h4>
                                            <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>

                        {/* Bottom Stack Tags */}
                        <div className="mt-7 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
                            {[
                                'SQL Server',
                                'ERD Modeling',
                                'T-SQL',
                                'Normalization (1NF–3NF)',
                                'Stored Procedures',
                                'Relational Schema',
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-medium rounded-lg bg-white/[0.04] text-purple-200 border border-white/[0.07]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience
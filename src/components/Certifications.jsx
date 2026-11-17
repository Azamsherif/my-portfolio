import React from 'react'
import { motion } from 'framer-motion'
import {
    Award,
    Calendar,
    MapPin,
    Building2,
    BadgeCheck,
    Sparkles,
} from 'lucide-react'

const Certifications = () => {
    const certifications = [
        {
            title: 'Full-Stack .NET Development',
            organization: 'Digital Egypt Pioneers Initiative (DEPI)',
            period: '2025 – Present',
            location: 'Assiut, Egypt',
        },
        {
            title: 'Computer Essentials',
            organization: 'Edraak',
            period: '2024',
        },
        {
            title: 'ICDL',
            organization: 'Edraak',
            period: '2023 – 2024',
        },
        {
            title: 'Introduction to Databases',
            organization: 'Information Technology Institute (ITI)',
            period: '2022',
            location: 'Cairo',
        },
        {
            title: 'Python Programming Basics',
            organization: 'Udacity',
            period: '2021',
            location: 'Cairo',
        },
    ]

    return (
        <section
            id="certifications"
            className="relative py-24 px-4 md:px-8 overflow-hidden"
        >
            {/* Ambient Subtle Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Editorial Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-4"
                    >
                        <BadgeCheck size={14} className="text-purple-400" />
                        <span>Verified Credentials & Training</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3"
                    >
                        Certifications &{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                            Courses
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-sm md:text-base"
                    >
                        Continuous learning milestones and accredited programs across software engineering, databases, and core computing.
                    </motion.p>
                </div>

                {/* 3-Column Architectural Credential Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => {
                        const isCurrent = cert.period.toLowerCase().includes('present')

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="group relative rounded-3xl bg-[#110e1b]/80 backdrop-blur-xl border border-white/[0.08] hover:border-purple-500/40 p-6 md:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-950/30 overflow-hidden"
                            >
                                {/* Top Ambient Glow Line */}
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Subtle Corner Accent */}
                                <div className="absolute -top-12 -right-12 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors duration-300 pointer-events-none" />

                                <div>
                                    {/* Top Row: Award Icon & Date Pill */}
                                    <div className="flex items-center justify-between gap-3 mb-5">
                                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 group-hover:scale-105 group-hover:border-purple-400/40 transition-all duration-300 shrink-0 shadow-inner">
                                            <Award size={22} />
                                        </div>

                                        <div
                                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold border ${isCurrent
                                                    ? 'bg-purple-500/15 border-purple-500/30 text-purple-200'
                                                    : 'bg-white/[0.04] border-white/[0.08] text-gray-300'
                                                }`}
                                        >
                                            <Calendar
                                                size={13}
                                                className={
                                                    isCurrent
                                                        ? 'text-purple-400'
                                                        : 'text-gray-400'
                                                }
                                            />
                                            <span>{cert.period}</span>
                                        </div>
                                    </div>

                                    {/* Certification Title */}
                                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-200 transition-colors leading-snug mb-2.5">
                                        {cert.title}
                                    </h3>

                                    {/* Issuing Organization */}
                                    <div className="flex items-start gap-2 text-xs md:text-sm text-purple-300/90 font-medium leading-relaxed">
                                        <Building2
                                            size={15}
                                            className="text-purple-400 mt-0.5 shrink-0"
                                        />
                                        <span>{cert.organization}</span>
                                    </div>
                                </div>

                                {/* Bottom Metadata Bar */}
                                <div className="mt-6 pt-4 border-t border-white/[0.07] flex items-center justify-between gap-2 text-xs">
                                    {cert.location ? (
                                        <div className="inline-flex items-center gap-1.5 text-gray-400 font-medium">
                                            <MapPin size={13} className="text-purple-400/80" />
                                            <span>{cert.location}</span>
                                        </div>
                                    ) : (
                                        <div className="inline-flex items-center gap-1.5 text-gray-500 font-medium">
                                            <Sparkles size={12} className="text-purple-400/60" />
                                            <span>Verified Certificate</span>
                                        </div>
                                    )}

                                    <span className="text-[11px] font-mono text-white/25 group-hover:text-purple-400/60 transition-colors">
                                        #{String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Certifications
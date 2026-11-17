import React from 'react'
import { motion } from 'framer-motion'
import {
    GraduationCap,
    Calendar,
    MapPin,
    Award,
    BookOpen,
    Sparkles,
} from 'lucide-react'

const Education = () => {
    const education = [
        {
            degree: 'Full-Stack .NET Development – 6-month Program',
            institution:
                'Digital Egypt Pioneers Initiative (DEPI), Ministry of Communications – Assiut Branch',
            period: '06/2025 – 12/2025',
            location: 'Assiut, Egypt',
        },
        {
            degree: 'Bachelor of Computer Science',
            institution: 'Arab Open University (AOU)',
            period: '2019 – 2023',
            location: 'Cairo, Egypt',
        },
    ]

    return (
        <section
            id="education"
            className="relative py-24 px-4 md:px-8 overflow-hidden"
        >
            {/* Ambient Subtle Background Glow */}
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Editorial Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-4"
                    >
                        <BookOpen size={13} className="text-purple-400" />
                        <span>Academic & Technical Background</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3"
                    >
                        Education &{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                            Training
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-sm md:text-base"
                    >
                        Formal computer science foundation paired with specialized full-stack engineering training.
                    </motion.p>
                </div>

                {/* Connected Vertical Timeline */}
                <div className="relative pl-6 md:pl-10 space-y-8">
                    {/* Vertical Timeline Spine */}
                    <div
                        className="absolute left-[11px] md:left-[19px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-purple-500 via-fuchsia-500/40 to-white/5 rounded-full"
                        aria-hidden="true"
                    />

                    {education.map((edu, index) => {
                        const isLatest = index === 0
                        const BadgeIcon = isLatest ? Award : GraduationCap

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                {/* Timeline Node Indicator */}
                                <div
                                    className={`absolute -left-6 md:-left-10 top-8 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ${isLatest
                                            ? 'bg-purple-600 border-purple-300/60 shadow-lg shadow-purple-500/50'
                                            : 'bg-[#110e1b] border-purple-500/40 group-hover:border-purple-400'
                                        }`}
                                >
                                    <span
                                        className={`w-2 h-2 rounded-full ${isLatest
                                                ? 'bg-white'
                                                : 'bg-purple-400 group-hover:scale-125 transition-transform'
                                            }`}
                                    />
                                </div>

                                {/* Education Card */}
                                <div className="relative rounded-3xl bg-[#110e1b]/80 backdrop-blur-xl border border-white/[0.08] hover:border-purple-500/40 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/30 overflow-hidden">
                                    {/* Subtle Top Hover Glow */}
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">
                                        {/* Left Icon + Details */}
                                        <div className="flex items-start gap-4 md:gap-5">
                                            <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 group-hover:scale-105 transition-all duration-300 shrink-0 mt-0.5">
                                                <BadgeIcon size={24} />
                                            </div>

                                            <div>
                                                {/* Category Pill */}
                                                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-semibold text-purple-300 mb-2.5">
                                                    <Sparkles size={11} className="text-purple-400" />
                                                    <span>
                                                        {isLatest
                                                            ? 'Intensive Technical Program'
                                                            : 'Academic Degree'}
                                                    </span>
                                                </div>

                                                {/* Degree Title */}
                                                <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors leading-snug mb-2">
                                                    {edu.degree}
                                                </h3>

                                                {/* Institution */}
                                                <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed">
                                                    {edu.institution}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Right Metadata Pills (Period & Location) */}
                                        <div className="flex flex-row md:flex-col items-start md:items-end gap-2 shrink-0 pl-14 md:pl-0">
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-200 text-xs font-semibold">
                                                <Calendar size={14} className="text-purple-400" />
                                                <span>{edu.period}</span>
                                            </div>

                                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.07] text-gray-300 text-xs font-medium">
                                                <MapPin size={13} className="text-gray-400" />
                                                <span>{edu.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Education
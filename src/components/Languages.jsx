import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Languages as LanguagesIcon, Sparkles } from 'lucide-react'

const Languages = () => {
    const languages = [
        {
            name: 'Arabic',
            level: 'Native',
            percentage: 100,
        },
        {
            name: 'English',
            level: 'B1',
            percentage: 60,
        },
    ]

    return (
        <section
            id="languages"
            className="relative py-24 px-4 md:px-8 overflow-hidden"
        >
            {/* Ambient Subtle Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[300px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Editorial Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-4"
                    >
                        <LanguagesIcon size={13} className="text-purple-400" />
                        <span>Communication Proficiency</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3"
                    >
                        Spoken{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                            Languages
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-sm md:text-base"
                    >
                        Language fluency enabling seamless collaboration across local and international technical teams.
                    </motion.p>
                </div>

                {/* 2-Column Balanced Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {languages.map((lang, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            viewport={{ once: true }}
                            className="group relative rounded-3xl bg-[#110e1b]/80 backdrop-blur-xl border border-white/[0.08] hover:border-purple-500/40 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/30 overflow-hidden"
                        >
                            {/* Top Ambient Glow Line */}
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Card Header: Icon, Language Name & Level Badge */}
                            <div className="flex items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:scale-105 group-hover:border-purple-400/40 transition-all duration-300 shrink-0 shadow-inner">
                                        <Globe size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                                            {lang.name}
                                        </h3>
                                        <span className="text-xs text-gray-400 font-medium">
                                            Proficiency Level
                                        </span>
                                    </div>
                                </div>

                                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-200 text-xs font-bold tracking-wide">
                                    <Sparkles size={12} className="text-purple-400" />
                                    {lang.level}
                                </span>
                            </div>

                            {/* Progress Section */}
                            <div>
                                <div className="flex items-center justify-between text-xs mb-2">
                                    <span className="text-gray-400 font-medium">Fluency Meter</span>
                                    <span className="font-mono font-bold text-purple-300">
                                        {lang.percentage}%
                                    </span>
                                </div>

                                {/* Progress Track */}
                                <div className="w-full h-2.5 rounded-full bg-white/[0.06] border border-white/[0.06] p-0.5 overflow-hidden">
                                    <motion.div
                                        className="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-400 shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${lang.percentage}%` }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.2 + index * 0.2,
                                            ease: 'easeOut',
                                        }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Languages
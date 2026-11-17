import React from 'react'
import { motion } from 'framer-motion'
import {
    UserCheck,
    Server,
    Code2,
    GitBranch,
    Container,
    Award,
    Sparkles,
} from 'lucide-react'

const About = () => {
    const corePillars = [
        {
            icon: Server,
            title: 'Backend Engineering',
            subtitle: 'ASP.NET Core (MVC & Web API), EF Core & SQL Server',
        },
        {
            icon: Code2,
            title: 'Software Craftsmanship',
            subtitle: 'Clean Code, SOLID Principles & Scalable Architecture',
        },
        {
            icon: GitBranch,
            title: 'Full SDLC & Quality',
            subtitle: 'Documentation, Testing & Git Version Control',
        },
        {
            icon: Container,
            title: 'Modern Stack & DevOps',
            subtitle: 'Modern Front-End & Docker Containerization',
        },
    ]

    return (
        <section
            id="about"
            className="relative py-24 px-4 md:px-8 overflow-hidden"
        >
            {/* Ambient Subtle Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-4"
                    >
                        <UserCheck size={13} className="text-purple-400" />
                        <span>Developer Profile</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
                    >
                        About{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                            Me
                        </span>
                    </motion.h2>
                </div>

                {/* Bento Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* Left Column: Main Narrative Bio (7 Cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 relative rounded-3xl bg-[#110e1b]/80 backdrop-blur-xl border border-white/[0.08] p-7 md:p-10 flex flex-col justify-between overflow-hidden group hover:border-purple-500/30 transition-colors duration-300"
                    >
                        {/* Top Accent Line */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />

                        {/* Decorative Background Grid */}
                        <div
                            className="absolute inset-0 opacity-[0.04] pointer-events-none"
                            style={{
                                backgroundImage:
                                    'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
                                backgroundSize: '22px 22px',
                            }}
                        />

                        <div className="relative z-10">
                            {/* Top Credential Badge */}
                            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-6">
                                <Award size={16} className="text-purple-400 shrink-0" />
                                <span className="text-xs font-semibold text-purple-200">
                                    Full-Stack .NET Developer • DEPI Graduate
                                </span>
                            </div>

                            {/* Bio Paragraphs (نفس النص الأصلي بالضبط) */}
                            <div className="space-y-5 text-gray-300 text-base md:text-[17px] leading-relaxed">
                                <p>
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
                                    <br className="hidden sm:inline" /> A graduate of the intensive{' '}
                                    <span className="text-white font-semibold">
                                        Digital Egypt Pioneers Initiative (DEPI)
                                    </span>
                                    , where I mastered the full{' '}
                                    <span className="text-white font-semibold">
                                        Software Development Life Cycle (SDLC)
                                    </span>
                                    , including professional documentation, testing, and Git version
                                    control.
                                </p>

                                <p>
                                    Proficient in modern front-end technologies and Docker
                                    containerization. Passionate about writing{' '}
                                    <span className="text-white font-semibold">Clean Code</span>,
                                    implementing{' '}
                                    <span className="text-white font-semibold">
                                        SOLID principles
                                    </span>
                                    , and delivering scalable, high-performance technical solutions.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Key Tech Highlights Bar */}
                        <div className="relative z-10 mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
                            {[
                                'ASP.NET Core',
                                'EF Core',
                                'SQL Server',
                                'Clean Code',
                                'SOLID',
                                'Docker',
                                'Git',
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-medium rounded-lg bg-white/[0.04] text-purple-200 border border-white/[0.07]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Engineering Pillars Grid (5 Cols) */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                        {corePillars.map((pillar, idx) => {
                            const IconComponent = pillar.icon
                            return (
                                <motion.div
                                    key={pillar.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                                    viewport={{ once: true }}
                                    className="group relative p-5 rounded-2xl bg-[#110e1b]/80 backdrop-blur-xl border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 flex items-start gap-4"
                                >
                                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 group-hover:scale-105 transition-all duration-300 shrink-0">
                                        <IconComponent size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm md:text-base font-bold text-white group-hover:text-purple-300 transition-colors mb-1">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-xs text-gray-400 leading-relaxed">
                                            {pillar.subtitle}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
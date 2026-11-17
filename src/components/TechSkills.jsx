import React from 'react'
import { motion } from 'framer-motion'
import {
    Code,
    Database,
    Server,
    GitBranch,
    CheckCircle2,
    Cpu,
    Sparkles,
} from 'lucide-react'

const TechSkills = () => {
    const skillCategories = [
        {
            title: 'Frontend Technologies',
            tag: 'Client-Side & UI',
            icon: <Code size={22} />,
            accent: 'from-fuchsia-500/20 via-purple-500/10 to-transparent',
            skills: [
                'HTML5, CSS3, JavaScript (ES6+)',
                'Bootstrap 5, Responsive Web Design',
                'Flexbox, CSS Grid, Media Queries',
                'DOM Manipulation, Event Handling, AJAX/Fetch API',
            ],
        },
        {
            title: 'Backend Technologies',
            tag: 'Server-Side & APIs',
            icon: <Server size={22} />,
            accent: 'from-purple-500/20 via-indigo-500/10 to-transparent',
            skills: [
                '.NET 10/6, ASP.NET Core (MVC & Web API)',
                'Entity Framework Core (EF Core), LINQ',
                'RESTful APIs, Swagger/OpenAPI',
                'Identity Framework, JWT Authentication',
                'Dependency Injection, Asynchronous Programming (Async/Await)',
            ],
        },
        {
            title: 'Database Management',
            tag: 'Data Modeling & Storage',
            icon: <Database size={22} />,
            accent: 'from-indigo-500/20 via-violet-500/10 to-transparent',
            skills: [
                'Microsoft SQL Server',
                'SQL (Stored Procedures, Functions, Joins)',
                'Database Schema Design, Normalization, Migrations',
            ],
        },
        {
            title: 'Development Tools & Practices',
            tag: 'Architecture & Workflow',
            icon: <GitBranch size={22} />,
            accent: 'from-violet-500/20 via-purple-500/10 to-transparent',
            skills: [
                'Git, GitHub',
                'Docker (Containerization)',
                'Agile, Scrum, Software Documentation',
                'SOLID Principles, OOP, Clean Architecture, Design Patterns',
            ],
        },
    ]

    return (
        <section
            id="skills"
            className="relative py-24 px-4 md:px-8 overflow-hidden"
        >
            {/* Ambient Subtle Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Editorial Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-4"
                    >
                        <Cpu size={13} className="text-purple-400" />
                        <span>Core Competencies & Stack</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3"
                    >
                        Technical{' '}
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
                        End-to-end engineering capabilities spanning modern UI development, enterprise .NET backends, relational databases, and clean architecture.
                    </motion.p>
                </div>

                {/* 2x2 Architectural Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-3xl bg-[#110e1b]/80 backdrop-blur-xl border border-white/[0.08] hover:border-purple-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/30"
                        >
                            {/* Top Ambient Glow Line */}
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Card Header Banner */}
                            <div
                                className={`relative px-6 py-5 md:px-7 md:py-6 bg-gradient-to-br ${category.accent} border-b border-white/[0.08] flex items-center justify-between gap-4`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[#0b0914]/80 border border-white/10 flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:scale-105 group-hover:border-purple-400/40 transition-all duration-300 shrink-0 shadow-inner">
                                        {category.icon}
                                    </div>
                                    <div>
                                        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-semibold text-purple-300 mb-1">
                                            <Sparkles size={10} className="text-purple-400" />
                                            {category.tag}
                                        </span>
                                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-200 transition-colors leading-snug">
                                            {category.title}
                                        </h3>
                                    </div>
                                </div>

                                <span className="hidden sm:inline-flex items-center justify-center px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-[11px] font-semibold text-gray-300 shrink-0">
                                    {category.skills.length} Areas
                                </span>
                            </div>

                            {/* Skills List Body */}
                            <div className="p-6 md:p-7 flex-1 flex flex-col justify-center">
                                <ul className="space-y-3">
                                    {category.skills.map((skill, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.05] hover:border-purple-500/25 transition-all duration-200 text-xs md:text-sm text-gray-200 leading-relaxed"
                                        >
                                            <CheckCircle2
                                                size={16}
                                                className="text-purple-400 mt-0.5 shrink-0"
                                            />
                                            <span className="font-medium text-gray-200">
                                                {skill}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechSkills
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Send,
    ArrowUpRight,
    Copy,
    Check,
    MessageSquare,
} from 'lucide-react'

const Contact = () => {
    const [copiedField, setCopiedField] = useState(null)

    const handleCopy = (text, field) => {
        navigator.clipboard.writeText(text)
        setCopiedField(field)
        setTimeout(() => setCopiedField(null), 2000)
    }

    return (
        <section
            id="contact"
            className="relative py-24 px-4 md:px-8 overflow-hidden"
        >
            {/* Ambient Subtle Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-purple-600/12 blur-[140px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Editorial Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-4"
                    >
                        <MessageSquare size={13} className="text-purple-400" />
                        <span>Direct Communication</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3"
                    >
                        Get In{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-sm md:text-base"
                    >
                        I'm always open to discussing new projects, creative ideas, or opportunities.
                    </motion.p>
                </div>

                {/* Main Contact Architectural Container */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl bg-[#110e1b]/80 backdrop-blur-xl border border-white/[0.08] overflow-hidden shadow-2xl shadow-purple-950/30"
                >
                    {/* Top Ambient Glow Line */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

                    {/* Decorative Background Grid */}
                    <div
                        className="absolute inset-0 opacity-[0.04] pointer-events-none"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
                            backgroundSize: '22px 22px',
                        }}
                    />

                    <div className="relative z-10 p-6 md:p-10 lg:p-12">
                        {/* 2x2 Contact Channels Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                            {/* Email Card */}
                            <div className="group p-5 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.07] hover:border-purple-500/35 transition-all duration-300 flex items-start justify-between gap-3">
                                <div className="flex items-start gap-4 min-w-0">
                                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:scale-105 transition-all duration-300 shrink-0">
                                        <Mail size={21} />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                                            Email
                                        </span>
                                        <a
                                            href="mailto:mohamedsherif21101@gmail.com"
                                            className="text-sm md:text-base font-bold text-white hover:text-purple-300 transition-colors break-all"
                                        >
                                            mohamedsherif21101@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        handleCopy('mohamedsherif21101@gmail.com', 'email')
                                    }
                                    title="Copy email"
                                    className="p-2 rounded-xl bg-white/[0.04] hover:bg-purple-500/20 border border-white/[0.08] text-gray-400 hover:text-purple-300 transition-colors shrink-0 cursor-pointer"
                                >
                                    {copiedField === 'email' ? (
                                        <Check size={15} className="text-emerald-400" />
                                    ) : (
                                        <Copy size={15} />
                                    )}
                                </button>
                            </div>

                            {/* Phone Card */}
                            <div className="group p-5 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.07] hover:border-purple-500/35 transition-all duration-300 flex items-start justify-between gap-3">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:scale-105 transition-all duration-300 shrink-0">
                                        <Phone size={21} />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                                            Phone
                                        </span>
                                        <a
                                            href="tel:+201007240656"
                                            className="text-sm md:text-base font-bold text-white hover:text-purple-300 transition-colors"
                                        >
                                            01007240656
                                        </a>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => handleCopy('01007240656', 'phone')}
                                    title="Copy phone number"
                                    className="p-2 rounded-xl bg-white/[0.04] hover:bg-purple-500/20 border border-white/[0.08] text-gray-400 hover:text-purple-300 transition-colors shrink-0 cursor-pointer"
                                >
                                    {copiedField === 'phone' ? (
                                        <Check size={15} className="text-emerald-400" />
                                    ) : (
                                        <Copy size={15} />
                                    )}
                                </button>
                            </div>

                            {/* Location Card */}
                            <div className="group p-5 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.07] hover:border-purple-500/35 transition-all duration-300 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:scale-105 transition-all duration-300 shrink-0">
                                    <MapPin size={21} />
                                </div>
                                <div>
                                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                                        Location
                                    </span>
                                    <p className="text-sm md:text-base font-bold text-white">
                                        Qusiya, Assiut, Egypt
                                    </p>
                                </div>
                            </div>

                            {/* Social Profiles Card */}
                            <div className="group p-5 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.07] hover:border-purple-500/35 transition-all duration-300 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:scale-105 transition-all duration-300 shrink-0">
                                    <Github size={21} />
                                </div>
                                <div className="flex-1">
                                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                                        Social
                                    </span>
                                    <div className="flex flex-wrap items-center gap-2.5">
                                        <a
                                            href="https://github.com/Azamsherif"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-purple-600/30 border border-white/10 hover:border-purple-400/40 text-xs font-semibold text-white transition-all duration-200 group/link"
                                        >
                                            <Github size={14} className="text-purple-400" />
                                            <span>GitHub</span>
                                            <ArrowUpRight
                                                size={13}
                                                className="text-gray-400 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                                            />
                                        </a>

                                        <a
                                            href="https://linkedin.com/in/mohamed-sherif-kamel"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-purple-600/30 border border-white/10 hover:border-purple-400/40 text-xs font-semibold text-white transition-all duration-200 group/link"
                                        >
                                            <Linkedin size={14} className="text-purple-400" />
                                            <span>LinkedIn</span>
                                            <ArrowUpRight
                                                size={13}
                                                className="text-gray-400 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom CTA Banner */}
                        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-purple-600/15 via-fuchsia-600/10 to-indigo-600/15 border border-purple-500/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                            <div>
                                <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1.5">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span>Ready to Collaborate</span>
                                </div>
                                <p className="text-gray-200 text-sm md:text-base font-medium max-w-xl">
                                    I'm always open to discussing new projects, creative ideas, or opportunities.
                                </p>
                            </div>

                            <a
                                href="mailto:mohamedsherif21101@gmail.com"
                                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-bold shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 transition-all duration-300 shrink-0 group/btn"
                            >
                                <Send
                                    size={16}
                                    className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                                />
                                <span>Send Me an Email</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
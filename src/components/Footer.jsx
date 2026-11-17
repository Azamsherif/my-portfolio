import React from 'react'
import {
    Heart,
    Terminal,
    Linkedin,
    MessageCircle,
    ArrowUp,
    ArrowUpRight,
    Layers,
} from 'lucide-react'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative border-t border-white/[0.08] bg-[#0b0914]/90 backdrop-blur-xl overflow-hidden">
            {/* Top Ambient Glow Line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            {/* Subtle Ambient Radial Light */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[160px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-6xl px-4 md:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center pb-8 border-b border-white/[0.07]">
                    {/* Brand & Summary (5 Cols) */}
                    <div className="lg:col-span-5 space-y-3">
                        <a
                            href="#hero"
                            className="group inline-flex items-center gap-2.5 focus:outline-none"
                        >
                            <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/25 group-hover:scale-105 transition-all duration-300">
                                <Terminal size={17} />
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                                    MSK
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            </div>
                        </a>

                        <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                            Motivated Full-Stack .NET Developer with a solid foundation in building
                            web applications using ASP.NET Core (MVC & Web API), Entity
                            Framework Core, and SQL Server.
                        </p>
                    </div>

                    {/* Quick Social & Portfolio Links (5 Cols) */}
                    <div className="lg:col-span-5 flex flex-wrap items-center lg:justify-center gap-2.5">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-purple-600/25 border border-white/[0.08] hover:border-purple-400/40 text-xs font-semibold text-gray-300 hover:text-white transition-all duration-200"
                        >
                            <Linkedin size={14} className="text-purple-400" />
                            <span>LinkedIn</span>
                            <ArrowUpRight
                                size={13}
                                className="text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                        </a>

                        <a
                            href="https://wa.me/201007240656"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-purple-600/25 border border-white/[0.08] hover:border-purple-400/40 text-xs font-semibold text-gray-300 hover:text-white transition-all duration-200"
                        >
                            <MessageCircle size={14} className="text-purple-400" />
                            <span>WhatsApp</span>
                            <ArrowUpRight
                                size={13}
                                className="text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                        </a>

                        <a
                            href="#hero"
                            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-purple-600/25 border border-white/[0.08] hover:border-purple-400/40 text-xs font-semibold text-gray-300 hover:text-white transition-all duration-200"
                        >
                            <Layers size={14} className="text-purple-400" />
                            <span>Portfolio</span>
                        </a>
                    </div>

                    {/* Back to Top Action (2 Cols) */}
                    <div className="lg:col-span-2 flex lg:justify-end">
                        <button
                            type="button"
                            onClick={scrollToTop}
                            aria-label="Back to top"
                            className="group inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-600/30 border border-purple-500/25 hover:border-purple-400/40 text-xs font-semibold text-purple-200 hover:text-white transition-all duration-200 cursor-pointer"
                        >
                            <span>Top</span>
                            <ArrowUp
                                size={14}
                                className="text-purple-400 group-hover:-translate-y-0.5 transition-transform"
                            />
                        </button>
                    </div>
                </div>

                {/* Bottom Copyright Bar */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
                    <span>© {new Date().getFullYear()} Mohamed Sherif Kamel.</span>

                    <span className="inline-flex items-center gap-1.5 text-gray-400">
                        Built with{' '}
                        <Heart
                            className="text-red-400 animate-pulse"
                            size={14}
                            fill="currentColor"
                        />
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
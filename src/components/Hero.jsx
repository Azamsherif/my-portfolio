import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Compass, ExternalLink, Github, Linkedin, Mail } from 'lucide-react'
import { PROFILE } from '../data'
import { goToChapter } from '../lib/scroll'
import { Magnetic, ease } from './ui'

function RotatingRole() {
    const [i, setI] = useState(0)
    useEffect(() => {
        const t = setInterval(() => setI((v) => (v + 1) % PROFILE.roles.length), 2800)
        return () => clearInterval(t)
    }, [])
    return (
        <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                    key={i}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.45, ease }}
                    className="text-accent-ink whitespace-nowrap"
                >
                    {PROFILE.roles[i]}
                </motion.span>
            </AnimatePresence>
        </span>
    )
}

const line = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
}
const word = {
    hidden: { y: '110%' },
    show: { y: 0, transition: { duration: 1.1, ease } },
}

export default function Hero() {
    const { scrollY } = useScroll()
    const yText = useTransform(scrollY, [0, 600], [0, -80])
    const fade = useTransform(scrollY, [0, 500], [1, 0])

    return (
        <section id="hero" className="relative flex min-h-[100svh] items-center px-5 pb-28 pt-32 md:px-8">
            <motion.div style={{ y: yText, opacity: fade }} className="mx-auto w-full max-w-6xl">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease, delay: 0.2 }}
                        className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line/10 bg-surface/50 py-1.5 pl-2 pr-4 text-xs font-medium text-fg/80 backdrop-blur-md"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </span>
                        Available for freelance & full-time work
                    </motion.div>

                    <motion.h1
                        variants={line}
                        initial="hidden"
                        animate="show"
                        className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-fg"
                    >
                        {['Mohamed', 'Sherif'].map((w) => (
                            <span key={w} className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-top">
                                <motion.span variants={word} className="inline-block">
                                    {w}
                                </motion.span>
                            </span>
                        ))}
                        <br />
                        <span className="inline-block overflow-hidden pb-[0.08em] align-top">
                            <motion.span variants={word} className="inline-block">
                                Kamel<span className="text-accent-ink">.</span>
                            </motion.span>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease, delay: 0.9 }}
                        className="mt-7 font-display text-xl font-medium text-fg/90 md:text-2xl"
                    >
                        <RotatingRole />
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease, delay: 1.05 }}
                        className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg"
                    >
                        I build reliable web applications with{' '}
                        <span className="font-semibold text-fg">ASP.NET Core</span>,{' '}
                        <span className="font-semibold text-fg">Entity Framework Core</span> and{' '}
                        <span className="font-semibold text-fg">SQL Server</span> — clean architecture
                        on the backend, polished interfaces on the front.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease, delay: 1.2 }}
                        className="mt-10 flex flex-wrap items-center gap-3"
                    >
                        <Magnetic>
                            <a href="#projects" className="btn-primary">
                                View my work <ArrowUpRight size={16} />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <button onClick={() => goToChapter(1)} className="btn-ghost">
                                <Compass size={16} className="text-accent-ink" /> Take the guided tour
                            </button>
                        </Magnetic>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, ease, delay: 1.45 }}
                        className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-line/[0.08] pt-6"
                    >
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                            Freelancing on
                        </span>
                        {PROFILE.freelance.map((f) => (
                            <a
                                key={f.name}
                                href={f.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-fg/80 transition-colors hover:text-fg"
                            >
                                {f.name}
                                <ExternalLink size={13} className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        ))}
                        <span className="hidden h-4 w-px bg-line/15 sm:block" />
                        <div className="flex items-center gap-2">
                            {[
                                { href: PROFILE.github, icon: Github, label: 'GitHub' },
                                { href: PROFILE.linkedin, icon: Linkedin, label: 'LinkedIn' },
                                { href: `mailto:${PROFILE.email}`, icon: Mail, label: 'Email' },
                            ].map(({ href, icon: I, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line/10 text-fg/70 transition-all duration-300 hover:-translate-y-0.5 hover:text-fg hover:border-accent-soft"
                                >
                                    <I size={15} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.button
                onClick={() => goToChapter(1)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 right-8 hidden flex-col items-center gap-2 text-muted lg:flex"
                aria-label="Scroll to begin"
            >
                <span className="font-mono text-[10px] uppercase tracking-[0.14em]">Scroll to begin</span>
                <span className="flex h-9 w-5 justify-center rounded-full border border-line/20 pt-1.5">
                    <motion.span
                        className="h-1.5 w-1 rounded-full bg-[var(--accent)]"
                        animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </span>
            </motion.button>
        </section>
    )
}

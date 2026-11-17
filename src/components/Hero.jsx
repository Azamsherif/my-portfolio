import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Compass } from 'lucide-react'
import { PROFILE } from '../data'
import { goToChapter } from '../lib/scroll'
import { ease } from './ui'

const rise = (delay) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease, delay },
})

export default function Hero() {
    const { scrollY } = useScroll()
    const fade = useTransform(scrollY, [0, 500], [1, 0])

    return (
        <section id="hero" className="relative flex min-h-[100svh] items-center px-5 pb-20 pt-28 md:px-8">
            <motion.div style={{ opacity: fade }} className="mx-auto w-full max-w-5xl">
                <div className="max-w-2xl">
                    <motion.p {...rise(0.2)} className="flex items-center gap-2 text-sm text-muted">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        Available for freelance & full-time work
                    </motion.p>

                    <motion.h1
                        {...rise(0.3)}
                        className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-fg md:text-7xl"
                    >
                        {PROFILE.name}
                    </motion.h1>

                    <motion.p {...rise(0.45)} className="mt-4 text-xl text-accent-ink md:text-2xl">
                        {PROFILE.role}
                    </motion.p>

                    <motion.p {...rise(0.55)} className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                        I build reliable web applications with ASP.NET Core, Entity Framework Core and SQL
                        Server — clean architecture on the backend, polished interfaces on the front.
                    </motion.p>

                    <motion.div {...rise(0.7)} className="mt-10 flex flex-wrap gap-3">
                        <a href="#projects" className="btn-primary">
                            View my work <ArrowRight size={16} />
                        </a>
                        <button onClick={() => goToChapter(1)} className="btn-ghost">
                            <Compass size={16} /> Take the guided tour
                        </button>
                    </motion.div>

                    <motion.p {...rise(0.85)} className="mt-12 text-sm text-muted">
                        Freelancing on{' '}
                        {PROFILE.freelance.map((f, i) => (
                            <React.Fragment key={f.name}>
                                <a
                                    href={f.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-fg underline-offset-4 hover:underline"
                                >
                                    {f.name}
                                </a>
                                {i < PROFILE.freelance.length - 1 ? ', ' : '.'}
                            </React.Fragment>
                        ))}
                    </motion.p>
                </div>
            </motion.div>
        </section>
    )
}

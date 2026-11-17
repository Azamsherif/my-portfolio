import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { ArrowDown, ArrowUp, ChevronUp, Compass } from 'lucide-react'
import { CHAPTERS } from '../data'
import { useActiveChapter, goToChapter } from '../lib/scroll'
import { ease } from './ui'

/** Thin gradient bar showing overall reading progress. */
export function ScrollProgress() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 })
    return (
        <motion.div
            aria-hidden
            style={{ scaleX }}
            className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[var(--accent)]"
        />
    )
}

/** Bottom guide dock: where you are, what's here, and where to go next. */
export function GuideDock() {
    const active = useActiveChapter()
    const [scrolled, setScrolled] = useState(false)
    const chapter = CHAPTERS[active]
    const next = CHAPTERS[active + 1]
    const isLast = active === CHAPTERS.length - 1

    // The hero has its own "guided tour" call to action; the dock takes over once you start moving.
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.25)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    const visible = scrolled || active > 0

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.9, ease }}
                    className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 md:bottom-6"
                >
                    <div className="flex w-full max-w-xl items-center gap-3 rounded-full border border-line/10 bg-surface/90 py-2 pl-2 pr-2 shadow-lg backdrop-blur-md md:gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
                            <Compass size={18} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={chapter.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.45, ease }}
                                >
                                    <p className="truncate text-xs text-muted">
                                        Step {active + 1} of {CHAPTERS.length} · <span className="text-fg">{chapter.label}</span>
                                    </p>
                                    <p className="truncate text-xs text-fg/85 md:text-sm">
                                        {active === 0 ? 'Take a guided tour of my work — about two minutes.' : chapter.hint}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="hidden items-center gap-1 sm:flex" aria-hidden>
                            {CHAPTERS.map((c, i) => (
                                <motion.span
                                    key={c.id}
                                    className="block h-1.5 rounded-full"
                                    animate={{
                                        width: i === active ? 18 : 6,
                                        backgroundColor: i <= active ? c.accent : 'rgba(150,150,180,0.3)',
                                    }}
                                    transition={{ duration: 0.5, ease }}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => goToChapter(active - 1)}
                            disabled={active === 0}
                            aria-label="Previous chapter"
                            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line/10 text-fg/80 transition-colors duration-300 hover:bg-fg/5 disabled:opacity-30 md:flex"
                        >
                            <ChevronUp size={18} />
                        </button>
                        <button
                            onClick={() => goToChapter(isLast ? 0 : active + 1)}
                            className="btn-primary !gap-1.5 !px-4 !py-2.5 !text-xs"
                        >
                            <span className="hidden sm:inline">
                                {isLast ? 'Back to top' : active === 0 ? 'Start tour' : `Next: ${next.label}`}
                            </span>
                            <span className="sm:hidden">{isLast ? 'Top' : 'Next'}</span>
                            {isLast ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}


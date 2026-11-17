import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { ArrowDown, ArrowUp, ChevronUp, Compass } from 'lucide-react'
import { CHAPTERS } from '../data'
import { useActiveChapter, goToChapter } from '../lib/scroll'
import { ease } from './ui'

const pad = (n) => String(n).padStart(2, '0')

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

/** Vertical chapter rail on the left edge (desktop). */
export function GuideRail() {
    const active = useActiveChapter()
    const [hover, setHover] = useState(-1)
    const fill = active / (CHAPTERS.length - 1)

    return (
        <nav
            aria-label="Chapters"
            className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
        >
            <div className="relative flex flex-col gap-5 py-1">
                <span className="absolute left-[5px] top-2 bottom-2 w-px bg-line/10" />
                <motion.span
                    className="absolute left-[5px] top-2 w-px origin-top bg-[var(--accent)]"
                    style={{ height: 'calc(100% - 16px)' }}
                    animate={{ scaleY: fill }}
                    transition={{ duration: 0.9, ease }}
                />
                {CHAPTERS.map((c, i) => {
                    const on = i === active
                    const show = hover === i
                    return (
                        <button
                            key={c.id}
                            onClick={() => goToChapter(i)}
                            onMouseEnter={() => setHover(i)}
                            onMouseLeave={() => setHover(-1)}
                            aria-label={`Go to ${c.label}`}
                            aria-current={on ? 'step' : undefined}
                            className="relative flex items-center gap-3"
                        >
                            <motion.span
                                className="relative z-10 block h-[11px] w-[11px] rounded-full border"
                                animate={{
                                    scale: on ? 1.25 : 1,
                                    backgroundColor: i <= active ? c.accent : 'rgba(0,0,0,0)',
                                    borderColor: i <= active ? c.accent : 'rgba(150,150,180,0.5)',
                                }}
                                transition={{ duration: 0.5, ease }}
                            />
                            <AnimatePresence>
                                {show && (
                                    <motion.span
                                        initial={{ opacity: 0, x: -6 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -6 }}
                                        transition={{ duration: 0.35, ease }}
                                        className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.14em] text-fg/80"
                                    >
                                        {pad(i + 1)} {c.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    )
                })}
            </div>
        </nav>
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
                    <div className="card flex w-full max-w-xl items-center gap-3 rounded-full !bg-surface/75 py-2 pl-2 pr-2 md:gap-4">
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
                                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                                        <span className="text-accent-ink">
                                            {pad(active + 1)} / {pad(CHAPTERS.length)}
                                        </span>
                                        <span className="truncate">{chapter.label}</span>
                                    </div>
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

/** Static ambient backdrop: grid + drifting aurora blobs. */
export function Backdrop() {
    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <div className="backdrop-grid absolute inset-0" />
            <div className="aurora-blob left-[10%] top-[-20%] h-[50vh] w-[60vw]" style={{ background: 'var(--accent)' }} />
        </div>
    )
}

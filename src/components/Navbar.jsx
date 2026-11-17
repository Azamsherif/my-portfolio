import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react'
import { CHAPTERS, PROFILE } from '../data'
import { useActiveChapter, lockScroll, unlockScroll } from '../lib/scroll'
import { ease } from './ui'

const LINKS = CHAPTERS.slice(1)

function useTheme() {
    const [theme, setTheme] = useState(() => {
        try {
            const saved = localStorage.getItem('theme')
            if (saved) return saved
        } catch {}
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    })
    useEffect(() => {
        document.documentElement.classList.toggle('light', theme === 'light')
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f6f6fb' : '#07070e')
    }, [theme])
    const toggle = () => {
        const next = theme === 'dark' ? 'light' : 'dark'
        setTheme(next)
        try {
            localStorage.setItem('theme', next)
        } catch {}
    }
    return [theme, toggle]
}

export default function Navbar() {
    const active = useActiveChapter()
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const [theme, toggleTheme] = useTheme()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        open ? lockScroll() : unlockScroll()
    }, [open])

    return (
        <>
            <motion.header
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease, delay: 0.2 }}
                className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
            >
                <nav
                    className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-3 py-2 transition-all duration-700 ${
                        scrolled ? 'card !rounded-full !bg-surface/70' : 'border border-transparent'
                    }`}
                >
                    <a href="#hero" className="group flex items-center gap-2.5 pl-1" aria-label="Back to top">
                        <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[var(--accent)] font-display text-sm font-bold text-white">
                            M
                        </span>
                        <span className="font-display text-lg font-bold tracking-tight text-fg">
                            {PROFILE.short}
                            <span className="text-accent-ink">.</span>
                        </span>
                    </a>

                    <div className="hidden items-center gap-0.5 rounded-full border border-line/[0.06] bg-fg/[0.03] p-1 lg:flex">
                        {LINKS.map((l, i) => {
                            const on = active === i + 1
                            return (
                                <a
                                    key={l.id}
                                    href={`#${l.id}`}
                                    className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                                        on ? 'text-white' : 'text-muted hover:text-fg'
                                    }`}
                                >
                                    {on && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-0 -z-10 rounded-full"
                                            style={{ background: 'var(--accent)', boxShadow: '0 6px 24px -6px var(--accent)' }}
                                            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                                        />
                                    )}
                                    {l.label}
                                </a>
                            )
                        })}
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                            className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-line/10 text-fg/80 transition-colors duration-300 hover:bg-fg/5"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                    key={theme}
                                    initial={{ y: 16, rotate: -90, opacity: 0 }}
                                    animate={{ y: 0, rotate: 0, opacity: 1 }}
                                    exit={{ y: -16, rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.4, ease }}
                                >
                                    {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                                </motion.span>
                            </AnimatePresence>
                        </button>
                        <a href="#contact" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
                            Hire me <ArrowUpRight size={15} />
                        </a>
                        <button
                            onClick={() => setOpen(true)}
                            aria-label="Open menu"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-line/10 text-fg lg:hidden"
                        >
                            <Menu size={19} />
                        </button>
                    </div>
                </nav>
            </motion.header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
                        animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
                        exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
                        transition={{ duration: 0.8, ease }}
                        className="fixed inset-0 z-[80] flex flex-col bg-bg/95 px-6 pb-10 pt-6 backdrop-blur-2xl lg:hidden"
                    >
                        <div className="flex justify-end">
                            <button
                                onClick={() => setOpen(false)}
                                aria-label="Close menu"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-line/10 text-fg"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <ul className="mt-10 flex flex-1 flex-col justify-center gap-2">
                            {CHAPTERS.map((c, i) => (
                                <motion.li
                                    key={c.id}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.05 }}
                                >
                                    <a
                                        href={`#${c.id}`}
                                        onClick={() => setOpen(false)}
                                        className="group flex items-baseline gap-4 py-2"
                                    >
                                        <span className="font-mono text-xs" style={{ color: c.accent }}>
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span
                                            className={`font-display text-4xl font-bold tracking-tight transition-colors ${
                                                active === i ? 'text-fg' : 'text-fg/40 group-hover:text-fg'
                                            }`}
                                        >
                                            {c.label}
                                        </span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                        <p className="font-mono text-xs text-muted">{PROFILE.email}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

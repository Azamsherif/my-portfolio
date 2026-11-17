import React, { useEffect, useRef, useState } from 'react'
import {
    motion,
    useMotionValue,
    useSpring,
    useMotionTemplate,
    useInView,
    animate,
} from 'framer-motion'
import {
    Server, Code2, Code, GitBranch, Container, Database, Lightbulb, Users, Zap,
    Palette, GitMerge, ShieldCheck, Gauge, Circle,
} from 'lucide-react'
import { CHAPTERS } from '../data'

export const ease = [0.22, 1, 0.36, 1]

const ICONS = {
    Server, Code2, Code, GitBranch, Container, Database, Lightbulb, Users, Zap,
    Palette, GitMerge, ShieldCheck, Gauge,
}
export const Icon = ({ name, ...props }) => {
    const C = ICONS[name] ?? Circle
    return <C {...props} />
}

const finePointer = () =>
    typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

/** Soft rise + de-blur when scrolled into view. */
export function Reveal({ children, delay = 0, y = 24, className = '', as = 'div', ...rest }) {
    const M = motion[as]
    return (
        <M
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 0.9, ease, delay }}
            {...rest}
        >
            {children}
        </M>
    )
}

/** Card that tilts in 3D toward the cursor with a following spotlight. */
export function TiltCard({ children, className = '', max = 6, ...rest }) {
    const range = max * 0.5 // keep the tilt subtle
    const ref = useRef(null)
    const rx = useMotionValue(0)
    const ry = useMotionValue(0)
    const mx = useMotionValue(50)
    const my = useMotionValue(50)
    const srx = useSpring(rx, { stiffness: 120, damping: 16, mass: 0.6 })
    const sry = useSpring(ry, { stiffness: 120, damping: 16, mass: 0.6 })
    const spot = useMotionTemplate`radial-gradient(520px circle at ${mx}% ${my}%, color-mix(in srgb, var(--accent) 8%, transparent), transparent 55%)`

    const onMove = (e) => {
        if (!finePointer() || !ref.current) return
        const r = ref.current.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width
        const py = (e.clientY - r.top) / r.height
        ry.set((px - 0.5) * range * 2)
        rx.set(-(py - 0.5) * range * 2)
        mx.set(px * 100)
        my.set(py * 100)
    }
    const onLeave = () => {
        rx.set(0)
        ry.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onPointerMove={onMove}
            onPointerLeave={onLeave}
            style={{ rotateX: srx, rotateY: sry, transformPerspective: 1100 }}
            className={`group card relative ${className}`}
            {...rest}
        >
            <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: spot }}
            />
            {children}
        </motion.div>
    )
}

/** Element that is gently pulled toward the cursor. */
export function Magnetic({ children, strength = 0.28, className = '' }) {
    const ref = useRef(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const sx = useSpring(x, { stiffness: 160, damping: 14, mass: 0.4 })
    const sy = useSpring(y, { stiffness: 160, damping: 14, mass: 0.4 })
    return (
        <motion.div
            ref={ref}
            className={`inline-block ${className}`}
            style={{ x: sx, y: sy }}
            onPointerMove={(e) => {
                if (!finePointer()) return
                const r = ref.current.getBoundingClientRect()
                x.set((e.clientX - (r.left + r.width / 2)) * strength)
                y.set((e.clientY - (r.top + r.height / 2)) * strength)
            }}
            onPointerLeave={() => {
                x.set(0)
                y.set(0)
            }}
        >
            {children}
        </motion.div>
    )
}

export function Counter({ to, suffix = '', duration = 1.8 }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-10%' })
    const [val, setVal] = useState(0)
    useEffect(() => {
        if (!inView) return
        const c = animate(0, to, { duration, ease, onUpdate: (v) => setVal(Math.round(v)) })
        return () => c.stop()
    }, [inView, to, duration])
    return (
        <span ref={ref}>
            {val}
            {suffix}
        </span>
    )
}

/** Numbered chapter header — part of the guided path. */
export function SectionHeader({ id, title, highlight, lead, align = 'left' }) {
    const index = CHAPTERS.findIndex((c) => c.id === id)
    const chapter = CHAPTERS[index]
    const centered = align === 'center'
    return (
        <div className={`mb-14 md:mb-20 ${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}`}>
            <Reveal className={`mb-5 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
                <span className="font-mono text-xs tracking-[0.14em] text-accent-ink">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-px w-10 bg-gradient-to-r from-[var(--accent)] to-transparent" />
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                    {chapter?.label}
                </span>
            </Reveal>
            <Reveal delay={0.08} as="h2" className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-fg md:text-6xl">
                {title} {highlight && <span className="text-aurora">{highlight}</span>}
            </Reveal>
            {lead && (
                <Reveal delay={0.16} as="p" className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                    {lead}
                </Reveal>
            )}
        </div>
    )
}

export const Chip = ({ children, className = '' }) => (
    <span className={`inline-flex items-center rounded-full border border-line/10 bg-fg/[0.04] px-3 py-1 text-xs font-medium text-fg/80 ${className}`}>
        {children}
    </span>
)

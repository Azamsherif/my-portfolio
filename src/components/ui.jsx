import React from 'react'
import { motion } from 'framer-motion'
import { CHAPTERS } from '../data'

export const ease = [0.22, 1, 0.36, 1]

/** Gentle fade-and-rise when scrolled into view. */
export function Reveal({ children, delay = 0, className = '', as = 'div', ...rest }) {
    const M = motion[as]
    return (
        <M
            className={className}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 0.8, ease, delay }}
            {...rest}
        >
            {children}
        </M>
    )
}

/** Section wrapper with a small label, a title and an optional lead line. */
export function Section({ id, title, lead, children }) {
    const index = CHAPTERS.findIndex((c) => c.id === id)
    return (
        <section id={id} className="relative px-5 py-24 md:px-8 md:py-32">
            <div className="mx-auto max-w-5xl">
                <Reveal className="mb-12 md:mb-16">
                    <p className="text-sm font-medium text-accent-ink">
                        {String(index + 1).padStart(2, '0')} · {CHAPTERS[index]?.label}
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg md:text-4xl">{title}</h2>
                    {lead && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{lead}</p>}
                </Reveal>
                {children}
            </div>
        </section>
    )
}

export const Tag = ({ children }) => (
    <span className="rounded-md bg-fg/[0.05] px-2 py-1 text-xs text-fg/75">{children}</span>
)

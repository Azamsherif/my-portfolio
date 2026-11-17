import React, { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Briefcase, Building2 } from 'lucide-react'
import { EXPERIENCE } from '../data'
import { Reveal, SectionHeader, TiltCard, Chip, Icon } from './ui'

export default function Experience() {
    const listRef = useRef(null)
    // The timeline spine draws itself as you scroll through the steps.
    const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 55%'] })
    const draw = useSpring(scrollYProgress, { stiffness: 80, damping: 24 })

    return (
        <section id="experience" className="relative px-5 py-28 md:px-8 md:py-36">
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    id="experience"
                    title="Shipping for"
                    highlight="real clients."
                    lead={EXPERIENCE.summary}
                />

                <div className="grid gap-10 lg:grid-cols-12">
                    <Reveal className="lg:col-span-5">
                        <div className="lg:sticky lg:top-32">
                            <TiltCard className="p-7 md:p-8" max={4}>
                                <div className="relative">
                                    <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink">
                                        <Briefcase size={24} />
                                    </span>
                                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{EXPERIENCE.type}</p>
                                    <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-fg md:text-3xl">
                                        {EXPERIENCE.role}
                                    </h3>
                                    <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent-soft bg-accent-soft px-3.5 py-1.5 text-sm font-semibold text-accent-ink">
                                        <Building2 size={14} /> {EXPERIENCE.company}
                                    </span>
                                    <div className="mt-7 flex flex-wrap gap-2 border-t border-line/[0.08] pt-6">
                                        {EXPERIENCE.tags.map((t) => (
                                            <Chip key={t}>{t}</Chip>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </div>
                    </Reveal>

                    <div ref={listRef} className="relative lg:col-span-7">
                        <span className="absolute bottom-6 left-[23px] top-6 w-px bg-line/10" />
                        <motion.span
                            style={{ scaleY: draw }}
                            className="absolute bottom-6 left-[23px] top-6 w-px origin-top bg-[var(--accent)]"
                        />
                        <ol className="space-y-6">
                            {EXPERIENCE.steps.map((s, i) => (
                                <Reveal as="li" key={s.title} delay={i * 0.06} className="relative flex gap-5">
                                    <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line/10 bg-surface font-mono text-xs font-semibold text-accent-ink shadow-lg">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <TiltCard className="flex-1 p-6" max={5}>
                                        <div className="relative flex items-start gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
                                                <Icon name={s.icon} size={18} />
                                            </span>
                                            <div>
                                                <h4 className="font-display text-lg font-semibold text-fg">{s.title}</h4>
                                                <p className="mt-1 text-sm leading-relaxed text-muted md:text-[15px]">{s.text}</p>
                                            </div>
                                        </div>
                                    </TiltCard>
                                </Reveal>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

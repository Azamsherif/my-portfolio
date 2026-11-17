import React from 'react'
import { Check } from 'lucide-react'
import { TECH_SKILLS, PERSONAL_SKILLS, MARQUEE } from '../data'
import { Reveal, TiltCard, SectionHeader, Icon } from './ui'

function Marquee() {
    const items = [...MARQUEE, ...MARQUEE]
    return (
        <div className="marquee relative -mx-5 mb-14 overflow-hidden py-2 md:mx-0">
            <div className="marquee-track flex w-max gap-3">
                {items.map((t, i) => (
                    <span
                        key={i}
                        className="whitespace-nowrap rounded-full border border-line/10 bg-surface/50 px-5 py-2 font-mono text-sm text-fg/75 backdrop-blur-md"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default function Skills() {
    return (
        <section id="skills" className="relative px-5 py-28 md:px-8 md:py-36">
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    id="skills"
                    title="A stack built for"
                    highlight="real-world systems."
                    lead="End-to-end capability across enterprise .NET backends, relational databases, modern UI, and the practices that keep code maintainable."
                />

                <Reveal>
                    <Marquee />
                </Reveal>

                <div className="grid gap-5 md:grid-cols-2">
                    {TECH_SKILLS.map((cat, i) => (
                        <Reveal key={cat.title} delay={(i % 2) * 0.1}>
                            <TiltCard className="h-full overflow-hidden p-7 md:p-8">
                                <div className="relative">
                                    <div className="mb-6 flex items-center gap-4">
                                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                            <Icon name={cat.icon} size={22} />
                                        </span>
                                        <div>
                                            <h3 className="font-display text-xl font-bold text-fg">{cat.title}</h3>
                                            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{cat.tag}</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-3">
                                        {cat.items.map((s) => (
                                            <li key={s} className="flex items-start gap-3 text-sm leading-relaxed text-fg/80 md:text-[15px]">
                                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
                                                    <Check size={12} strokeWidth={3} />
                                                </span>
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </TiltCard>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mb-6 mt-20 flex items-center gap-4">
                    <h3 className="font-display text-2xl font-bold text-fg md:text-3xl">How I work</h3>
                    <span className="h-px flex-1 bg-gradient-to-r from-line/15 to-transparent" />
                </Reveal>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {PERSONAL_SKILLS.map((s, i) => (
                        <Reveal key={s.title} delay={i * 0.08}>
                            <TiltCard className="h-full p-6" max={10}>
                                <div className="relative">
                                    <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink transition-transform duration-500 group-hover:-translate-y-1">
                                        <Icon name={s.icon} size={20} />
                                    </span>
                                    <h4 className="font-display font-semibold text-fg">{s.title}</h4>
                                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.text}</p>
                                </div>
                            </TiltCard>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

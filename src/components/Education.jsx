import React from 'react'
import { Award, BadgeCheck, Calendar, GraduationCap, MapPin } from 'lucide-react'
import { EDUCATION, CERTIFICATIONS } from '../data'
import { Reveal, SectionHeader, TiltCard } from './ui'

export default function Education() {
    return (
        <section id="education" className="relative px-5 py-28 md:px-8 md:py-36">
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    id="education"
                    title="Always"
                    highlight="learning."
                    lead="A formal computer science foundation, sharpened by intensive full-stack training and a steady stream of courses."
                />

                <div className="grid gap-10 lg:grid-cols-12">
                    <div className="space-y-5 lg:col-span-7">
                        {EDUCATION.map((e, i) => {
                            const I = i === 0 ? Award : GraduationCap
                            return (
                                <Reveal key={e.degree} delay={i * 0.1}>
                                    <TiltCard className="p-7 md:p-8" max={4}>
                                        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
                                            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink">
                                                <I size={24} />
                                            </span>
                                            <div className="flex-1">
                                                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink">{e.kind}</p>
                                                <h3 className="mt-2 font-display text-xl font-bold leading-snug text-fg md:text-2xl">{e.degree}</h3>
                                                <p className="mt-2 text-sm leading-relaxed text-muted">{e.institution}</p>
                                                <div className="mt-5 flex flex-wrap gap-4 text-xs font-medium text-fg/70">
                                                    <span className="inline-flex items-center gap-1.5"><Calendar size={13} /> {e.period}</span>
                                                    <span className="inline-flex items-center gap-1.5"><MapPin size={13} /> {e.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </TiltCard>
                                </Reveal>
                            )
                        })}
                    </div>

                    <Reveal delay={0.15} className="lg:col-span-5">
                        <div className="card p-3">
                            <p className="px-4 pb-2 pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                                Certifications & courses
                            </p>
                            <ul>
                                {CERTIFICATIONS.map((c, i) => (
                                    <Reveal
                                        as="li"
                                        key={c.title}
                                        delay={0.2 + i * 0.07}
                                        y={14}
                                        className="group flex items-center gap-4 rounded-2xl p-4 transition-colors duration-300 hover:bg-fg/[0.04]"
                                    >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line/10 text-accent-ink transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                            <BadgeCheck size={18} />
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate font-display font-semibold text-fg">{c.title}</p>
                                            <p className="truncate text-xs text-muted">{c.org}</p>
                                        </div>
                                        <span className="shrink-0 font-mono text-[11px] text-fg/60">{c.period}</span>
                                    </Reveal>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import { EXPERIENCE } from '../data'
import { Reveal, Section } from './ui'

export default function Experience() {
    return (
        <Section id="experience" title="Experience" lead={EXPERIENCE.summary}>
            <Reveal className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-4">
                    <h3 className="text-lg font-medium text-fg">{EXPERIENCE.role}</h3>
                    <p className="mt-1 text-sm text-muted">
                        {EXPERIENCE.company} · Freelance
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{EXPERIENCE.tags.join(', ')}</p>
                </div>

                <ol className="space-y-6 md:col-span-8">
                    {EXPERIENCE.steps.map((s, i) => (
                        <Reveal as="li" key={s.title} delay={i * 0.06} className="flex gap-5 border-t border-line/10 pt-5">
                            <span className="text-sm tabular-nums text-accent-ink">{String(i + 1).padStart(2, '0')}</span>
                            <div>
                                <h4 className="font-medium text-fg">{s.title}</h4>
                                <p className="mt-1 text-sm leading-relaxed text-muted md:text-[15px]">{s.text}</p>
                            </div>
                        </Reveal>
                    ))}
                </ol>
            </Reveal>
        </Section>
    )
}

import React from 'react'
import { EDUCATION, CERTIFICATIONS } from '../data'
import { Reveal, Section } from './ui'

export default function Education() {
    return (
        <Section id="education" title="Education">
            <div className="grid gap-12 md:grid-cols-2">
                <div>
                    {EDUCATION.map((e, i) => (
                        <Reveal key={e.degree} delay={i * 0.08} className="border-t border-line/10 py-6">
                            <p className="text-sm text-muted">{e.period}</p>
                            <h3 className="mt-1 font-medium text-fg">{e.degree}</h3>
                            <p className="mt-1 text-sm leading-relaxed text-muted">
                                {e.institution} · {e.location}
                            </p>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.1}>
                    <h3 className="border-t border-line/10 pt-6 font-medium text-fg">Certifications</h3>
                    <ul className="mt-4 space-y-3">
                        {CERTIFICATIONS.map((c) => (
                            <li key={c.title} className="flex justify-between gap-4 text-sm">
                                <span>
                                    <span className="text-fg">{c.title}</span>
                                    <span className="text-muted"> — {c.org}</span>
                                </span>
                                <span className="shrink-0 tabular-nums text-muted">{c.period}</span>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </Section>
    )
}

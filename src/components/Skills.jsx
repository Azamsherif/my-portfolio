import React from 'react'
import { TECH_SKILLS, PERSONAL_SKILLS } from '../data'
import { Reveal, Section } from './ui'

export default function Skills() {
    return (
        <Section
            id="skills"
            title="Skills"
            lead="Enterprise .NET backends, relational databases, modern UI, and the practices that keep code maintainable."
        >
            <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
                {TECH_SKILLS.map((cat, i) => (
                    <Reveal key={cat.title} delay={(i % 2) * 0.08}>
                        <h3 className="border-b border-line/10 pb-3 font-medium text-fg">{cat.title}</h3>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted md:text-[15px]">
                            {cat.items.map((s) => (
                                <li key={s}>{s}</li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </div>

            <Reveal className="mt-14 border-t border-line/10 pt-8">
                <h3 className="font-medium text-fg">How I work</h3>
                <ul className="mt-4 grid gap-4 text-sm text-muted sm:grid-cols-2 md:text-[15px]">
                    {PERSONAL_SKILLS.map((s) => (
                        <li key={s.title}>
                            <span className="text-fg">{s.title}</span> — {s.text}
                        </li>
                    ))}
                </ul>
            </Reveal>
        </Section>
    )
}

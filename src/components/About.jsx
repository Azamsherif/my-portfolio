import React from 'react'
import profileImg from '../Images/profile.jpg'
import { PILLARS, LANGUAGES, PROFILE } from '../data'
import { Reveal, Section } from './ui'

export default function About() {
    return (
        <Section
            id="about"
            title="Engineer by training, craftsman by habit."
            lead="A Computer Science graduate and DEPI-trained full-stack developer who cares about the schema, the architecture and the tests as much as the interface."
        >
            <div className="grid gap-10 md:grid-cols-12 md:gap-14">
                <Reveal className="md:col-span-4">
                    <img
                        src={profileImg}
                        alt={`Portrait of ${PROFILE.name}`}
                        loading="lazy"
                        className="aspect-[4/5] w-full rounded-xl object-cover object-top"
                    />
                    <p className="mt-4 text-sm text-muted">{PROFILE.location}</p>
                </Reveal>

                <div className="md:col-span-8">
                    <Reveal delay={0.1} className="space-y-4 text-base leading-relaxed text-fg/85 md:text-lg">
                        <p>
                            I'm a Full-Stack .NET Developer building web applications with ASP.NET Core (MVC & Web
                            API), Entity Framework Core and SQL Server. Through the intensive Digital Egypt Pioneers
                            Initiative (DEPI) I worked across the full software development life cycle —
                            documentation, testing and Git version control.
                        </p>
                        <p>
                            I'm also comfortable with modern front-end work and Docker, and I care about clean code,
                            SOLID principles and solutions that scale.
                        </p>
                    </Reveal>

                    <dl className="mt-10 grid gap-x-10 gap-y-6 border-t border-line/10 pt-8 sm:grid-cols-2">
                        {PILLARS.map((p, i) => (
                            <Reveal key={p.title} delay={0.1 + i * 0.05}>
                                <dt className="font-medium text-fg">{p.title}</dt>
                                <dd className="mt-1 text-sm leading-relaxed text-muted">{p.text}</dd>
                            </Reveal>
                        ))}
                        <Reveal delay={0.3}>
                            <dt className="font-medium text-fg">Languages</dt>
                            <dd className="mt-1 text-sm text-muted">
                                {LANGUAGES.map((l) => `${l.name} (${l.level})`).join(' · ')}
                            </dd>
                        </Reveal>
                    </dl>
                </div>
            </div>
        </Section>
    )
}

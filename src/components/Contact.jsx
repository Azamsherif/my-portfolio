import React from 'react'
import { ArrowRight } from 'lucide-react'
import { PROFILE } from '../data'
import { Reveal, Section } from './ui'

export default function Contact() {
    const rows = [
        { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
        { label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phoneIntl}` },
        { label: 'WhatsApp', value: 'Message me', href: PROFILE.whatsapp, external: true },
        { label: 'LinkedIn', value: 'mohamed-sherif-kamel', href: PROFILE.linkedin, external: true },
        { label: 'GitHub', value: 'Azamsherif', href: PROFILE.github, external: true },
        { label: 'Location', value: PROFILE.location },
    ]

    return (
        <Section
            id="contact"
            title="Let's work together."
            lead="I'm open to new projects, collaborations and full-time roles. I reply quickly."
        >
            <Reveal>
                <a href={`mailto:${PROFILE.email}`} className="btn-primary">
                    Send me an email <ArrowRight size={16} />
                </a>
            </Reveal>

            <Reveal delay={0.1} as="dl" className="mt-12 grid gap-x-10 border-t border-line/10 sm:grid-cols-2">
                {rows.map((r) => (
                    <div key={r.label} className="flex justify-between gap-4 border-b border-line/10 py-4 text-sm">
                        <dt className="text-muted">{r.label}</dt>
                        <dd className="truncate text-right">
                            {r.href ? (
                                <a
                                    href={r.href}
                                    target={r.external ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="text-fg underline-offset-4 hover:underline"
                                >
                                    {r.value}
                                </a>
                            ) : (
                                <span className="text-fg">{r.value}</span>
                            )}
                        </dd>
                    </div>
                ))}
            </Reveal>
        </Section>
    )
}

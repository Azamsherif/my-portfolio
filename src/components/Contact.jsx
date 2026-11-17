import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { PROFILE } from '../data'
import { Reveal, SectionHeader, TiltCard, Magnetic, ease } from './ui'

function CopyButton({ text, label }) {
    const [done, setDone] = useState(false)
    return (
        <button
            type="button"
            aria-label={`Copy ${label}`}
            onClick={() => {
                navigator.clipboard?.writeText(text)
                setDone(true)
                setTimeout(() => setDone(false), 1800)
            }}
            className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line/10 text-fg/70 transition-colors hover:text-fg"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={done ? 'ok' : 'copy'}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.25, ease }}
                >
                    {done ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </motion.span>
            </AnimatePresence>
        </button>
    )
}

const ROWS = [
    { icon: Mail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}`, copy: PROFILE.email },
    { icon: Phone, label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phoneIntl}`, copy: PROFILE.phone },
    { icon: MapPin, label: 'Location', value: PROFILE.location },
]

export default function Contact() {
    return (
        <section id="contact" className="relative px-5 pb-20 pt-28 md:px-8 md:pt-36">
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    id="contact"
                    title="Let’s build something"
                    highlight="solid together."
                    lead="I’m open to new projects, collaborations, and full-time opportunities. Pick whichever channel suits you — I reply quickly."
                />

                <div className="grid gap-6 lg:grid-cols-12">
                    <Reveal className="lg:col-span-7">
                        <TiltCard className="h-full p-3" max={3}>
                            <ul className="relative divide-y divide-line/[0.07]">
                                {ROWS.map(({ icon: I, label, value, href, copy }) => (
                                    <li key={label} className="flex items-center gap-4 p-4 md:p-5">
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink">
                                            <I size={20} />
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{label}</p>
                                            {href ? (
                                                <a href={href} className="block truncate font-display text-base font-semibold text-fg transition-colors hover:text-accent-ink md:text-lg">
                                                    {value}
                                                </a>
                                            ) : (
                                                <p className="truncate font-display text-base font-semibold text-fg md:text-lg">{value}</p>
                                            )}
                                        </div>
                                        {copy && <CopyButton text={copy} label={label.toLowerCase()} />}
                                    </li>
                                ))}
                            </ul>
                        </TiltCard>
                    </Reveal>

                    <Reveal delay={0.1} className="lg:col-span-5">
                        <div className="card relative h-full overflow-hidden p-8 text-fg">
                            <span className="absolute inset-x-0 top-0 h-[3px] bg-[var(--accent)]" />
                            <div className="relative flex h-full flex-col">
                                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink">Ready to collaborate</p>
                                <h3 className="mt-3 font-display text-3xl font-bold leading-tight">Have a project in mind?</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted">
                                    Tell me what you’re building — backend, database, or the full stack.
                                </p>
                                <div className="mt-8 flex flex-wrap gap-3">
                                    <Magnetic>
                                        <a
                                            href={`mailto:${PROFILE.email}`}
                                            className="btn-primary !px-6"
                                        >
                                            <Send size={15} /> Send an email
                                        </a>
                                    </Magnetic>
                                    <Magnetic>
                                        <a
                                            href={PROFILE.whatsapp}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-ghost"
                                        >
                                            <MessageCircle size={15} /> WhatsApp
                                        </a>
                                    </Magnetic>
                                </div>
                                <div className="mt-auto flex gap-2 pt-10">
                                    {[
                                        { href: PROFILE.github, icon: Github, label: 'GitHub' },
                                        { href: PROFILE.linkedin, icon: Linkedin, label: 'LinkedIn' },
                                    ].map(({ href, icon: I, label }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-2 rounded-full border border-line/10 px-4 py-2 text-xs font-semibold text-fg/80 transition-colors hover:text-fg hover:border-accent-soft"
                                        >
                                            <I size={14} /> {label}
                                            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

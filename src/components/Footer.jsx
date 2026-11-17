import React from 'react'
import { ArrowUp, Github, Linkedin, MessageCircle } from 'lucide-react'
import { PROFILE } from '../data'
import { goToChapter } from '../lib/scroll'

export default function Footer() {
    return (
        <footer className="relative px-5 pb-28 pt-10 md:px-8 md:pb-32">
            <div className="mx-auto max-w-6xl">
                <div className="overflow-hidden border-t border-line/[0.08] pt-10">
                    <p
                        aria-hidden
                        className="select-none font-display text-[clamp(3rem,13vw,10rem)] font-bold leading-none tracking-[-0.04em] text-fg/[0.05]"
                    >
                        Mohamed Sherif.
                    </p>
                </div>
                <div className="mt-8 flex flex-col items-start justify-between gap-6 text-sm text-muted md:flex-row md:items-center">
                    <p>© {new Date().getFullYear()} {PROFILE.name}. Designed & built with React, Three.js & care.</p>
                    <div className="flex items-center gap-2">
                        {[
                            { href: PROFILE.github, icon: Github, label: 'GitHub' },
                            { href: PROFILE.linkedin, icon: Linkedin, label: 'LinkedIn' },
                            { href: PROFILE.whatsapp, icon: MessageCircle, label: 'WhatsApp' },
                        ].map(({ href, icon: I, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-line/10 text-fg/70 transition-all duration-300 hover:-translate-y-1 hover:text-fg hover:border-accent-soft"
                            >
                                <I size={16} />
                            </a>
                        ))}
                        <button
                            onClick={() => goToChapter(0)}
                            aria-label="Back to top"
                            className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent-ink transition-transform duration-300 hover:-translate-y-1"
                        >
                            <ArrowUp size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

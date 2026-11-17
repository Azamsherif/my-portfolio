import React from 'react'
import { motion } from 'framer-motion'
import { Award, MapPin } from 'lucide-react'
import profileImg from '../Images/profile.jpg'
import { PILLARS, LANGUAGES, PROJECTS, CERTIFICATIONS, PROFILE } from '../data'
import { Reveal, TiltCard, SectionHeader, Counter, Icon, ease } from './ui'

const STATS = [
    { value: PROJECTS.length, suffix: '', label: 'Featured projects' },
    { value: CERTIFICATIONS.length, suffix: '', label: 'Certifications' },
    { value: 3, suffix: '', label: 'Freelance platforms' },
    { value: LANGUAGES.length, suffix: '', label: 'Languages spoken' },
]

export default function About() {
    return (
        <section id="about" className="relative px-5 py-28 md:px-8 md:py-36">
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    id="about"
                    title="Engineer by training,"
                    highlight="craftsman by habit."
                    lead="A Computer Science graduate and DEPI-trained full-stack developer who cares about the parts users never see — the schema, the architecture, the tests — as much as the parts they do."
                />

                <div className="grid gap-6 lg:grid-cols-12">
                    {/* Portrait */}
                    <Reveal className="lg:col-span-5">
                        <TiltCard className="overflow-hidden p-2" max={6}>
                            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                                <motion.img
                                    src={profileImg}
                                    alt={`Portrait of ${PROFILE.name}`}
                                    loading="lazy"
                                    className="h-full w-full object-cover object-top"
                                    initial={{ scale: 1.15 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.8, ease }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-white">
                                    <div>
                                        <p className="font-display text-xl font-bold">{PROFILE.name}</p>
                                        <p className="mt-1 flex items-center gap-1.5 text-xs text-white/75">
                                            <MapPin size={12} /> Assiut, Egypt
                                        </p>
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold backdrop-blur-md">
                                        <Award size={12} /> DEPI Graduate
                                    </span>
                                </div>
                            </div>
                        </TiltCard>
                    </Reveal>

                    {/* Story + pillars */}
                    <div className="flex flex-col gap-6 lg:col-span-7">
                        <Reveal delay={0.1}>
                            <TiltCard className="p-7 md:p-9" max={3}>
                                <div className="relative space-y-4 text-base leading-relaxed text-muted md:text-[17px]">
                                    <p>
                                        Motivated Full-Stack .NET Developer with a solid foundation in building web
                                        applications using <b className="text-fg">ASP.NET Core (MVC & Web API)</b>,{' '}
                                        <b className="text-fg">Entity Framework Core</b>, and{' '}
                                        <b className="text-fg">SQL Server</b>. A graduate of the intensive{' '}
                                        <b className="text-fg">Digital Egypt Pioneers Initiative (DEPI)</b>, where I
                                        mastered the full <b className="text-fg">Software Development Life Cycle</b> —
                                        documentation, testing, and Git version control.
                                    </p>
                                    <p>
                                        Proficient in modern front-end technologies and Docker containerization.
                                        Passionate about writing <b className="text-fg">Clean Code</b>, applying{' '}
                                        <b className="text-fg">SOLID principles</b>, and delivering scalable,
                                        high-performance solutions.
                                    </p>
                                </div>
                            </TiltCard>
                        </Reveal>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {PILLARS.map((p, i) => (
                                <Reveal key={p.title} delay={0.12 + i * 0.08}>
                                    <TiltCard className="h-full p-5" max={8}>
                                        <div className="relative flex items-start gap-4">
                                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                                                <Icon name={p.icon} size={20} />
                                            </span>
                                            <div>
                                                <h3 className="font-display font-semibold text-fg">{p.title}</h3>
                                                <p className="mt-1 text-sm leading-relaxed text-muted">{p.text}</p>
                                            </div>
                                        </div>
                                    </TiltCard>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats + languages */}
                <div className="mt-6 grid gap-6 lg:grid-cols-12">
                    <Reveal className="lg:col-span-7">
                        <div className="card grid h-full grid-cols-2 divide-line/[0.08] md:grid-cols-4 md:divide-x">
                            {STATS.map((s) => (
                                <div key={s.label} className="p-6 text-center">
                                    <div className="text-fg font-display text-4xl font-bold md:text-5xl">
                                        <Counter to={s.value} suffix={s.suffix} />
                                    </div>
                                    <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={0.1} className="lg:col-span-5">
                        <div className="card h-full space-y-5 p-6">
                            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Languages</p>
                            {LANGUAGES.map((l, i) => (
                                <div key={l.name}>
                                    <div className="mb-2 flex items-baseline justify-between">
                                        <span className="font-display font-semibold text-fg">{l.name}</span>
                                        <span className="text-xs font-semibold text-accent-ink">{l.level}</span>
                                    </div>
                                    <div className="h-2 overflow-hidden rounded-full bg-fg/[0.06]">
                                        <motion.div
                                            className="h-full rounded-full bg-[var(--accent)]"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${l.value}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.6, ease, delay: 0.2 + i * 0.2 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

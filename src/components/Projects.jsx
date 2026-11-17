import React, { forwardRef, useCallback, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Check, Cpu, ExternalLink, Github, Globe, Search, Terminal, X, SlidersHorizontal } from 'lucide-react'
import { PROJECTS } from '../data'
import { lockScroll, unlockScroll } from '../lib/scroll'
import { Reveal, SectionHeader, TiltCard, Chip, ease } from './ui'

const CATEGORY = {
    'Full-Stack .NET': { icon: Cpu },
    'Frontend & UI/UX': { icon: Globe },
    'Full-Stack MERN': { icon: Terminal },
}
const visual = (c) => CATEGORY[c] ?? CATEGORY['Full-Stack .NET']

const splitHighlight = (h) => {
    const [head, ...rest] = h.split(':')
    return rest.length ? [head, rest.join(':')] : [null, h]
}

function Cover({ project, tall, inModal }) {
    const I = visual(project.category).icon
    return (
        <div
            className={`relative overflow-hidden rounded-xl border border-line/[0.06] bg-fg/[0.03] ${tall ? 'h-full min-h-[260px]' : 'h-48'}`}
        >
            <div
                className="absolute inset-0 opacity-[0.5]"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(var(--line) / 0.12) 1px, transparent 0)',
                    backgroundSize: '18px 18px',
                }}
            />
            <div className="absolute inset-0 flex flex-col p-5 text-fg">
                <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-line/10 bg-surface/80 px-3 py-1 text-[11px] font-semibold text-fg/80">
                        <I size={12} /> {project.category}
                    </span>
                    {!inModal && <span className="font-mono text-[10px] text-muted">{project.id}.config</span>}
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <span
                        className={`flex items-center justify-center rounded-2xl border border-accent-soft bg-accent-soft text-accent-ink transition-transform duration-700 group-hover:scale-105 ${
                            tall ? 'h-20 w-20' : 'h-14 w-14'
                        }`}
                    >
                        <I size={tall ? 36 : 26} strokeWidth={1.5} />
                    </span>
                </div>
                {tall && (
                    <div className="space-y-1 rounded-xl border border-line/[0.06] bg-surface/80 p-3 font-mono text-[11px] leading-relaxed text-fg/80">
                        {project.technologies.slice(0, 3).map((t) => (
                            <p key={t}>
                                <span className="text-muted">$ use</span> {t}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

const ProjectCard = forwardRef(function ProjectCard({ project, featured, onOpen }, ref) {
    const maxTech = featured ? 8 : 4
    const extra = project.technologies.length - maxTech
    return (
        <motion.article
            ref={ref}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.7, ease }}
            className={featured ? 'md:col-span-2' : ''}
        >
            <TiltCard max={featured ? 3 : 6} className={`h-full p-2 ${featured ? 'md:grid md:grid-cols-12 md:gap-2' : ''}`}>
                <div className={featured ? 'md:col-span-5' : ''}>
                    <Cover project={project} tall={featured} />
                </div>
                <div className={`relative flex flex-col p-5 md:p-6 ${featured ? 'md:col-span-7' : ''}`}>
                    {featured && (
                        <span className="mb-3 w-fit rounded-full bg-accent-soft px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-ink">
                            Featured build
                        </span>
                    )}
                    <h3 className={`font-display font-bold leading-snug text-fg ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                        <button onClick={() => onOpen(project)} className="text-left transition-colors hover:text-accent-ink">
                            {project.title}
                        </button>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted md:text-[15px]">{project.description}</p>

                    {featured && (
                        <ul className="mt-5 space-y-2.5">
                            {project.highlights.slice(0, 3).map((h) => {
                                const [head, body] = splitHighlight(h)
                                return (
                                    <li key={h} className="flex gap-2.5 text-sm text-fg/80">
                                        <Check size={15} className="mt-0.5 shrink-0 text-accent-ink" />
                                        <span>{head && <b className="text-fg">{head}:</b>}{body}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    )}

                    <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, maxTech).map((t) => (
                            <Chip key={t} className="!text-[11px]">{t}</Chip>
                        ))}
                        {extra > 0 && <Chip className="!text-[11px] text-accent-ink">+{extra}</Chip>}
                    </div>

                    <div className="mt-auto flex items-center gap-2 pt-6">
                        <button onClick={() => onOpen(project)} className="btn-primary !px-5 !py-2.5 !text-xs">
                            Case study <ArrowUpRight size={14} />
                        </button>
                        {project.repo && (
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-ghost !px-4 !py-2.5 !text-xs"
                            >
                                <Github size={14} /> Code
                            </a>
                        )}
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2.5 !text-xs">
                                <ExternalLink size={14} /> Live
                            </a>
                        )}
                    </div>
                </div>
            </TiltCard>
        </motion.article>
    )
})

function ProjectModal({ project, onClose }) {
    useEffect(() => {
        if (!project) return
        lockScroll()
        const onKey = (e) => e.key === 'Escape' && onClose()
        window.addEventListener('keydown', onKey)
        return () => {
            unlockScroll()
            window.removeEventListener('keydown', onKey)
        }
    }, [project, onClose])

    return createPortal(
        <AnimatePresence>
            {project && (
                <motion.div
                    key="backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[90] flex items-end justify-center bg-black/60 p-0 backdrop-blur-md sm:items-center sm:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-label={project.title}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 60, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.97 }}
                        transition={{ duration: 0.6, ease }}
                        onClick={(e) => e.stopPropagation()}
                        data-lenis-prevent
                        className="card max-h-[92vh] w-full max-w-3xl overflow-y-auto !rounded-b-none !bg-surface/95 p-2 sm:!rounded-2xl"
                    >
                        <div className="relative">
                            <Cover project={project} inModal />
                            <button
                                onClick={onClose}
                                aria-label="Close"
                                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-line/10 bg-surface text-fg transition-colors hover:bg-fg/10"
                            >
                                <X size={18} />
                            </button>
                        </div>
                        <div className="p-5 md:p-8">
                            <h3 className="font-display text-2xl font-bold text-fg md:text-3xl">{project.title}</h3>
                            <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

                            <p className="mb-4 mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                                Engineering highlights
                            </p>
                            <ul className="space-y-3">
                                {project.highlights.map((h, i) => {
                                    const [head, body] = splitHighlight(h)
                                    return (
                                        <motion.li
                                            key={h}
                                            initial={{ opacity: 0, x: -12 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.06 }}
                                            className="flex gap-3 rounded-2xl border border-line/[0.06] bg-fg/[0.02] p-4 text-sm leading-relaxed text-fg/80"
                                        >
                                            <Check size={16} className="mt-0.5 shrink-0 text-accent-ink" />
                                            <span>{head && <b className="text-fg">{head}:</b>}{body}</span>
                                        </motion.li>
                                    )
                                })}
                            </ul>

                            <p className="mb-3 mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((t) => (
                                    <Chip key={t}>{t}</Chip>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3 border-t border-line/[0.08] pt-6">
                                {project.repo && (
                                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                        <Github size={16} /> View source code
                                    </a>
                                )}
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                                        <ExternalLink size={16} /> Live preview
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    )
}

export default function Projects() {
    const [category, setCategory] = useState('All')
    const [query, setQuery] = useState('')
    const [open, setOpen] = useState(null)
    const close = useCallback(() => setOpen(null), [])

    const categories = useMemo(() => ['All', ...new Set(PROJECTS.map((p) => p.category))], [])

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        return PROJECTS.filter((p) => {
            if (category !== 'All' && p.category !== category) return false
            if (!q) return true
            return [p.title, p.description, p.category, ...p.technologies].some((s) => s.toLowerCase().includes(q))
        })
    }, [category, query])

    const showFeatured = category === 'All' && !query

    return (
        <section id="projects" className="relative px-5 py-28 md:px-8 md:py-36">
            <div className="mx-auto max-w-6xl">
                <SectionHeader
                    id="projects"
                    title="Selected"
                    highlight="work."
                    lead="Scalable web applications, modern UI engineering, and robust backend systems built with clean architecture. Open any project for the full case study."
                />

                <Reveal className="mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap gap-1 rounded-full border border-line/[0.08] bg-surface/50 p-1 backdrop-blur-md">
                        {categories.map((c) => {
                            const on = c === category
                            const count = c === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length
                            return (
                                <button
                                    key={c}
                                    onClick={() => setCategory(c)}
                                    className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-300 ${on ? 'text-white' : 'text-muted hover:text-fg'}`}
                                >
                                    {on && (
                                        <motion.span
                                            layoutId="project-filter"
                                            className="absolute inset-0 -z-10 rounded-full"
                                            style={{ background: 'var(--accent)' }}
                                            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                                        />
                                    )}
                                    {c}
                                    <span className={`rounded-full px-1.5 text-[10px] ${on ? 'bg-white/20' : 'bg-fg/[0.06]'}`}>{count}</span>
                                </button>
                            )
                        })}
                    </div>
                    <label className="relative block md:w-72">
                        <Search size={15} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search stack, title, keyword…"
                            aria-label="Search projects"
                            className="w-full rounded-full border border-line/10 bg-surface/50 py-2.5 pl-10 pr-10 text-sm text-fg placeholder:text-muted backdrop-blur-md outline-none transition-colors focus:border-accent-soft"
                        />
                        {query && (
                            <button
                                onClick={() => setQuery('')}
                                aria-label="Clear search"
                                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted hover:text-fg"
                            >
                                <X size={14} />
                            </button>
                        )}
                    </label>
                </Reveal>

                <motion.div layout className="grid gap-5 md:grid-cols-2">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((p, i) => (
                            <ProjectCard key={p.id} project={p} featured={showFeatured && i === 0} onOpen={setOpen} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filtered.length === 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="card mt-4 flex flex-col items-center p-12 text-center">
                        <SlidersHorizontal size={22} className="text-accent-ink" />
                        <h3 className="mt-4 font-display text-lg font-semibold text-fg">No matching projects</h3>
                        <p className="mt-1 text-sm text-muted">Nothing matches “{query}” in this category.</p>
                        <button
                            onClick={() => {
                                setCategory('All')
                                setQuery('')
                            }}
                            className="btn-ghost mt-6 !py-2.5 !text-xs"
                        >
                            Reset filters
                        </button>
                    </motion.div>
                )}
            </div>

            <ProjectModal project={open} onClose={close} />
        </section>
    )
}

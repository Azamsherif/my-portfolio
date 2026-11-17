import React, { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, X } from 'lucide-react'
import { PROJECTS } from '../data'
import { lockScroll, unlockScroll } from '../lib/scroll'
import { Reveal, Section, Tag, ease } from './ui'

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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[90] flex items-end justify-center bg-black/50 sm:items-center sm:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-label={project.title}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.45, ease }}
                        onClick={(e) => e.stopPropagation()}
                        data-lenis-prevent
                        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-line/10 bg-surface p-6 sm:rounded-2xl md:p-8"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm text-muted">{project.category}</p>
                                <h3 className="mt-1 text-2xl font-semibold text-fg">{project.title}</h3>
                            </div>
                            <button
                                onClick={onClose}
                                aria-label="Close"
                                className="rounded-full p-2 text-muted transition-colors hover:bg-fg/5 hover:text-fg"
                            >
                                <X size={18} />
                            </button>
                        </div>
                        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
                        <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-fg/85 marker:text-muted">
                            {project.highlights.map((h) => (
                                <li key={h}>{h}</li>
                            ))}
                        </ul>
                        <div className="mt-6 flex flex-wrap gap-1.5">
                            {project.technologies.map((t) => (
                                <Tag key={t}>{t}</Tag>
                            ))}
                        </div>
                        {project.repo && (
                            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
                                <Github size={16} /> View source code
                            </a>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    )
}

export default function Projects() {
    const [open, setOpen] = useState(null)
    const close = useCallback(() => setOpen(null), [])

    return (
        <Section id="projects" title="Selected work" lead="A few things I've built. Open any project for the details.">
            <ul className="border-b border-line/10">
                {PROJECTS.map((p, i) => (
                    <Reveal as="li" key={p.id} delay={i * 0.05} className="border-t border-line/10">
                        <div className="group grid gap-4 py-8 md:grid-cols-12 md:gap-8">
                            <div className="md:col-span-5">
                                <p className="text-sm text-muted">{p.category}</p>
                                <h3 className="mt-1 text-xl font-medium text-fg">
                                    <button onClick={() => setOpen(p)} className="text-left transition-colors hover:text-accent-ink">
                                        {p.title}
                                    </button>
                                </h3>
                            </div>
                            <div className="md:col-span-7">
                                <p className="leading-relaxed text-muted">{p.description}</p>
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {p.technologies.slice(0, 5).map((t) => (
                                        <Tag key={t}>{t}</Tag>
                                    ))}
                                </div>
                                <div className="mt-5 flex gap-5 text-sm font-medium">
                                    <button onClick={() => setOpen(p)} className="inline-flex items-center gap-1 text-accent-ink hover:underline underline-offset-4">
                                        Details <ArrowUpRight size={14} />
                                    </button>
                                    {p.repo && (
                                        <a
                                            href={p.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-fg/80 hover:text-fg"
                                        >
                                            <Github size={14} /> Source
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </ul>
            <ProjectModal project={open} onClose={close} />
        </Section>
    )
}

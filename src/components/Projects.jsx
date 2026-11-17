import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    FolderGit2,
    Github,
    ExternalLink,
    CheckCircle2,
    ArrowUpRight,
    Search,
    Sparkles,
    ChevronDown,
    ChevronUp,
    Layers,
    Terminal,
    Code2,
    Cpu,
    Globe,
    X,
    SlidersHorizontal,
} from 'lucide-react'

/*
====================================================================
  PROJECTS DATA (نفس البيانات الأصلية بالكامل دون أي تغيير)
====================================================================
*/
const PROJECTS_DATA = [
    {
        id: 'hypermarket',
        title: 'Hyper Market E-Commerce Platform',
        category: 'Full-Stack .NET',
        description:
            'Full-featured enterprise e-commerce platform for supermarket operations, streamlining product catalogs, cart workflows, Stripe payments, and order fulfillment.',
        repo: 'https://github.com/Azamsherif/Hyper_Market',
        demo: '',
        technologies: [
            'ASP.NET Core (.NET 8)',
            'Entity Framework Core',
            'SQL Server',
            'Stripe API',
            'Bootstrap',
            'JavaScript',
            'Razor Views',
            'xUnit',
        ],
        highlights: [
            'Comprehensive Admin Dashboard: Intuitive management for products, categories, coupons, and orders with visual timeline and audit logging.',
            'Secure Payment Integration: Stripe Checkout with automated webhook verification and idempotency handling for safe transactions.',
            'Robust & Scalable Architecture: Clean MVC architecture and SOLID principles with background task queues (IHostedService) for async email/SMS notifications.',
            'Data Integrity & Security: Protected inventory via optimistic concurrency (RowVersion), rate limiting on sensitive endpoints, and EF Core optimization.',
            'Tested & Responsive UI: Responsive storefront and admin interfaces built with Razor Views, Bootstrap, and JavaScript, backed by xUnit test suites.',
        ],
    },
    {
        id: 'lms',
        title: 'Learning Management System',
        category: 'Full-Stack .NET',
        description:
            'Enterprise-grade e-learning platform streamlining course management, instructor assignments, student enrollments, and academic progress tracking.',
        repo: 'https://github.com/JinxX404/Learning_Management_System_LMS',
        demo: '',
        technologies: [
            'ASP.NET Core MVC',
            'EF Core',
            'SQL Server',
            'Bootstrap',
            'JavaScript',
            'Razor Views',
        ],
        highlights: [
            'Robust admin dashboard with role-based access control (RBAC) and student progress tracking.',
            'Applied Clean MVC Architecture and SOLID principles for high scalability and maintainability.',
            'Optimized high-volume database access using EF Core and LINQ compiled queries.',
            'Responsive, user-centric interfaces using Razor Views, Bootstrap, and JavaScript.',
        ],
    },
    {
        id: 'roasted-co',
        title: 'Roasted & Co. — Artisan Coffee Platform',
        category: 'Frontend & UI/UX',
        description:
            'Luxury, responsive web platform for a specialty coffee roastery and bakery, featuring custom 60fps animations, instant menu search, and interactive booking.',
        repo: 'https://github.com/Azamsherif/Caffee-Sute',
        demo: '',
        technologies: [
            'HTML5',
            'CSS3',
            'JavaScript (ES6+)',
            'IntersectionObserver',
            'Responsive Design',
            'SVG Graphics',
            'UI/UX Motion',
        ],
        highlights: [
            'Multi-page luxury cafe platform with bespoke visual identity and glassmorphic navigation.',
            'Hardware-accelerated scroll animations using native IntersectionObserver with distinct physics.',
            'Instantaneous category filtering and real-time live search without page reload overhead.',
            'Handcrafted scalable SVG illustrations with interactive hover states and mouse-tilt micro-interactions.',
            'Zero external runtime dependencies for maximum loading speed and ultra-fluid 60fps rendering.',
        ],
    },
    {
        id: 'almadina-press',
        title: 'Almadina Printing Press',
        category: 'Full-Stack MERN',
        description:
            'Full-stack commercial web application for a printing press business providing comprehensive business showcase, product catalogs, and administrative management.',
        repo: 'https://github.com/Azamsherif/Al-Madina-Press-frontend',
        demo: '',
        technologies: [
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Bootstrap',
            'Framer Motion',
            'REST API',
        ],
        highlights: [
            'Dynamic product portfolio display with interactive image galleries and item details.',
            'Comprehensive admin dashboard for full-lifecycle content and product management (CRUD).',
            'High-performance image upload system with server-side storage and file optimization.',
            'Custom inquiry form seamlessly integrated with backend message management pipeline.',
            'RESTful API architecture built with Express.js and MongoDB Mongoose models.',
        ],
    },
]

// Helper to assign distinct subtle visual accents per category
const getCategoryVisuals = (category) => {
    switch (category) {
        case 'Full-Stack .NET':
            return {
                icon: Cpu,
                gradient: 'from-purple-600/25 via-indigo-600/15 to-transparent',
                badge: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
                accent: 'text-purple-400',
            }
        case 'Frontend & UI/UX':
            return {
                icon: Globe,
                gradient: 'from-fuchsia-600/25 via-purple-600/15 to-transparent',
                badge: 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30',
                accent: 'text-fuchsia-400',
            }
        case 'Full-Stack MERN':
            return {
                icon: Terminal,
                gradient: 'from-violet-600/25 via-blue-600/15 to-transparent',
                badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
                accent: 'text-violet-400',
            }
        default:
            return {
                icon: Code2,
                gradient: 'from-purple-600/20 via-slate-800/20 to-transparent',
                badge: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
                accent: 'text-purple-400',
            }
    }
}

/*
====================================================================
  PROJECT DETAILS MODAL (Case Study View)
====================================================================
*/
const ProjectModal = ({ project, onClose }) => {
    if (!project) return null
    const visuals = getCategoryVisuals(project.category)
    const CategoryIcon = visuals.icon

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl bg-[#0d0b14] border border-white/15 shadow-2xl shadow-purple-950/50"
                >
                    {/* Top Visual Header */}
                    <div className={`relative p-6 md:p-8 bg-gradient-to-br ${visuals.gradient} border-b border-white/10`}>
                        <button
                            onClick={onClose}
                            aria-label="Close modal"
                            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                        >
                            <X size={18} />
                        </button>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-purple-300">
                                <CategoryIcon size={20} />
                            </div>
                            <span className={`text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border ${visuals.badge}`}>
                                {project.category}
                            </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
                            {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 md:p-8 space-y-6">
                        {/* Architecture & Key Highlights */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3.5 flex items-center gap-2">
                                <Sparkles size={14} />
                                <span>Engineering Highlights & Architecture</span>
                            </h4>
                            <ul className="space-y-3">
                                {project.highlights.map((item, idx) => {
                                    const [boldPrefix, ...rest] = item.split(':')
                                    const hasPrefix = rest.length > 0

                                    return (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs md:text-sm text-gray-300 leading-relaxed"
                                        >
                                            <CheckCircle2
                                                size={16}
                                                className="text-purple-400 mt-0.5 shrink-0"
                                            />
                                            <span>
                                                {hasPrefix ? (
                                                    <>
                                                        <strong className="text-white font-semibold">
                                                            {boldPrefix}:
                                                        </strong>
                                                        {rest.join(':')}
                                                    </>
                                                ) : (
                                                    item
                                                )}
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        {/* Complete Tech Stack */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                                Technologies & Tools
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 text-xs font-medium bg-purple-500/10 text-purple-200 rounded-lg border border-purple-500/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                            {project.repo && (
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 px-5 py-3 rounded-xl shadow-lg shadow-purple-600/25 transition-all duration-200"
                                >
                                    <Github size={17} />
                                    <span>View Source Code</span>
                                    <ArrowUpRight size={16} />
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 px-5 py-3 rounded-xl border border-white/15 transition-all duration-200"
                                >
                                    <ExternalLink size={16} />
                                    <span>Live Preview</span>
                                    <ArrowUpRight size={16} />
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

/*
====================================================================
  PROJECT CARD COMPONENT
====================================================================
*/
const ProjectCard = ({ project, index, isFeatured, onSelectProject }) => {
    const visuals = getCategoryVisuals(project.category)
    const CategoryIcon = visuals.icon
    const maxVisibleTech = isFeatured ? 8 : 5
    const extraTechCount = project.technologies.length - maxVisibleTech

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className={`group relative rounded-3xl bg-[#110e1b]/80 backdrop-blur-xl border border-white/[0.08] hover:border-purple-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/40 ${isFeatured ? 'lg:col-span-3 lg:grid lg:grid-cols-12' : ''
                }`}
        >
            {/* Subtle Ambient Top Glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Decorative Architectural Header / Left Banner (for Featured) */}
            <div
                className={`relative overflow-hidden bg-gradient-to-br ${visuals.gradient} border-b lg:border-b-0 ${isFeatured
                        ? 'lg:col-span-5 lg:border-r border-white/[0.08] p-6 md:p-8 flex flex-col justify-between min-h-[220px]'
                        : 'border-white/[0.08] px-6 py-5 flex items-center justify-between'
                    }`}
            >
                {/* Background Subtle Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.07] pointer-events-none"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
                        backgroundSize: '20px 20px',
                    }}
                />

                <div className="relative z-10 flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#0b0914]/80 border border-white/10 flex items-center justify-center text-purple-300 shadow-inner group-hover:scale-105 group-hover:border-purple-400/40 transition-all duration-300">
                            <CategoryIcon size={19} />
                        </div>
                        <span
                            className={`text-[11px] tracking-wider uppercase font-semibold px-3 py-1 rounded-full border ${visuals.badge}`}
                        >
                            {project.category}
                        </span>
                    </div>

                    {isFeatured && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/25">
                            <Sparkles size={12} />
                            Featured Build
                        </span>
                    )}
                </div>

                {/* Extra Architectural Mockup Card inside Featured Banner */}
                {isFeatured && (
                    <div className="relative z-10 mt-6 p-4 rounded-2xl bg-[#0b0914]/75 border border-white/10 backdrop-blur-md">
                        <div className="flex items-center gap-1.5 mb-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                            <span className="ml-2 text-[11px] font-mono text-gray-400 truncate">
                                {project.id}.architecture.config
                            </span>
                        </div>
                        <div className="space-y-2">
                            {project.highlights.slice(0, 2).map((h, i) => (
                                <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                                    <CheckCircle2 size={14} className="text-purple-400 mt-0.5 shrink-0" />
                                    <span className="line-clamp-2">{h}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content Body */}
            <div
                className={`p-6 md:p-7 flex flex-col justify-between ${isFeatured ? 'lg:col-span-7' : 'flex-1'
                    }`}
            >
                <div>
                    {/* Title */}
                    <h3
                        onClick={() => onSelectProject(project)}
                        className={`font-bold text-white group-hover:text-purple-300 transition-colors cursor-pointer leading-snug mb-2.5 ${isFeatured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
                            }`}
                    >
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-5">
                        {project.description}
                    </p>

                    {/* Key Highlights Preview */}
                    <div className="mb-5">
                        <div className="flex items-center justify-between mb-2.5">
                            <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                                Key Capabilities
                            </span>
                            <button
                                onClick={() => onSelectProject(project)}
                                className="text-[11px] font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors cursor-pointer"
                            >
                                <span>Full Specs ({project.highlights.length})</span>
                                <ArrowUpRight size={12} />
                            </button>
                        </div>

                        <ul className="space-y-2">
                            {project.highlights
                                .slice(0, isFeatured ? 3 : 2)
                                .map((highlight, idx) => {
                                    const [titlePart, ...descPart] = highlight.split(':')
                                    return (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed"
                                        >
                                            <CheckCircle2
                                                size={14}
                                                className="text-purple-400 mt-0.5 shrink-0"
                                            />
                                            <span className="line-clamp-2">
                                                {descPart.length > 0 ? (
                                                    <>
                                                        <strong className="text-gray-100 font-medium">
                                                            {titlePart}:
                                                        </strong>
                                                        {descPart.join(':')}
                                                    </>
                                                ) : (
                                                    highlight
                                                )}
                                            </span>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Tech Stack & Actions */}
                <div className="pt-4 border-t border-white/[0.08]">
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.slice(0, maxVisibleTech).map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-2.5 py-1 text-[11px] font-medium bg-white/[0.04] text-gray-300 rounded-lg border border-white/[0.07] group-hover:border-purple-500/25 group-hover:text-purple-200 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                        {extraTechCount > 0 && (
                            <button
                                onClick={() => onSelectProject(project)}
                                className="px-2.5 py-1 text-[11px] font-semibold bg-purple-500/15 text-purple-300 rounded-lg border border-purple-500/25 hover:bg-purple-500/25 transition-colors cursor-pointer"
                            >
                                +{extraTechCount}
                            </button>
                        )}
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center gap-2.5">
                        {project.repo && (
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-semibold text-white bg-purple-600/90 hover:bg-purple-600 px-4 py-2.5 rounded-xl shadow-md shadow-purple-900/30 transition-all duration-200 group/btn"
                            >
                                <Github size={15} />
                                <span>Source Code</span>
                                <ArrowUpRight
                                    size={14}
                                    className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                                />
                            </a>
                        )}

                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-semibold text-gray-200 bg-white/[0.06] hover:bg-white/[0.12] px-4 py-2.5 rounded-xl border border-white/10 transition-all duration-200 group/btn"
                            >
                                <ExternalLink size={14} />
                                <span>Live Demo</span>
                            </a>
                        )}

                        <button
                            onClick={() => onSelectProject(project)}
                            className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.1] px-3.5 py-2.5 rounded-xl border border-white/10 transition-all duration-200 cursor-pointer"
                            title="View Full Case Study"
                        >
                            <span>Details</span>
                        </button>
                    </div>
                </div>
            </div>
        </motion.article>
    )
}

/*
====================================================================
  MAIN PROJECTS SECTION
====================================================================
*/
const Projects = () => {
    const projects = PROJECTS_DATA

    const [selectedCategory, setSelectedCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')
    const [visibleCount, setVisibleCount] = useState(6)
    const [activeModalProject, setActiveModalProject] = useState(null)

    const categories = useMemo(() => {
        const unique = Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))
        return ['All', ...unique]
    }, [projects])

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesCategory =
                selectedCategory === 'All' || project.category === selectedCategory
            const searchLower = searchQuery.toLowerCase().trim()
            if (!searchLower) return matchesCategory

            const matchesSearch =
                project.title.toLowerCase().includes(searchLower) ||
                project.description.toLowerCase().includes(searchLower) ||
                project.category?.toLowerCase().includes(searchLower) ||
                project.technologies.some((tech) => tech.toLowerCase().includes(searchLower))

            return matchesCategory && matchesSearch
        })
    }, [projects, selectedCategory, searchQuery])

    const displayedProjects = filteredProjects.slice(0, visibleCount)

    return (
        <section
            id="projects"
            className="relative py-24 px-4 md:px-8 overflow-hidden"
        >
            {/* Ambient Background Radial Lights */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Editorial Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-4"
                        >
                            <Sparkles size={13} className="text-purple-400" />
                            <span>Selected Engineering Work</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3"
                        >
                            Featured{' '}
                            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-gray-400 text-sm md:text-base leading-relaxed"
                        >
                            A curated showcase of scalable web applications, modern UI/UX
                            engineering, and robust backend systems built with clean architecture.
                        </motion.p>
                    </div>

                    {/* Quick Portfolio Stat Pill */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] self-start lg:self-end"
                    >
                        <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-400">
                            <Layers size={18} />
                        </div>
                        <div>
                            <div className="text-xs text-gray-400">Showing Portfolio</div>
                            <div className="text-sm font-bold text-white">
                                {displayedProjects.length} of {filteredProjects.length} Projects
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Filter & Search Toolbar */}
                <div className="p-2 rounded-2xl bg-[#110e1b]/90 border border-white/[0.08] backdrop-blur-xl mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                    {/* Animated Category Tabs */}
                    <div className="flex flex-wrap items-center gap-1.5">
                        {categories.map((cat) => {
                            const count =
                                cat === 'All'
                                    ? projects.length
                                    : projects.filter((p) => p.category === cat).length
                            const isActive = selectedCategory === cat

                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-colors duration-200 flex items-center gap-2 cursor-pointer ${isActive
                                            ? 'text-white'
                                            : 'text-gray-400 hover:text-gray-200'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeProjectCategory"
                                            transition={{
                                                type: 'spring',
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                            className="absolute inset-0 rounded-xl bg-purple-600 shadow-lg shadow-purple-600/30 -z-10"
                                        />
                                    )}
                                    <span>{cat}</span>
                                    <span
                                        className={`text-[10px] px-1.5 py-0.5 rounded-md ${isActive
                                                ? 'bg-white/20 text-white'
                                                : 'bg-white/[0.06] text-gray-400'
                                            }`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            )
                        })}
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full md:w-72">
                        <Search
                            size={15}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search stack, title, keyword..."
                            className="w-full pl-10 pr-8 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white cursor-pointer"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </div>

                {/* Empty State */}
                {displayedProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-12 rounded-3xl bg-[#110e1b]/80 border border-white/[0.08] text-center max-w-md mx-auto my-12"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4 text-purple-400">
                            <SlidersHorizontal size={22} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">No matching projects</h3>
                        <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                            We couldn't find any projects matching "{searchQuery}" in this category.
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory('All')
                                setSearchQuery('')
                            }}
                            className="px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-colors cursor-pointer"
                        >
                            Reset all filters
                        </button>
                    </motion.div>
                )}

                {/* Projects Bento Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                isFeatured={index === 0 && selectedCategory === 'All' && !searchQuery}
                                onSelectProject={setActiveModalProject}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Pagination / Load More */}
                {filteredProjects.length > 6 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() =>
                                setVisibleCount((prev) =>
                                    prev >= filteredProjects.length ? 6 : prev + 6
                                )
                            }
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-purple-600/25 border border-white/10 hover:border-purple-500/40 text-white font-semibold text-xs md:text-sm transition-all duration-200 cursor-pointer"
                        >
                            <span>
                                {visibleCount >= filteredProjects.length
                                    ? 'Show Less'
                                    : `Explore More Projects (${filteredProjects.length - visibleCount})`}
                            </span>
                            {visibleCount >= filteredProjects.length ? (
                                <ChevronUp size={16} />
                            ) : (
                                <ChevronDown size={16} />
                            )}
                        </button>
                    </div>
                )}
            </div>

            {/* Case Study Details Modal */}
            <ProjectModal
                project={activeModalProject}
                onClose={() => setActiveModalProject(null)}
            />
        </section>
    )
}

export default Projects
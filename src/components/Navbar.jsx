import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Terminal, ArrowUpRight } from 'lucide-react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [theme, setTheme] = useState('dark')
    const [activeSection, setActiveSection] = useState('#hero')

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    // Scroll detection & active section tracking
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40)

            const scrollPosition = window.scrollY + 180
            for (let i = navLinks.length - 1; i >= 0; i--) {
                const section = document.querySelector(navLinks[i].href)
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navLinks[i].href)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Read saved theme or preferred scheme (نفس المنطق الأصلي بالكامل)
    useEffect(() => {
        const saved = localStorage.getItem('theme')
        if (saved) {
            setTheme(saved)
            document.documentElement.classList.toggle('light', saved === 'light')
        } else {
            const prefersLight =
                window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: light)').matches
            const initial = prefersLight ? 'light' : 'dark'
            setTheme(initial)
            document.documentElement.classList.toggle('light', initial === 'light')
        }
    }, [])

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark'
        setTheme(next)
        localStorage.setItem('theme', next)
        document.documentElement.classList.toggle('light', next === 'light')
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'pt-3 px-4 md:px-6' : 'pt-5 px-4 md:px-8'
                }`}
        >
            <nav
                className={`container mx-auto max-w-6xl transition-all duration-300 rounded-2xl ${isScrolled
                        ? 'bg-[#110e1b]/85 backdrop-blur-xl border border-white/[0.09] shadow-2xl shadow-purple-950/30 px-5 py-3'
                        : 'bg-transparent border border-transparent px-3 py-2'
                    }`}
            >
                <div className="flex items-center justify-between gap-4">
                    {/* Brand Logo */}
                    <a
                        href="#hero"
                        onClick={() => setActiveSection('#hero')}
                        className="group flex items-center gap-2.5 focus:outline-none"
                    >
                        <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/25 group-hover:scale-105 transition-all duration-300">
                            <Terminal size={17} />
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                                MSK
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                        </div>
                    </a>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setActiveSection(link.href)}
                                    className={`relative px-3.5 py-1.5 rounded-lg text-xs lg:text-sm font-semibold transition-colors duration-200 ${isActive
                                            ? 'text-white'
                                            : 'text-gray-400 hover:text-gray-200'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeNavPill"
                                            transition={{
                                                type: 'spring',
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                            className="absolute inset-0 rounded-lg bg-purple-600/85 shadow-md shadow-purple-600/30 -z-10"
                                        />
                                    )}
                                    {link.name}
                                </a>
                            )
                        })}
                    </div>

                    {/* Right Actions: Theme Toggle & Mobile Trigger */}
                    <div className="flex items-center gap-2.5">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-purple-500/20 border border-white/[0.08] hover:border-purple-500/35 text-gray-200 hover:text-purple-300 transition-all duration-200 cursor-pointer"
                        >
                            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            aria-label="Toggle menu"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-white transition-colors cursor-pointer"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Animated Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: -8 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -8 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="mt-4 pt-4 border-t border-white/[0.08] space-y-1.5">
                                {navLinks.map((link) => {
                                    const isActive = activeSection === link.href

                                    return (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => {
                                                setActiveSection(link.href)
                                                setIsMobileMenuOpen(false)
                                            }}
                                            className={`flex items-center justify-between py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${isActive
                                                    ? 'bg-purple-600/25 text-white border border-purple-500/35'
                                                    : 'text-gray-300 hover:text-white hover:bg-white/[0.05]'
                                                }`}
                                        >
                                            <span>{link.name}</span>
                                            <ArrowUpRight
                                                size={15}
                                                className={
                                                    isActive
                                                        ? 'text-purple-400'
                                                        : 'text-gray-500'
                                                }
                                            />
                                        </a>
                                    )
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}

export default Navbar
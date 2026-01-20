import React, { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Read saved theme or prefered scheme
    useEffect(() => {
        const saved = localStorage.getItem('theme')
        if (saved) {
            setTheme(saved)
            document.documentElement.classList.toggle('light', saved === 'light')
        } else {
            const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
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

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 backdrop-blur-sm bg-white/5' : 'py-6'
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="#hero" className="text-2xl font-bold gradient-text">
                        MSK
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="nav-link text-sm font-medium px-3 py-2 rounded-md transition-all duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Theme toggle (desktop & mobile) */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="p-2 rounded-md text-gray-200 hover:bg-white/5 transition-colors"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 glass rounded-2xl p-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block py-3 px-3 rounded-lg text-gray-200 nav-link-mobile transition-all duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar

import React from 'react'
import { Heart } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-transparent">
            <div className="container mx-auto px-6 py-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex flex-col items-start md:items-start md:w-1/3">
                        <a href="#hero" className="text-3xl font-bold gradient-text">MSK</a>
                        <span className="footer-summary text-sm text-gray-400 mt-1">Motivated Full-Stack .NET Developer with a solid foundation in building web applications using ASP.NET Core (MVC & Web API), Entity Framework Core, and SQL Server.</span>
                    </div>

                    <div className="text-center text-gray-400 text-sm flex-1 flex flex-col items-center justify-center">
                        <span>© {new Date().getFullYear()} Mohamed Sherif Kamel.</span>
                        <span className="hidden sm:inline-flex items-center gap-1 mt-1">Built with <Heart className="text-red-400" size={14} fill="currentColor" /></span>
                    </div>

                    <div className="flex items-center gap-4 md:w-1/4 md:justify-end">
                        <a href="#" className="footer-link text-gray-400" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://wa.me/201007240656" className="footer-link text-gray-400" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                        <a href="#hero" className="footer-link text-gray-400">Portfolio</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

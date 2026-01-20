import React from 'react'
import { motion } from 'framer-motion'
import { FolderGit2, ExternalLink } from 'lucide-react'

const Projects = () => {
    const projects = [
        {
            title: 'Learning Management System',
            period: '10/2025 – 12/2025',
            description: 'Developed a comprehensive e-learning platform to streamline course management, instructor assignments, and student enrollment.',
            repo: 'https://github.com/JinxX404/Learning_Management_System_LMS',
            technologies: ['ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'Bootstrap', 'JavaScript', 'Razor Views'],
            highlights: [
                'Robust admin dashboard for role-based access control, content management, and student progress tracking',
                'Applied Clean MVC Architecture and SOLID principles for scalability and maintainability',
                'Optimized data access with EF Core and LINQ',
                'Responsive, user-centric interfaces using Razor Views, Bootstrap, and JavaScript',
            ],
        },
        {
            title: 'Almadina Printing Press - Full-Stack Web',
            period: '2024',
            description: 'Developed a full-stack web application for a printing press business using React.js and Node.js that provides comprehensive business showcase and management features.',
            repo: 'https://github.com/Azamsherif/Al-Madina-Press-frontend',
            technologies: ['React.js', 'React Router', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Bootstrap', 'Framer Motion', 'Multer', 'CORS', 'REST API', 'Modern JavaScript (ES6+)'],
            highlights: [
                'Product portfolio display with image gallery and detailed descriptions',
                'Admin dashboard for content management (CRUD operations)',
                'Image upload system with server-side storage and optimization',
                'Contact form with message management system',
                'Responsive design with smooth animations and modern UI',
                'RESTful API architecture for seamless data communication',
            ],
        },
    ]

    return (
        <section id="projects" className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
            <div className="container mx-auto max-w-6xl">
                
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Projects
                </motion.h2>

                
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="glass p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="glass p-3 rounded-full text-purple-400">
                                    <FolderGit2 size={24} />
                                </div>
                                <div className="flex items-center gap-3">
                                    {project.repo && (
                                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                    <span className="text-gray-200 text-sm">{project.period}</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-200 mb-4">{project.description}</p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Highlights */}
                            <ul className="space-y-2 text-sm text-gray-200">
                                {project.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-purple-400 mr-2">•</span>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects

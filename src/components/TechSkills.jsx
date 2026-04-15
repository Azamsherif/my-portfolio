import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Server, GitBranch, Container, Shield } from 'lucide-react'

const TechSkills = () => {
    const skillCategories = [
        {
            title: 'Frontend Technologies',
            icon: <Code size={24} />,
            skills: [
                'HTML5, CSS3, JavaScript (ES6+)',
                'Bootstrap 5, Responsive Web Design',
                'Flexbox, CSS Grid, Media Queries',
                'DOM Manipulation, Event Handling, AJAX/Fetch API',
            ],
        },
        {
            title: 'Backend Technologies',
            icon: <Server size={24} />,
            skills: [
                '.NET 10/6, ASP.NET Core (MVC & Web API)',
                'Entity Framework Core (EF Core), LINQ',
                'RESTful APIs, Swagger/OpenAPI',
                'Identity Framework, JWT Authentication',
                'Dependency Injection, Asynchronous Programming (Async/Await)',
            ],
        },
        {
            title: 'Database Management',
            icon: <Database size={24} />,
            skills: [
                'Microsoft SQL Server',
                'SQL (Stored Procedures, Functions, Joins)',
                'Database Schema Design, Normalization, Migrations',
            ],
        },
        {
            title: 'Development Tools & Practices',
            icon: <GitBranch size={24} />,
            skills: [
                'Git, GitHub',
                'Docker (Containerization)',
                'Agile, Scrum, Software Documentation',
                'SOLID Principles, OOP, Clean Architecture, Design Patterns',
            ],
        },
    ]

    return (
        <section id="skills" className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Technical Skills
                </motion.h2>

                
                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="glass p-8 rounded-3xl hover:bg-white/10 transition-all duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="glass p-3 rounded-full text-purple-400">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="text-gray-200 flex items-start">
                                        <span className="text-purple-400 mr-3">•</span>
                                        <span>{skill}</span>
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

export default TechSkills

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar } from 'lucide-react'

const Certifications = () => {
    const certifications = [
        {
            title: 'Full-Stack .NET Development',
            organization: 'Digital Egypt Pioneers Initiative (DEPI)',
            period: '2025 – Present',
            location: 'Assiut, Egypt',
        },
        {
            title: 'Computer Essentials',
            organization: 'Edraak',
            period: '2024',
        },
        {
            title: 'ICDL',
            organization: 'Edraak',
            period: '2023 – 2024',
        },
        {
            title: 'Introduction to Databases',
            organization: 'Information Technology Institute (ITI)',
            period: '2022',
            location: 'Cairo',
        },
        {
            title: 'Python Programming Basics',
            organization: 'Udacity',
            period: '2021',
            location: 'Cairo',
        },
    ]

    return (
        <section id="certifications" className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Certifications & Courses
                </motion.h2>

                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="glass p-6 rounded-3xl hover:bg-white/10 transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-start gap-3 mb-4">
                                <div className="glass p-2 rounded-full text-purple-400">
                                    <Award size={20} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                                    <p className="text-purple-300 text-sm font-semibold mb-2">
                                        {cert.organization}
                                    </p>
                                    <div className="flex items-center gap-2 text-gray-200 text-xs">
                                        <Calendar size={14} />
                                        <span>{cert.period}</span>
                                    </div>
                                    {cert.location && (
                                        <p className="text-gray-200 text-xs mt-1">{cert.location}</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications

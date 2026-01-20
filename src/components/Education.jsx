import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'

const Education = () => {
    const education = [
        {
            degree: 'Full-Stack .NET Development – 6-month Program',
            institution: 'Digital Egypt Pioneers Initiative (DEPI), Ministry of Communications – Assiut Branch',
            period: '06/2025 – 12/2025',
            location: 'Assiut, Egypt',
        },
        {
            degree: 'Bachelor of Computer Science',
            institution: 'Arab Open University (AOU)',
            period: '2019 – 2023',
            location: 'Cairo, Egypt',
        },
    ]

    return (
        <section id="education" className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
            <div className="container mx-auto max-w-5xl">
                
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Education
                </motion.h2>

                
                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="glass p-8 rounded-3xl hover:bg-white/10 transition-all duration-300"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="glass p-3 rounded-full">
                                    <GraduationCap className="text-purple-400" size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                                    <p className="text-purple-300 font-semibold mb-3">{edu.institution}</p>
                                    <div className="flex flex-wrap gap-4 text-gray-200 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            <span>{edu.period}</span>
                                        </div>
                                        <span>•</span>
                                        <span>{edu.location}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education

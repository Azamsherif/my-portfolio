import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6">
            <div className="container mx-auto max-w-5xl">
                
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Professional Experience
                </motion.h2>

                
                <motion.div
                    className="glass p-8 md:p-12 rounded-3xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-start gap-4 mb-6">
                        <div className="glass p-3 rounded-full">
                            <Briefcase className="text-purple-400" size={24} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Database Design & Architecture
                            </h3>
                            <p className="text-purple-300 font-semibold">Khamsat</p>
                        </div>
                    </div>

                    <ul className="space-y-4 text-gray-300 experience-list">
                        <li className="flex items-start">
                            <span className="bullet mr-3 mt-1">•</span>
                            <div>
                                <strong className="text-white">ERD Modeling:</strong> Architected a comprehensive Entity Relationship Diagram (ERD) to map complex freelance platform workflows.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="bullet mr-3 mt-1">•</span>
                            <div>
                                <strong className="text-white">Schema Implementation:</strong> Developed and optimized a relational database schema using SQL Server based on the ERD.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="bullet mr-3 mt-1">•</span>
                            <div>
                                <strong className="text-white">Data Integrity:</strong> Applied advanced normalization techniques (1NF, 2NF, 3NF) and constraints to ensure data consistency.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="bullet mr-3 mt-1">•</span>
                            <div>
                                <strong className="text-white">Performance Tuning:</strong> Wrote efficient T-SQL queries and stored procedures to handle high-volume data operations.
                            </div>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience

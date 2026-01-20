import React from 'react'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

const Languages = () => {
    const languages = [
        {
            name: 'Arabic',
            level: 'Native',
            percentage: 100,
        },
        {
            name: 'English',
            level: 'B1',
            percentage: 60,
        },
    ]

    return (
        <section id="languages" className="py-20 px-6 bg-gradient-to-b from-black/20 to-transparent">
            <div className="container mx-auto max-w-4xl">
                
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Languages
                </motion.h2>

                
                <div className="space-y-8">
                    {languages.map((lang, index) => (
                        <motion.div
                            key={index}
                            className="glass p-6 rounded-3xl"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <Globe className="text-purple-400" size={24} />
                                    <h3 className="text-2xl font-bold text-white">{lang.name}</h3>
                                </div>
                                <span className="text-purple-300 font-semibold">{lang.level}</span>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${lang.percentage}%` }}
                                    transition={{ duration: 1, delay: index * 0.3 }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Languages

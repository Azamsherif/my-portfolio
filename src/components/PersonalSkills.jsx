import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Users, Zap, Palette } from 'lucide-react'

const PersonalSkills = () => {
    const skills = [
        {
            title: 'Problem-Solving & Analytical Thinking',
            icon: <Lightbulb size={32} />,
            description: 'Breaking down complex problems into manageable solutions',
        },
        {
            title: 'Team Collaboration & Communication',
            icon: <Users size={32} />,
            description: 'Effective teamwork and clear communication',
        },
        {
            title: 'Adaptability & Fast Learner',
            icon: <Zap size={32} />,
            description: 'Quickly adapting to new technologies and environments',
        },
        {
            title: 'Creative & Innovative',
            icon: <Palette size={32} />,
            description: 'Bringing creative solutions to technical challenges',
        },
    ]

    return (
        <section id="personal-skills" className="py-20 px-6 bg-gradient-to-b from-black/20 to-transparent">
            <div className="container mx-auto max-w-6xl">
                
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Personal Skills
                </motion.h2>

                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="glass p-6 rounded-3xl text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex justify-center mb-4 text-purple-400">
                                {skill.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">{skill.title}</h3>
                            <p className="text-gray-400 text-sm">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PersonalSkills

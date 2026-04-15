import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id="about" className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
                        About Me
                    </h2>

                    
                    <div className="glass p-8 md:p-12 rounded-3xl">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Motivated Full-Stack .NET Developer with a solid foundation in building web applications using <span className="text-white font-semibold">ASP.NET Core (MVC & Web API)</span>, <span className="text-white font-semibold">Entity Framework Core</span>, and <span className="text-white font-semibold">SQL Server</span>.<br />
                            A graduate of the intensive <span className="text-white font-semibold">Digital Egypt Pioneers Initiative (DEPI)</span>, where I mastered the full <span className="text-white font-semibold">Software Development Life Cycle (SDLC)</span>, including professional documentation, testing, and Git version control.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mt-6">
                            Proficient in modern front-end technologies and Docker containerization. Passionate about writing <span className="text-white font-semibold">Clean Code</span>, implementing <span className="text-white font-semibold">SOLID principles</span>, and delivering scalable, high-performance technical solutions.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About

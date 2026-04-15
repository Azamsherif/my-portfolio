import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                
                <motion.div
                    className="glass p-8 md:p-12 rounded-3xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="glass p-3 rounded-full text-purple-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-2">Email</h3>
                                <a
                                    href="mailto:mohamedsherif21101@gmail.com"
                                    className="text-gray-200 hover:text-purple-300 transition-colors"
                                >
                                    mohamedsherif21101@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="glass p-3 rounded-full text-purple-400">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-2">Phone</h3>
                                <a
                                    href="tel:+201007240656"
                                    className="text-gray-200 hover:text-purple-300 transition-colors"
                                >
                                    01007240656
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-4">
                            <div className="glass p-3 rounded-full text-purple-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-2">Location</h3>
                                <p className="text-gray-200">Qusiya, Assiut, Egypt</p>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="flex items-start gap-4">
                            <div className="glass p-3 rounded-full text-purple-400">
                                <Github size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-2">Social</h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://github.com/Azamsherif"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-200 hover:text-purple-300 transition-colors"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/mohamed-sherif-kamel"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                            className="text-gray-200 hover:text-purple-300 transition-colors"
                                    >
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="text-center">
                        <p className="text-gray-200 mb-6">
                            I'm always open to discussing new projects, creative ideas, or opportunities.
                        </p>
                        <a
                            href="mailto:mohamedsherif21101@gmail.com"
                            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
                        >
                            Send Me an Email
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact

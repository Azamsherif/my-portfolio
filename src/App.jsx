import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import TechSkills from './components/TechSkills'
import PersonalSkills from './components/PersonalSkills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Languages from './components/Languages'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Education />
            <TechSkills />
            <PersonalSkills />
            <Experience />
            <Projects />
            <Certifications />
            <Languages />
            <Contact />
            <Footer />
        </div>
    )
}

export default App

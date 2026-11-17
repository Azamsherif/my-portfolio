import React, { Suspense, lazy, useEffect } from 'react'
import { initScroll } from './lib/scroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { GuideDock, ScrollProgress } from './components/Guide'

// three.js is heavy: load it after the page shell is interactive.
const Scene = lazy(() => import('./components/three/Scene'))

const webglAvailable = () => {
    try {
        const c = document.createElement('canvas')
        return !!(c.getContext('webgl2') || c.getContext('webgl'))
    } catch {
        return false
    }
}

class SceneBoundary extends React.Component {
    state = { failed: false }
    static getDerivedStateFromError() {
        return { failed: true }
    }
    render() {
        return this.state.failed ? null : this.props.children
    }
}

export default function App() {
    useEffect(() => initScroll(), [])
    const has3D = webglAvailable()

    return (
        <>
            <ScrollProgress />
            {has3D && (
                <div aria-hidden className="fade-in-slow pointer-events-none fixed inset-0 z-0 opacity-0">
                    <SceneBoundary>
                        <Suspense fallback={null}>
                            <Scene />
                        </Suspense>
                    </SceneBoundary>
                </div>
            )}
            <Navbar />
            <main className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Contact />
            </main>
            <div className="relative z-10">
                <Footer />
            </div>
            <GuideDock />
        </>
    )
}

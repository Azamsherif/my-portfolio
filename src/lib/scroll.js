import Lenis from 'lenis'
import { useSyncExternalStore } from 'react'
import { CHAPTERS } from '../data'

// Shared, mutable scroll state. The 3D scene reads it every frame
// (no React re-render); UI subscribes via useActiveChapter().
export const scrollState = { index: 0, progress: 0, velocity: 0 }

let lenis = null
let rafId = 0
const listeners = new Set()
const emit = () => listeners.forEach((l) => l())

export const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

function computeActive() {
    const line = window.innerHeight * 0.42
    let idx = 0
    let rect = null
    CHAPTERS.forEach((c, i) => {
        const el = document.getElementById(c.id)
        if (!el) return
        const r = el.getBoundingClientRect()
        if (r.top <= line) {
            idx = i
            rect = r
        }
    })
    // How far through the active chapter we are (0..1) — drives the 3D transit.
    scrollState.progress = rect ? Math.min(1, Math.max(0, (line - rect.top) / rect.height)) : 0
    // Reaching the very bottom always activates the last chapter.
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        idx = CHAPTERS.length - 1
        scrollState.progress = 1
    }
    if (idx !== scrollState.index) {
        scrollState.index = idx
        document.documentElement.style.setProperty('--accent', CHAPTERS[idx].accent)
        emit()
    }
}

export function initScroll() {
    document.documentElement.style.setProperty('--accent', CHAPTERS[0].accent)

    if (!prefersReducedMotion()) {
        lenis = new Lenis({
            duration: 1.25,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 0.9,
            touchMultiplier: 1.4,
        })
        const raf = (time) => {
            lenis?.raf(time)
            rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)
        lenis.on('scroll', (e) => {
            scrollState.velocity = e.velocity || 0
            computeActive()
        })
    } else {
        window.addEventListener('scroll', computeActive, { passive: true })
    }
    window.addEventListener('resize', computeActive)
    computeActive()

    // Route every in-page anchor through the smooth scroller.
    const onClick = (e) => {
        const a = e.target.closest?.('a[href^="#"]')
        if (!a) return
        const id = a.getAttribute('href').slice(1)
        if (!id || !document.getElementById(id)) return
        e.preventDefault()
        scrollToId(id)
    }
    document.addEventListener('click', onClick)

    return () => {
        document.removeEventListener('click', onClick)
        window.removeEventListener('scroll', computeActive)
        window.removeEventListener('resize', computeActive)
        cancelAnimationFrame(rafId)
        lenis?.destroy()
        lenis = null
    }
}

export function scrollToId(id) {
    const el = document.getElementById(id)
    if (!el) return
    unlockScroll() // navigating always releases overlays' scroll lock
    if (lenis) lenis.scrollTo(id === 'hero' ? 0 : el, { duration: 1.6, offset: 0 })
    else el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    history.replaceState(null, '', id === 'hero' ? ' ' : `#${id}`)
}

export function goToChapter(i) {
    const clamped = Math.max(0, Math.min(CHAPTERS.length - 1, i))
    scrollToId(CHAPTERS[clamped].id)
}

export const lockScroll = () => {
    lenis?.stop()
    document.documentElement.style.overflow = 'hidden'
}
export const unlockScroll = () => {
    lenis?.start()
    document.documentElement.style.overflow = ''
}

const subscribe = (cb) => {
    listeners.add(cb)
    return () => listeners.delete(cb)
}
export const useActiveChapter = () =>
    useSyncExternalStore(subscribe, () => scrollState.index, () => 0)

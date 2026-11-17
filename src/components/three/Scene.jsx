import React, { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import { scrollState, prefersReducedMotion } from '../../lib/scroll'

const { damp, smoothstep, lerp } = THREE.MathUtils

// Resting pose for each chapter, as fractions of the visible viewport.
// The balloon alternates sides so every chapter change is a visible journey.
// x/y: offset from centre, s: scale, o: opacity, tilt: galaxy tilt [x, z].
const POSES = [
    { x: 0.3, y: 0.0, s: 1.05, o: 1, tilt: [0.95, 0.3] }, // Intro
    { x: 0.5, y: 0.22, s: 0.85, o: 0.6, tilt: [1.2, -0.3] }, // About
    { x: -0.5, y: -0.24, s: 0.8, o: 0.55, tilt: [0.75, 0.5] }, // Skills
    { x: 0.5, y: 0.22, s: 0.85, o: 0.6, tilt: [1.0, 0.1] }, // Experience
    { x: -0.5, y: -0.24, s: 0.8, o: 0.55, tilt: [1.3, -0.4] }, // Projects
    { x: 0.5, y: 0.22, s: 0.85, o: 0.6, tilt: [0.8, -0.2] }, // Education
    { x: 0.44, y: 0.22, s: 0.9, o: 0.65, tilt: [0.9, 0.3] }, // Contact
]

// Theme-aware palette for the galaxy (core → arm tips), the glass shell and the star field.
const PALETTE = {
    dark: { core: '#fff4e0', arm: '#4f6ef7', edge: '#9b7bff', shell: '#8aa0ff', stars: '#e5e7ff', ring: '#475569' },
    light: { core: '#1b2563', arm: '#4f6ef7', edge: '#7c5cf0', shell: '#4f6ef7', stars: '#64748b', ring: '#cbd5e1' },
}

const reduced = prefersReducedMotion()
const theme = { light: false }

// ---------- Galaxy geometry (built once) ----------
const GALAXY = (() => {
    const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 3500 : 7000
    const branches = 4
    const spin = 1.6
    const radius = 0.92
    const positions = new Float32Array(count * 3)
    const mix = new Float32Array(count) // 0 at the core → 1 at the arm tips
    for (let i = 0; i < count; i++) {
        const r = Math.pow(Math.random(), 1.6) * radius
        const branch = ((i % branches) / branches) * Math.PI * 2
        const angle = branch + r * spin * Math.PI
        const spread = 0.22 * (1 - r / radius) + 0.05
        const rx = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * spread
        const ry = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * spread * 0.45
        const rz = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * spread
        positions[i * 3] = Math.cos(angle) * r + rx
        positions[i * 3 + 1] = ry
        positions[i * 3 + 2] = Math.sin(angle) * r + rz
        mix[i] = r / radius
    }
    return { count, positions, mix }
})()

function galaxyColors(pal) {
    const core = new THREE.Color(pal.core)
    const arm = new THREE.Color(pal.arm)
    const edge = new THREE.Color(pal.edge)
    const out = new Float32Array(GALAXY.count * 3)
    const c = new THREE.Color()
    for (let i = 0; i < GALAXY.count; i++) {
        const t = GALAXY.mix[i]
        if (t < 0.35) c.copy(core).lerp(arm, t / 0.35)
        else c.copy(arm).lerp(edge, (t - 0.35) / 0.65)
        out[i * 3] = c.r
        out[i * 3 + 1] = c.g
        out[i * 3 + 2] = c.b
    }
    return out
}
const COLORS = { dark: galaxyColors(PALETTE.dark), light: galaxyColors(PALETTE.light) }

// Soft round sprite so stars are dots, not squares.
const DOT = (() => {
    if (typeof document === 'undefined') return null
    const size = 64
    const cv = document.createElement('canvas')
    cv.width = cv.height = size
    const ctx = cv.getContext('2d')
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
    g.addColorStop(0, 'rgba(255,255,255,1)')
    g.addColorStop(0.35, 'rgba(255,255,255,0.8)')
    g.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, size, size)
    return new THREE.CanvasTexture(cv)
})()

// Glass balloon: transparent in the middle, glowing at the rim (Fresnel).
const shellVertex = /* glsl */ `
    varying vec3 vNormal;
    varying vec3 vView;
    void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vNormal = normalize(normalMatrix * normal);
        vView = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
    }
`
const shellFragment = /* glsl */ `
    uniform vec3 uColor;
    uniform float uOpacity;
    varying vec3 vNormal;
    varying vec3 vView;
    void main() {
        float rim = pow(1.0 - max(dot(vNormal, vView), 0.0), 2.6);
        float sheen = pow(max(dot(reflect(-vView, vNormal), normalize(vec3(-0.4, 0.7, 0.6))), 0.0), 90.0);
        gl_FragColor = vec4(uColor, (rim * 0.9 + sheen * 0.35 + 0.03) * uOpacity);
    }
`

function CameraRig() {
    const { camera, pointer } = useThree()
    useFrame((_, dt) => {
        camera.position.x = damp(camera.position.x, pointer.x * 0.6, 1.8, dt)
        camera.position.y = damp(camera.position.y, pointer.y * 0.4, 1.8, dt)
        camera.lookAt(0, 0, 0)
    })
    return null
}

/** Resolve the on-screen target for chapter i at the current viewport. */
function place(i, viewport, mobile) {
    const p = POSES[Math.min(i, POSES.length - 1)]
    return {
        x: mobile ? Math.sign(p.x) * 0.42 * viewport.width : p.x * viewport.width,
        y: mobile ? 0.3 * viewport.height : p.y * viewport.height,
        s: mobile ? (i === 0 ? 0.8 : 0.6) : p.s,
        o: mobile ? Math.min(p.o, i === 0 ? 0.75 : 0.45) : p.o,
    }
}

function UniverseBalloon() {
    const group = useRef()
    const galaxy = useRef()
    const galaxyGeo = useRef()
    const galaxyMat = useRef()
    const shell = useRef()
    const ring = useRef()
    const motion = useRef({ last: 0, spin: 0, pulse: 0, light: null })
    const { viewport, size } = useThree()
    const tmp = useMemo(() => new THREE.Color(), [])
    const shellUniforms = useMemo(
        () => ({ uColor: { value: new THREE.Color(PALETTE.dark.shell) }, uOpacity: { value: 1 } }),
        []
    )

    useFrame((state, dt) => {
        const t = state.clock.elapsedTime
        const m = motion.current
        const mobile = size.width < 768
        const i = scrollState.index
        const next = Math.min(i + 1, POSES.length - 1)
        const pal = theme.light ? PALETTE.light : PALETTE.dark
        const k = 1 - Math.exp(-4 * dt)

        // Swap galaxy colours and blending when the theme changes.
        if (m.light !== theme.light) {
            m.light = theme.light
            galaxyGeo.current.attributes.color.array.set(theme.light ? COLORS.light : COLORS.dark)
            galaxyGeo.current.attributes.color.needsUpdate = true
            galaxyMat.current.blending = theme.light ? THREE.NormalBlending : THREE.AdditiveBlending
            galaxyMat.current.needsUpdate = true
            shell.current.material.blending = theme.light ? THREE.NormalBlending : THREE.AdditiveBlending
            shell.current.material.needsUpdate = true
        }

        // Rest for most of a chapter, then float to the next one during its final stretch.
        const travel = reduced ? 0 : smoothstep(scrollState.progress, 0.6, 1)
        const a = place(i, viewport, mobile)
        const b = place(next, viewport, mobile)
        const arc = Math.sin(Math.PI * travel)
        const bob = reduced ? 0 : Math.sin(t * 0.8) * 0.015 * viewport.height

        const g = group.current
        g.position.x = damp(g.position.x, lerp(a.x, b.x, travel) + Math.sin(t * 0.3) * 0.015 * viewport.width, 2, dt)
        g.position.y = damp(g.position.y, lerp(a.y, b.y, travel) + arc * 0.14 * viewport.height + bob, 2, dt)
        g.position.z = damp(g.position.z, -arc * 1.4, 2, dt)
        g.scale.setScalar(damp(g.scale.x, lerp(a.s, b.s, travel) * (1 - arc * 0.15), 2, dt))
        const o = lerp(a.o, b.o, travel) * (1 - arc * 0.35)

        // Chapter change: the galaxy whirls faster for a moment.
        if (i !== m.last) {
            m.pulse = 1
            m.last = i
        }
        m.pulse = damp(m.pulse, 0, 1.4, dt)
        m.spin += dt * ((reduced ? 0.04 : 0.18) + m.pulse * 1.6 + arc * 0.6)
        galaxy.current.rotation.y = m.spin

        // Tilt the galaxy disc per chapter, plus a little mouse response.
        const tilt = POSES[travel > 0.5 ? next : i].tilt
        galaxy.current.rotation.x = damp(galaxy.current.rotation.x, tilt[0] + state.pointer.y * -0.2, 1.6, dt)
        galaxy.current.rotation.z = damp(galaxy.current.rotation.z, tilt[1] + state.pointer.x * 0.15, 1.6, dt)

        galaxyMat.current.opacity = damp(galaxyMat.current.opacity, o * (theme.light ? 0.85 : 1), 3, dt)
        galaxyMat.current.size = (mobile ? 0.03 : 0.026) * (1 + m.pulse * 0.25)

        // Balloon breathes slightly and swells on a chapter change.
        shell.current.scale.setScalar(1 + Math.sin(t * 1.2) * 0.012 + m.pulse * 0.05)
        shellUniforms.uColor.value.lerp(tmp.set(pal.shell), k)
        shellUniforms.uOpacity.value = damp(shellUniforms.uOpacity.value, o * (theme.light ? 0.55 : 0.9), 3, dt)

        ring.current.rotation.z += dt * (0.12 + m.pulse * 0.6)
        ring.current.material.color.lerp(tmp.set(pal.ring), k)
        ring.current.material.opacity = o * 0.5
    })

    return (
        <group ref={group}>
            <Float speed={reduced ? 0 : 1} rotationIntensity={0.15} floatIntensity={0.5}>
                <points ref={galaxy}>
                    <bufferGeometry ref={galaxyGeo}>
                        <bufferAttribute attach="attributes-position" args={[GALAXY.positions, 3]} />
                        <bufferAttribute attach="attributes-color" args={[COLORS.dark.slice(), 3]} />
                    </bufferGeometry>
                    <pointsMaterial
                        ref={galaxyMat}
                        size={0.026}
                        sizeAttenuation
                        vertexColors
                        map={DOT}
                        transparent
                        depthWrite={false}
                        blending={THREE.AdditiveBlending}
                    />
                </points>

                <mesh ref={shell}>
                    <sphereGeometry args={[1.08, 64, 64]} />
                    <shaderMaterial
                        vertexShader={shellVertex}
                        fragmentShader={shellFragment}
                        uniforms={shellUniforms}
                        transparent
                        depthWrite={false}
                        blending={THREE.AdditiveBlending}
                    />
                </mesh>

                <mesh ref={ring} rotation={[1.25, 0.15, 0]}>
                    <torusGeometry args={[1.45, 0.004, 8, 200]} />
                    <meshBasicMaterial color={PALETTE.dark.ring} transparent opacity={0.5} />
                </mesh>
            </Float>
        </group>
    )
}

/** Distant star field around the whole scene. */
function StarField() {
    const ref = useRef()
    const positions = useMemo(() => {
        const n = 900
        const arr = new Float32Array(n * 3)
        for (let i = 0; i < n; i++) {
            const r = 6 + Math.random() * 10
            const th = Math.random() * Math.PI * 2
            const ph = Math.acos(2 * Math.random() - 1)
            arr[i * 3] = r * Math.sin(ph) * Math.cos(th)
            arr[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th)
            arr[i * 3 + 2] = r * Math.cos(ph) - 6
        }
        return arr
    }, [])
    const tmp = useMemo(() => new THREE.Color(), [])
    useFrame((_, dt) => {
        ref.current.rotation.y += dt * (reduced ? 0.002 : 0.01)
        const mat = ref.current.material
        mat.color.lerp(tmp.set(theme.light ? PALETTE.light.stars : PALETTE.dark.stars), 1 - Math.exp(-4 * dt))
        mat.opacity = theme.light ? 0.35 : 0.7
    })
    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial size={0.05} sizeAttenuation map={DOT} transparent depthWrite={false} color={PALETTE.dark.stars} />
        </points>
    )
}

export default function Scene() {
    // Follow the site's light/dark class on <html>.
    useEffect(() => {
        const root = document.documentElement
        const sync = () => (theme.light = root.classList.contains('light'))
        sync()
        const obs = new MutationObserver(sync)
        obs.observe(root, { attributes: true, attributeFilter: ['class'] })
        return () => obs.disconnect()
    }, [])

    return (
        <Canvas
            dpr={[1, 1.75]}
            camera={{ position: [0, 0, 6], fov: 45 }}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            eventSource={document.getElementById('root')}
            eventPrefix="client"
        >
            <UniverseBalloon />
            <StarField />
            <CameraRig />
        </Canvas>
    )
}

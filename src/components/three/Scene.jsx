import React, { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import { ACCENT } from '../../data'
import { scrollState, prefersReducedMotion } from '../../lib/scroll'

const { damp, smoothstep, lerp } = THREE.MathUtils

// Resting pose for each chapter, as fractions of the visible viewport.
// The core alternates sides so every chapter change is a visible journey.
// x/y: offset from centre, s: scale, o: opacity, d: surface distortion,
// form: which wireframe cage surrounds it, tilt: ring orientation.
const POSES = [
    { x: 0.26, y: 0.02, s: 1.15, o: 1, d: 0.3, form: 0, tilt: [1.3, 0.2] }, // Intro
    { x: 0.46, y: 0.22, s: 0.72, o: 0.45, d: 0.22, form: 1, tilt: [0.4, 0.9] }, // About
    { x: -0.46, y: -0.24, s: 0.68, o: 0.4, d: 0.4, form: 2, tilt: [1.9, -0.4] }, // Skills
    { x: 0.46, y: 0.22, s: 0.72, o: 0.42, d: 0.28, form: 0, tilt: [0.8, -0.8] }, // Experience
    { x: -0.46, y: -0.24, s: 0.66, o: 0.4, d: 0.45, form: 1, tilt: [1.5, 0.6] }, // Projects
    { x: 0.46, y: 0.22, s: 0.72, o: 0.42, d: 0.26, form: 2, tilt: [0.3, 0.3] }, // Education
    { x: 0.34, y: 0.16, s: 0.9, o: 0.65, d: 0.34, form: 0, tilt: [1.2, -0.2] }, // Contact
]

const reduced = prefersReducedMotion()
// A softer, slightly desaturated tone of the brand accent for the 3D material.
const CORE = '#5468c9'
const WIRE = '#9ca3af'

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
        x: mobile ? Math.sign(p.x) * 0.4 * viewport.width : p.x * viewport.width,
        y: mobile ? 0.3 * viewport.height : p.y * viewport.height,
        s: mobile ? (i === 0 ? 0.62 : 0.5) : p.s,
        o: mobile ? Math.min(p.o, 0.55) : p.o,
        d: p.d,
    }
}

function Core() {
    const group = useRef()
    const spinner = useRef()
    const mat = useRef()
    const cages = useRef([])
    const rings = useRef()
    const ringA = useRef()
    const ringB = useRef()
    const moons = useRef()
    const motion = useRef({ last: 0, spin: 0, pulse: 0 })
    const { viewport, size } = useThree()

    useFrame((state, dt) => {
        const t = state.clock.elapsedTime
        const m = motion.current
        const mobile = size.width < 768
        const i = scrollState.index
        const next = Math.min(i + 1, POSES.length - 1)

        // Rest for most of a chapter, then travel to the next one during its final stretch.
        const travel = reduced ? 0 : smoothstep(scrollState.progress, 0.6, 1)
        const a = place(i, viewport, mobile)
        const b = place(next, viewport, mobile)
        const arc = Math.sin(Math.PI * travel) // 0 → 1 → 0 across the journey

        // Gentle idle drift so the core never feels frozen.
        const driftX = reduced ? 0 : Math.sin(t * 0.35) * 0.025 * viewport.width
        const driftY = reduced ? 0 : Math.cos(t * 0.42) * 0.025 * viewport.height

        const tx = lerp(a.x, b.x, travel) + driftX
        const ty = lerp(a.y, b.y, travel) + arc * 0.12 * viewport.height + driftY
        const tz = -arc * 1.6 // dips back in depth mid-journey
        const ts = lerp(a.s, b.s, travel) * (1 - arc * 0.18)
        const to = lerp(a.o, b.o, travel) * (1 - arc * 0.45)

        const g = group.current
        g.position.x = damp(g.position.x, tx, 2.2, dt)
        g.position.y = damp(g.position.y, ty, 2.2, dt)
        g.position.z = damp(g.position.z, tz, 2.2, dt)
        g.scale.setScalar(damp(g.scale.x, ts, 2.2, dt))

        // Chapter change: queue a half-turn and a short energy pulse.
        if (i !== m.last) {
            m.spin += Math.PI * (i > m.last ? 1 : -1)
            m.pulse = 1
            m.last = i
        }
        m.pulse = damp(m.pulse, 0, 1.6, dt)
        m.spin += dt * (reduced ? 0.03 : 0.14)
        const v = Math.min(Math.abs(scrollState.velocity), 40) * 0.004
        const s = spinner.current
        s.rotation.y = damp(s.rotation.y, m.spin + travel * Math.PI * 0.5, 2.4, dt)
        s.rotation.x = damp(s.rotation.x, state.pointer.y * -0.25 + arc * 0.4, 2, dt)
        s.rotation.z = damp(s.rotation.z, arc * 0.25, 2, dt)

        mat.current.opacity = damp(mat.current.opacity, to, 2, dt)
        mat.current.distort = damp(mat.current.distort, lerp(a.d, b.d, travel) + m.pulse * 0.25 + v * 2, 3, dt)

        // Morph between wireframe cages.
        const form = POSES[travel > 0.5 ? next : i].form
        cages.current.forEach((c, k) => {
            if (!c) return
            const on = k === form
            c.material.opacity = damp(c.material.opacity, on ? to * 0.35 : 0, 3, dt)
            c.scale.setScalar(damp(c.scale.x, on ? 1.42 + m.pulse * 0.15 : 0.9, 3, dt))
            c.rotation.x -= dt * 0.08
            c.rotation.z += dt * 0.05
        })

        // Rings re-orient per chapter and swing wider during transit.
        const tilt = POSES[travel > 0.5 ? next : i].tilt
        const r = rings.current
        r.rotation.x = damp(r.rotation.x, tilt[0], 1.8, dt)
        r.rotation.y = damp(r.rotation.y, tilt[1], 1.8, dt)
        r.scale.setScalar(damp(r.scale.x, 1 + arc * 0.15 + m.pulse * 0.1, 3, dt))
        ringA.current.rotation.z += dt * (0.2 + m.pulse)
        ringB.current.rotation.z -= dt * (0.14 + m.pulse * 0.6)
        ringA.current.material.opacity = ringB.current.material.opacity = to * 0.5

        moons.current.rotation.y += dt * (0.45 + m.pulse * 2 + arc)
    })

    return (
        <group ref={group}>
            <Float speed={reduced ? 0 : 1.2} rotationIntensity={0.25} floatIntensity={0.7}>
                <group ref={spinner}>
                    <mesh>
                        <icosahedronGeometry args={[1, 40]} />
                        <MeshDistortMaterial
                            ref={mat}
                            color={CORE}
                            distort={0.3}
                            speed={reduced ? 0.3 : 1.6}
                            roughness={0.32}
                            metalness={0.25}
                            clearcoat={1}
                            clearcoatRoughness={0.15}
                            transparent
                            opacity={1}
                        />
                    </mesh>

                    {[
                        <icosahedronGeometry key="i" args={[1, 1]} />,
                        <octahedronGeometry key="o" args={[1.15, 0]} />,
                        <dodecahedronGeometry key="d" args={[1, 0]} />,
                    ].map((geo, k) => (
                        <mesh key={k} ref={(el) => (cages.current[k] = el)} scale={k === 0 ? 1.42 : 0.9}>
                            {geo}
                            <meshBasicMaterial wireframe transparent opacity={k === 0 ? 0.35 : 0} color={WIRE} />
                        </mesh>
                    ))}
                </group>

                <group ref={rings} rotation={[POSES[0].tilt[0], POSES[0].tilt[1], 0]}>
                    <mesh ref={ringA}>
                        <torusGeometry args={[1.95, 0.008, 12, 200]} />
                        <meshBasicMaterial color={WIRE} transparent opacity={0.5} />
                    </mesh>
                    <mesh ref={ringB} rotation={[0.5, 0.4, 0]}>
                        <torusGeometry args={[2.35, 0.006, 12, 200]} />
                        <meshBasicMaterial color={WIRE} transparent opacity={0.5} />
                    </mesh>
                </group>

                <group ref={moons} rotation={[0.4, 0, 0.2]}>
                    {[0, 2.1, 4.2].map((ang, k) => (
                        <mesh key={k} position={[Math.cos(ang) * 2.1, Math.sin(ang) * 0.3, Math.sin(ang) * 2.1]}>
                            <sphereGeometry args={[0.05 + k * 0.015, 24, 24]} />
                            <meshStandardMaterial
                                color={k === 0 ? ACCENT : '#e5e7eb'}
                                emissive={k === 0 ? ACCENT : '#e5e7eb'}
                                emissiveIntensity={0.6}
                            />
                        </mesh>
                    ))}
                </group>
            </Float>
        </group>
    )
}

export default function Scene() {
    return (
        <Canvas
            dpr={[1, 1.75]}
            camera={{ position: [0, 0, 6], fov: 45 }}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            eventSource={document.getElementById('root')}
            eventPrefix="client"
        >
            <ambientLight intensity={0.55} />
            <directionalLight position={[4, 5, 5]} intensity={1.6} />
            <pointLight position={[-4, -2, 3]} intensity={18} color="#ffffff" />
            <pointLight position={[4, -3, 2]} intensity={10} color="#dbe2ff" />
            <Core />
            <Sparkles count={50} scale={[14, 9, 6]} size={1.6} speed={reduced ? 0 : 0.3} opacity={0.35} color="#d1d5db" />
            <CameraRig />
        </Canvas>
    )
}

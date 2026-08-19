'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles, Stars, Trail } from '@react-three/drei'
import { useRef } from 'react'
import type { Group, Mesh } from 'three'

function OrbitingCore() {
  const group = useRef<Group>(null)
  const mesh = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.12
    }
    if (mesh.current) mesh.current.rotation.z += delta * 0.22
  })

  return (
    <group ref={group} position={[1.7, 0.2, -1]}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.05, 2]} />
        <meshStandardMaterial color="#63e6e2" emissive="#0d6e79" emissiveIntensity={1.6} metalness={0.8} roughness={0.2} wireframe />
      </mesh>
      <Trail width={0.7} length={5} color="#8f7cff" attenuation={(t) => t * t}>
        <mesh position={[-1.25, 0, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color="#c4bbff" />
        </mesh>
      </Trail>
    </group>
  )
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 2]} color="#63e6e2" intensity={18} distance={8} />
      <pointLight position={[-4, -2, -1]} color="#8f7cff" intensity={16} distance={9} />
      <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.5}>
        <OrbitingCore />
      </Float>
      <Sparkles count={80} scale={[9, 5, 4]} size={1.8} speed={0.3} color="#a99dff" />
      <Stars radius={10} depth={5} count={350} factor={2} saturation={0.4} fade speed={0.2} />
    </>
  )
}

export function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
        <SceneContent />
      </Canvas>
    </div>
  )
}

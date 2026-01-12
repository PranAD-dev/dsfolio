import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function Model({ fly, onBallClick, ...props }) {
  const meshRef = useRef()
  const { scene } = useGLTF('/models/ball.glb')
  const clonedScene = useMemo(() => scene.clone(true), [scene])

  const target = useMemo(
    () => new THREE.Vector3(-261.0876, 110.3974, 250.8670),
    []
  )

  useFrame((_, delta) => {
    if (!fly || !meshRef.current) return

    const speed = 0.1
    meshRef.current.position.lerp(
      target,
      1 - Math.exp(-speed * delta)
    )
  })

  return (
    <primitive
      {...props}
      ref={meshRef}
      object={clonedScene}
      scale={0.4}
      onClick={(e) => {
        e.stopPropagation()
        onBallClick?.()
      }}
      onPointerOver={(e) => {
        e.stopPropagation()
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'default'
      }}
    />
  )
}

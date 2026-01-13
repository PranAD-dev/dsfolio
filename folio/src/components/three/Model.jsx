import React, { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Html } from '@react-three/drei'
import * as THREE from 'three'

export default function Model({ fly, onBallClick, ...props }) {
  const meshRef = useRef()
  const { scene } = useGLTF('/models/ball.glb')
  const clonedScene = useMemo(() => scene.clone(true), [scene])
  const [showVideo, setShowVideo] = useState(false)  
  const target = useMemo(
    () => new THREE.Vector3(-50, 25, 55),
    []
  )
  const handleEnd = () => {
    setShowVideo(false)
    // navigation here
  }

  useFrame(() => {
    if (!fly || !meshRef.current) return

    const speed = 0.5
    meshRef.current.position.lerp(
      target,
      0.018
    )
    if (meshRef.current.position.distanceTo(target) < 1){
        onBallClick?.()
        setShowVideo(true)

  }

  })

    return (
    <>
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
    {showVideo && (
        <div style ={{
            position: 'fixed',
            inset:0,
            background: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100
        }}>
            <video
                src="#"
                autoPlay
                onEnded={handleEnd}
                style={{maxWidth:'100%', maxHeight:'100%'}}
                />
        </div>

    )}
   </>
  )
}

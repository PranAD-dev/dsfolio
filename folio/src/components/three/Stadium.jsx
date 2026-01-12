import React, { useRef, useState, useEffect} from 'react'
import {useFrame} from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Stadium(props) {
    const meshRef = useRef();
    const { scene, materials } = useGLTF('models/stadium.glb')

    useFrame((_, delta) => {
        if (!meshRef.current) return
        meshRef.current.position.y += 0

    })
   
    return <primitive 
                {...props} 
                scale={0.75} 
                ref={meshRef} 
                object={scene} />

}
import React, { useRef, useState, useEffect, useMemo} from 'react'
import {useFrame, useThree} from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
    const meshRef = useRef();
    const { scene, materials } = useGLTF('models/ball.glb')
    const clonedScene = useMemo(() => scene.clone(), [scene])
    const [fly, setFly] = useState(false)
    
    
    useFrame((_, delta) => {
        if (!meshRef.current) return
        if (fly){
            // meshRef.current.rotation.y += delta*Math.PI
            // meshRef.current.rotation.x += delta*Math.PI
            // meshRef.current.rotation.z += delta*Math.PI
        }


    })
    
   

    return <primitive 
                onPointerOver = {(e) => {
                    e.stopPropagation()
                    document.body.style.cursor = 'pointer'
                }}
                onPointerOut = {(e) => {
                    e.stopPropagation()
                    document.body.style.cursor = 'default'
                }}
                {...props} 
                onClick = {() => {setFly(true)
                    tracker()
                }} 
                scale={0.4} 
                ref={meshRef} 
                object={clonedScene} />

}
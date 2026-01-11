import React, { useRef, useState} from 'react'
import {useFrame} from '@react-three/fiber'

export default function Cube(props) {
    // ref to the mesh
    const meshRef = useRef()

    // state variables for interactive cube
    const [hovered, setHover] = useState(false)
    const [visible, setVisible] = useState(true)
    
    // useFrame helps renderin the mesh componenet every frame
    useFrame((state,delta)=>{
        if (!meshRef.current) return
        meshRef.current.rotation.x += delta;
    })

    if (!visible) return null;


    return (
        <mesh 
            {...props}
            ref = {meshRef}
            scale = {2}
            onClick = {(e) => setVisible(false)}
            onPointerOver = {(e) => setHover(true)}
            onPointerOut = {(e) => setHover(false)}>
                <boxGeometry args = {[1,1,1]} />
                <meshStandardMaterial color = { hovered ? '#ff4d6d' : '#fca311'} />
        </mesh>
    )
}
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Canvas } from '@react-three/fiber'
import React, {useRef} from 'react'
import Cube from './components/three/Cube'
import './App.css' 
import { OrbitControls } from '@react-three/drei'

function App() {

  return (
    <div className="canvas-container">
      <Canvas>
        
        <ambientLight intensity={Math.PI / 2}/>
        <directionalLight color="white" intensity = {1} position = {[5, 10, 5]} castShadow />
        <Cube position = {[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import React, {useRef} from 'react'
import Cube from './components/three/Cube'
import './App.css' 
import { OrbitControls, Environment } from '@react-three/drei'
import Model from './components/three/Model'
import Stadium from './components/three/Stadium'
import { Camera } from 'three'

// helper for camera setup
// function CameraLogger(){
//   const { camera } = useThree()
//   useFrame(() => {
//   //  console.log(camera.position)
//   })
//   return null
// }
function CameraLogger(){
  const { camera } = useThree()
  
  console.log(camera.position)
}

function App() {

  
  

  
  return (
    <div className="canvas-container">
      <Canvas camera = {{
        position: [3.0480770259590333, 21.777097315923726,-53.1410057432876],
        fov:50,
        near: 0.1,
        far: 1000,
      }}>
        <CameraLogger />
        {/* <CameraLogger /> */} 
        <Environment preset="studio" />
        <Stadium position = {[0, 0, 0]} />
        <Model position = {[-2,0,10]}  />
        <Model position = {[-2,0,10]}  />
        <Model position = {[-2,0,10]}  />
        <Model position = {[-2,0,10]}  />
        <Model position = {[-2,0,10]}  />
        <Model position = {[0,0,0]}  />
        <Model position = {[0,0,0]}  />
        <Model position = {[0,0,0]}  />
        <Model position = {[-8,0,-10]}  />
        <Model position = {[-8,0,-10]}  />
        <Model position = {[-8,0,-10]}  />
        <Model position = {[-8,0,-10]}  />
        <Model position = {[-8,0,-10]}  />
        <Model position = {[-8,0,-10]}  />
        <Model position = {[-8,0,-10]}  />
        <Model position = {[-9,0,10]}  />
        <Model position = {[-9,0,10]}  />
        <Model position = {[-9,0,10]}  />
        <Model position = {[-9,0,10]}  />
        <Model position = {[-9,0,10]}  />
        <Model position = {[-9,0,10]}  />
        <Model position = {[0,0,0]}  />
        <Model position = {[15,0,-10]} /> 
        <Model position = {[15,0,-10]} /> 
        <Model position = {[15,0,-10]} /> 
        <Model position = {[15,0,-10]} /> 
        <Model position = {[15,0,-10]} /> 
        <Model position = {[10,0,0]} />
        <Model position = {[10,0,0]} />
        <Model position = {[10,0,0]} />
        <Model position = {[10,0,10]} />
        <Model position = {[10,0,10]} />
        <Model position = {[10,0,10]} />
        <Model position = {[10,0,10]} />
        <Model position = {[10,0,10]} />
        <Model position = {[10,0,10]} />
        <Model position = {[10,0,0]} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App

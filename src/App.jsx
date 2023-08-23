
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Sphere from './Sphere'
import { PresentationControls } from '@react-three/drei'

export default function App() {

  return (
    <Canvas camera={{position: [0, 0, 6], fov: 75}}>
      
      <PresentationControls>
        <Sphere />
      </PresentationControls>
      <directionalLight position={[2, 2, 5]} intensity={5} />
      <directionalLight position={[-2, -2, 5]} intensity={5} />

    </Canvas>
  )
}


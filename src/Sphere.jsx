import React from 'react'
import { useTexture } from '@react-three/drei'

export default function Sphere() {

    const props = useTexture({
        map: "./public/Color2.jpg",
        displacementMap: "./public/Displacement2.jpg",
        normalMap: "./public/NormalDX2.jpg",
        roughnessMap: "./public/Roughness2.jpg",
        // aoMap: "./public/Metalness.jpg"
        aoMap: "./public/AmbientOcclusion2.jpg"
    })

  return (
    <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial {...props} displacementScale={0.2} />
    </mesh>
  )
}

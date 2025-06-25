'use client'
import { groundImg } from '@/textures/textures'
import { usePlane } from '@react-three/cannon'
import { useTexture } from '@react-three/drei'
import React from 'react'
import { NearestFilter, RepeatWrapping } from 'three'

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0]
  }))

  const groundTexture = useTexture(groundImg)

  groundTexture.wrapS = RepeatWrapping
  groundTexture.wrapT = RepeatWrapping
  groundTexture.repeat.set(100, 100)
  groundTexture.magFilter = NearestFilter

  return (
    <mesh ref={ref}>
      <planeGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={groundTexture} />
    </mesh>
  )
}

export default Ground

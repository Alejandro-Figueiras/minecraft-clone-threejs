'use client'
import { useStore } from '@/hooks/useStore'
import { groundImg } from '@/textures/textures'
import { usePlane } from '@react-three/cannon'
import { useTexture } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
import React from 'react'
import { NearestFilter, RepeatWrapping } from 'three'

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0]
  }))

  const addCube = useStore((state) => state.addCube)

  const groundTexture = useTexture(groundImg)

  groundTexture.wrapS = RepeatWrapping
  groundTexture.wrapT = RepeatWrapping
  groundTexture.repeat.set(100, 100)
  groundTexture.magFilter = NearestFilter

  const handleClickGround = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation()
    if (event.altKey) return

    const [x, y, z] = Object.values(event.point).map((value) =>
      Math.ceil(value)
    )
    addCube(x, y, z)
  }

  return (
    <mesh ref={ref} onClick={handleClickGround}>
      <planeGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={groundTexture} />
    </mesh>
  )
}

export default Ground

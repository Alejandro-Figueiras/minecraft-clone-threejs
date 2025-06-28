import { Cube as CubeType, useStore } from '@/hooks/useStore'
import { useBox } from '@react-three/cannon'
import { useTexture } from '@react-three/drei'
import { useState } from 'react'
import { NearestFilter } from 'three'

export const Cube = ({ pos, texture }: CubeType) => {
  const [isHovered, setIsHovered] = useState(false)
  const [ref] = useBox(() => ({
    type: 'Static',
    position: pos
  }))
  const removeCube = useStore((state) => state.removeCube)

  const textureInput = useTexture(texture)
  textureInput.magFilter = NearestFilter

  return (
    <mesh
      ref={ref}
      onPointerMove={(e) => {
        e.stopPropagation()
        setIsHovered(true)
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        setIsHovered(false)
      }}
      onClick={(e) => {
        if (e.altKey) {
          removeCube(...pos)
        }
      }}
    >
      <boxGeometry attach='geometry' />
      <meshStandardMaterial
        color={isHovered ? 'grey' : 'white'}
        transparent
        map={textureInput}
        attach='material'
      />
    </mesh>
  )
}

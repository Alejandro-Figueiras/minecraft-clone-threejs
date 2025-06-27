import { Cube as CubeType } from '@/hooks/useStore'
import { useBox } from '@react-three/cannon'
import { useTexture } from '@react-three/drei'
import { NearestFilter } from 'three'

export const Cube = ({ pos, texture }: CubeType) => {
  const [ref] = useBox(() => ({
    type: 'Static',
    position: pos
  }))

  const textureInput = useTexture(texture)
  textureInput.magFilter = NearestFilter

  return (
    <mesh ref={ref}>
      <boxGeometry attach='geometry' />
      <meshStandardMaterial map={textureInput} attach='material' />
    </mesh>
  )
}

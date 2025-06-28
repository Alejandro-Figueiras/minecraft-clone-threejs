/* eslint-disable @next/next/no-img-element */
import { useKeyboard } from '@/hooks/useKeyboard'
import { useStore } from '@/hooks/useStore'
import {
  dirtImg,
  glassImg,
  grassImg,
  logImg,
  woodImg
} from '@/textures/textures'
import React, { useEffect } from 'react'

const TextureSelect = () => {
  const texture = useStore((state) => state.texture)
  const setTexture = useStore((state) => state.setTexture)

  const { dirt, grass, glass, wood, log } = useKeyboard()

  const textureList = {
    dirt: dirtImg,
    grass: grassImg,
    glass: glassImg,
    wood: woodImg,
    log: logImg
  }

  useEffect(() => {
    if (dirt) {
      setTexture(dirtImg)
    }
    if (grass) {
      setTexture(grassImg)
    }
    if (glass) {
      setTexture(glassImg)
    }
    if (wood) {
      setTexture(woodImg)
    }
    if (log) {
      setTexture(logImg)
    }
  }, [dirt, grass, glass, wood, log, setTexture])

  return (
    <div className='absolute bottom-0 left-1/2 z-100 flex -translate-1/2 gap-1'>
      {Object.entries(textureList).map(([textureName, textureSrc]) => {
        return (
          <img
            style={{
              imageRendering: 'pixelated',
              borderWidth: texture === textureSrc ? 5 : 0,
              borderColor: 'black'
            }}
            key={textureName}
            src={textureSrc}
            alt={textureName}
            width={50}
            onClick={() => setTexture(textureSrc)}
          />
        )
      })}
    </div>
  )
}

export default TextureSelect

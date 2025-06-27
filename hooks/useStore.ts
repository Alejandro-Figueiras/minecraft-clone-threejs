import { dirtImg, logImg } from '@/textures/textures'
import { nanoid } from 'nanoid'
import { create } from 'zustand'

export type Cube = {
  id: string
  pos: [number, number, number]
  texture: string
}

export type Store = {
  texture: string
  cubes: Cube[]
}

export const useStore = create<Store>(() => ({
  texture: 'dirt',
  cubes: [
    {
      id: nanoid(),
      pos: [1, 1, 1],
      texture: dirtImg
    },
    {
      id: nanoid(),
      pos: [3, 3, 3],
      texture: logImg
    }
  ],
  addCube: () => {},
  removeCube: () => {},
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {}
}))

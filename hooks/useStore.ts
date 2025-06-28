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
  setTexture: (t: string) => void
  cubes: Cube[]
  addCube: (x: number, y: number, z: number) => void
  removeCube: (x: number, y: number, z: number) => void
}

export const useStore = create<Store>((set) => ({
  texture: dirtImg,
  setTexture: (t) => {
    set((s) => ({ ...s, texture: t }))
  },
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
  addCube: (x, y, z) => {
    set((state) => ({
      cubes: [
        ...state.cubes,
        {
          id: nanoid(),
          texture: state.texture,
          pos: [x, y, z]
        }
      ]
    }))
  },
  removeCube: (x, y, z) => {
    set((state) => ({
      cubes: state.cubes.filter((cube) => {
        const [X, Y, Z] = cube.pos
        return x !== X || y !== Y || z !== Z
      })
    }))
  },
  saveWorld: () => {},
  resetWorld: () => {}
}))

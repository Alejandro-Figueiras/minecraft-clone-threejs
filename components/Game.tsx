import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Ground from './Ground'
import FirstPointView from './FirstPointView'
import Player from './Player'
import { Cubes } from './Cubes'

const Game = () => {
  return (
    <div className='relative h-dvh'>
      <Canvas className='h-dvh w-full'>
        <Sky />
        <ambientLight intensity={0.8} />
        <FirstPointView />
        <Physics>
          <Player />
          <Ground />
          <Cubes />
        </Physics>
      </Canvas>
      <div className='absolute top-[50%] left-[50%] z-40 -translate-1/2 text-4xl'>
        +
      </div>
    </div>
  )
}

export default Game

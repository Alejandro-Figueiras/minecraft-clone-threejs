import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Ground from './Ground'
import FirstPointView from './FirstPointView'
import Player from './Player'

const Game = () => {
  return (
    <Canvas className='h-dvh w-full'>
      <Sky />
      <ambientLight intensity={0.8} />
      <FirstPointView />
      <Physics>
        <Player />
        <Ground />
      </Physics>
    </Canvas>
  )
}

export default Game

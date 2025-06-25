import DictionaryObject from '@/types/DictionaryObject'
import { useEffect, useState } from 'react'

const ACTIONS_KEYBOARD_MAP: DictionaryObject<string> = {
  KeyW: 'moveForward',
  KeyS: 'moveBackward',
  KeyA: 'moveLeft',
  KeyD: 'moveRight',
  Space: 'jump',
  Digit1: 'dirt',
  Digit2: 'grass',
  Digit3: 'glass',
  Digit4: 'wood',
  Digit5: 'log'
}

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    glass: false,
    wood: false,
    log: false
  })

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { code } = event
      const action: string = ACTIONS_KEYBOARD_MAP[code]
      if (action) {
        setActions((actions) => ({ ...actions, [action]: true }))
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      const { code } = event
      const action: string = ACTIONS_KEYBOARD_MAP[code]
      if (action) {
        setActions((actions) => ({ ...actions, [action]: false }))
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return actions
}

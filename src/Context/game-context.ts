import { createContext } from 'react'
import { gameContextType } from '../types/game-context-type'
export const gameContext = createContext<gameContextType>({} as gameContextType)

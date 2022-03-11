import { createContext } from 'react'
import { GameContextType } from '../types/game-context-type'
export const gameContext = createContext<GameContextType>({} as GameContextType)

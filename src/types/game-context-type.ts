import { gameType } from './game-type'
import React, { SetStateAction } from 'react'

export interface gameContextType {
  gameInfo: gameType
  setGameInfo: React.Dispatch<SetStateAction<gameType | null>>
}

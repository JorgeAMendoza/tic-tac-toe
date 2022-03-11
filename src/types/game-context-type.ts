import { GameType } from './game-type'
import React from 'react'
import { GameReducerActions } from '../Context/game-reducer'

export interface GameContextType {
  gameInfo: GameType
  setGameInfo: React.Dispatch<GameReducerActions>
}

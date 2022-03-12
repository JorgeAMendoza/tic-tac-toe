import { xPlayerType, oPlayerType } from './player-types'

export interface GameType {
  xPlayer: xPlayerType
  oPlayer: oPlayerType
  tiedScore: number
  gameType: 'player' | 'cpu'
  currentWinner: 'X' | 'O' | 'TIED' | ''
}

import { xPlayerType, oPlayerType } from './player-types'

export interface gameType {
  xPlayer: xPlayerType
  oPlayer: oPlayerType
  tiedScore: number
  gameType: 'player' | 'cpu'
}

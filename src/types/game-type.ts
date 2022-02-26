import { playerType } from './player-type'

export interface gameType {
  playerOne: playerType
  playerTwo: playerType
  tiedScore: number
}

type playerName = 'P1' | 'P2' | 'CPU' | 'YOU'

export interface xPlayerType {
  mark: 'X'
  playerName: playerName
  score: number
}

export interface oPlayerType {
  mark: 'O'
  playerName: playerName
  score: number
}

import { GameType } from '../types/game-type'

interface playerGameType {
  playerOneX: GameType
  playerOneO: GameType
}

interface cpuGameType {
  playerOneX: GameType
  playerOneO: GameType
}

export const playerGame: playerGameType = {
  playerOneX: {
    tiedScore: 0,
    gameType: 'player',
    currentWinner: '',
    xPlayer: {
      mark: 'X',
      playerName: 'P1',
      score: 0,
    },
    oPlayer: {
      mark: 'O',
      playerName: 'P2',
      score: 0,
    },
  },
  playerOneO: {
    tiedScore: 0,
    gameType: 'player',
    currentWinner: '',
    xPlayer: {
      mark: 'X',
      playerName: 'P2',
      score: 0,
    },
    oPlayer: {
      mark: 'O',
      playerName: 'P1',
      score: 0,
    },
  },
}

export const cpuGame: cpuGameType = {
  playerOneX: {
    tiedScore: 0,
    gameType: 'cpu',
    currentWinner: '',
    xPlayer: {
      mark: 'X',
      playerName: 'YOU',
      score: 0,
    },
    oPlayer: {
      mark: 'O',
      playerName: 'CPU',
      score: 0,
    },
  },
  playerOneO: {
    tiedScore: 0,
    gameType: 'cpu',
    currentWinner: '',
    xPlayer: {
      mark: 'X',
      playerName: 'CPU',
      score: 0,
    },
    oPlayer: {
      mark: 'O',
      playerName: 'YOU',
      score: 0,
    },
  },
}

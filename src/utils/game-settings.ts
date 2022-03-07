import { gameType } from '../types/game-type'

interface playerGameType {
  playerOneX: gameType
  playerOneO: gameType
}

interface cpuGameType {
  playerOneX: gameType
  playerOneO: gameType
}

export const playerGame: playerGameType = {
  playerOneX: {
    tiedScore: 0,
    gameType: 'player',
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

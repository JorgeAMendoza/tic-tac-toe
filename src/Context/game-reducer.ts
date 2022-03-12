import { GameType } from '../types/game-type'

type IncrementPlayerXAction = {
  type: 'INCREMENT_X'
}

type IncrementPlayerOAction = {
  type: 'INCREMENT_O'
}

type IncrementTiedAction = {
  type: 'INCREMENT_TIED'
}

type ResetGameAction = {
  type: 'RESET_GAME'
}

type setGameAction = {
  type: 'SET_GAME'
  payload: GameType
}

export type GameReducerActions =
  | IncrementPlayerXAction
  | IncrementPlayerOAction
  | ResetGameAction
  | setGameAction
  | IncrementTiedAction

export const gameReducer = (
  state: GameType | null,
  action: GameReducerActions
) => {
  switch (action.type) {
    case 'INCREMENT_X': {
      if (!state) return state
      const newXPlayer = { ...state.xPlayer }
      newXPlayer.score = state.xPlayer.score + 1
      return Object.assign(
        {},
        state,
        { xPlayer: newXPlayer },
        { currentWinner: 'X' }
      )
    }
    case 'INCREMENT_O': {
      if (!state) return state
      const newOPlayer = { ...state.oPlayer }
      newOPlayer.score = state.oPlayer.score + 1
      return Object.assign(
        {},
        state,
        { oPlayer: newOPlayer },
        { currentWinner: 'O' }
      )
    }
    case 'INCREMENT_TIED': {
      if (!state) return state
      return Object.assign(
        {},
        state,
        { tiedScore: state.tiedScore + 1 },
        { currentWinner: 'TIED' }
      )
    }
    case 'SET_GAME': {
      return action.payload
    }
    case 'RESET_GAME': {
      return null
    }
    default:
      return state
  }
}

import { GameType } from '../types/game-type'

type IncrementPlayerXAction = {
  type: 'INCREMENT_X'
}

type IncrementPlayerOAction = {
  type: 'INCREMENT_O'
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

export const gameReducer = (
  state: GameType | null,
  action: GameReducerActions
) => {
  switch (action.type) {
    case 'INCREMENT_X': {
      if (!state) return state
      const newXPlayer = { ...state.xPlayer }
      newXPlayer.score = state.xPlayer.score + 1
      return Object.assign({}, state, newXPlayer)
    }
    case 'INCREMENT_O': {
      if (!state) return null
      const newYPlayer = { ...state.oPlayer }
      newYPlayer.score = state.oPlayer.score + 1
      return Object.assign({}, state, newYPlayer)
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

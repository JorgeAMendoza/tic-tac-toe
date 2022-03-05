import { gameBoardType } from '../types/game-board'

export const checkWinner = (
  gameBoard: gameBoardType,
  mark: 'X' | 'O'
): boolean => {
  // checking row
  if (
    gameBoard[0][0] === mark &&
    gameBoard[0][1] === mark &&
    gameBoard[0][2] === mark
  )
    return true
  else if (
    gameBoard[1][0] === mark &&
    gameBoard[1][1] === mark &&
    gameBoard[1][2] === mark
  )
    return true
  else if (
    gameBoard[2][0] === mark &&
    gameBoard[2][1] === mark &&
    gameBoard[2][2] === mark
  )
    return true

  // Checking Columns
  if (
    gameBoard[0][0] === mark &&
    gameBoard[1][0] === mark &&
    gameBoard[2][0] === mark
  )
    return true
  else if (
    gameBoard[0][1] === mark &&
    gameBoard[1][1] === mark &&
    gameBoard[2][1] === mark
  )
    return true
  else if (
    gameBoard[0][2] === mark &&
    gameBoard[1][2] === mark &&
    gameBoard[2][2] === mark
  )
    return true

  // checking diagnols
  if (
    gameBoard[0][0] === mark &&
    gameBoard[1][1] === mark &&
    gameBoard[2][2] === mark
  )
    return true
  else if (
    gameBoard[0][2] === mark &&
    gameBoard[1][1] === mark &&
    gameBoard[2][0] === mark
  )
    return true
  return false
}

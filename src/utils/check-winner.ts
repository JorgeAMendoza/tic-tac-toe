import { gameBoardType } from '../types/game-board'

export const checkWinner = (
  gameBoard: gameBoardType,
  mark: 'X' | 'O'
): boolean => {
  // checking row
  if (
    gameBoard[0][0].boardMark === mark &&
    gameBoard[0][1].boardMark === mark &&
    gameBoard[0][2].boardMark === mark
  )
    return true
  else if (
    gameBoard[1][0].boardMark === mark &&
    gameBoard[1][1].boardMark === mark &&
    gameBoard[1][2].boardMark === mark
  )
    return true
  else if (
    gameBoard[2][0].boardMark === mark &&
    gameBoard[2][1].boardMark === mark &&
    gameBoard[2][2].boardMark === mark
  )
    return true

  // Checking Columns
  if (
    gameBoard[0][0].boardMark === mark &&
    gameBoard[1][0].boardMark === mark &&
    gameBoard[2][0].boardMark === mark
  )
    return true
  else if (
    gameBoard[0][1].boardMark === mark &&
    gameBoard[1][1].boardMark === mark &&
    gameBoard[2][1].boardMark === mark
  )
    return true
  else if (
    gameBoard[0][2].boardMark === mark &&
    gameBoard[1][2].boardMark === mark &&
    gameBoard[2][2].boardMark === mark
  )
    return true

  // checking diagnols
  if (
    gameBoard[0][0].boardMark === mark &&
    gameBoard[1][1].boardMark === mark &&
    gameBoard[2][2].boardMark === mark
  )
    return true
  else if (
    gameBoard[0][2].boardMark === mark &&
    gameBoard[1][1].boardMark === mark &&
    gameBoard[2][0].boardMark === mark
  )
    return true
  return false
}

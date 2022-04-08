import { gameBoardType } from '../types/game-board'

interface checkWinnerResult {
  result: true | false
  winIndexOne: [number, number]
  winIndexTwo: [number, number]
  winIndexThree: [number, number]
}

export const checkWinner = (
  gameBoard: gameBoardType,
  mark: 'X' | 'O'
): checkWinnerResult => {
  // checking row
  if (
    gameBoard[0][0].boardMark === mark &&
    gameBoard[0][1].boardMark === mark &&
    gameBoard[0][2].boardMark === mark
  )
    return {
      result: true,
      winIndexOne: [0, 0],
      winIndexTwo: [0, 1],
      winIndexThree: [0, 2],
    }
  else if (
    gameBoard[1][0].boardMark === mark &&
    gameBoard[1][1].boardMark === mark &&
    gameBoard[1][2].boardMark === mark
  )
    return {
      result: true,
      winIndexOne: [1, 0],
      winIndexTwo: [1, 1],
      winIndexThree: [1, 2],
    }
  else if (
    gameBoard[2][0].boardMark === mark &&
    gameBoard[2][1].boardMark === mark &&
    gameBoard[2][2].boardMark === mark
  )
    return {
      result: true,
      winIndexOne: [2, 0],
      winIndexTwo: [2, 1],
      winIndexThree: [2, 2],
    }

  // Checking Columns
  if (
    gameBoard[0][0].boardMark === mark &&
    gameBoard[1][0].boardMark === mark &&
    gameBoard[2][0].boardMark === mark
  )
    return {
      result: true,
      winIndexOne: [0, 0],
      winIndexTwo: [1, 0],
      winIndexThree: [2, 0],
    }
  else if (
    gameBoard[0][1].boardMark === mark &&
    gameBoard[1][1].boardMark === mark &&
    gameBoard[2][1].boardMark === mark
  )
    return {
      result: true,
      winIndexOne: [0, 1],
      winIndexTwo: [1, 1],
      winIndexThree: [2, 1],
    }
  else if (
    gameBoard[0][2].boardMark === mark &&
    gameBoard[1][2].boardMark === mark &&
    gameBoard[2][2].boardMark === mark
  )
    return {
      result: true,
      winIndexOne: [0, 2],
      winIndexTwo: [1, 2],
      winIndexThree: [2, 2],
    }

  // checking diagnols
  if (
    gameBoard[0][0].boardMark === mark &&
    gameBoard[1][1].boardMark === mark &&
    gameBoard[2][2].boardMark === mark
  )
    return {
      result: true,
      winIndexOne: [0, 0],
      winIndexTwo: [1, 1],
      winIndexThree: [2, 2],
    }
  else if (
    gameBoard[0][2].boardMark === mark &&
    gameBoard[1][1].boardMark === mark &&
    gameBoard[2][0].boardMark === mark
  )
    return {
      result: true,
      winIndexOne: [0, 2],
      winIndexTwo: [1, 1],
      winIndexThree: [2, 0],
    }
  return {
    result: false,
    winIndexOne: [-1, -1],
    winIndexTwo: [-1, -1],
    winIndexThree: [-1, -1],
  }
}

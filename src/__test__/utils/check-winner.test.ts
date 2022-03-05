import { checkWinner } from '../../utils/check-winner'
import { gameBoardType } from '../../types/game-board'

describe('Checking winner of tic-tac-toe game', () => {
  let gameBoard: gameBoardType

  beforeEach(() => {
    gameBoard = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]
  })
  test('empty board, no winner found for x', () => {
    const result = checkWinner(gameBoard, 'X')
    expect(result).toBe(false)
  })
  test('empty boad, no winner found for O', () => {
    const result = checkWinner(gameBoard, 'O')
    expect(result).toBe(false)
  })
  test('winner found on row for X', () => {
    gameBoard[0][0] = 'X'
    gameBoard[0][1] = 'X'
    gameBoard[0][2] = 'X'

    const result = checkWinner(gameBoard, 'X')
    expect(result).toBe(true)
  })
  test('winner found on column for O', () => {
    gameBoard[0][0] = 'O'
    gameBoard[1][0] = 'O'
    gameBoard[2][0] = 'O'

    const result = checkWinner(gameBoard, 'O')
    expect(result).toBe(true)
  })
  test('winner found on diagnol top-left for X', () => {
    gameBoard[0][0] = 'X'
    gameBoard[1][1] = 'X'
    gameBoard[2][2] = 'X'

    const result = checkWinner(gameBoard, 'X')
    expect(result).toBe(true)
  })

  test('winner found on diagnol on top-right for O', () => {
    gameBoard[0][2] = 'O'
    gameBoard[1][1] = 'O'
    gameBoard[2][0] = 'O'

    const result = checkWinner(gameBoard, 'O')
    expect(result).toBe(true)
  })
})

import { checkWinner } from '../../utils/check-winner'
import { gameBoardType } from '../../types/game-board'

describe('Checking winner of tic-tac-toe game', () => {
  let gameBoard: gameBoardType

  beforeEach(() => {
    gameBoard = [
      [
        { win: false, boardMark: '' },
        { win: false, boardMark: '' },
        { win: false, boardMark: '' },
      ],
      [
        { win: false, boardMark: '' },
        { win: false, boardMark: '' },
        { win: false, boardMark: '' },
      ],
      [
        { win: false, boardMark: '' },
        { win: false, boardMark: '' },
        { win: false, boardMark: '' },
      ],
    ]
  })
  test('empty board, no winner found for x', () => {
    const resultObj = checkWinner(gameBoard, 'X')
    expect(resultObj.result).toBe(false)
    expect(resultObj.winIndexOne).toStrictEqual([-1, -1])
  })
  test('empty boad, no winner found for O', () => {
    const resultObj = checkWinner(gameBoard, 'O')
    expect(resultObj.result).toBe(false)
    expect(resultObj.winIndexOne).toStrictEqual([-1, -1])
  })
  test('winner found on row for X', () => {
    gameBoard[0][0].boardMark = 'X'
    gameBoard[0][1].boardMark = 'X'
    gameBoard[0][2].boardMark = 'X'

    const resultObj = checkWinner(gameBoard, 'X')
    expect(resultObj.result).toBe(true)
    expect(resultObj.winIndexOne).toStrictEqual([0, 0])
    expect(resultObj.winIndexTwo).toStrictEqual([0, 1])
    expect(resultObj.winIndexThree).toStrictEqual([0, 2])
  })
  test('winner found on column for O', () => {
    gameBoard[0][0].boardMark = 'O'
    gameBoard[1][0].boardMark = 'O'
    gameBoard[2][0].boardMark = 'O'

    const resultObj = checkWinner(gameBoard, 'O')
    expect(resultObj.result).toBe(true)
    expect(resultObj.winIndexOne).toStrictEqual([0, 0])
    expect(resultObj.winIndexTwo).toStrictEqual([1, 0])
    expect(resultObj.winIndexThree).toStrictEqual([2, 0])
  })
  test('winner found on diagnol top-left for X', () => {
    gameBoard[0][0].boardMark = 'X'
    gameBoard[1][1].boardMark = 'X'
    gameBoard[2][2].boardMark = 'X'

    const resultObj = checkWinner(gameBoard, 'X')
    expect(resultObj.result).toBe(true)
    expect(resultObj.winIndexOne).toStrictEqual([0, 0])
    expect(resultObj.winIndexTwo).toStrictEqual([1, 1])
    expect(resultObj.winIndexThree).toStrictEqual([2, 2])
  })

  test('winner found on diagnol on top-right for O', () => {
    gameBoard[0][2].boardMark = 'O'
    gameBoard[1][1].boardMark = 'O'
    gameBoard[2][0].boardMark = 'O'

    const resultObj = checkWinner(gameBoard, 'O')
    expect(resultObj.result).toBe(true)
    expect(resultObj.winIndexOne).toStrictEqual([0, 2])
    expect(resultObj.winIndexTwo).toStrictEqual([1, 1])
    expect(resultObj.winIndexThree).toStrictEqual([2, 0])
  })
})

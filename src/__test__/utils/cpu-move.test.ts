import { cpuMove } from '../../utils/cpu-move'
import { gameBoardType } from '../../types/game-board'

describe('test return value of cpu move util function', () => {
  const possibleCPUMoves = [
    '0,0',
    '0,1',
    '0,2',
    '1,0',
    '1,1',
    '1,2',
    '2,0',
    '2,1',
    '2,2',
  ]

  test('function returns valid move defined in the array', () => {
    const gameBoard: gameBoardType = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]
    const possibleMove = cpuMove(gameBoard)
    expect(possibleCPUMoves).toContain(possibleMove)
  })
  test('function returns middle placement of the board', () => {
    const gameBoard: gameBoardType = [
      ['X', 'O', 'X'],
      ['O', '', 'X'],
      ['O', 'X', 'O'],
    ]
    const possibleMove = cpuMove(gameBoard)
    expect(possibleMove).toBe('1,1')
  })
})

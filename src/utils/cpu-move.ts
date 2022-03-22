import { gameBoardType } from '../types/game-board'

const madeMoves: { [k: string]: number } = {}

export const cpuMove = (gameBoard: gameBoardType) => {
  let isValidMove = false
  let validMove

  while (!isValidMove) {
    const xMove = Math.floor(Math.random() * 3)
    const yMove = Math.floor(Math.random() * 3)
    const randomMove = `${xMove},${yMove}`

    if (randomMove in madeMoves) continue
    else if (gameBoard[xMove][yMove] !== '') continue
    else {
      isValidMove = true
      madeMoves[randomMove] = 1
      validMove = randomMove
    }
  }

  return validMove
}

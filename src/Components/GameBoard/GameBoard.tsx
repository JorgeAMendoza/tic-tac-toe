import { ReactNode, useState, useContext } from 'react'
import { gameContext } from '../../Context/game-context'
import { GameIcon } from '../GameIcon/GameIcon'
import { RestartIcon } from '../Icons/RestartIcon'
import { BoardPiece } from './BoardPiece/BoardPiece'
import { ScoreCard } from '../ScoreCard/ScoreCard'

type boardMark = 'X' | 'O' | ''
type boardType = [boardMark, boardMark, boardMark]
type gameBoardType = Array<boardType>

export const GameBoard = () => {
  const [currentTurn, setCurrentTurn] = useState<'X' | 'O'>('X')
  const [gameBoard, setGameBoard] = useState<gameBoardType>([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ])
  const { setGameInfo } = useContext(gameContext)

  const placeMark = (row: number, column: number) => {
    const newGameBoard = [...gameBoard]
    newGameBoard[row][column] = currentTurn
    setGameBoard(newGameBoard)
    setCurrentTurn(currentTurn === 'X' ? 'O' : 'X')
  }

  const resetGame = () => {
    setGameInfo(null)
  }

  const renderPieces = () => {
    const boardPieces: Array<ReactNode> = []
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        boardPieces.push(
          <BoardPiece
            key={`${i},${j}`}
            mark={gameBoard[i][j]}
            placeMark={() => placeMark(i, j)}
          />
        )
      }
    }
    return boardPieces
  }
  return (
    <section>
      <header>
        <GameIcon />
        <div>
          <p>
            <span>{currentTurn}</span>
            Turn
          </p>
        </div>
        <button onClick={resetGame}>
          <RestartIcon />
        </button>
      </header>

      <div>{renderPieces()}</div>

      <div>
        <ScoreCard />
        <ScoreCard />
        <ScoreCard />
      </div>
    </section>
  )
}

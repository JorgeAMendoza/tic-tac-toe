import { ReactNode, useState, useContext } from 'react'
import { gameContext } from '../../Context/game-context'
import { GameIcon } from '../GameIcon/GameIcon'
import { RestartIcon } from '../Icons/RestartIcon'
import { BoardPiece } from './BoardPiece/BoardPiece'
import { gameBoardType } from '../../types/game-board'
import { checkWinner } from '../../utils/check-winner'
import { ScoreCard } from '../ScoreCard/ScoreCard'

export const GameBoard = () => {
  const [currentTurn, setCurrentTurn] = useState<'X' | 'O'>('X')
  const [turnCount, setTurnCount] = useState(1)
  const [gameBoard, setGameBoard] = useState<gameBoardType>([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ])
  const { gameInfo, setGameInfo } = useContext(gameContext)

  const placeMark = (row: number, column: number) => {
    const newGameBoard = [...gameBoard]
    newGameBoard[row][column] = currentTurn
    setGameBoard(newGameBoard)
    if (checkWinner(gameBoard, currentTurn)) {
      console.log('winner found')
      if (currentTurn === 'X') setGameInfo({ type: 'INCREMENT_X' })
      else setGameInfo({ type: 'INCREMENT_O' })
    }

    setTurnCount(turnCount + 1)
    if (turnCount === 10) {
      // increment the tied score
    } else setCurrentTurn(currentTurn === 'X' ? 'O' : 'X')
  }

  const resetGame = () => {
    setGameInfo({ type: 'RESET_GAME' })
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
        <ScoreCard
          scoreName="X"
          score={gameInfo.xPlayer.score}
          playerName={gameInfo.xPlayer.playerName}
        />
        <ScoreCard scoreName="TIES" score={gameInfo.tiedScore} />
        <ScoreCard
          scoreName="O"
          score={gameInfo.oPlayer.score}
          playerName={gameInfo.oPlayer.playerName}
        />
      </div>
    </section>
  )
}

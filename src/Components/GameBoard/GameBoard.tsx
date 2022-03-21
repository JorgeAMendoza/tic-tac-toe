import React from 'react'
import { ReactNode, useContext } from 'react'
import { gameContext } from '../../Context/game-context'
import { GameIcon } from '../GameIcon/GameIcon'
import { RestartIcon } from '../Icons/RestartIcon'
import { BoardPiece } from './BoardPiece/BoardPiece'
import { gameBoardType } from '../../types/game-board'
import { checkWinner } from '../../utils/check-winner'
import { ScoreCard } from '../ScoreCard/ScoreCard'

interface GameBoardProps {
  gameBoard: gameBoardType
  setGameBoard: React.Dispatch<React.SetStateAction<gameBoardType>>
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  currentTurn: 'X' | 'O'
  setCurrentTurn: React.Dispatch<React.SetStateAction<'X' | 'O'>>
  turnCount: number
  setTurnCount: React.Dispatch<React.SetStateAction<number>>
}

export const GameBoard = ({
  gameBoard,
  setGameBoard,
  setShowModal,
  currentTurn,
  setCurrentTurn,
  turnCount,
  setTurnCount,
}: GameBoardProps) => {
  const { gameInfo, setGameInfo } = useContext(gameContext)

  const placeMark = (row: number, column: number) => {
    const newGameBoard = [...gameBoard]
    newGameBoard[row][column] = currentTurn
    setGameBoard(newGameBoard)
    if (checkWinner(gameBoard, currentTurn)) {
      if (currentTurn === 'X') setGameInfo({ type: 'INCREMENT_X' })
      else setGameInfo({ type: 'INCREMENT_O' })
      setShowModal(true)
      return
    }

    setTurnCount(turnCount + 1)
    if (turnCount === 9) {
      setGameInfo({ type: 'INCREMENT_TIED' })
      setShowModal(true)
    } else setCurrentTurn(currentTurn === 'X' ? 'O' : 'X')
  }

  const resetGame = () => {
    setShowModal(true)
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
            testID={`${i},${j}`}
          />
        )
      }
    }
    return boardPieces
  }
  return (
    <section data-testid="gameBoard">
      <header>
        <GameIcon />
        <div>
          <p data-testid="currentTurn">
            <span>{currentTurn}</span>
            Turn
          </p>
        </div>
        <button onClick={resetGame} data-testid="resetGameButton">
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

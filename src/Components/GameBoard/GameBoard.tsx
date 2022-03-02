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
  const [currentTurn] = useState<'X' | 'O'>('X')
  const [gameBoard] = useState<gameBoardType>([
    ['X', 'O', ''],
    ['X', 'O', ''],
    ['X', 'O', ''],
  ])
  const { setGameInfo } = useContext(gameContext)

  // const placeMark = (row: number, column: number) => {
  //   // need to get current turn mark. can be grabbed from the state
  //   // need to get index where to place mark. grabbed from params.
  //   // set the gameboard to the new looking board. use map, concat, slice to make it happen
  // }

  const resetGame = () => {
    setGameInfo(null)
  }

  const renderPieces = () => {
    const boardPieces: Array<ReactNode> = []
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        boardPieces.push(<BoardPiece key={i + j} mark={gameBoard[i][j]} />)
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

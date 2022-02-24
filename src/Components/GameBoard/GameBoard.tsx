import { ReactNode } from 'react'
import { GameIcon } from '../GameIcon/GameIcon'
import { RestartIcon } from '../Icons/RestartIcon'
import { BoardPiece } from './BoardPiece/BoardPiece'
import { ScoreCard } from '../ScoreCard/ScoreCard'

export const GameBoard = () => {
  // current player state needed
  //   current state of the board (filled with X's or )
  const renderPieces = () => {
    const boardPieces: Array<ReactNode> = []
    for (let i = 0; i < 9; i++) {
      boardPieces.push(<BoardPiece key={i} />)
    }
    return boardPieces
  }
  return (
    <section>
      {/* header */}
      <header>
        <GameIcon />
        <div>
          <p>
            <span>X</span>
            Turn
          </p>
        </div>
        <button>
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

import { useState } from 'react'
import { GameIcon } from '../GameIcon/GameIcon'

interface GameStartPropTypes {
  startGame: (playerOneMark: 'X' | 'O', gameType: 'player' | 'cpu') => void
}

export const GameStart = ({ startGame }: GameStartPropTypes) => {
  // create state to determine the player one mark and eventually passing it to the context
  const [playerPiece, setPlayerPiece] = useState([true, false])

  const handleMarkChange = (mark: 'X' | 'Y') => {
    if (mark === 'X' && !playerPiece[0]) {
      const newPlayerMarks = [true, false]
      setPlayerPiece(newPlayerMarks)
    } else if (mark === 'Y' && !playerPiece[1]) {
      const newPlayerMarks = [false, true]
      setPlayerPiece(newPlayerMarks)
    } else {
      return
    }
  }

  const handleGameStart = (gameType: 'player' | 'cpu') => {
    if (playerPiece[0]) startGame('X', gameType)
    else startGame('O', gameType)
  }
  return (
    <section>
      <GameIcon />
      <div>
        <h2>pick player 1&#39;s mark</h2>
        <div>
          <label>
            <input
              type="checkbox"
              value="X"
              checked={playerPiece[0]}
              onChange={() => handleMarkChange('X')}
            />
            <span>X</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="O"
              checked={playerPiece[1]}
              onChange={() => handleMarkChange('Y')}
            />
            <span>O</span>
          </label>
        </div>
        <p>remeber: x goes first</p>
      </div>

      <button onClick={() => handleGameStart('cpu')}>new game (vs cpu)</button>
      <button onClick={() => handleGameStart('player')}>
        new game (vs player)
      </button>
    </section>
  )
}

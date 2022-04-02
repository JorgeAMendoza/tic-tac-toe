import { useState } from 'react'
import { GameIcon } from '../GameIcon/GameIcon'
import { GameStartStyled } from '../../Styles/GameStart/GameStart.styled'
import { PlayerMark } from '../../Styles/GameStart/PlayerMark.styled'
import { YellowButtonPrimary } from '../../Styles/Buttons/Button.styled'
import { BlueButtonPrimary } from '../../Styles/Buttons/Button.styled'
import { MarkSelection } from '../../Styles/GameStart/MarkSelection.styled'
import { GameOptions } from '../../Styles/GameStart/GameOptions.styled'
import { XMarkIcon } from '../Icons/XMarkIcon'
import { OMarkIcon } from '../Icons/OMarkIcon'

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
    <GameStartStyled>
      <GameIcon />
      <PlayerMark>
        <h2>pick player 1&#39;s mark</h2>
        <MarkSelection>
          <label>
            <input
              type="checkbox"
              value="X"
              checked={playerPiece[0]}
              onChange={() => handleMarkChange('X')}
            />
            <div>
              <XMarkIcon />
            </div>
          </label>
          <label>
            <input
              type="checkbox"
              value="O"
              checked={playerPiece[1]}
              onChange={() => handleMarkChange('Y')}
            />
            <div>
              <OMarkIcon />
            </div>
          </label>
        </MarkSelection>
        <p>remeber: x goes first</p>
      </PlayerMark>

      <GameOptions>
        <YellowButtonPrimary onClick={() => handleGameStart('cpu')}>
          new game (vs cpu)
        </YellowButtonPrimary>
        <BlueButtonPrimary onClick={() => handleGameStart('player')}>
          new game (vs player)
        </BlueButtonPrimary>
      </GameOptions>
    </GameStartStyled>
  )
}

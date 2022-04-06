import { useContext } from 'react'
import { XMarkIcon } from '../../Icons/XMarkIcon'
import { OMarkIcon } from '../../Icons/OMarkIcon'
import { gameContext } from '../../../Context/game-context'
import { ModalVariant } from '../../../Styles/GameModal/ModalVariant.styled'
import { SecondaryGreyButton } from '../../../Styles/Buttons/Button.styled'
import { SecondaryYellowButton } from '../../../Styles/Buttons/Button.styled'

interface WinModalProps {
  resetBoard: () => void
  quitGame: () => void
}

export const WinModal = ({ resetBoard, quitGame }: WinModalProps) => {
  const { gameInfo } = useContext(gameContext)

  const renderMesasge = () => {
    const gameType = gameInfo.gameType
    const xPlayerName = gameInfo.xPlayer.playerName
    const oPlayerName = gameInfo.oPlayer.playerName
    const currentWinner = gameInfo.currentWinner

    if (currentWinner === 'X') {
      if (gameType === 'player' && xPlayerName === 'P1') return 'player 1 wins!'
      else if (gameType === 'player' && xPlayerName === 'P2')
        return 'player 2 wins!'
      else if (gameType === 'cpu' && xPlayerName === 'YOU') return 'you won!'
      else return 'oh no, you lost'
    } else {
      if (gameType === 'player' && oPlayerName === 'P1')
        return 'plalyer 1 wins!'
      else if (gameType === 'player' && oPlayerName === 'P2')
        return 'player 2 wins!'
      else if (gameType === 'cpu' && oPlayerName === 'YOU') return 'you won!'
      else return 'oh no, you lost'
    }
  }
  return (
    <ModalVariant currentWinner={gameInfo.currentWinner} data-testid="winModal">
      <p>{renderMesasge()}</p>

      <div>
        <h3>
          {gameInfo.currentWinner === 'X' ? (
            <span data-testid="xWin">
              <XMarkIcon />
            </span>
          ) : (
            <span data-testid="oWin">
              <OMarkIcon />
            </span>
          )}
          takes the round
        </h3>
      </div>

      <div>
        <SecondaryGreyButton onClick={quitGame}>quit</SecondaryGreyButton>
        <SecondaryYellowButton onClick={resetBoard}>
          next round
        </SecondaryYellowButton>
      </div>
    </ModalVariant>
  )
}

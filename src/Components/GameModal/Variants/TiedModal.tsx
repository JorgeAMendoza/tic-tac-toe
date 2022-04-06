import { ModalVariant } from '../../../Styles/GameModal/ModalVariant.styled'
import { SecondaryGreyButton } from '../../../Styles/Buttons/Button.styled'
import { SecondaryYellowButton } from '../../../Styles/Buttons/Button.styled'

interface TiedModalProps {
  resetBoard: () => void
  quitGame: () => void
}

export const TiedModal = ({ quitGame, resetBoard }: TiedModalProps) => {
  return (
    <ModalVariant currentWinner="" data-testid="tiedModal">
      <h3>round tied</h3>
      <div>
        <SecondaryGreyButton onClick={quitGame}>quit</SecondaryGreyButton>
        <SecondaryYellowButton onClick={resetBoard}>
          next round
        </SecondaryYellowButton>
      </div>
    </ModalVariant>
  )
}

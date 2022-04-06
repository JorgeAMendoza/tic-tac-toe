import { ModalVariant } from '../../../Styles/GameModal/ModalVariant.styled'
import { SecondaryGreyButton } from '../../../Styles/Buttons/Button.styled'
import { SecondaryYellowButton } from '../../../Styles/Buttons/Button.styled'

interface ResetModalProps {
  resetBoard: () => void
  continueGame: () => void
}

export const ResetModal = ({ resetBoard, continueGame }: ResetModalProps) => {
  return (
    <ModalVariant currentWinner="">
      <h3>restart game?</h3>
      <div>
        <SecondaryGreyButton onClick={continueGame}>
          no, cancel
        </SecondaryGreyButton>
        <SecondaryYellowButton onClick={resetBoard}>
          yes, restart
        </SecondaryYellowButton>
      </div>
    </ModalVariant>
  )
}

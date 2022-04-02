import logo from '../../Assets/logo.svg'
import { GameIconStyled } from '../../Styles/GameIcon/GameIcon.styled'

export const GameIcon = () => {
  return (
    <GameIconStyled>
      <div>
        <img src={logo} alt="game logo" />
      </div>
    </GameIconStyled>
  )
}

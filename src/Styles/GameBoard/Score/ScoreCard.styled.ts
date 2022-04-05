import styled from 'styled-components'
import { device } from '../../utils/device'

interface ScoreCardStyledProps {
  scoreCardType: 'X' | 'O' | 'TIES'
}

export const ScoreCardStyled = styled.div<ScoreCardStyledProps>`
  text-align: center;
  padding: 0.7em;
  border-radius: 10px;
  font-weight: 500;
  background-color: ${({ scoreCardType }) => {
    if (scoreCardType === 'O') return '#F2B137'
    else if (scoreCardType === 'TIES') return '#A8BFC9'
    else return '#31C3BD'
  }};

  p {
    font-size: 1.2rem;
    &:nth-child(2) {
      font-weight: bold;
      font-size: 2rem;
    }

    @media screen and ${device.tablet} {
      font-size: 1.4rem;

      &:nth-child(2) {
        font-size: 2.4rem;
      }
    }
  }
`

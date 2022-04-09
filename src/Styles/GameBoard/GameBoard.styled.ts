import styled from 'styled-components'
import { device } from '../utils/device'

export const GameBoardStyled = styled.section`
  header {
    position: absolute;
    top: 0;
    padding-top: 1.5rem;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media screen and ${device.mobileL} {
      position: relative;
      width: 100%;
      padding-top: 0;
    }

    button {
      justify-self: end;
    }
  }
`

import styled from 'styled-components'
import { device } from '../utils/device'

export const GameOptions = styled.div`
  width: 100%;
  button {
    width: 100%;
    font-size: 1.6rem;
    padding: 0.8em;

    @media screen and ${device.tablet} {
      font-size: 2rem;
    }

    &:first-child {
      margin-bottom: 2rem;
    }
  }
`

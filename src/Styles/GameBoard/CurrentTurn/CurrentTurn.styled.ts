import styled from 'styled-components'

export const CurrentTurn = styled.div`
  background-color: #1f3641;
  padding: 0.6em 1em;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #a8bfc9;
  border-radius: 5px;
  position: relative;
  justify-self: center;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 7px;
    transform: translateY(5px);
    background-color: #1f3641;
    filter: brightness(85%);
    z-index: -1;
  }

  div {
    width: 2rem;
    svg {
      height: auto;
    }
    svg * {
      fill: #a8bfc9;
    }
  }
`

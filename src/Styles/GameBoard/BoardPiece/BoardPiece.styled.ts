import styled from 'styled-components'

export const BoardPieceStyled = styled.button`
  border-radius: 10px;
  background-color: #1f3641;
  border: none;
  position: relative;
  cursor: pointer;
  position: relative;

  svg {
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4rem;
  }

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 7px;
    transform: translateY(8px);
    background-color: #1f3641;
    filter: brightness(60%);
    z-index: -1;
  }
`

import styled from 'styled-components'

export const BoardPieceStyled = styled.button`
  border-radius: 10px;
  background-color: #1f3641;
  border: none;
  position: relative;
  cursor: pointer;

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

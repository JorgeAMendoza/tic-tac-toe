import styled from 'styled-components'

// so here we need to determine if the piece is a winning piece, and  what background color to render, lets start off by doing the svg first since it needs to be the dark color when its a in

interface BoardPieceStyledProps {
  isWin: boolean
  mark: 'X' | 'O' | ''
}

export const BoardPieceStyled = styled.button<BoardPieceStyledProps>`
  border-radius: 10px;
  background-color: ${({ isWin, mark }) => {
    if (!isWin) return '#1F3641'
    else {
      if (mark === 'X') return '#31C3BD'
      else return '#F2B137'
    }
  }};
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
    width: 45%;

    path {
      fill: ${({ isWin }) => (isWin ? '#1A2A33' : '')};
    }
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

import styled from 'styled-components'

interface ModalVariantProps {
  currentWinner: 'X' | 'O' | 'TIED' | ''
}

export const ModalVariant = styled.div<ModalVariantProps>`
  padding: 2em 0;
  background-color: #1f3641;
  z-index: 3;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  color: ${({ currentWinner }) => {
    if (currentWinner === '' || currentWinner === 'TIED') return '#A8BFC9'
    else if (currentWinner === 'O') return '#F2B137'
    else return '#31C3BD'
  }};

  h3 {
    font-size: 2.4rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    svg {
      width: 3.2rem;
      height: auto;
    }
  }

  p {
    color: #a8bfc9;
    font-weight: bold;
    letter-spacing: 1px;
  }

  button {
    &:first-child {
      margin-right: 2rem;
    }
  }
`

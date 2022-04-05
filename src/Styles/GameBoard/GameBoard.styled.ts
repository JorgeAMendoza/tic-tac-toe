import styled from 'styled-components'

export const GameBoardStyled = styled.section`
  header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    button {
      justify-self: end;
    }
  }
`

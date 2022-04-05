import styled from 'styled-components'

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr)
  justify-items: space-between;
  gap:2.5rem;
  height: min(90vw, 46rem);
  margin:3rem 0;
`

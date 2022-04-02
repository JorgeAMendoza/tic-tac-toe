import styled from 'styled-components'

export const PlayerMark = styled.div`
  background-color: #1f3641;
  position: relative;
  border-radius: 15px;
  padding: 1.6em 1.4em;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  color: #a8bfc9;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p,
  h2 {
    letter-spacing: 1px;
  }

  h2 {
    font-size: 1.6rem;
  }

  p {
    opacity: 0.5;
    font-weight: normal;
  }

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transform: translateY(7px);
    background-color: #1f3641;
    filter: brightness(50%);
    z-index: -1;
  }
`

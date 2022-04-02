import styled from 'styled-components'

export const MarkSelection = styled.div`
  background-color: #1a2a33;
  padding: 0.1em;
  border-radius: 10px;
  display: flex;

  label {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: stretch;
    padding: 0.5em;
    cursor: pointer;

    div {
      background-color: inherit;
      width: 100%;
      padding: 0.6em 3em;
      border-radius: 10px;
      height: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div svg {
      width: 40px;
      height: 40px;
    }

    div svg * {
      fill: #a8bfc9;
    }

    input {
      position: absolute;
      opacity: 0;

      &:checked + div {
        background-color: #a8bfc9;
      }

      &:checked + div svg * {
        fill: #1a2a33;
      }
    }
  }
`

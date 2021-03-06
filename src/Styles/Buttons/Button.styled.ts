import styled from 'styled-components'

const Button = styled.button`
  text-decoration: none;
  padding: 0.7em 1em;
  min-width: 5ch;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  position: relative;
`

const PrimaryButton = styled(Button)`
  padding: 0.9em 2em;
  border-radius: 15px;
`

export const YellowButtonPrimary = styled(PrimaryButton)`
  background-color: #f2b137;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transform: translateY(7px);
    background-color: #f2b137;
    filter: brightness(85%);
    z-index: -1;
  }
  &:hover {
    background-color: #ffc860;
  }
`

export const YellowSecondary = styled(YellowButtonPrimary)`
  padding: 0.5em 1em;
  border-radius: 5px;
`

export const BlueButtonPrimary = styled(PrimaryButton)`
  background-color: #31c3bd;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transform: translateY(7px);
    background-color: #31c3bd;
    filter: brightness(85%);
    z-index: -1;
  }

  &:hover {
    background-color: #65e9e4;
  }
`
export const BlueButtonSecondary = styled(BlueButtonPrimary)`
  padding: 0.5em 1em;
`

export const SecondaryYellowButton = styled(Button)`
  background-color: #f2b137;
  border-radius: 5px;
  position: relative;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 7px;
    transform: translateY(5px);
    background-color: #f2b137;
    filter: brightness(85%);
    z-index: -1;
  }

  &:hover {
    background-color: #ffc860;
  }
`

export const SecondaryGreyButton = styled(Button)`
  background-color: #a8bfc9;
  border-radius: 5px;
  position: relative;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 7px;
    transform: translateY(5px);
    background-color: #a8bfc9;
    filter: brightness(85%);
    z-index: -1;
  }

  &:hover {
    background-color: #dbe8ed;
  }
`
export const ResetButton = styled(SecondaryGreyButton)`
  display: flex;
  justify-content: center;
  padding: 0.7em;
`

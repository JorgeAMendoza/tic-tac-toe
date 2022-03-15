import React from 'react'
import { useReducer, useState } from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { gameContext } from '../../../Context/game-context'
import { gameReducer } from '../../../Context/game-reducer'
import { playerGame } from '../../../utils/game-settings'
import { GameBoard } from '../../../Components/GameBoard/GameBoard'
import { gameBoardType } from '../../../types/game-board'

const GameBoardRender = () => {
  const [gameInfo, setGameInfo] = useReducer(gameReducer, playerGame.playerOneX)
  const [gameBoard, setGameBoard] = useState<gameBoardType>([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ])
  return (
    <div>
      {gameInfo && (
        <gameContext.Provider value={{ gameInfo, setGameInfo }}>
          <GameBoard gameBoard={gameBoard} setGameBoard={setGameBoard} />
        </gameContext.Provider>
      )}
    </div>
  )
}

describe('Testing game board render', () => {
  test('game starts with player x turn', async () => {
    render(<GameBoardRender />)
    const currentTurn = await screen.findByTestId('currentTurn')
    expect(currentTurn.textContent).toContain('XTurn')
  })

  test('first move changes piece mark to x', async () => {
    render(<GameBoardRender />)
    const firstPiece = await screen.findByTestId('0,0')
    expect(firstPiece.textContent).toBe('')
    userEvent.click(firstPiece)
    expect(firstPiece.textContent).toBe('X')
  })

  test('second move changes piece mark to x', async () => {
    render(<GameBoardRender />)
    const firstPiece = await screen.findByTestId('0,0')
    const secondPiece = await screen.findByTestId('0,1')
    const currentTurn = await screen.findByTestId('currentTurn')

    userEvent.click(firstPiece)
    expect(currentTurn.textContent).toBe('OTurn')
    userEvent.click(secondPiece)
    expect(secondPiece.textContent).toBe('O')
  })

  test('player x wins and score incremented', async () => {
    render(<GameBoardRender />)
    const firstPiece = await screen.findByTestId('0,0')
    const secondPiece = await screen.findByTestId('0,1')
    const thirdPiece = await screen.findByTestId('0,2')
    const ninthPiece = await screen.findByTestId('2,2')
    const eigthPiece = await screen.findByTestId('2,1')

    userEvent.click(firstPiece)
    userEvent.click(ninthPiece)
    userEvent.click(secondPiece)
    userEvent.click(eigthPiece)
    userEvent.click(thirdPiece)

    const playerOneScore = await screen.findByTestId('scoreP1')
    expect(playerOneScore.textContent).toBe('1')
  })
})

describe('Reset the game mid-match', () => {
  test('click reset button, reset modal pops up', async () => {
    // call the render
    // click the reset button with find by ID
    // clicking the modal should render the modal automatically
    // check to see if the modal exist by using "isDefined" or something like that.
  })

  test('with the modal open, click cancel to continue the current game', async () => {
    // call the render
    // click reset button
    // find the "resume" button and click it
    // use new variable to find the modal (give modal itself a test ID)
    // check to ensure its undefined (meaning not found)
  })
  test('with the modal open, click confirm to restart the game', async () => {
    // call the render
    // click the reset button
    // find the "restart" and click it
    // confirm that the first turn is x
    // confirm that every button in the gameboard has a text of empty
  })
})

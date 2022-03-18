import { useReducer, useState } from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { gameContext } from '../../../Context/game-context'
import { gameReducer } from '../../../Context/game-reducer'
import { playerGame } from '../../../utils/game-settings'
import { GameBoard } from '../../../Components/GameBoard/GameBoard'
import { gameBoardType } from '../../../types/game-board'
import { GameModal } from '../../../Components/GameModal/GameModal'
import { text } from 'node:stream/consumers'

const GameBoardRender = () => {
  const [gameInfo, setGameInfo] = useReducer(gameReducer, playerGame.playerOneX)
  const [currentTurn, setCurrentTurn] = useState<'X' | 'O'>('X')
  const [turnCount, setTurnCount] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [gameBoard, setGameBoard] = useState<gameBoardType>([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ])
  return (
    <div>
      {gameInfo && (
        <gameContext.Provider value={{ gameInfo, setGameInfo }}>
          <GameBoard
            gameBoard={gameBoard}
            setGameBoard={setGameBoard}
            setShowModal={setShowModal}
            currentTurn={currentTurn}
            setCurrentTurn={setCurrentTurn}
            turnCount={turnCount}
            setTurnCount={setTurnCount}
          />
          {showModal && (
            <GameModal
              setShowModal={setShowModal}
              setGameBoard={setGameBoard}
              setCurrentTurn={setCurrentTurn}
              setTurnCount={setTurnCount}
            />
          )}
        </gameContext.Provider>
      )}
    </div>
  )
}

describe('Reset the game mid-match', () => {
  test('click reset button, reset modal pops up', async () => {
    render(<GameBoardRender />)
    const resetGameButton = await screen.findByTestId('resetGameButton')
    userEvent.click(resetGameButton)

    const modal = screen.queryByTestId('gameModal')
    expect(modal).toBeDefined()
  })

  test('with the modal open, click cancel to continue the current game', async () => {
    render(<GameBoardRender />)
    const resetGameButton = await screen.findByTestId('resetGameButton')
    userEvent.click(resetGameButton)

    const continueGameButton = await screen.findByText('no, cancel')
    userEvent.click(continueGameButton)

    expect(screen.queryByTestId('gameModal')).toBeNull()
  })
  test('with the modal open, click confirm to restart the game', async () => {
    render(<GameBoardRender />)
    const resetGameButton = await screen.findByTestId('resetGameButton')
    const gameBoardPiece = await screen.findByTestId('0,0')
    userEvent.click(gameBoardPiece)
    expect(gameBoardPiece.textContent).toBe('X')
    userEvent.click(resetGameButton)

    const restartGameButton = await screen.findByText('yes, restart')
    expect(restartGameButton).toBeDefined()
    userEvent.click(restartGameButton)
    expect(gameBoardPiece.textContent).toBe('')

    const currentTurn = await screen.findByTestId('currentTurn')
    expect(currentTurn.textContent).toContain('XTurn')
  })
})

describe('game modal when tied', () => {
  test('when game is tied, the modal shows up', async () => {
    render(<GameBoardRender />)
    const gamePieceMoveOne = await screen.findByTestId('1,1')
    const gamePieceMoveTwo = await screen.findByTestId('0,0')
    const gamePieceMoveThree = await screen.findByTestId('0,1')
    const gamePieceMoveFour = await screen.findByTestId('2,1')
    const gamePieceMoveFive = await screen.findByTestId('0,2')
    const gamePieceMoveSix = await screen.findByTestId('2,0')
    const gamePieceMoveSeven = await screen.findByTestId('1,0')
    const gamePieceMoveEight = await screen.findByTestId('1,2')
    const gamePieceMoveNine = await screen.findByTestId('2,2')

    userEvent.click(gamePieceMoveOne)
    userEvent.click(gamePieceMoveTwo)
    userEvent.click(gamePieceMoveThree)
    userEvent.click(gamePieceMoveFour)
    userEvent.click(gamePieceMoveFive)
    userEvent.click(gamePieceMoveSix)
    userEvent.click(gamePieceMoveSeven)
    userEvent.click(gamePieceMoveEight)
    userEvent.click(gamePieceMoveNine)

    await screen.findByTestId('gameModal')
    await screen.findByTestId('tiedModal')
  })

  test('tied modal, restart the match', async () => {
    render(<GameBoardRender />)
    const gamePieceMoveOne = await screen.findByTestId('1,1')
    const gamePieceMoveTwo = await screen.findByTestId('0,0')
    const gamePieceMoveThree = await screen.findByTestId('0,1')
    const gamePieceMoveFour = await screen.findByTestId('2,1')
    const gamePieceMoveFive = await screen.findByTestId('0,2')
    const gamePieceMoveSix = await screen.findByTestId('2,0')
    const gamePieceMoveSeven = await screen.findByTestId('1,0')
    const gamePieceMoveEight = await screen.findByTestId('1,2')
    const gamePieceMoveNine = await screen.findByTestId('2,2')

    userEvent.click(gamePieceMoveOne)
    userEvent.click(gamePieceMoveTwo)
    userEvent.click(gamePieceMoveThree)
    userEvent.click(gamePieceMoveFour)
    userEvent.click(gamePieceMoveFive)
    userEvent.click(gamePieceMoveSix)
    userEvent.click(gamePieceMoveSeven)
    userEvent.click(gamePieceMoveEight)
    userEvent.click(gamePieceMoveNine)

    const restartButton = await screen.findByText('next round')
    userEvent.click(restartButton)

    const resetGamePiece = await screen.findByTestId('2,1')
    expect(resetGamePiece.textContent).toBe('')
  })

  test('tied modal, quit the game', async () => {
    render(<GameBoardRender />)
    const gamePieceMoveOne = await screen.findByTestId('1,1')
    const gamePieceMoveTwo = await screen.findByTestId('0,0')
    const gamePieceMoveThree = await screen.findByTestId('0,1')
    const gamePieceMoveFour = await screen.findByTestId('2,1')
    const gamePieceMoveFive = await screen.findByTestId('0,2')
    const gamePieceMoveSix = await screen.findByTestId('2,0')
    const gamePieceMoveSeven = await screen.findByTestId('1,0')
    const gamePieceMoveEight = await screen.findByTestId('1,2')
    const gamePieceMoveNine = await screen.findByTestId('2,2')

    userEvent.click(gamePieceMoveOne)
    userEvent.click(gamePieceMoveTwo)
    userEvent.click(gamePieceMoveThree)
    userEvent.click(gamePieceMoveFour)
    userEvent.click(gamePieceMoveFive)
    userEvent.click(gamePieceMoveSix)
    userEvent.click(gamePieceMoveSeven)
    userEvent.click(gamePieceMoveEight)
    userEvent.click(gamePieceMoveNine)

    const quitGameButton = await screen.findByText('quit')
    userEvent.click(quitGameButton)

    const gameBoard = screen.queryByTestId('gameBoard')
    expect(gameBoard).toBeNull()
  })
})

describe('game modal when winner', () => {
  test('game win, player x wins the game', async () => {
    render(<GameBoardRender />)
    const gamePieceOne = await screen.findByTestId('0,0')
    const gamePieceTwo = await screen.findByTestId('0,1')
    const gamePieceThree = await screen.findByTestId('0,2')
    const gamePieceEight = await screen.findByTestId('2,1')
    const gamePieceNine = await screen.findByTestId('2,2')

    userEvent.click(gamePieceOne)
    userEvent.click(gamePieceNine)
    userEvent.click(gamePieceTwo)
    userEvent.click(gamePieceEight)
    userEvent.click(gamePieceThree)

    const gameModal = screen.queryByTestId('gameModal')
    expect(gameModal).toBeDefined()

    const xGameModal = screen.queryByTestId('xGameModal')
    expect(xGameModal).toBeDefined()
  })

  test('game win, player o wins the game', async () => {
    render(<GameBoardRender />)
    const gamePieceOne = await screen.findByTestId('0,0')
    const gamePieceTwo = await screen.findByTestId('0,1')
    const gamePieceThree = await screen.findByTestId('0,2')
    const gamePieceSeven = await screen.findByAltText('2,0')
    const gamePieceEight = await screen.findByTestId('2,1')
    const gamePieceNine = await screen.findByTestId('2,2')

    userEvent.click(gamePieceNine)
    userEvent.click(gamePieceOne)
    userEvent.click(gamePieceEight)
    userEvent.click(gamePieceTwo)
    userEvent.click(gamePieceSeven)
    userEvent.click(gamePieceThree)

    const gameModal = screen.queryByTestId('gameModal')
    expect(gameModal).toBeDefined()

    const yGameModal = screen.queryByTestId('yGameModal')
    expect(yGameModal).toBeDefined()
  })

  test('game win, player x wins and starts new round', async () => {
    render(<GameBoardRender />)
    const gamePieceOne = await screen.findByTestId('0,0')
    const gamePieceTwo = await screen.findByTestId('0,1')
    const gamePieceThree = await screen.findByTestId('0,2')
    const gamePieceEight = await screen.findByTestId('2,1')
    const gamePieceNine = await screen.findByTestId('2,2')

    userEvent.click(gamePieceOne)
    userEvent.click(gamePieceNine)
    userEvent.click(gamePieceTwo)
    userEvent.click(gamePieceEight)
    userEvent.click(gamePieceThree)

    const nextRoundButton = await screen.findByTestId('next round')
    userEvent.click(nextRoundButton)

    await screen.findByText('XTurn')
  })

  test('game win, player o wins and ends the game', async () => {
    render(<GameBoardRender />)
    const gamePieceOne = await screen.findByTestId('0,0')
    const gamePieceTwo = await screen.findByTestId('0,1')
    const gamePieceThree = await screen.findByTestId('0,2')
    const gamePieceSeven = await screen.findByAltText('2,0')
    const gamePieceEight = await screen.findByTestId('2,1')
    const gamePieceNine = await screen.findByTestId('2,2')

    userEvent.click(gamePieceNine)
    userEvent.click(gamePieceOne)
    userEvent.click(gamePieceEight)
    userEvent.click(gamePieceTwo)
    userEvent.click(gamePieceSeven)
    userEvent.click(gamePieceThree)

    const quitButton = await screen.findByText('quit')
    userEvent.click(quitButton)

    const gameBoard = screen.queryByTestId('gameBoard')
    expect(gameBoard).toBeNull()
  })
})

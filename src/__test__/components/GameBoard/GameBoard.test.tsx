import { useReducer, useState } from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { gameContext } from '../../../Context/game-context'
import { gameReducer } from '../../../Context/game-reducer'
import { playerGame, cpuGame } from '../../../utils/game-settings'
import { GameBoard } from '../../../Components/GameBoard/GameBoard'
import { gameBoardType } from '../../../types/game-board'
import { GameModal } from '../../../Components/GameModal/GameModal'
import { GameType } from '../../../types/game-type'

const playerConfiguration = playerGame.playerOneX
const cpuConfiguration = cpuGame.playerOneX

interface GameBoardRenderProps {
  gameConfig: GameType
}

const GameBoardRender = ({ gameConfig }: GameBoardRenderProps) => {
  const [gameInfo, setGameInfo] = useReducer(gameReducer, gameConfig)
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

describe('Testing game board render with player game', () => {
  test('game starts with player x turn', async () => {
    render(<GameBoardRender gameConfig={playerConfiguration} />)
    const currentTurn = await screen.findByTestId('currentTurn')
    expect(currentTurn.textContent).toContain('XTurn')
  })

  test('first move changes piece mark to x', async () => {
    render(<GameBoardRender gameConfig={playerConfiguration} />)
    const firstPiece = await screen.findByTestId('0,0')
    expect(firstPiece.textContent).toBe('')
    userEvent.click(firstPiece)
    expect(firstPiece.textContent).toBe('X')
  })

  test('second move changes piece mark to x', async () => {
    render(<GameBoardRender gameConfig={playerConfiguration} />)
    const firstPiece = await screen.findByTestId('0,0')
    const secondPiece = await screen.findByTestId('0,1')
    const currentTurn = await screen.findByTestId('currentTurn')

    userEvent.click(firstPiece)
    expect(currentTurn.textContent).toBe('OTurn')
    userEvent.click(secondPiece)
    expect(secondPiece.textContent).toBe('O')
  })

  test('player x wins and score incremented', async () => {
    render(<GameBoardRender gameConfig={playerConfiguration} />)
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

describe('Testing game board render with cpu game', () => {
  test('game starts with player x turn', async () => {
    render(<GameBoardRender gameConfig={cpuConfiguration} />)
    const currentTurnText = await screen.findByTestId('currentTurn')
    expect(currentTurnText.textContent).toBe('XTurn')
  })

  test('after player x turn and cpu move, we should be back with player x turn', async () => {
    render(<GameBoardRender gameConfig={cpuConfiguration} />)
    const currentTurnText = await screen.findByTestId('currentTurn')
    expect(currentTurnText.textContent).toBe('XTurn')
    const gameBoardPiece = await screen.findByTestId('0,0')
    userEvent.click(gameBoardPiece)
    expect(currentTurnText.textContent).toBe('XTurn')
  })
})

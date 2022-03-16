import React from 'react'
import { useContext } from 'react'
import { gameContext } from '../../Context/game-context'
import { gameBoardType } from '../../types/game-board'
import { ResetModal } from './Variants/ResetModal'

interface GameModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  setGameBoard: React.Dispatch<React.SetStateAction<gameBoardType>>
  setCurrentTurn: React.Dispatch<React.SetStateAction<'X' | 'O'>>
  setTurnCount: React.Dispatch<React.SetStateAction<number>>
}
export const GameModal = ({
  setShowModal,
  setGameBoard,
  setCurrentTurn,
  setTurnCount,
}: GameModalProps) => {
  const { gameInfo, setGameInfo } = useContext(gameContext)
  // what if we have the differnet component part, but use the data from teh context to tell which needs to be rendered, and then pass the data context as props, but one thing to worry about is how to reset the board, since that lives in the game board component and not the general state.

  // we are just going to go back to rendering each message with different components, we will start off with the restart message.
  const continueGame = () => {
    setShowModal(false)
  }

  const resetBoard = () => {
    setGameBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ])
    setCurrentTurn('X')
    setShowModal(false)
    setTurnCount(1)
  }

  const backToMenu = () => {
    setGameInfo({ type: 'RESET_GAME' })
  }

  return (
    <div data-testid="gameModal">
      {gameInfo.currentWinner === '' ? (
        <ResetModal continueGame={continueGame} resetBoard={resetBoard} />
      ) : null}
    </div>
  )
}

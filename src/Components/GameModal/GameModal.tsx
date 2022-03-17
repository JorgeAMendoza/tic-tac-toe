import React from 'react'
import { useContext } from 'react'
import { gameContext } from '../../Context/game-context'
import { gameBoardType } from '../../types/game-board'
import { ResetModal } from './Variants/ResetModal'
import { TiedModal } from './Variants/TiedModal'

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

  const quitGame = () => {
    setGameBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ])
    setGameInfo({ type: 'RESET_GAME' })
    setShowModal(false)
    setTurnCount(1)
    setCurrentTurn('X')
  }

  return (
    <div data-testid="gameModal">
      {gameInfo.currentWinner === '' ? (
        <ResetModal continueGame={continueGame} resetBoard={resetBoard} />
      ) : null}
      {gameInfo.currentWinner === 'TIED' ? (
        <TiedModal resetBoard={resetBoard} quitGame={quitGame} />
      ) : null}
    </div>
  )
}

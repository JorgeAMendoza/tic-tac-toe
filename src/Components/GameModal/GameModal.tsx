import React from 'react'
import { useContext } from 'react'
import { gameContext } from '../../Context/game-context'
import { gameBoardType } from '../../types/game-board'
import { ResetModal } from './Variants/ResetModal'
import { TiedModal } from './Variants/TiedModal'
import { WinModal } from './Variants/WinModal'

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
    setTurnCount(1)
    setShowModal(false)
  }

  const quitGame = () => {
    setGameBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ])
    setGameInfo({ type: 'RESET_GAME' })
    setTurnCount(1)
    setCurrentTurn('X')
    setShowModal(false)
  }

  return (
    <div data-testid="gameModal">
      {gameInfo.currentWinner === '' ? (
        <ResetModal continueGame={continueGame} resetBoard={resetBoard} />
      ) : null}
      {gameInfo.currentWinner === 'TIED' ? (
        <TiedModal resetBoard={resetBoard} quitGame={quitGame} />
      ) : null}
      {gameInfo.currentWinner === 'X' || gameInfo.currentWinner === 'O' ? (
        <WinModal quitGame={quitGame} resetBoard={resetBoard} />
      ) : null}
    </div>
  )
}

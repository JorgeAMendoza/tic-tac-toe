import React, { ReactNode, useContext, useEffect } from 'react'
import { gameContext } from '../../Context/game-context'
import { GameIcon } from '../GameIcon/GameIcon'
import { RestartIcon } from '../Icons/RestartIcon'
import { BoardPiece } from './BoardPiece/BoardPiece'
import { gameBoardType } from '../../types/game-board'
import { ScoreCard } from '../ScoreCard/ScoreCard'
import { checkWinner } from '../../utils/check-winner'
import { cpuMove } from '../../utils/cpu-move'
import { GameBoardStyled } from '../../Styles/GameBoard/GameBoard.styled'
import { ResetButton } from '../../Styles/Buttons/Button.styled'
import { Board } from '../../Styles/GameBoard/Board/Board.styled'
import { CurrentTurn } from '../../Styles/GameBoard/CurrentTurn/CurrentTurn.styled'
import { XMarkIcon } from '../Icons/XMarkIcon'
import { OMarkIcon } from '../Icons/OMarkIcon'
import { Score } from '../../Styles/GameBoard/Score/Score.styled'

interface GameBoardProps {
  gameBoard: gameBoardType
  setGameBoard: React.Dispatch<React.SetStateAction<gameBoardType>>
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  currentTurn: 'X' | 'O'
  setCurrentTurn: React.Dispatch<React.SetStateAction<'X' | 'O'>>
  turnCount: number
  setTurnCount: React.Dispatch<React.SetStateAction<number>>
}

export const GameBoard = ({
  gameBoard,
  setGameBoard,
  setShowModal,
  currentTurn,
  setCurrentTurn,
  turnCount,
  setTurnCount,
}: GameBoardProps) => {
  const { gameInfo, setGameInfo } = useContext(gameContext)

  useEffect(() => {
    cpuPlaceMark()
  }, [currentTurn]) //eslint-disable-line

  const placeMark = (row: number, column: number) => {
    const newGameBoard = [...gameBoard]
    if (newGameBoard[row][column].boardMark !== '') return
    newGameBoard[row][column].boardMark = currentTurn

    const resultObj = checkWinner(gameBoard, currentTurn)
    if (resultObj.result) {
      if (currentTurn === 'X') setGameInfo({ type: 'INCREMENT_X' })
      else setGameInfo({ type: 'INCREMENT_O' })
      const { winIndexOne, winIndexTwo, winIndexThree } = resultObj
      const [winIndexOneI, winIndexOneJ] = winIndexOne
      const [winIndexTwoI, winIndexTwoJ] = winIndexTwo
      const [winIndexThreeI, winIndexThreeJ] = winIndexThree

      newGameBoard[winIndexOneI][winIndexOneJ].win = true
      newGameBoard[winIndexTwoI][winIndexTwoJ].win = true
      newGameBoard[winIndexThreeI][winIndexThreeJ].win = true

      setShowModal(true)
      setGameBoard(newGameBoard)
      return
    }

    setTurnCount(turnCount + 1)
    if (turnCount === 9) {
      setGameInfo({ type: 'INCREMENT_TIED' })
      setShowModal(true)
    } else setCurrentTurn(currentTurn === 'X' ? 'O' : 'X')
    setGameBoard(newGameBoard)
  }

  const cpuPlaceMark = () => {
    if (!(gameInfo.gameType === 'cpu')) return
    const xPlayerName = gameInfo.xPlayer.playerName
    const cpuMark = xPlayerName === 'CPU' ? 'X' : 'O'

    if (!(currentTurn === cpuMark)) return

    const move = cpuMove(gameBoard)
    placeMark(Number(move.charAt(0)), Number(move.charAt(move.length - 1)))
  }

  const resetGame = () => {
    setShowModal(true)
  }

  const renderPieces = () => {
    const boardPieces: Array<ReactNode> = []
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        boardPieces.push(
          <BoardPiece
            isWin={gameBoard[i][j].win}
            key={`${i},${j}`}
            mark={gameBoard[i][j].boardMark}
            placeMark={() => placeMark(i, j)}
            testID={`${i},${j}`}
          />
        )
      }
    }
    return boardPieces
  }
  return (
    <GameBoardStyled data-testid="gameBoard">
      <header>
        <GameIcon />
        <CurrentTurn>
          <div>{currentTurn === 'X' ? <XMarkIcon /> : <OMarkIcon />}</div>
          <p data-testid="currentTurn">Turn</p>
        </CurrentTurn>
        <ResetButton onClick={resetGame} data-testid="resetGameButton">
          <RestartIcon />
        </ResetButton>
      </header>

      <Board data-testid="gamePieceContainer">{renderPieces()}</Board>

      <Score>
        <ScoreCard
          scoreName="X"
          score={gameInfo.xPlayer.score}
          playerName={gameInfo.xPlayer.playerName}
        />
        <ScoreCard scoreName="TIES" score={gameInfo.tiedScore} />
        <ScoreCard
          scoreName="O"
          score={gameInfo.oPlayer.score}
          playerName={gameInfo.oPlayer.playerName}
        />
      </Score>
    </GameBoardStyled>
  )
}

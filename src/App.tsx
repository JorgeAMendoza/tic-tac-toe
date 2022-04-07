import { useReducer, useState } from 'react'
import { GameStart } from './Components/GameStart/GameStart'
import { GameBoard } from './Components/GameBoard/GameBoard'
import { gameContext } from './Context/game-context'
import { playerGame, cpuGame } from './utils/game-settings'
import { gameReducer } from './Context/game-reducer'
import { gameBoardType } from './types/game-board'
import { GameModal } from './Components/GameModal/GameModal'
import { GlobalStyles } from './Styles/Global.styled'

function App() {
  const [gameInfo, setGameInfo] = useReducer(gameReducer, null)
  const [currentTurn, setCurrentTurn] = useState<'X' | 'O'>('X')
  const [showModal, setShowModal] = useState(false)
  const [turnCount, setTurnCount] = useState(1)
  const [gameBoard, setGameBoard] = useState<gameBoardType>([
    [
      { win: false, boardMark: '' },
      { win: false, boardMark: '' },
      { win: false, boardMark: '' },
    ],
    [
      { win: false, boardMark: '' },
      { win: false, boardMark: '' },
      { win: false, boardMark: '' },
    ],
    [
      { win: false, boardMark: '' },
      { win: false, boardMark: '' },
      { win: false, boardMark: '' },
    ],
  ])
  const startGame = (playerOneMark: 'X' | 'O', gameType: 'player' | 'cpu') => {
    if (gameType === 'player') {
      if (playerOneMark === 'X')
        setGameInfo({ type: 'SET_GAME', payload: playerGame.playerOneX })
      else setGameInfo({ type: 'SET_GAME', payload: playerGame.playerOneO })
    } else {
      if (playerOneMark === 'X')
        setGameInfo({ type: 'SET_GAME', payload: cpuGame.playerOneX })
      else setGameInfo({ type: 'SET_GAME', payload: cpuGame.playerOneO })
    }
  }
  return (
    <main>
      <GlobalStyles />
      {!gameInfo && <GameStart startGame={startGame} />}
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
    </main>
  )
}

export default App

import { useReducer, useState } from 'react'
import { GameStart } from './Components/GameStart/GameStart'
import { GameBoard } from './Components/GameBoard/GameBoard'
import { gameContext } from './Context/game-context'
import { playerGame, cpuGame } from './utils/game-settings'
import { gameReducer } from './Context/game-reducer'
import { gameBoardType } from './types/game-board'
import { GameModal } from './Components/GameModal/GameModal'

function App() {
  const [gameInfo, setGameInfo] = useReducer(gameReducer, null)
  const [showModal, setShowModal] = useState(false)
  const [gameBoard, setGameBoard] = useState<gameBoardType>([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
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
      {!gameInfo && <GameStart startGame={startGame} />}
      {gameInfo && (
        <gameContext.Provider value={{ gameInfo, setGameInfo }}>
          <GameBoard
            gameBoard={gameBoard}
            setGameBoard={setGameBoard}
            setShowModal={setShowModal}
          />
          {showModal && (
            <GameModal
              setShowModal={setShowModal}
              setGameBoard={setGameBoard}
            />
          )}
        </gameContext.Provider>
      )}
    </main>
  )
}

export default App

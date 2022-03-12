import { useReducer } from 'react'
import { GameStart } from './Components/GameStart/GameStart'
import { GameBoard } from './Components/GameBoard/GameBoard'
import { gameContext } from './Context/game-context'
import { playerGame, cpuGame } from './utils/game-settings'
import { gameReducer } from './Context/game-reducer'

function App() {
  const [gameInfo, setGameInfo] = useReducer(gameReducer, null)
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
  console.log(gameInfo)
  return (
    <main>
      {!gameInfo && <GameStart startGame={startGame} />}
      {gameInfo && (
        <gameContext.Provider value={{ gameInfo, setGameInfo }}>
          <GameBoard />
        </gameContext.Provider>
      )}
    </main>
  )
}

export default App

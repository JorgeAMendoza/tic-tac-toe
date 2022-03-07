import { useState } from 'react'
import { GameStart } from './Components/GameStart/GameStart'
import { GameBoard } from './Components/GameBoard/GameBoard'
import { gameContext } from './Context/game-context'
import { gameType } from './types/game-type'
import { playerGame, cpuGame } from './utils/game-settings'

function App() {
  const [gameInfo, setGameInfo] = useState<gameType | null>(null)
  const startGame = (playerOneMark: 'X' | 'O', gameType: 'player' | 'cpu') => {
    if (gameType === 'player') {
      if (playerOneMark === 'X') setGameInfo(playerGame.playerOneX)
      else setGameInfo(playerGame.playerOneO)
    } else {
      if (playerOneMark === 'X') setGameInfo(cpuGame.playerOneX)
      else setGameInfo(cpuGame.playerOneO)
    }
  }
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

import { useState } from 'react'
import { GameStart } from './Components/GameStart/GameStart'
import { GameBoard } from './Components/GameBoard/GameBoard'
import { gameContext } from './Context/game-context'
import { gameType } from './types/game-type'

function App() {
  const [gameInfo, setGameInfo] = useState<gameType | null>(null)
  return (
    <main>
      {!gameInfo && <GameStart />}
      {gameInfo && (
        <gameContext.Provider value={{ gameInfo, setGameInfo }}>
          <GameBoard />
        </gameContext.Provider>
      )}
    </main>
  )
}

export default App

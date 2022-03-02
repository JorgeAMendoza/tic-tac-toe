import { useState } from 'react'
import { GameStart } from './Components/GameStart/GameStart'
import { GameBoard } from './Components/GameBoard/GameBoard'
import { gameContext } from './Context/game-context'
import { gameType } from './types/game-type'

function App() {
  const [gameInfo, setGameInfo] = useState<gameType | null>(null)
  const startGame = (playerOneMark: 'X' | 'O', gameType: 'player' | 'cpu') => {
    if (playerOneMark === 'X')
      setGameInfo({
        playerOne: { playerMark: 'X', playerScore: 0 },
        playerTwo: { playerMark: 'O', playerScore: 0 },
        tiedScore: 0,
        gameType,
      })
    else
      setGameInfo({
        playerOne: { playerMark: 'O', playerScore: 0 },
        playerTwo: { playerMark: 'X', playerScore: 0 },
        tiedScore: 0,
        gameType,
      })
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

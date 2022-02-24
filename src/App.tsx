import { GameStart } from './Components/GameStart/GameStart'
import { GameBoard } from './Components/GameBoard/GameBoard'

function App() {
  // so lets focus on creating the context for each player, intializing them to nothing, and then creating the project base structure.
  const displayGame = false
  return (
    <main>
      {displayGame && <GameStart />}
      <GameBoard />
    </main>
  )
}

export default App

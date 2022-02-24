import { GameIcon } from '../GameIcon/GameIcon'

export const GameStart = () => {
  // create state to determine the player one mark and eventually passing it to the context
  return (
    <section>
      <GameIcon />
      <div>
        <h2>pick player 1&#39;s mark</h2>
        <div>
          <label>
            <input type="checkbox" value="X" />
            <span>X</span>
          </label>
          <label>
            <input type="checkbox" value="Y" />
            <span>Y</span>
          </label>
        </div>
        <p>remeber: x goes first</p>
      </div>

      <button>new game (vs cpu)</button>
      <button>new game (vs player)</button>
    </section>
  )
}

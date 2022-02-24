import { OMarkIcon } from '../../Icons/OMarkIcon'

export const OTakesRound = () => {
  return (
    <div>
      <p>You Lose!</p>
      <h2>
        <span>
          <OMarkIcon />
        </span>{' '}
        takes the round
      </h2>

      <div>
        <button>quit</button>
        <button>next round</button>
      </div>
    </div>
  )
}

import { XMarkIcon } from '../../Icons/XMarkIcon'

export const XTakesRound = () => {
  return (
    <div>
      <p>You won!</p>
      <h2>
        <span>
          <XMarkIcon />
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

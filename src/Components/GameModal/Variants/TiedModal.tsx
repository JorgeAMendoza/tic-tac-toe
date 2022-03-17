interface TiedModalProps {
  resetBoard: () => void
  quitGame: () => void
}

export const TiedModal = ({ quitGame, resetBoard }: TiedModalProps) => {
  return (
    <div data-testid="tiedModal">
      <h3>round tied</h3>
      <div>
        <button onClick={quitGame}>quit</button>
        <button onClick={resetBoard}>next round</button>
      </div>
    </div>
  )
}

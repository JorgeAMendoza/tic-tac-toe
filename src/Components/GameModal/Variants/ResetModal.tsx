interface ResetModalProps {
  resetBoard: () => void
  continueGame: () => void
}

export const ResetModal = ({ resetBoard, continueGame }: ResetModalProps) => {
  return (
    <div>
      <h3>reset the game?</h3>
      <div>
        <button onClick={continueGame}>no, cancel</button>
        <button onClick={resetBoard}>yes, restart</button>
      </div>
    </div>
  )
}

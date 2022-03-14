interface BoardPiecePropTypes {
  mark: 'X' | 'O' | ''
  placeMark: () => void
  testID: string
}

export const BoardPiece = ({
  mark,
  placeMark,
  testID,
}: BoardPiecePropTypes) => {
  // state to determine if hovering.
  return (
    <button
      onClick={placeMark}
      disabled={mark ? true : false}
      data-testid={testID}
    >
      {mark}
    </button>
  )
}

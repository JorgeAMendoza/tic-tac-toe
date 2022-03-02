interface BoardPiecePropTypes {
  mark: 'X' | 'O' | ''
  // placeMark: () => void
}

export const BoardPiece = ({ mark }: BoardPiecePropTypes) => {
  // state to determine if hovering.
  return <button>{mark}</button>
}

interface BoardPiecePropTypes {
  mark: 'X' | 'O' | ''
  placeMark: () => void
}

export const BoardPiece = ({ mark, placeMark }: BoardPiecePropTypes) => {
  // state to determine if hovering.
  return (
    <button onClick={placeMark} disabled={mark ? true : false}>
      {mark}
    </button>
  )
}

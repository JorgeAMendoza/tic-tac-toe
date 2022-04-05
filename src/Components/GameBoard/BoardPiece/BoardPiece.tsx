import { BoardPieceStyled } from '../../../Styles/GameBoard/BoardPiece/BoardPiece.styled'

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
    <BoardPieceStyled
      onClick={placeMark}
      disabled={mark ? true : false}
      data-testid={testID}
    >
      {mark}
    </BoardPieceStyled>
  )
}

type boardMark = 'X' | 'O' | ''
interface boardPiece {
  win: true | false
  boardMark: boardMark
}
type boardType = [boardPiece, boardPiece, boardPiece]
export type gameBoardType = Array<boardType>

import { useState } from 'react'
import { BoardPieceStyled } from '../../../Styles/GameBoard/BoardPiece/BoardPiece.styled'
import { XMarkIcon } from '../../Icons/XMarkIcon'
import { OMarkIcon } from '../../Icons/OMarkIcon'
import { OMarkIconOutline } from '../../Icons/OMarkIconOutline'
import { XMarkIconOutline } from '../../Icons/XMarkIconOutline'

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
  const [isHovering, setIsHovering] = useState(false)
  const renderMark = () => {
    console.log(isHovering)
    if (!mark) return null
    else if (mark === 'X' && isHovering) return <XMarkIconOutline />
    else if (mark === 'X') return <XMarkIcon />
    else if (mark === 'O' && isHovering) return <OMarkIconOutline />
    else return <OMarkIcon />
  }
  return (
    <BoardPieceStyled
      onClick={placeMark}
      // disabled={mark ? true : false}
      data-testid={testID}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {renderMark()}
    </BoardPieceStyled>
  )
}

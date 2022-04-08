import { useState } from 'react'
import { BoardPieceStyled } from '../../../Styles/GameBoard/BoardPiece/BoardPiece.styled'
import { XMarkIcon } from '../../Icons/XMarkIcon'
import { OMarkIcon } from '../../Icons/OMarkIcon'
import { OMarkIconOutline } from '../../Icons/OMarkIconOutline'
import { XMarkIconOutline } from '../../Icons/XMarkIconOutline'

interface BoardPiecePropTypes {
  isWin: boolean
  mark: 'X' | 'O' | ''
  placeMark: () => void
  testID: string
}

export const BoardPiece = ({
  isWin,
  mark,
  placeMark,
  testID,
}: BoardPiecePropTypes) => {
  const [isHovering, setIsHovering] = useState(false)
  const renderMark = () => {
    if (!mark) return null
    else if (mark === 'X' && isHovering) return <XMarkIconOutline />
    else if (mark === 'X') return <XMarkIcon />
    else if (mark === 'O' && isHovering) return <OMarkIconOutline />
    else return <OMarkIcon />
  }
  return (
    <BoardPieceStyled
      isWin={isWin}
      onClick={placeMark}
      data-testid={testID}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {renderMark()}
    </BoardPieceStyled>
  )
}

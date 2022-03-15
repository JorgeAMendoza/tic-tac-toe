import React from 'react'

interface GameModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
export const GameModal = ({ setShowModal }: GameModalProps) => {
  // what if we have the differnet component part, but use the data from teh context to tell which needs to be rendered, and then pass the data context as props, but one thing to worry about is how to reset the board, since that lives in the game board component and not the general state.
  return (
    <div>
      <p>This is the game modal</p>
    </div>
  )
}

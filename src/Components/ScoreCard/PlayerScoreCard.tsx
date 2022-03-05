interface ScoreCardProps {
  PlayerName: 'P1' | 'P2' | 'CPU' | 'YOU'
  playerMark: 'X' | 'O'
  playerScore: number
}

export const ScoreCard = ({
  PlayerName,
  playerMark,
  playerScore,
}: ScoreCardProps) => {
  return (
    <div>
      <p>
        {playerMark} ({PlayerName})
      </p>
      <p>{playerScore}</p>
    </div>
  )
}

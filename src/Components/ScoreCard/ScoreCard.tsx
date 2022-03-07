interface ScoreCardProps {
  scoreName: 'X' | 'O' | 'TIES'
  score: number
  playerName?: 'P1' | 'P2' | 'YOU' | 'CPU'
}

export const ScoreCard = ({ scoreName, score, playerName }: ScoreCardProps) => {
  return (
    <div>
      <p>
        {scoreName}
        {playerName && `(${playerName})`}
      </p>
      <p>{score}</p>
    </div>
  )
}

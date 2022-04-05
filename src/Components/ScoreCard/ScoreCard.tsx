import { ScoreCardStyled } from '../../Styles/GameBoard/Score/ScoreCard.styled'

interface ScoreCardProps {
  scoreName: 'X' | 'O' | 'TIES'
  score: number
  playerName?: 'P1' | 'P2' | 'YOU' | 'CPU'
}

export const ScoreCard = ({ scoreName, score, playerName }: ScoreCardProps) => {
  return (
    <ScoreCardStyled scoreCardType={scoreName}>
      <p>
        {scoreName}
        {playerName && ` (${playerName})`}
      </p>
      <p data-testid={`score${playerName}`}>{score}</p>
    </ScoreCardStyled>
  )
}

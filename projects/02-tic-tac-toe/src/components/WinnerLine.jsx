import { WINNER_COMBOS } from '../constants'
import Diagonal from './lines/Diagonal'
import Horizontal from './lines/Horizontal'
import Vertical from './lines/Vertical'

export default function WinnerLine ({ winnerCombo }) {
  if (!winnerCombo) return
  const horizontal = WINNER_COMBOS.slice(0, 3)
  const vertical = WINNER_COMBOS.slice(3, 6)
  const diagonal = WINNER_COMBOS.slice(6, 7)
  const invertedDiagonal = WINNER_COMBOS.slice(7, 8)

  const [x1, x2, x3] = horizontal
  const [y1, y2, y3] = vertical
  const [d] = diagonal
  const [d2] = invertedDiagonal

  return (
    <section className='winner-line'>
      {winnerCombo === x1 && <Horizontal />}
      {winnerCombo === x2 && <Horizontal customStyle='x2' />}
      {winnerCombo === x3 && <Horizontal customStyle='x3' />}

      {winnerCombo === y1 && <Vertical customStyle='y1' />}
      {winnerCombo === y2 && <Vertical />}
      {winnerCombo === y3 && <Vertical customStyle='y3' />}

      {winnerCombo === d && <Diagonal />}
      {winnerCombo === d2 && <Diagonal customStyle='inverted-diagonal' />}
    </section>
  )
}

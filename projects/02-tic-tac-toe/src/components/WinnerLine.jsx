import { WINNER_COMBOS } from '../constants'
import Diagonal from './lines/Diagonal'
import Horizontal from './lines/Horizontal'
import Vertical from './lines/Vertical'

export default function WinnerLine ({ winnerCombo }) {
  const horizontal = WINNER_COMBOS.slice(0, 3)
  const vertical = WINNER_COMBOS.slice(3, 6)
  const diagonal = WINNER_COMBOS.slice(6, 7)
  const invertedDiagonal = WINNER_COMBOS.slice(7, 8)

  if (!winnerCombo) return

  return (
    <section className='winner-line'>
      {winnerCombo && <Vertical />}
    </section>
  )
}

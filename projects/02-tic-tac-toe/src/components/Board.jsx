import { borderClass } from '../constants'
import Square from './Square'
import WinnerLine from './WinnerLine'

export default function Board ({ board, handleUpdateBoard, winnerCombo }) {
  function getBorders (index) {
    return borderClass[index] || []
  }

  return (
    <section className='game'>
      {
        board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={handleUpdateBoard}
              borders={getBorders(index)}
            >
              {board[index]}
            </Square>
          )
        })
      }
      <WinnerLine winnerCombo={winnerCombo} />
    </section>
  )
}

import { borderClass } from '../constants'
import Square from './Square'

export default function Board ({ board, handleUpdateBoard }) {
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
    </section>
  )
}

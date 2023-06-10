import Square from './Square'

export default function Board ({ board, handleUpdateBoard }) {
  return (
    <section className='game'>
      {
        board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={handleUpdateBoard}
            >
              {board[index]}
            </Square>
          )
        })
      }
    </section>
  )
}

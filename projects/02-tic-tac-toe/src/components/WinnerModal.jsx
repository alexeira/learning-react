import ResetGameButton from './ResetGameButton'
import Square from './Square'

export default function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : 'El ganador es:'
  const tie = <span>🤝</span>

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        <header className='win'>
          <Square>{winner || tie}</Square>
        </header>

        <footer>
          <ResetGameButton resetGame={resetGame} />
        </footer>
      </div>

    </section>
  )
}

import ResetGameButton from './ResetGameButton'
import ShouldRender from './ShouldRender'
import Square from './Square'

export default function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : 'Ganaste!'
  const tie = <span>🤝</span>

  return (
    <ShouldRender delay={5000}>
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
    </ShouldRender>
  )
}

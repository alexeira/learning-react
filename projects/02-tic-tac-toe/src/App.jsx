import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O'
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function Square ({ children, isSelected, updateBoard, index }) {
  function handleClick () {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={`square ${isSelected ? 'is-selected' : ''}`}>
      {children}
    </div>
  )
}

export default function App () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  function checkWinner (boardToCheck) {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  function updateBoard (index) {
    // condicion para no volver a repetir un valor en una posicion que ya tiene un valor establecido
    if (board[index] || winner) return
    // creamos una variable de la tabla para no mutar el estado
    const newBoard = [...board]
    // le indicamos que la posicion seleccionada sera igual al turno actual
    newBoard[index] = turn
    // usamos setBoard para actualizar el estado de la posicion en la tabla
    setBoard(newBoard)

    // creamos una variable para saber cual es el turno siguiente
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    // usamos setTurn para actualizar el estado del turno actual
    setTurn(newTurn)

    // checkeamos si hay un ganador
    const newWinner = checkWinner(newBoard)
    // si tenemos un ganador, actualizamos el estado de winner
    if (newWinner) return setWinner(newWinner)
  }

  function resetGame () {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>{winner === false ? 'Empate' : 'El ganador es:'}</h2>
              <header className='win'>
                <Square>{winner}</Square>
              </header>
            </div>

            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>

          </section>
        )
      }
    </main>
  )
}

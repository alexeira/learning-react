import { TURNS, WINNER_COMBOS } from '../constants'

// funcion para guardar la partida en el local-storage
function saveGame (newBoard, newTurn) {
  // guardamos el estado actual de la tabla
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  // guardamos el estado actual del turno
  window.localStorage.setItem('turn', newTurn)
}

// funcion para resetear la partida en el local storage tambien
export function resetGameStorage () {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}

function checkWinner (boardToCheck) {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return { newWinner: boardToCheck[a], winnerCombo: combo }
    }
  }
  return { newWinner: null, winnerCombo: null }
}

export function checkTie (newBoard) {
  // si todas las posiciones de board son diferentes de null
  // significa que el juego termino y no hubo ganador, por ende es empate
  const isFull = newBoard.every((square) => square !== null)

  const { newWinner } = checkWinner(newBoard)

  return isFull && newWinner === null && newBoard.length === 9
}

export function updateBoard (board, index, winner, turn, setBoard, setTurn, setWinner, setWinnerCombo) {
  // condicion para no volver a repetir un valor en una posicion, que ya tiene un valor establecido
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

  // guardamos la partida antes de que haya un ganador
  saveGame(newBoard, newTurn)

  // checkeamos si hay un ganador
  const { newWinner, winnerCombo } = checkWinner(newBoard)
  // si tenemos un ganador, actualizamos el estado de winner y guardamos el combo ganador
  if (newWinner) {
    setWinner(newWinner)
    setWinnerCombo(winnerCombo)
  }
  if (checkTie(newBoard)) {
    setWinner(false)
    setWinnerCombo(null)
  }
}

import { TURNS, WINNER_COMBOS } from '../constants'

export function checkWinner (boardToCheck) {
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

export function checkEndGame (newBoard) {
  // si todas las posiciones de board son diferentes de null
  // significa que el juego termino y no hubo ganador, por ende es empate
  return newBoard.every((square) => square !== null)
}

export function updateBoard (board, index, winner, turn, setBoard, setTurn, setWinner) {
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
  else if (checkEndGame(newBoard)) return setWinner(false)
}

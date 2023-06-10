import { useState } from 'react'

import './App.css'

import ResetGameButton from './components/ResetGameButton'
import Square from './components/Square'

import { TURNS } from './constants'
import { updateBoard } from './logic/board'
import WinnerModal from './components/WinnerModal'
import Board from './components/Board'

export default function App () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  function handleUpdateBoard (index) {
    updateBoard(board, index, winner, turn, setBoard, setTurn, setWinner)
  }

  function resetGame () {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>

      <ResetGameButton resetGame={resetGame} />
      <Board board={board} handleUpdateBoard={handleUpdateBoard} />

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

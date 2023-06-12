import { useState } from 'react'

import './App.css'

import ResetGameButton from './components/ResetGameButton'
import Square from './components/Square'

import { TURNS } from './constants'
import { resetGameStorage, updateBoard } from './logic/board'
import WinnerModal from './components/WinnerModal'
import Board from './components/Board'
import Victories from './components/Victories'
import WinnerLine from './components/WinnerLine'

export default function App () {
  const [winner, setWinner] = useState(null)
  const [winnerCombo, setWinnerCombo] = useState(null)

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  function handleUpdateBoard (index) {
    updateBoard(board, index, winner, turn, setBoard, setTurn, setWinner, setWinnerCombo)
  }

  function resetGame () {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <Board board={board} handleUpdateBoard={handleUpdateBoard} />
      <WinnerLine winnerCombo={winnerCombo} />

      <section className='victories'>
        <Victories winner={winner} />
        <ResetGameButton resetGame={resetGame} />
      </section>

      {/* <WinnerModal winner={winner} resetGame={resetGame} /> */}
    </main>
  )
}

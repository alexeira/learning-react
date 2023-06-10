export default function ResetGameButton ({ resetGame }) {
  function handleClick () {
    resetGame()
  }
  return <button onClick={handleClick}>Empezar de nuevo</button>
}

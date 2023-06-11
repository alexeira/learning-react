import RestartIcon from './RestartIcon'

export default function ResetGameButton ({ resetGame }) {
  function handleClick () {
    resetGame()
  }
  return <button onClick={handleClick}><RestartIcon /></button>
}

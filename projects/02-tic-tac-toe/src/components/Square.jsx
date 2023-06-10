export default function Square ({ children, isSelected, updateBoard, index }) {
  function handleClick () {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={`square ${isSelected ? 'is-selected' : ''}`}>
      {children}
    </div>
  )
}

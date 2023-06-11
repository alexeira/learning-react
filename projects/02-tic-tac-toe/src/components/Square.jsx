export default function Square ({ children, isSelected, updateBoard, index, borders }) {
  function handleClick () {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={`${borders} square ${isSelected ? 'is-selected' : ''}`}>
      {children}
    </div>
  )
}

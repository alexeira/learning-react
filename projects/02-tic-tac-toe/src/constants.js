export const TURNS = {
  X: 'x',
  O: 'o'
}

export const VICTORIES = {
  x: 0,
  o: 0
}

export const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export const borderClass = {
  1: ['border-lr'],
  3: ['border-tb'],
  4: ['border-all'],
  5: ['border-tb'],
  7: ['border-lr']
}

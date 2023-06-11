import { useState, useEffect } from 'react'
import { VICTORIES } from '../constants'

export default function Victories ({ winner }) {
  const [victories, setVictories] = useState(() => {
    const storedVictories = window.localStorage.getItem('victories')
    return JSON.parse(storedVictories) ?? VICTORIES
  })

  useEffect(() => {
    window.localStorage.setItem('victories', JSON.stringify(victories))
  }, [victories])

  useEffect(() => {
    if (winner) {
      setVictories(prevVictories => ({
        ...prevVictories,
        [winner]: prevVictories[winner] + 1
      }))
    }
  }, [winner])

  return (
    <h3>{victories.x} - {victories.o}</h3>
  )
}

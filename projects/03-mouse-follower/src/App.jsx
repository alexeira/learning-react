import { useEffect, useState } from 'react'

export default function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMove (event) {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => { window.removeEventListener('pointermove', handleMove) }
  }, [enabled])

  return (
    <main>
      <div className={`${enabled ? 'circle' : 'none'}`} style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />
      <button
        onClick={() => setEnabled(!enabled)}
      >
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

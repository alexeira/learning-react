import { useEffect, useState } from 'react'

export default function ShouldRender ({ children, delay }) {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShouldRender(true)
    }, delay)

    return () => {
      setShouldRender(false)
      clearTimeout(timeoutId)
    }
  }, [delay])

  if (!shouldRender) return

  return children
}

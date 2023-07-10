import { useEffect, useState } from 'react'
import { events } from './constants/events'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'

const { pushstate, popstate } = events

export default function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(pushstate, onLocationChange)
    window.addEventListener(popstate, onLocationChange)

    return () => {
      window.removeEventListener(pushstate, onLocationChange)
      window.removeEventListener(popstate, onLocationChange)
    }
  }, [])

  return (
    <main>
      <h1>React Router<code className='practice'>for practice</code></h1>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

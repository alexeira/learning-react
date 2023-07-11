import { useState, useEffect } from 'react'
import { events } from '../constants/events'

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const { pushstate, popstate } = events

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

  const Page = routes.find(({ path }) => path === currentPath)?.Component

  return Page ? <Page /> : <DefaultComponent />
}

import { events } from '../constants/events'

const { pushstate } = events

export function navigate (href) {
  window.history.pushState({}, '', href)
  // crear un evento personalizado
  const navigationEvent = new Event(pushstate)
  window.dispatchEvent(navigationEvent)
}

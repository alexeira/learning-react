import { navigate } from '../utils/navigate'

export function Link ({ target, to, ...props }) {
  function handleClick (event) {
    const isMainEvent = event.button === 0
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return (
    <a onClick={handleClick} target={target} href={to} {...props} />
  )
}

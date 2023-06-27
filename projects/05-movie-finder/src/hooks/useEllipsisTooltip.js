import { useState } from 'react'

export default function useEllipsisTooltip () {
  const [tooltip, setTooltip] = useState(false)

  function checkEllipsis (event) {
    const element = event.target
    if (element && element.scrollWidth > element.clientWidth) {
      return setTooltip(true)
    }
    return setTooltip(false)
  }

  return { tooltip, checkEllipsis }
}

import { useEffect, useState, useRef } from 'react'

export default function useEllipsisTooltip () {
  const [tooltip, setTooltip] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    console.log(tooltip, ref)
    const element = ref.current
    if (element && element.scrollWidth > element.clientWidth) return setTooltip(true)
    return setTooltip(false)
  }, [tooltip])

  return { ref, tooltip, setTooltip }
}

import { useFilters } from '../hooks/useFilters'
import './Footer.css'
import { IS_DEVELOPMENT } from '../utils/config'

export function Footer () {
  const { filters } = useFilters()

  return (
    <footer className='footer'>
      {IS_DEVELOPMENT && JSON.stringify(filters, null, 1)}
    </footer>
  )
}

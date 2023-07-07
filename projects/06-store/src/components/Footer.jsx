import { useFilters } from '../hooks/useFilters'
import './Footer.css'
import { IS_DEVELOPMENT } from '../utils/config'
import { useCart } from '../hooks/useCart'

export function Footer () {
  const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='footer'>
      {IS_DEVELOPMENT && JSON.stringify(filters, null, 1)}
      {IS_DEVELOPMENT && JSON.stringify(cart, null, 2)}
    </footer>
  )
}

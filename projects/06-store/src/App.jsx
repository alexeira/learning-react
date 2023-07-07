import { useFilters } from './hooks/useFilters'

import { products as initialProducts } from './mocks/products.json'

import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

export default function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts({ initialProducts })

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

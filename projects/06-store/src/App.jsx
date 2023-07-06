import { useFilters } from './hooks/useFilters'

import { products as initialProducts } from './mocks/products.json'

import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export default function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts({ initialProducts })

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

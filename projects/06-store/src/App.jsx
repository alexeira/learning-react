import { Products } from './components/Products'
import { products } from './mocks/products.json'

export default function App () {
  return (
    <div>
      <h1>Ecommerce</h1>
      <Products products={products} />
    </div>
  )
}

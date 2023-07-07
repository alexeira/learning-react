import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  function checkProductInCart (product) {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  className={isProductInCart ? 'is-in-the-cart' : 'is-not-in-the-cart'}
                  onClick={() => isProductInCart ? removeFromCart({ product }) : addToCart({ product })}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const { state, addToCart, clearCart, removeFromCart } = useCartReducer()

  return (
    <CartContext.Provider value={{ cart: state, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

import { useState, createContext } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  function clearCart () {
    setCart([])
  }

  function removeFromCart ({ product }) {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  function addToCart ({ product }) {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

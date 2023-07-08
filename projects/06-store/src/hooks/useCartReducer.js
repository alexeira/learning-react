import { useReducer } from 'react'
import { initialState, reducer } from '../reducers/cart'

export function useCartReducer () {
  const [state, dispatch] = useReducer(reducer, initialState)

  function clearCart () {
    dispatch({ type: 'CLEAR_CART' })
  }

  function removeFromCart ({ product }) {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  }

  function addToCart ({ product }) {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  return { state, clearCart, removeFromCart, addToCart }
}

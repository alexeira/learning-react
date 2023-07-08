export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const actions = {
  ADD_TO_CART: (state, actionPayload) => {
    const { id } = actionPayload
    const productInCartIndex = state.findIndex(item => item.id === id)

    if (productInCartIndex >= 0) {
      const newState = structuredClone(state)
      newState[productInCartIndex].quantity += 1
      updateLocalStorage(newState)
      return newState
    }

    const newState = [
      ...state,
      {
        ...actionPayload,
        quantity: 1
      }
    ]

    updateLocalStorage(newState)
    return newState
  },
  REMOVE_FROM_CART: (state, actionPayload) => {
    const { id } = actionPayload
    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },
  CLEAR_CART: () => {
    updateLocalStorage([])
    return []
  }
}

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  if (actionType in actions) {
    return actions[actionType](state, actionPayload)
  }

  return state
}

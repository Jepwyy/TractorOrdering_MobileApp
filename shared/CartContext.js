import React, { createContext, useReducer } from 'react'

export const CartContext = createContext()

const initialState = {
  cartItems: [],
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      }
    case 'ADD_TO_CART':
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        const newCartItems = [...state.cartItems]
        newCartItems[itemIndex].quantity += action.payload.quantity
        return {
          ...state,
          cartItems: newCartItems,
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        }
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      }
    default:
      return state
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item })
  }

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item })
  }
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

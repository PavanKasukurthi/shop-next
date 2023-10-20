import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 50,
  tax: 0,
  orderTotal: 0,
}

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || defaultState
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    //  ADD ITEM
    addItem: (state, action) => {
      // console.log(action)
      const { product } = action.payload
      const item = state.cartItems.find((i) => i.cartID === product.cartID)

      if (item) {
        item.amount += product.amount
      } else {
        state.cartItems.push(product)
      }

      state.numItemsInCart += product.amount
      state.cartTotal += product.price * product.amount

      //PASS IN THE STATE SINCE WE ARE INVOKING FROM REDUCER
      cartSlice.caseReducers.calculateTotals(state)

      toast.success('Item is added to the cart')
    },

    //CLEAR CART
    clearCart: (state) => {
      console.log(JSON.stringify(defaultState))

      localStorage.setItem('cart', JSON.stringify(defaultState))

      return defaultState
    },

    //REMOVE ITEM
    removeItem: (state, action) => {
      const { cartID } = action.payload
      const product = state.cartItems.find((i) => i.cartID === cartID)

      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID)

      state.numItemsInCart -= product.amount
      state.cartTotal -= product.price * product.amount

      cartSlice.caseReducers.calculateTotals(state)

      toast.error('Item is removed from the cart')
    },

    //EDIT ITEM
    editItem: (state, action) => {
      const { cartID, amount } = action.payload

      const item = state.cartItems.find((i) => i.cartID === cartID)

      state.numItemsInCart += amount - item.amount

      state.cartTotal += item.price * (amount - item.amount)

      item.amount = amount

      cartSlice.caseReducers.calculateTotals(state)

      toast.success('Cart updated')
    },

    //CALCULATE TOTALS
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal
      state.orderTotal = state.cartTotal + state.shipping + state.tax
      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
})

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions

export default cartSlice.reducer

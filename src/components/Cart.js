// src/components/Cart.js

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem, clearCart } from '../features/cart/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)

  return (
    <div>
      <h1>Cart</h1>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => dispatch(removeItem(item))}>Remove</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => dispatch(addItem({ id: Date.now(), name: 'New Item' }))}
      >
        Add Item
      </button>
    </div>
  )
}

export default Cart

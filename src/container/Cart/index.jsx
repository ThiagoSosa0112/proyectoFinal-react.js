import React, { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'

const Cart = () => {
  const {cart, removeItem, clearCart} = useContext(Shop);

  console.log(cart);
  return (
    <div>
      
      <ul>
        {cart.map(product => {
          return <li key={product.id}>{product.title} <img src={product.image} width='80px' alt={product.title}/></li>
        })}
     </ul>
    <button onClick={removeItem}>Remove Item</button>
    <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  )
}

export default Cart
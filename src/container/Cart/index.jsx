import React, { useContext } from 'react'
import { Shop } from '../../context/ShopProvide'

const Cart = () => {
  const {cart, removeItem, clearCart} = useContext(Shop);

  console.log(cart);
  return (
    <div>

    <ul>
      {cart.map(product => {
        return <li key={product.id}>{product.title} <img src={product.image} width='80px' alt={product.title}/></li>
      })}
      <button onClick={clearCart}>Vaciar carrito</button>
    </ul>
      </div>
)
}

export default Cart
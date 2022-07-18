import React, { useContext } from 'react';
import { Shop } from '../../context/ShopProvide';
import '../Cart/Cart.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const {cart, removeItem, clearCart, price, totalPrice} = useContext(Shop);
  totalPrice()

  return ( 
    <Table className='table' striped>
      <thead>
      <tr className='title'>
        <th className='section-number' scope="col">#</th>
        <th className='section-title' scope="col">Title</th>
        <th className='section-image' scope="col">Image</th>
        <th className='section-remove'>Quantity</th>
        <th className='section-remove'>Price</th>
        <th className='section-remove'></th>
      </tr>
    </thead>
    <tbody>
        {cart.map(product => {
          return (
        <tr key={product.id} className='items-table'>
            <th className='item-table' scope="row">{product.id}</th>
            <td className='item-table'>{product.title}</td>
            <td className='item-table'><img src={product.image} className='image-table'/></td>
            <td className='item-table'>{product.quantity}</td>  
            <td>${product.price * product.quantity}</td>
            <td className='item-table'><Button className='section-remove' variant='danger' onClick={()=> removeItem(product.id)} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
          </svg></Button></td>
        </tr>
            )   
          })}
          <tr>
          <td><h3>Total:${price}</h3></td> 
          </tr>
        </tbody>
        <Button className='vaciar-carrito' variant='primary' onClick={clearCart}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></Button> 
        </Table>
      )
    }
  export default Cart
  
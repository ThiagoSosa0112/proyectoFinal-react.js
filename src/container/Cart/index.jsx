import React, { useContext } from 'react';
import { Shop } from '../../context/ShopProvide';
import '../Cart/Cart.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const {cart, removeItem, clearCart} = useContext(Shop);
  
  return (
     <Table className='table' striped>
    <thead>
      <tr className='title'>
        <th className='section-number' scope="col">#</th>
        <th className='section-title' scope="col">Title</th>
        <th className='section-image' scope="col">Image</th>
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
            <td><Button className='section-remove' variant='danger' onClick={()=> removeItem(product.id)} >Remove Item</Button></td>
        </tr>
            )   
       })}
        </tbody>
        <Button className='vaciar-carrito' variant='primary' onClick={clearCart}>Vaciar carrito</Button> 
      </Table>
    )
  }
  
  export default Cart
  
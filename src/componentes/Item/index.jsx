import React from 'react';
import './Item.css';
import '../../container/ItemListContainer';
import ItemCount from '../ItemCount';  
import { useNavigate } from 'react-router-dom';
const Item = ({titulo, img, price, stock, description, id}) => {
  
  const navigate = useNavigate()

  const handleDetail = () =>{
    navigate (`/Item/${id}`)
  }
    return (  
      <div className='product-card' onClick={handleDetail}>
      <div className='badge'>New Product</div>
      <div className='product-tumb'>
          <img src={img} alt="" />
      </div>
      <div className='product-details'>
          <span className='product-category'>{titulo}</span>
          <h4>{titulo}</h4>
          <p>{description}</p>
      </div>
      <div className='product-bottom-details'></div>
      <div className='product-price'>${price}</div>
    {/*   <ItemCount stock={stock} initial={1} /> */}
  </div>
    )
  }

export default Item
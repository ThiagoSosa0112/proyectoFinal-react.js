import React from 'react';
import { useState } from 'react';
import '../ItemCount/ItemCount.css';


 const ItemCount = ({onConfirm, maxQuantity}) => {
  const [value, setValue] = useState(1);

  const handleConfirm = () => {
      if (value <= maxQuantity) {
          onConfirm(value)
      }
      else {
          alert("Value > maxQuantity")
      }
  }
  return (
      <div className='count-container'>
        <div className='count-container__contador'>
          <button className='count-container__button' onClick={() => setValue(value => value-1)} disabled={value === 1 ? true : null}>-</button>
          <span className='count'>{value}</span>
          <button className='count-container__button' onClick={() => setValue(value => value+1)}>+</button>
        </div>
          <button className='button-carrito' onClick={handleConfirm}>Confirm</button>
      </div>

    )
}

export default ItemCount





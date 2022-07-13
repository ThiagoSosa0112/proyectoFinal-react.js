import React from 'react'
import Item from '../Item'
import './ItemList.css'

const ItemList = ({products}) => {


  
  return (
    <div className="product-list-container">
    {
      products.length ? (  
        <>
          {
           
            products.map((product) => {
             
              return (
                <div  key={product.id}>
                  <Item
                    img={product.image}
                    titulo={product.title}
                    price={product.price}
                    stock={product.stock}
                    id={product.id}
                  />
                </div>
              );
            })
          }
        </>
      ) : (
        <p>Cargando productos...</p>
      )  
    }
  </div>
);
};


export default ItemList
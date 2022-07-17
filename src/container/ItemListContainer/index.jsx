import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './ItemListContainer.css'
import ItemCount from '../../componentes/ItemCount';
import ItemList from '../../componentes/ItemList';
import { productList } from '../../data/data.js';

const  ItemListContainer=({greeting})=>{

    const [productos, setProductos] = useState(null);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productList);
        }, 4000);
      });
    const getProductos= async() => {
            try {
              const response = await fetch('https://fakestoreapi.com/products');
              const data = await response.json()
              setProductos(data);
              } catch (error) {
                console.log(error);
                alert('No podemos mostrar los productos en este momento');
              }
            };
         
   
    useEffect(() => {
      setTimeout(()=>{
        getProductos();
      }, 4000)
      }, []);
      
    return(
    <div>
    {productos? <ItemList products={productos}/> : <div className='position-spinner'> <h3>Loading...</h3> <div className='spinner'></div></div> }
    </div>
    )
}    

export default ItemListContainer;
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
        }, 2000);
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
        getProductos();
      }, []);
      
    return(
    <div>
    {productos? <ItemList products={productos}/> : <h1>Cargando productos...</h1> }
    </div>
    )
}    

export default ItemListContainer;
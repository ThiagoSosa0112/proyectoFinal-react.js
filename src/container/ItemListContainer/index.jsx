import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './ItemListContainer.css'
import ItemList from '../../componentes/ItemList';
import { collection, query, getDocs } from "firebase/firestore";
import {db} from '../../firebase/config'
const  ItemListContainer=()=>{

  const [productos, setProductos] = useState(null);
  const [productosFiltrados, setProductosFiltrados] = useState([])
  useEffect(() => {
    const getProductos = async () => {
      try {
        const q = query(collection(db, "products"))
      const querySnapshot = await getDocs(q);
      const productos = []
      querySnapshot.forEach((doc) => {
       // doc.data() is never undefined for query doc snapshots
       console.log(doc.id, " => ", doc.data());
       productos.push({id: doc.id, ...doc.data()})
      }); 
        setProductos(productos);
        setProductosFiltrados(productos);
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    }
        getProductos();
      }, []);
      
    return(
    <div>
    {productos? <ItemList products={productos}/> : <div className='position-spinner'> <h3>Loading...</h3> <div className='spinner'></div></div> }
    </div>
    )
}    

export default ItemListContainer;
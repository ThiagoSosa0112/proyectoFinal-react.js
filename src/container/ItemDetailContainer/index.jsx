import React, { useEffect, useState } from 'react'
import ItemDetail from '../../componentes/ItemDetail';
import {useParams} from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import {db} from '../../firebase/config'

const ItemDetailContainer = ({productos}) => {
     

    const [productDetail, setProductDetail] = useState({})

    const params = useParams()

    console.log(params);
    
    useEffect(() => {
        const getProductos = async () => {
          try {
            const docRef = doc(db, "products", params.productId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              console.log(docSnap.id);
              console.log("Document data:", docSnap.data());
              const detailProd = {id: docSnap.id, ...docSnap.data()}
              setProductDetail(detailProd)
            } else {
               // doc.data() will be undefined in this case
               console.log("No such document!");
            }     
           /*  const response = await fetch('/data/data.json');
            const data = await response.json();
            const productSeleccionado = data.find(item => item.id === parseInt(params.productId))
            setProductDetail(productSeleccionado); */

          } catch (error) {
            console.log("Hubo un error:");
            console.log(error);
          }
        }
            getProductos();
          }, [params]);
    return (
        <div>
        {productDetail.length !== 0? <ItemDetail product={productDetail}/> : <h1>Cargando producto...</h1>}
        </div>
    )
}

export default ItemDetailContainer




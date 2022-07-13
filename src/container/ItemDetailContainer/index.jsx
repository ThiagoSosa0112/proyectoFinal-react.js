import React, { useEffect, useState } from 'react'
import ItemDetail from '../../componentes/ItemDetail';
import {useParams} from 'react-router-dom';
 

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    const params = useParams()

    console.log(params);

    useEffect(()=> {
        const getProductos = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
                const data = await response.json();
                setProductDetail(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProductos();

    }, [params])

    return (
        <div>
        {productDetail.length !== 0? <ItemDetail product={productDetail}/> : <h1>Cargando producto...</h1>}
        </div>
    )
}

export default ItemDetailContainer




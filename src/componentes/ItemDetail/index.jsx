import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount';
import './ItemDetail.css';
import { Shop } from '../../context/ShopProvider' 
const ItemDetail = ({product}) => {
    console.log(product);
    product.stock  = 10;
    const navigate = useNavigate();
    const {addItem} = useContext(Shop)

    const [qtyAdded, setQtyAdded] = useState(0);

    const handleConfirm = (qty) => {
        setQtyAdded(qty)
    }

    console.log(qtyAdded);

    const handleTerminate = () =>{
        addItem(product, qtyAdded)
        navigate('/cart')
    }

    return (
        <div className='product-card'>
            <div className='badge'>New Product</div>
            <div className='product-tumb'>
                <img src={product.image} alt="" />
            </div>
            <div className='product-details'>
                <span className='product-category'>{product.id}</span>
                <h4>{product.title}</h4>
                <p>{product.description}</p>
            </div>
            <div className='product-bottom-details'></div>
            <div className='product-price'>${product.price}</div>
            {!qtyAdded?
            <ItemCount onConfirm = {handleConfirm} maxQuantity= {product.stock}/>
            :
            <div className='count-container'><button className='button-finalizar' onClick={handleTerminate}>Terminar compra</button> </div>
            }

        </div>


        )
    }

export default ItemDetail
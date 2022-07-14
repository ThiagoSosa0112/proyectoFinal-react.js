import React, { createContext, useState } from 'react';

 export const Shop = createContext()

const ShopProvider = ({children}) => {

    const [stateA, setStateA] = useState('Valor A');

    const [cart, setCart] = useState([]);

    const addItem = (product, cantidad) => {
        console.log(product, cantidad);
        setCart ([...cart, {product, quantity : cantidad}])
        const productoRepetido = isInCart(product);
        if (productoRepetido) {
            productoRepetido.quantity += cantidad
            setCart([...cart])
        } else {
            setCart([...cart, {...product, quantity: cantidad}])
        }
    }

    const removeItem = (id) =>{
        const productosFiltrados = cart.filter(producto => producto.id !== id)
    }

    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (product) =>{
        return cart.find(element => element.id === product.id)
    }
    return(
    <ShopProvider value= {{stateA, setStateA, addItem, cart, removeItem, clearCart}}>
        {children}
    </ShopProvider>
    )
}


export default ShopProvider
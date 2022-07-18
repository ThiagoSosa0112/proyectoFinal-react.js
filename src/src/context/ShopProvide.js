
import React, { createContext, useState } from 'react'

export const Shop = createContext();

const ShopProvider = ({ children }) => {

 
    const [cart, setCart] = useState([]);

    const addItem = (product, cantidad) => {
        console.log(product, cantidad);
        const productoRepetido = isInCart(product);
        if (productoRepetido) {
            productoRepetido.quantity += cantidad
            setCart([...cart])
        } else {
             
            setCart([...cart, {...product, quantity: cantidad}])
        }

    }
    
    const isInCart = (product) => {
        return cart.find(elemento => elemento.id === product.id)
    }

    const removeItem = (id) => {
        setCart(cart.filter((product) => product.id !== id))
    }
 
    const clearCart = () =>{
        setCart([])
    }

    const [price, setPrice] = useState()

    const totalPrice = (product) =>{
        setPrice(cart.reduce((acc, product)=> acc + product.quantity  * product.price, 0))
    }

 
    return (
        <Shop.Provider value={{addItem, removeItem, cart, clearCart, price, totalPrice}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider
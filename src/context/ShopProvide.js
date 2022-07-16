import React, { createContext, useState } from 'react'

export const Shop = createContext();

const ShopProvider = ({ children }) => {

    const [estadoA, setEstadoA] = useState("Valor por defecto")

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

    const removeItem = (id) => {
        setCart(cart.filter((product) => product.id !== id))
    }
 
    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (product) => {
        return cart.find(elemento => elemento.id === product.id)
    }

    return (
        <Shop.Provider value={{estadoA, setEstadoA, addItem, removeItem, cart, clearCart}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider
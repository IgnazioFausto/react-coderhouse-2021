import { createContext } from 'react'
import { useState, useEffect } from 'react'

export const CartContext = createContext()

//Contexto del cart con todas sus funciones

const initCart = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(initCart)

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeItem = (itemId) => {
        const newCart = cart.filter((prod) => prod.id !== itemId)
        setCart(newCart)
    }

    const calcularCantidad = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }
    const calcularTotal = () => {
        return cart.reduce( (acc, prod) => acc + prod.cantidad * prod.precio, 0)
    }
    const vaciarCarrito = () => {
        setCart([])
    }
    const isInCart = (itemId) => {
        return cart.some( (prod) => prod.id === itemId)
    }
    //guardamos el cart en localStorage cada vez que cambia
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            removeItem,
            vaciarCarrito,
            calcularCantidad,
            addToCart,
            isInCart,
            calcularTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

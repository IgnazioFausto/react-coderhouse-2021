import React from 'react'
import { useContext } from 'react';
import { BsFillBasketFill } from "react-icons/bs";
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

    const { calcularCantidad, cart } = useContext(CartContext)

    return (
        <div>
        {  
            cart.length === 0
            ?
            <>
                <BsFillBasketFill className="widget" />
            </>
            :
            <>
                <BsFillBasketFill className="widget" />
                <span className="counter">{calcularCantidad()}Kg</span>
            </>
        }
        </div>
    )
}

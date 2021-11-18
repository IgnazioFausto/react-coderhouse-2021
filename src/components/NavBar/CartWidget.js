import React from 'react'
import { useContext } from 'react';
import { BsFillBasketFill } from "react-icons/bs";
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

    const { calcularCantidad, cart } = useContext(CartContext)

    return (
        <div>
        {   //condicionamos si el cart esta vacío
            cart.length === 0
            ?
            <>
            {/* icono del cart + se oculta el span que muestra la cantidad de kilos totales cuando es 0 */}
                <BsFillBasketFill className="widget" />
                <span style={{visibility: calcularCantidad() === 0 ? "hidden" : "visible"}}>{calcularCantidad()}Kg</span>
            </>
            :
            <>
            {/* icono del cart + cantidad de kilos totales de todos los productos en el cart */}
                <BsFillBasketFill className="widget" />
                <span className="counter">{calcularCantidad()}Kg</span>
            </>
        }
        </div>
    )
}

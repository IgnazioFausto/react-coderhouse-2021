import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartListEmpty } from "./CartListEmpty";
import { CartList } from './CartList'
 
export const CartContainer = () => {

    const { cart,
    } = useContext(CartContext)



    return (
        <div className="container">

            {  
                cart.length === 0
                ?   //si el cart está vacío.
                <>
                    <CartListEmpty /> 
                </>
                :   //si el cart tiene productos.
                <>
                    <CartList />
                </>
            }

        </div>
    )
}
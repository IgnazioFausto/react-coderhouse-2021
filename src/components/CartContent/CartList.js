import React from "react";
import { Card } from "react-bootstrap";
import { useContext } from "react";
import { CardTitle } from "../ItemListContainer/StyledComponents/Card.Title";
import { CartContext } from "../../context/CartContext";
import { HiLogin } from 'react-icons/hi'

export const CartList = ({ id, name, precio, img, description, category, quantity }) => {


    

    const { cart,
        removeItem,
        vaciarCarrito,
        calcularTotal,
    } = useContext(CartContext)

    return (
        <div className="container m-3 text-center" style={{padding:'0 35%'}}>
            <Card>
                <div className="card-body">
                    <h2>Resumen de tu compra</h2>
                    
                    {
                        cart.map((prod) => (
                            <Card>
                                <hr/>

                                <CardTitle><th>{prod.name}</th></CardTitle>

                                <th>{prod.cantidad} Kg.</th>
                                <th>Precio: ${prod.precio * prod.cantidad}</th>
                                <th><button className="btn btn-outline-danger" onClick={() => removeItem(prod.id)}><HiLogin /> Quitar de la lista</button></th>

                            </Card>
                        ))
                    }
                    <hr />
                    <CardTitle>Total a pagar: ${calcularTotal()}</CardTitle>
                    <button className="btn btn-outline-danger mt-5" onClick={vaciarCarrito}>Vaciar pedido</button>
                    <button className="btn btn-outline-success mt-5 ms-3">Finalizar compra</button>
                </div>
            </Card>
        </div>
    )

}
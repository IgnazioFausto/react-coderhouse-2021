import React from "react";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import { CardTitle } from "../ItemListContainer/StyledComponents/Card.Title";
import { CartContext } from "../../context/CartContext";
import { HiOutlineBackspace, HiReply } from 'react-icons/hi'
import { Link } from "react-router-dom";
import { CardText } from "../ItemListContainer/StyledComponents/CardText";
import { BrandLogo } from "../NavBar/BrandLogo";

export const CartList = () => {

    const { cart,
        removeItem,
        vaciarCarrito,
        calcularTotal,
        calcularCantidad
    } = useContext(CartContext)

    return (
        //mapeamos en una card los productos del cart, tomados desde el CartContext
        <div className="container text-center">
            <Card style={{ maxWidth: '300px', margin: '1rem auto' }}>
                <div className="card-body">
                    <CardText style={{ width: '100%', fontSize: '2rem', margin: '0 auto', padding: '0' }}>Resumen de tu compra</CardText>

                    {   /* generamos las cards con key usando position */
                        cart.map((prod, pos) => (
                            <Card key={pos}>
                                <hr />
                                <img alt="imagen de producto" style={{ width: '6rem', margin: '0 auto' }} src={prod.img} />
                                <CardTitle>{prod.name}</CardTitle>
                                <CardText>{prod.cantidad} Kg.</CardText>
                                <CardText>Precio: ${prod.precio * prod.cantidad}</CardText>
                                <button className="btn btn-outline-danger" style={{ margin: '0 auto', maxWidth: '12rem' }} onClick={() => removeItem(prod.id)}>Quitar de la lista <HiOutlineBackspace /></button>
                                <Link className="btn btn-outline-success mt-2" style={{ margin: '0 auto', maxWidth: '12rem' }} to={`/detail/${prod.id}`} onClick={() => removeItem(prod.id)}><HiReply /> Elegir otra cantidad </Link>
                            </Card>
                        ))
                    }
                    <hr />
                    <CardTitle>Total a pagar: ${calcularTotal()}</CardTitle>
                    <CardText>Total de kilos: {calcularCantidad()}</CardText>
                    <hr /> 
                    {/* botones vaciar cart, finalizar pedido (lleva al Checkout) y agregar más productos (lleva al ItemListContainer) */}
                    <button className="btn btn-outline-danger m-2" onClick={vaciarCarrito}>Vaciar pedido</button>
                    <Link className="btn btn-outline-success m-2" to="/checkout">Finalizar pedido</Link>
                    <Link className="btn btn-success m-2" to="/home">Seguir agregando productos</Link>
                    <hr />
                    <BrandLogo />
                    <CardText>Mi Huertapp 2021</CardText>
                </div>
            </Card>
        </div>
    )

}
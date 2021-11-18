import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router'
import { Card } from 'react-bootstrap'
import { CardItemDetail } from '../ItemListContainer/StyledComponents/CardItemDetail'
import { CardTitle } from '../ItemListContainer/StyledComponents/Card.Title'
import { CardText } from '../ItemListContainer/StyledComponents/CardText'
import { ItemCount } from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Img } from 'react-image'
import { Spinner } from 'react-bootstrap'

export const ItemDetail = ({ id, name, precio, img, description, category, quantity }) => {

    const { push } = useHistory()

    const [cantidad, setCantidad] = useState(0)

    const { addToCart, isInCart, removeItem } = useContext(CartContext)

    // para controlar el agregar los items
    const handleAdd = () => {
        
        const newItem = {
            id,
            name,
            precio,
            category,
            cantidad,
            img
        }
        //condicionamos para que no se agreguen items con cantidad 0
        if (cantidad > 0) {
            addToCart(newItem)
        }

    }
    return (

        <CardItemDetail style={{maxWidth:'50%', height:'100%'}} >
            <Card.Body>
                <Img style={{ width: '25%' }} src={img} loader={<Spinner animation="border" variant="success" />} />
                <CardTitle>{name}</CardTitle>
                <CardText>Precio: ${precio}/Kg.</CardText>
                <CardText>{description}</CardText>
                <hr />

                { //condicionamos, si está en el carrito
                    isInCart(id)
                        ?
                        <>
                            <Link to="/cart" className="btn btn-success mt-3">Termina tu compra</Link>
                            <span style={{ display: 'block', margin: '1rem auto' }}>o si quieres...</span> <button onClick={() => removeItem(id)} className="btn btn-success mx-3">Elige otra cantidad</button>
                        </>
                        :
                        <>  { //condicionamos de nuevo, para revisar si tenemos stock en bd 
                            quantity === 0
                            ?
                            <CardTitle style={{fontSize: '1.5rem', color: 'green'}}>De momento sin stock.</CardTitle>
                            :
                            <>
                                <ItemCount quantity={quantity} cantidad={cantidad} setCantidad={setCantidad} />
                                <button className={`btn ${cantidad === 0 ? "mt-3 invisible" : "mt-3 btn-success"}`} onClick={handleAdd}>Agregar a la cesta</button>
                            </>}
                        </>
                }
                <hr />
                <button
                    className="btn btn-outline-success"
                    onClick={() => push(`/productos/${category}`)}
                >
                    Ver más {category}s
                </button>
                <button className="btn btn-outline-success m-2" onClick={() => push("/home")}>
                    Volver a Home
                </button>


            </Card.Body>
        </CardItemDetail>
    )
}

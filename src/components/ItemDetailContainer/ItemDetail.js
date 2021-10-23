import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router'
import { Card } from 'react-bootstrap'
import { CardItemDetail } from '../ItemListContainer/StyledComponents/CardItemDetail'
import { CardTitle } from '../ItemListContainer/StyledComponents/Card.Title'
import { CardItemImg } from '../ItemListContainer/StyledComponents/CardItemImg'
import { Boton } from '../../components/ItemListContainer/StyledComponents/Boton'
import { CardText } from '../ItemListContainer/StyledComponents/CardText'
import { ItemCount } from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const ItemDetail = ({ id, name, precio, img, description, category, quantity }) => {

    const { goBack, push } = useHistory()

    const [cantidad, setCantidad] = useState(0)

    const { addToCart, isInCart, removeItem } = useContext(CartContext)

    const handleAdd = () => {
        const newItem = {
            id,
            name,
            precio,
            category,
            cantidad
        }
        if (cantidad > 0) {
            addToCart(newItem)
        }

    }
    return (

        <CardItemDetail >
            <Card.Body>
                <CardItemImg src={img} />
                <CardTitle>{name}</CardTitle>
                <CardText>Precio: ${precio}</CardText>
                <CardText>{description}</CardText>
                <hr/>
                 
                {
                isInCart(id)
                ? 
                <>
                  <Link to="/cart" className="btn btn-success mx-3">Termina tu compra</Link>
                  <span>o si quieres...</span> <button onClick={() => removeItem(id)} className="btn btn-success mx-3">Elige otra cantidad</button>
                </>
                :
                <>
                    <ItemCount quantity={quantity} cantidad={cantidad} setCantidad={setCantidad} />
                    <Boton onClick={handleAdd}>Agregar a la cesta</Boton>
                </>
                }
                <hr />
                <button
                    className="btn btn-outline-success"
                    onClick={() => goBack()}
                >
                    Volver a {category}s
                </button>
                <button className="btn btn-outline-success ms-2" onClick={() => push("/home")}>
                    Volver a Home
                </button>


            </Card.Body>
        </CardItemDetail>
    )
}

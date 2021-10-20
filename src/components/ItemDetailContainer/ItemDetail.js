import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Card } from 'react-bootstrap'
import { CardItemDetail } from '../ItemListContainer/StyledComponents/CardItemDetail'
import { CardTitle } from '../ItemListContainer/StyledComponents/Card.Title'
import { CardItemImg } from '../ItemListContainer/StyledComponents/CardItemImg'
import { Boton } from '../../components/ItemListContainer/StyledComponents/Boton'
import { CardText } from '../ItemListContainer/StyledComponents/CardText'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({ id, name, precio, img, description, category, quantity }) => {

    const { goBack, push } = useHistory()

    const [cantidad, setCantidad] = useState(0)

    const addToCart = () => {
        const newItem = {
            id,
            name,
            precio,
            category,
            cantidad
        }
        console.log("agregado:", newItem)
    }
    return (

        <CardItemDetail>
            <Card.Body>
                <CardItemImg src={img} />
                <CardTitle>{name}</CardTitle>
                <CardText>Precio: ${precio}</CardText>
                <CardText>{description}</CardText>
                <ItemCount quantity={quantity} cantidad={cantidad} setCantidad={setCantidad}/>
                <Boton onClick={addToCart}>Agregar a la cesta</Boton>
                <hr/>
                <button
                    className="btn btn-outline-primary"
                    onClick={() => goBack()}
                >
                    Volver
                </button>
                <button className="btn btn-outline-primary ms-2" onClick={() => push("/home")}>
                    Volver a Home
                </button>


            </Card.Body>
        </CardItemDetail>
    )
}

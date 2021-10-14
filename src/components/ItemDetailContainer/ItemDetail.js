import React from 'react'
import { useHistory } from 'react-router'
import { Card } from 'react-bootstrap'
import { CardItemDetail } from '../ItemListContainer/StyledComponents/CardItemDetail'
import { CardTitle } from '../ItemListContainer/StyledComponents/Card.Title'
import { CardItemImg } from '../ItemListContainer/StyledComponents/CardItemImg'
import { Boton } from '../../components/ItemListContainer/StyledComponents/Boton'
import { CardText } from '../ItemListContainer/StyledComponents/CardText'

export const ItemDetail = ({ id, name, precio, img, description, category }) => {

    const { goBack, push } = useHistory()
    return (

        <CardItemDetail>
            <Card.Body>
                <CardItemImg src={img} />
                <CardTitle>{name}</CardTitle>
                <CardText>Precio: ${precio}</CardText>
                <CardText>{description}</CardText>
                <Boton>Agregar a la cesta</Boton>
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

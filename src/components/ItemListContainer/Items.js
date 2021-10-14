import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TarjetaItem } from './StyledComponents/Card'
import { CardTitle } from './StyledComponents/Card.Title'
import { Boton } from './StyledComponents/Boton'

export const Item = ({ id, name, precio, img, category }) => {

    return (

        <TarjetaItem>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <CardTitle>{name}</CardTitle>
                <Card.Text>Precio: ${precio}</Card.Text>

                <Link to={`/detail/${id}`}>
                    <Boton>Ver producto</Boton>
                </Link>
            </Card.Body>
        </TarjetaItem>
    )
}

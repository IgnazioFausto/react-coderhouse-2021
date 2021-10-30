import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TarjetaItem } from './StyledComponents/Card'
import { CardTitle } from './StyledComponents/Card.Title'
import { Boton } from './StyledComponents/Boton'

export const Item = ({ id, name, precio, img, category }) => {

    return (
        <TarjetaItem className="p-3">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <CardTitle>{name}</CardTitle>
                <Card.Text>Precio: ${precio}</Card.Text>
            </Card.Body>
                <Link to={`/detail/${id}`}>
                    <Boton>Ver producto</Boton>
                </Link>
        </TarjetaItem>
    )
}

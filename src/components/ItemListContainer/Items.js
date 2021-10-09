import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './Items.scss'

export const Item = ( {id, name, precio, img} ) => {


    return (

        <Card className="tarjeta">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text></Card.Text>
                <Card.Text>Precio: ${precio}</Card.Text>

                <Button variant="primary">Agregar a la cesta</Button>
            </Card.Body>
        </Card>
    )
}
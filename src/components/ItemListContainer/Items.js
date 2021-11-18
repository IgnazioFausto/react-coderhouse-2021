import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TarjetaItem } from './StyledComponents/Card'
import { CardTitle } from './StyledComponents/Card.Title'
import { Boton } from './StyledComponents/Boton'
import { Spinner } from 'react-bootstrap'
import { Img } from 'react-image'
import { CardText } from './StyledComponents/CardText'

export const Item = ({ id, name, precio, img }) => {

    
    
    return (
        < TarjetaItem className="p-3" >
            <Card.Body>
                <Img style={{width: '100%'}} src={img} loader={<Spinner animation="border" variant="success" /> }/>
                <CardTitle>{name}</CardTitle>
                <CardText>Precio: ${precio}</CardText>
            </Card.Body>
            {/* llevamos al detalle (ItemDetail) mediante el id pasado por prop que viene desde Firestore */}
            <Link to={`/detail/${id}`}>
                <Boton>Ver producto</Boton>
            </Link>
        </TarjetaItem >
    )

}



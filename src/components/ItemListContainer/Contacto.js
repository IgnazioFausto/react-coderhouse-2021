import React from "react";
import { CardTitle } from "./StyledComponents/Card.Title";
import { Card } from "react-bootstrap";
import { CardText } from "./StyledComponents/CardText";
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BrandLogo } from "../NavBar/BrandLogo";

export const Contacto = () => {
    return (
        <Card style={{ width: '80%' }} className="container m-auto mt-5 text-center">
            <Card.Body>
                <CardTitle className="mx-auto my-2">CONTACTO</CardTitle>
                <hr />
                <CardText style={{ fontSize: '1.4rem', padding: ' 0 8% ' }}>Ante cualquier sugerencia, consulta o reclamo, puedes contactarnos mediante nuestros canales de atención o redes sociales.</CardText>
                <br />
                <CardText><FaFacebookF style={{ fontSize: '2.5rem', margin: '1rem auto' }} /><br /> <Link to="#">www.facebook.com/mihuertapp</Link> </CardText>
                <br />
                <CardText><FaInstagram style={{ fontSize: '2.5rem', margin: '1rem auto' }} /><br /> <Link to="#">www.instagram.com/mihuertapp_ok</Link></CardText>
                <br />
                <CardText><FaGoogle style={{ fontSize: '2.5rem', margin: '1rem auto' }} /><br /> <Link to="#">mihuertapp-consultas@gmail.com.ar</Link></CardText>
                <br />
                <hr /><br />
                <BrandLogo />
                <CardText>Mi Huertapp 2021</CardText>
            </Card.Body>
        </Card>
    )
}
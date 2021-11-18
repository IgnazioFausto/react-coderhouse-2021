import React from 'react'
import './NavBar.scss'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { BrandLogo } from './BrandLogo'
import { NavLink } from 'react-router-dom'
import { CartWidget } from './CartWidget'


export const NavBar = () => {
    return (

        //desarrollamos el navbar con NavLink's del 'react-router-dom'
        //y Navbar, Nav y Container de 'react-bootstrap'
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <BrandLogo />
                <NavLink className="titulo" exact to="/home">Mi Huert<i>app</i></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="logo"/> 
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav">
                        {/* navlinks tienen un estado activado para mejorar la UX */}
                        <NavLink className="linkNav" activeClassName={'linkNavActive'} exact to="/home">Home</NavLink>
                        <NavLink className="linkNav" activeClassName={'linkNavActive'} exact to="/productos/fruta">Frutas</NavLink>
                        <NavLink className="linkNav" activeClassName={'linkNavActive'} exact to="/productos/verdura">Verduras</NavLink>
                        <NavLink className="linkNav" activeClassName={'linkNavActive'} exact to="/contacto">Contacto</NavLink>
                        <NavLink className="linkNav" activeClassName={'linkNavActive'} exact to="/cart"><CartWidget /></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )

}
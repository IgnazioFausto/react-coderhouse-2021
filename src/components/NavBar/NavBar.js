import React from 'react'
import './NavBar.scss'
import { Navbar, Nav } from 'react-bootstrap'
import { BrandLogo } from './BrandLogo'
import { NavLink } from 'react-router-dom'
import { BsFillBasketFill } from "react-icons/bs";

export const NavBar = () => {
    return (
        <Navbar className="navbar navbar-dark" sticky="top">
            <BrandLogo  />
            <NavLink className="titulo" exact to="/home">Mi Huert<i>app</i></NavLink>
            <Nav className="nav" >
                <NavLink className="linkNav" activeClassName={'linkNavActive'} exact to="/home">Home</NavLink>
                <NavLink className="linkNav" activeClassName={'linkNavActive'} exact to="/productos/fruta">Frutas</NavLink>
                <NavLink className="linkNav" activeClassName={'linkNavActive'} exact to="/productos/verdura">Verduras</NavLink>
                <NavLink className="linkNav" activeClassName={'linkNavActive'} exact to="/contacto">Contacto</NavLink>
                <NavLink className="linkNav" activeClassName={'linkNavActive'} exact to="/cart"><BsFillBasketFill className="widget"/></NavLink>
                
            </Nav>

        </Navbar>
    )

}
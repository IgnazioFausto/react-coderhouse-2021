import React from 'react'
import './NavBar.scss'
import { Navbar, Nav } from 'react-bootstrap'
import { BsFillBasketFill } from "react-icons/bs";
import { GiThreeLeaves } from "react-icons/gi";

export const NavBar = () => {
    return (
        <Navbar className="navbar navbar-dark" sticky="top">
            <GiThreeLeaves className="logo" />
            <Navbar.Brand href="#" className="titulo">Mi Huertapp</Navbar.Brand>
            <Nav className="nav" >
                <Nav className="linkNav" href="#">Productos</Nav>
                <Nav className="linkNav" href="#">Quienes somos</Nav>
                <Nav className="linkNav" href="#">Contacto</Nav>
            </Nav>
            <BsFillBasketFill className="widget" />
        </Navbar>
    )

}
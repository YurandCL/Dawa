import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Nav, Navbar,} from 'react-bootstrap';

import imgLogo from '../../assets/img/logo-tecsup.png';

const Header = props => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={imgLogo} alt="Tecsup Logo"/>
                    Tecsup App
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
                        <Nav.Link href="/logout">Cerrar Sesión</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;
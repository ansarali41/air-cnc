import React from 'react';
import { Button, Nav, Navbar} from 'react-bootstrap';
import './Menu.css'
import logo from '../../images/logo.png'

const Menu = () => {
    return (
        <div className="navBar-container">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="/" className="navbarBrand"> <img src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#">Host your home</Nav.Link>
                        <Nav.Link eventKey={2} href="#">Host your experience</Nav.Link>
                        <Nav.Link eventKey={3} href="#">Help</Nav.Link>
                        <Nav.Link eventKey={4} href="/login">Login</Nav.Link>
                        <Button variant="primary">Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menu;
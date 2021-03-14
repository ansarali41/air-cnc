import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import './Menu.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="navBar-container">
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
                <Link to="/"><Navbar.Brand href="" className="navbarBrand"> <img src={logo} alt="" /></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav >
                        <Link to="/host-home" className="NavbarLink">Host your home</Link>
                        <Link to="/experience" className="NavbarLink">Host your experience</Link>
                        {/* <Nav.Link eventKey={3} href="#">Help</Nav.Link> */}
                        <Link to="/help" className="NavbarLink">Help</Link>
                        <Link to="/login" className="NavbarLink">Login</Link>
                        <Link to="/sign-up"><Button className="signUp-btn" variant="success">Sign Up</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menu;
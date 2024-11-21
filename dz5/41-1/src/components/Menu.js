import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Menu() {
    return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/" className="me-2">users list</NavLink>
                    <NavLink to="/users">register user</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}


export default Menu
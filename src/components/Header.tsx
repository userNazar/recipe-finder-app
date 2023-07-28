import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <div className="container">
                <Navbar.Brand>My Food Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className='nav-link' to="/">Home</NavLink>
                        <NavLink className='nav-link' to="/list">List recipes</NavLink>
                        <NavLink className='nav-link' to="own">Own recipes</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

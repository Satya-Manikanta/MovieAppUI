import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../assets/logo2.png";

function HeaderBody({ isAuthorized }) {
    return (
        <>
            <Navbar expand="lg" className="bg-dark-subtle">
                <Container>
                    <Navbar.Brand className="header-title">
                        <img
                            src={logo}
                            alt="Logo"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />
                        <h3 className="m-1">Movie Mania</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/" className="m-3">Home</Link>
                            <Link to="/about" className="m-3">About</Link>

                            {/* <Link to="/movies" className="m-3">Movies</Link>
                            <Link to="/wishlist" className="m-3">Wishlist</Link> */}

                            {!isAuthorized && <Link to="/login" className="m-2 btn btn-primary">Login</Link>}
                            {!isAuthorized && <Link to="/register" className="m-2 btn btn-primary">SignUp</Link>}

                            {isAuthorized && <Link to="/movies" className="m-3">Movies</Link>}
                            {isAuthorized && <Link to="/wishlist" className="m-3">Wishlist</Link>}

                            {isAuthorized && <Link to="/logout" className="m-2 btn btn-danger">Logout</Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default HeaderBody
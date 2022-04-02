import "./Header.css";
import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../img/logo.png";

const Header = () => {
    const {pathname} = useLocation();

    // console.log(pathname);
    return (
        <div className={pathname.includes("blogs") ? "d-none" : "d-block" }>
            <div className="header">
            <Navbar expand="lg">
                <Container>
                    <Link to="/home" className="logo-text"> 
                        <div className="d-flex align-items-center">
                            <img className="me-4" src={logo} alt="logo" />
                            <div className="d-flex align-items-center">
                                <p className="mb-0">Tech Geeks</p>
                            </div>
                        </div>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/home" className={
                            ({isActive}) => isActive ? "active" : "inactive"}>
                                Home
                        </NavLink>
                        <NavLink to="/videos" className={
                            ({isActive}) => isActive ? "active" : "inactive"}>
                                Videos
                        </NavLink>
                        <NavLink to="/login" className={
                            ({isActive}) => isActive ? "active" : "inactive"}>
                                Login
                        </NavLink>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </div>
    );
};

export default Header;
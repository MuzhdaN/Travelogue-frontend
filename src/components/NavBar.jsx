import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.png"
import styles from "../styles/NavBar.module.css"
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} bg="light" expand="lg">
    <Container>
        <NavLink to="/">
            <Navbar.Brand className="d-flex align-items-center">
                <img src={logo} alt="logo" height="50" className="me-2" />
                <span className="mt-1">Travelogue</span>
            </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink 
            exact 
            className={styles.NavLink} 
            activeClassName={styles.Active} 
            to='/'>
                Articles
          </NavLink>
          <NavLink
            className={styles.NavLink} 
            activeClassName={styles.Active}
            to="/saved"
          >
            Reading List
          </NavLink>
          <NavLink 
            className={styles.NavLink} 
            activeClassName={styles.Active}
            to="/write"
          >
            Write
          </NavLink>
          <NavLink 
            className={styles.NavLink} 
            activeClassName={styles.Active} 
            to="/signin">
                Sign in
          </NavLink>
          <NavLink
            className={styles.NavLink} 
            activeClassName={styles.Active} 
            to="/signup"
          >
                Sign Up
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar
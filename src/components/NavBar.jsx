import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.png"


const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <img src={logo} alt="logo" height="50" className="me-2" />
        <span className="mt-1">Travelogue</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Articles</Nav.Link>
          <Nav.Link href="#link">Reading List</Nav.Link>
          <Nav.Link href="#link">Write</Nav.Link>
          <Nav.Link>Sign in</Nav.Link>
          <Nav.Link>Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar
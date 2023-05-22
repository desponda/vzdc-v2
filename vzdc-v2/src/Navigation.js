import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbar">
      <Container>
        <Navbar.Brand href="#home">Organization Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#controllers">Controllers</Nav.Link>
            <Nav.Link href="#pilots">Pilots</Nav.Link>
            <Nav.Link href="#feedback">Feedback</Nav.Link>
            <Nav.Link href="#discord">Discord</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

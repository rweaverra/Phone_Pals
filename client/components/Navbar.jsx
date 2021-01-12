import React from 'react';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

function NavBar() {

  return(
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Phone Pals Repair</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#repairs">Repairs</Nav.Link>
      <Nav.Link href="#testimonials">Testimonials</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      <Nav.Link href="#articles">Articles</Nav.Link>
    </Nav>

  </Navbar>
  );
}

export default NavBar;
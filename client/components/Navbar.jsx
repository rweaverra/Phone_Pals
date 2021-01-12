import React from 'react';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

function NavBar() {

  return(
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Phone Pals Repair</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Repairs</Nav.Link>
      <Nav.Link href="#pricing">About Us</Nav.Link>
    </Nav>

  </Navbar>
  );
}

export default NavBar;
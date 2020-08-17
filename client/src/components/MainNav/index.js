import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import  './style.css';

class MainNav extends Component {
  render() {
    return(
      <Navbar bg="dark" variant="dark" expand='lg'>
        <Navbar.Brand href="#!">Cameron Davis</Navbar.Brand>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <Navbar.Collapse id="navbarMain">
          <Nav className="ml-auto">
            <Nav.Link href="/about" className="ml-auto">About</Nav.Link>
            <Nav.Link href="/projects" className="ml-auto">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNav;
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import './NavBar.css';
function NavBar() {
  return (
    <div className="navbar-component">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        {/* <Navbar.Brand href="#home">Your Brand</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className=" nav-items">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tour">Tour</Nav.Link>
            <Nav.Link href="#event">Event</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
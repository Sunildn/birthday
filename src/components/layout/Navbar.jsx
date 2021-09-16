import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

//import FullLogo from '../../assets/blissfairy-full-logo.png';
// import IconLogo from '../../assets/blissfairy-icon-blue.png';

const Navigationbar = ({ setLoggedIn }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Birthday Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">Our Mission</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <Button
                className="rounded-md bg-bliss-blue text-white px-5 ml-12 font-extrabold p-2 text-sm"
                onClick={() => {
                  setLoggedIn(true);
                }}
              >
                {" "}
                Login
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <>
      <div className="main-navbar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src="img/logo.png"
                alt="Rick and Morty logo."
                className="logo"
              />
            </Navbar.Brand>
          </Container>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="links">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/form">
                  Form
                </Nav.Link>
                <Nav.Link as={Link} to="/table">
                  Table
                </Nav.Link>
                <Nav.Link as={Link} to="/rickandmorty">
                  Characters
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
              </Nav>
              <Navbar.Brand>
              <img
                src="img/landingPage.gif"
                alt="Rick and Morty logo."
                className="logo"
              />  
              </Navbar.Brand>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default MyNavbar;
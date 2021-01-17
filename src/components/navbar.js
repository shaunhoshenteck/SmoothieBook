import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/" style={{ textDecoration: "None", color: "white" }}>
          SmoothieBook
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/createRecipe">
          <Nav.Link>Create a recipe</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default NavBar;

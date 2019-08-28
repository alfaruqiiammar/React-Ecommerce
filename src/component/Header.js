import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";
import { Redirect } from "react-router-dom";

function Header(props) {
  console.log(props.is_login);
  if (props.is_login === false) {
    return (
      <div>
        <br />
        <br />
        <header className="fixed-top">
          <Navbar
            collapseOnSelect
            expand="lg"
            className="navbarStyle"
            variant="dark"
          >
            <Navbar.Brand href="/home">B E R B A G I</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Nav.Link eventKey={2}>
                  <Link style={{ color: "white" }} to="/home">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey={2}>
                  <Link style={{ color: "white" }} to="/profile">
                    Profile
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey={2}>
                  <Link style={{ color: "white" }} to="/">
                    Intro
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </div>
    );
  } else {
    return (
      <div>
        <br />
        <br />
        <header className="fixed-top">
          <Navbar
            collapseOnSelect
            expand="lg"
            className="navbarStyle"
            variant="dark"
          >
            <Navbar.Brand href="/home">B E R B A G I</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Nav.Link eventKey={2}>
                  <Link style={{ color: "white" }} to="/home">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey={2}>
                  <Link style={{ color: "white" }} to="/profile">
                    Profile
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey={2}>
                  <Link style={{ color: "white" }} to="/">
                    Intro
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey={2}>
                  <Link
                    to="/"
                    style={{ color: "white" }}
                    eventKey={2}
                    // Redirect
                    // to={{ pathname: "/" }}
                    onClick={() => props.setLogin(false)}
                  >
                    SignOut
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default connect(
  "is_login",
  actions
)(Header);

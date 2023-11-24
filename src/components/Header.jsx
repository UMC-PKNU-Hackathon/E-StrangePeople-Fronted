import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
// import search from "../images/search.png";
// import styled from 'styled-component';
import GoogleLoginButton from "./login/GoogleLoginButton";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <div className="header-container">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              style={{
                width: "80px",
                height: "150%",
                marginTop:"-10px"
              }}
              src={logo}
              alt="로고"
            />
          </Navbar.Brand>
          <Nav className="ml-auto" style={{fontSize:"25px"}}>
          <Nav.Link as={Link} to="/search">
              more
            </Nav.Link>
            <Nav.Link as={Link} to="/GoogleLoginButton">
              login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
// src="/images/search.png"
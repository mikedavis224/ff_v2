// containers/landing/header.js
"use client";  // Ensure it's marked as a client-side component

import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "reactstrap";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const toggleNav = () => {
    setNavbar(!navbar);
  };

  return (
    <Fragment>
      <header>
        <Container fluid={true}>
          <Row>
            <Col>
              <div className="top-header">
                <div className="logo">
                  <a className="navbar-brand" href="/">
                    <img src="assets/images/landing/logo.png" alt="Gym Logo" />
                  </a>
                </div>
                <div className="main-menu m-x-auto" id="nav">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <button
                      className="navbar-toggler"
                      type="button"
                      onClick={toggleNav}
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${navbar ? "show" : ""}`} id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#contact">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </Fragment>
  );
};

export default Header;

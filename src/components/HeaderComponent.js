import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavLink, NavItem } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark navbar-expand-md fixed-top py-md-3">
          <div className="container-fluid">
            <a href="#" className="navbar-brand d-md-none">Samantha Tarrice</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav w-100 d-flex justify-content-evenly">
                <li className="nav-item active ms-auto d-md-none mt-2">
                  <a href="#" className="nav-link active" aria-current="page">Home</a>
                </li>
                <li className="nav-item text-end ms-auto">
                  <a href="#portfolio" className="nav-link">Portfolio</a>
                </li>
                <li className="nav-item mx-md-auto ms-auto">
                  <a href="#about" className="nav-link">About</a>
                </li>
                <li className="nav-item ms-auto ms-md-0 me-md-auto">
                  <a href="#contact" className="nav-link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <Navbar className="navbar navbar-dark navbar-expand-md fixed-top py-md-3">
          <NavbarBrand className="d-md-none"href="/">
            Samantha Tarrice
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> */}
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md">
                <h1>Hi! I'm Sam...</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, praesentium neque quas reprehenderit distinctio quia quam, repellat velit ut quo nihil id a beatae dolores voluptas ipsum recusandae ab expedita.</p>
              </div>
              <div className="col">
                <img src="/images/hero.png" alt="Woman sitting at desk working on a laptop." className="w-100" />
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
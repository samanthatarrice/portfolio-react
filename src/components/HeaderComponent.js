import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavLink, NavItem } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">
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
        </Navbar>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md">
                <h1>Hi! I'm Sam...</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, praesentium neque quas reprehenderit distinctio quia quam, repellat velit ut quo nihil id a beatae dolores voluptas ipsum recusandae ab expedita.</p>
              </div>
              <div className="col">
                <img src="/images/hero.png" alt="Woman sitting at desk working on a laptop." class="w-100" />
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
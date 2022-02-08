import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavLink, NavItem } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;

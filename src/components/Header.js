import React from "react";
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#">breakr</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavDropdown title="Organization" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">WFM Laurelhurst</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Create</NavDropdown.Item>
            </NavDropdown>
            <input type="date" />
            <Nav.Link href="#">logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
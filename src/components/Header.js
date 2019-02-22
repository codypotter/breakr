import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.selectedDate
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(event){
    this.setState({
      ...this.state,
      date: event.target.value
    });
    this.props.onDateChange(event.target.value);
  }

  render() {
    return (
      <Navbar expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#">breakr</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Organization" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">WFM Laurelhurst</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Create</NavDropdown.Item>
            </NavDropdown>
            <input type="date" value={this.state.date} onChange={this.handleDateChange} />
          </Nav>
          <Nav>
            <Nav.Link href="#">logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
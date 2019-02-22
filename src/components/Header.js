import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import moment from 'moment';

/** Class representing a Header subclassed from React.Component */
export default class Header extends React.Component {
  /**
   * 
   * @param {object}  props - React props
   * @param {string}  props.date - current date in YYYY-MM-DD format
   * @param {string}  props.organization - name of the active organization
   * @param {Array}   props.organizations - Array of available organization names 
   * 
   */
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date,
      organization: this.props.organization,
      organizations: this.props.organizations
    };

    /* class methods */
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleOrganizationChange = this.handleOrganizationChange.bind(this);
  }

  /**
   * Handle the next
   * @param {*} event 
   */
  handleDateChange(event) {
    this.setState({
      ...this.state,
      date: event.target.value
    });
    this.props.onDateChange(event.target.value);
  }

  handleLogout(event) {
    console.log('Logging out...');
  }

  handleOrganizationChange(eventKey) {
    this.setState({
      ...this.state,
      organization: eventKey
    });
    console.log(eventKey);
  }

  render() {
    return (
      <Navbar expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#">fifteen30</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title={this.state.organization} id="collapsible-nav-dropdown">
              {
                this.state.organizations.map((org) => (
                  <NavDropdown.Item 
                    onSelect={this.handleOrganizationChange} 
                    eventKey={org.key} 
                    key={org.key} 
                    href="#"
                    >
                    {org.title}
                  </NavDropdown.Item>
                ))
              }
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Create</NavDropdown.Item>
            </NavDropdown>
            <input type="date" value={this.state.date} onChange={this.handleDateChange} />
          </Nav>
          <Nav>
            <Nav.Link onClick={this.handleLogout} >logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Header.defaultProps = {
  organization: "Organization",
  organizations: [{
    key: "1",
    title: "Whole Foods Laurelhurst"
  }],
  date: moment().format("YYYY-MM-DD")
}
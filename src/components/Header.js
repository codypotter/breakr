import React from "react";
import {connect} from 'react-redux';
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {changeDate, changeOrganization} from "../actions/day";
import {clearCheckpoints} from "../actions/checkpoints";
import {clearEmployeeCategories} from "../actions/employee-categories";
import {clearEmployees} from "../actions/employees";
import {clearNoteCategories} from "../actions/note-categories";
import {clearNotes} from "../actions/notes";

const Header = (props) => (
  <Navbar expand="lg" bg="primary" variant="dark">
    <Navbar.Brand href="#">fifteen30</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title={props.organizations.byId[props.day.organization].name} id="collapsible-nav-dropdown">
          {
            props.organizations.allIds.map((org) => (
              <NavDropdown.Item
                onSelect={(eventKey) => {
                  props.dispatch(changeOrganization(eventKey));
                  props.dispatch(clearCheckpoints());
                  props.dispatch(clearEmployeeCategories());
                  props.dispatch(clearEmployees());
                  props.dispatch(clearNoteCategories());
                  props.dispatch(clearNotes());
                }}
                eventKey={org}
                key={org}
                href="#"
              >
                {props.organizations.byId[org].name}
              </NavDropdown.Item>
            ))
          }
          <NavDropdown.Divider />
          <NavDropdown.Item href="/create">Create</NavDropdown.Item>
        </NavDropdown>
        <input type="date" value={props.day.date} onChange={(e) => {
          props.dispatch(changeDate(e.target.value));
        }} />
      </Nav>
      <Nav>
        <Nav.Link onClick={() => {
          console.log('logging out...');
        }} >logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const mapStateToProps = (state) => {
  return {
    organizations: state.organizations,
    day: state.day
  };
};

export default connect(mapStateToProps)(Header);
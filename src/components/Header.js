import React from "react";
import {connect} from 'react-redux';

// components
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import {LogOut} from 'react-feather';
import {Settings} from 'react-feather';

// actions
import {changeDate, changeOrganization} from "../actions/day";
import {clearCheckpoints} from "../actions/checkpoints";
import {clearEmployeeCategories} from "../actions/employee-categories";
import {clearEmployees} from "../actions/employees";
import {clearNoteCategories} from "../actions/note-categories";
import {clearNotes} from "../actions/notes";

import blobShape from "../assets/blob-shape.svg";

const Header = (props) => (
  <div>
    <Image className="logo-image" src={blobShape}/>
    <Navbar className="align-middle" expand="lg" bg="transparent">
      <Navbar.Brand href="#"><h1 className="display-4 text-secondary" >fifteen30</h1></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
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
          <Form>
            <Form.Group>
              <Form.Control type="date" value={props.day.date} onChange={(e) => {
                props.dispatch(changeDate(e.target.value));
              }} />
            </Form.Group>
          </Form>
          <Nav.Link>
            <Settings/>
          </Nav.Link>
          <Nav.Link>
            <LogOut/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>

);

const mapStateToProps = (state) => {
  return {
    organizations: state.organizations,
    day: state.day
  };
};

export default connect(mapStateToProps)(Header);
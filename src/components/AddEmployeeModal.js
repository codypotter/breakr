import React from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class AddEmployeeModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Modal show={this.props.show} onClick={(e)=>{e.stopPropagation()}} onHide={this.props.handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start Time</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
            <Form.Group>
              <Form.Label>End Time</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e) => {e.preventDefault()}}>
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}
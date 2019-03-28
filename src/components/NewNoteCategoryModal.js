import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class NewNoteCategoryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Modal size="sm" show={this.props.showNoteModal} onHide={this.props.handleExit('cancel')}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Topic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="newNoteCategory">
              <Form.Label>Topic</Form.Label>
              <Form.Control type="text" placeholder="Your new topic..."/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>

          <Button variant="primary" key="save" block onClick={this.props.handleExit('save')}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    )
  };
}

export default NewNoteCategoryModal;
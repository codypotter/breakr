import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Note from "./Note";
import {connect} from "react-redux";
import Modal from "react-bootstrap/Modal";


class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNoteModal: false
    };
  }
  
  render() {
    return (
      <Form>
        {this.props.day.noteCategories.map((categoryId) => (
          <Form.Group key={categoryId}>
            <Form.Label className="mt-3">{this.props.noteCategories[categoryId].title}</Form.Label>
            {this.props.noteCategories[categoryId].noteIds.map((noteId) => (
              <Note key={noteId} id={noteId} />
            ))}
          </Form.Group>
        ))}
        <Button variant="light" size="sm" block onClick={() => {
          this.setState({...this.state, showNoteModal: true});
        }}>Add Note</Button>
        <Modal size="lg" centered show={this.state.showNoteModal} onHide={() => {this.setState({...this.state, showNoteModal: false})}}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {}}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    day: state.day,
    noteCategories: state.noteCategories
  };
};

export default connect(mapStateToProps)(NoteList);
import React from "react";
import {connect} from "react-redux";
import NewNoteCategoryModal from "./NewNoteCategoryModal";
import NoteCategory from './NoteCategory';
import ListGroup from "react-bootstrap/ListGroup";

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNoteModal: false,
      showNoteCategoryDetails: false
    };

  }

  //TODO: handle delete topic
  //present popover when clicking

  handleNoteModalExit = exitType => (e) => {
    if (exitType === 'save') {
      //TODO: handle save new note
    }
    this.setState({...this.state, showNoteModal: false});
  };
  
  render() {
    return (
      <div>
        <ListGroup>
          <ListGroup.Item className="text-center text-light bg-primary" action onClick={() => { this.setState({...this.state, showNoteModal: true});}}>
            Add New Topic
          </ListGroup.Item>
          {this.props.day.noteCategories.map((categoryId) => (
            <ListGroup.Item key={categoryId} >
              <NoteCategory id={categoryId} />
            </ListGroup.Item>
          ))}
        </ListGroup>

        <NewNoteCategoryModal showNoteModal={this.state.showNoteModal} handleExit={this.handleNoteModalExit} />
      </div>
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
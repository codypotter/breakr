import React from 'react';
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";
import Note from "./Note";
import Collapse from "react-bootstrap/Collapse";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class NoteCategory extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showNoteCategoryDetails: false
    };
  }

  render() {
    return(
      <div onClick={() => { this.setState({...this.state, showNoteCategoryDetails: !this.state.showNoteCategoryDetails});}}>
        <h5 className="d-inline">{this.props.noteCategories[this.props.id].title}</h5>
        {this.props.noteCategories[this.props.id].noteIds.map((noteId) => (<Note key={noteId} id={noteId} />))}
        <Collapse in={this.state.showNoteCategoryDetails} >
          <Container className="mt-2" fluid>
            <Row>
              <Col xs={8}><Button size="sm" block >Add Note</Button></Col>
              <Col><Button variant="outline-danger" size="sm" block >Delete Topic</Button></Col>
            </Row>
          </Container>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    noteCategories: state.noteCategories
  };
};

export default connect(mapStateToProps)(NoteCategory);
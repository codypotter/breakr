import React from "react";
import Form from "react-bootstrap/Form";
import {connect} from "react-redux";
import {editNote} from "../actions/notes";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <Form.Control as="textarea" rows="1" value={this.props.notes[this.props.id].text} onChange={(e) => {
          this.props.dispatch(editNote(this.props.id, {text: e.target.value}))
        }}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(Note);
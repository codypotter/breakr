import React from "react";
import Form from "react-bootstrap/Form";
import {connect} from "react-redux";
import {editNote} from "../actions/notes";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  render() {
    return (
      <InputGroup className="mt-1">
        <Form.Control key={this.props.id} as="textarea" rows="1" value={this.props.notes[this.props.id].text} onChange={(e) => {
          this.props.dispatch(editNote(this.props.id, {text: e.target.value}))
        }} onClick={(e) => {
          e.stopPropagation();
          this.setState({selected: true});
        }} onBlur={() => {
          this.setState({selected:false})
        }}/>

        {
          this.state.selected && <InputGroup.Append>
            <Button size="sm" variant="outline-danger" onClick={(e) => {
              e.stopPropagation();
            }}>x</Button>
          </InputGroup.Append>
        }


      </InputGroup>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(Note);
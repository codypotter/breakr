import React from "react";
import Table from 'react-bootstrap/Table';
import {connect} from "react-redux";

class BreakTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Table striped bordered size="sm">
        <thead>
        <tr>
          {this.props.checkpointIds.map((checkpointId) => (
            <td key={checkpointId}>{this.props.checkpoints.byId[checkpointId].name}</td>
          ))}
        </tr>
        </thead>
        <tbody>
        <tr>
          {this.props.checkpointIds.map((checkpointId) => (
            <td key={checkpointId}>{this.props.checkpoints.byId[checkpointId].time}</td>
          ))}
        </tr>
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    checkpoints: state.checkpoints
  };
};

export default connect(mapStateToProps)(BreakTable);
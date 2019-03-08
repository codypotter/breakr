import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {connect} from "react-redux";
import {DateTimeFormatter, LocalTime} from 'js-joda';
import BreakTable from './BreakTable';


class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: LocalTime.now().format(DateTimeFormatter.ofPattern('HH:mm')).toString(),
      showDetails: false
    };
  }

  render() {
    return (
      <ListGroup.Item key={this.props.id} onClick={() => {
        this.setState({
          ...this.state,
          showDetails: !this.state.showDetails
        })
      }}>
        {this.props.employees[this.props.id].name}
        <ProgressBar variant="success" now="0" label="Send Break @5:45 pm" onClick={(e) => {
          e.stopPropagation();
          console.log('progress bar clicked');
        }}/>
        {this.state.showDetails && <BreakTable checkpointIds={this.props.employees[this.props.id].checkpoints} />}

      </ListGroup.Item>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees
  };
};

export default connect(mapStateToProps)(Employee);
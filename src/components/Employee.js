import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {connect} from "react-redux";
import {DateTimeFormatter, LocalTime} from 'js-joda';
import BreakTable from './BreakTable';
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

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
      <ListGroup.Item key={this.props.id} onClick={(e) => {
        e.stopPropagation();
        this.setState({
          ...this.state,
          showDetails: !this.state.showDetails
        })
      }}>
        {this.props.employees[this.props.id].name}

        <Collapse in={this.state.showDetails}>
          <Container className="mt-2">
            <Row>
              <Col>
                <Button block size="sm" >Send Break</Button>
              </Col>
            </Row>
          </Container>
        </Collapse>
        <Collapse in={this.state.showDetails} >
          <div className="mt-2">
            <BreakTable checkpointIds={this.props.employees[this.props.id].checkpoints} />
          </div>
        </Collapse>
        <ProgressBar className="mt-2" variant="success" now={Math.floor(Math.random() * 101)} label="Send Break @5:45 pm" />
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
import React from "react";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container>
        
        <h5>Cashiers</h5>
        <ListGroup>
          <ListGroup.Item variant="warning">
            Sean - On Break
          </ListGroup.Item>
          <ListGroup.Item>
            Becki
            <ProgressBar variant="danger" now="90" label="Send Home @ 4:00 pm" />
          </ListGroup.Item>
          <ListGroup.Item>
            Chel
            <ProgressBar variant="warning" now="75" label="Send Break @ 4:20 pm" />
          </ListGroup.Item>
        </ListGroup>  
        
        <Button variant="light" size="sm" block>Show Details</Button>
      </Container>
    );
  }
}
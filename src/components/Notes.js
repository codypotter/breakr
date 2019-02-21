import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';


export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Label className="mt-3">Appreciations</Form.Label>
              <Form.Control as="textarea" rows="1"></Form.Control>
              <Form.Control as="textarea" rows="1"></Form.Control>
              <Form.Label className="mt-3">OBRC</Form.Label>
              <Form.Control as="textarea" rows="1"></Form.Control>
              <Button variant="light" size="sm" block>Add</Button>
            </Form>
          </Col>
        </Row>
      </Container>  
    );
  }
}

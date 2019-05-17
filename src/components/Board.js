import React from "react";
import EmployeeList from './EmployeeList';
import NoteList from './NoteList';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Board extends React.Component {

  render() {
    return (
      <div>
        <Container className="mt-3">
          <Row>
            <Col>
              <EmployeeList />
            </Col>
            <Col>
              <NoteList />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
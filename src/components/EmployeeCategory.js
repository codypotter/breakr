import React from 'react';
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";
import Employee from "./Employee";
import Collapse from "react-bootstrap/Collapse";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class EmployeeCategory extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showEmployeeCategoryDetails: false
    };
  }

  render() {
    return(
      <div onClick={() => { this.setState({...this.state, showEmployeeCategoryDetails: !this.state.showEmployeeCategoryDetails});}}>
        <h5 className="d-inline">{this.props.employeeCategories[this.props.id].title}</h5>
        {this.props.employeeCategories[this.props.id].employeeIds.map((employeeId) => (<Employee key={employeeId} id={employeeId} />))}
        <Collapse in={this.state.showEmployeeCategoryDetails} >
          <Container className="mt-2" fluid>
            <Row>
              <Col xs={8}><Button size="sm" block >Add Employee</Button></Col>
              <Col><Button variant="outline-danger" size="sm" block >Delete Role</Button></Col>
            </Row>
          </Container>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employeeCategories: state.employeeCategories
  };
};

export default connect(mapStateToProps)(EmployeeCategory);
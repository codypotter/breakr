import React from 'react';
import {connect} from "react-redux";
import Employee from "./Employee";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import AddEmployeeModal from './AddEmployeeModal';

import {PlusCircle} from "react-feather";
import {Trash2} from "react-feather";
import {Edit2} from 'react-feather';

class EmployeeCategory extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showAddEmployeeModal: false
    };
  }

  handleAddEmployeeClick = (e) => {
    e.stopPropagation();
    this.setState({...this.state, showAddEmployeeModal: true});
  };

  hideAddEmployeeModal = () => {
    this.setState({...this.state, showAddEmployeeModal: false})
  };

  render() {
    return(
      <div onClick={() => {this.setState({...this.state, showEmployeeCategoryDetails: !this.state.showEmployeeCategoryDetails});}}>
        <Container className="col-no-padding">
          <Row>
            <Col>
              <h5 className="d-inline">{this.props.employeeCategories[this.props.id].title}</h5>
              <button className="float-right"><Trash2 className="icon trash-icon"/></button>
              <button className="float-right"><Edit2 className="icon edit-icon" /></button>
              <button onClick={this.handleAddEmployeeClick} className="float-right"><PlusCircle className="icon plus-circle-icon" /></button>
            </Col>
          </Row>
        </Container>

        {this.props.employeeCategories[this.props.id].employeeIds.map((employeeId) => (<Employee key={employeeId} id={employeeId} />))}
        <AddEmployeeModal handleHide={this.hideAddEmployeeModal} show={this.state.showAddEmployeeModal} />
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
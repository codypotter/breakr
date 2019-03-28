import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import {connect} from "react-redux";
import EmployeeCategory from "./EmployeeCategory";
import NewEmployeeCategoryModal from "./NewEmployeeCategoryModal";


class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmployeeModal: false
    };
  }

  handleEmployeeModalExit = exitType => (e) => {
    if (exitType === 'save') {
      //TODO: handle save new note
    }
    this.setState({...this.state, showEmployeeModal: false});
  };

  render() {
    return (
      <div>
        <ListGroup>
          <ListGroup.Item className="text-center text-light bg-primary" action onClick={() => {this.setState({...this.state, showEmployeeModal: true})}}>
            Add New Role
          </ListGroup.Item>
          {this.props.day.employeeCategories.map((categoryId) => (
            <ListGroup.Item key={categoryId} >
              <EmployeeCategory id={categoryId} />
            </ListGroup.Item>
          ))}
        </ListGroup>
        <NewEmployeeCategoryModal showEmployeeModal={this.state.showEmployeeModal} handleExit={this.handleEmployeeModalExit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    day: state.day,
    employeeCategories: state.employeeCategories,
    employees: state.employees
  };
};

export default connect(mapStateToProps)(EmployeeList);
import React from "react";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import {connect} from "react-redux";
import Employee from "./Employee";


class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        {this.props.day.employeeCategories.map((employeeCategory) => (
          <div key={employeeCategory}>
            <h5>{this.props.employeeCategories[employeeCategory].title}</h5>
            <ListGroup>
              {this.props.employeeCategories[employeeCategory].employeeIds.map((employeeId, key) => (
                <Employee key={key} id={employeeId} />))}
            </ListGroup>
          </div>
        ))}
        <Button variant="light" size="sm" block>Add Employee</Button>
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
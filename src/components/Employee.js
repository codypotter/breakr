import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import {connect} from "react-redux";
import {DateTimeFormatter, LocalTime} from 'js-joda';

class Employee extends React.Component {
  constructor(props) {
    super(props);
    let nameString = this.props.employees[this.props.id].name + ' | Send break at 5:30';
    this.state = {
      now: LocalTime.now().format(DateTimeFormatter.ofPattern('HH:mm')).toString(),
      showDetails: false,
      nameString: nameString
    };
  }

  render() {
    return (
        <ProgressBar className="progress-bar-custom" variant="success" now={80} label={this.state.nameString} />
    );
  }
}

//<ListGroup.Item key={this.props.id} onClick={(e) => {
//         e.stopPropagation();
//         this.setState({
//           ...this.state,
//           showDetails: !this.state.showDetails
//         })
//       }}>
//         <Collapse in={this.state.showDetails}>
//           <Container className="mt-2">
//             <Row>
//               <Col>
//                 <Button block size="sm" >Send Break</Button>
//               </Col>
//             </Row>
//           </Container>
//         </Collapse>
//         <Collapse in={this.state.showDetails} >
//           <div className="mt-2">
//             <BreakTable checkpointIds={this.props.employees[this.props.id].checkpoints} />
//           </div>
//         </Collapse>
//      </ListGroup.Item>

const mapStateToProps = (state) => {
  return {
    employees: state.employees
  };
};

export default connect(mapStateToProps)(Employee);
import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Board from './Board';
import moment from 'moment';

class BreakrApp extends React.Component {
  constructor(props) {
    super(props);

    const currentDate = moment().format("YYYY-MM-DD");

    this.state = {
      selectedDate: currentDate
    };

    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(newDate) {
    this.setState({
      ...this.state,
      selectedDate: newDate
    });
  }
  
  render() {
    console.log(this.state);
    return (
      <div>
        <Header 
          onDateChange={this.handleDateChange}
          selectedDate={this.state.selectedDate}
        />
        <Board />
      </div>
    );
  }
}

ReactDOM.render(<BreakrApp />, document.getElementById('app'));
  
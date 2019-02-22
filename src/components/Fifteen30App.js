import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Board from './Board';
import moment from 'moment';

class Fifteen30App extends React.Component {
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
    return (
      <div>
        <Header 
          onDateChange={this.handleDateChange}
          selectedDate={this.state.selectedDate}
          organization="Whole Foods Laurelhurst"
          organizations={[{
            key: "1",
            title: "Whole Foods Laurelhurst"
          }]}
        />
        <Board />
      </div>
    );
  }
}

ReactDOM.render(<Fifteen30App />, document.getElementById('app'));
  
import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from "./Header";
import Board from './Board';

const store = createStore(()=>{});

class Fifteen30App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };

    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(newDate) {

  }
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Board} />
          </div>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<Fifteen30App store={store} />, document.getElementById('app'));
  
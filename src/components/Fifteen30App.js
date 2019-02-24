import React from "react";
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import AppRouter from '../routers/AppRouter';


const store = createStore(()=>{});

export default class Fifteen30App extends React.Component {
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
        <AppRouter />
      </Provider>
    );
  }
}
  
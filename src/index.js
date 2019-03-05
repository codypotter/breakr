import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addEmployee} from './actions/employees';
import {addCheckpoint} from './actions/checkpoints';
import './styles/index.scss';

const store = configureStore();
store.dispatch(addEmployee({id:'employeeidyeah', name: 'Cody Potter'}));
store.dispatch(addEmployee({id:'employeeidnah', name: 'Cody Notter'}));
store.dispatch(addCheckpoint({id:'check1', time:'1', name:'break'}));
console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));
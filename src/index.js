import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addEmployee} from './actions/employees';
import {addEmployeeCategory} from "./actions/employee-categories";
import {addCheckpoint} from './actions/checkpoints';
import {addOrganization} from "./actions/organizations";
import './styles/index.scss';
import {addNote} from "./actions/notes";
import {addNoteCategory} from "./actions/note-categories";
import {addCategories, changeDate, changeOrganization} from "./actions/day";
import moment from "moment";

const store = configureStore();

// Set up day
store.dispatch(addCategories({noteCategories:['noteCategory1', 'noteCategory2'], employeeCategories:['employeeCategory1', 'employeeCategory2']}));
store.dispatch(changeDate(moment().format('YYYY-MM-DD')));
store.dispatch(changeOrganization('organization1'));

// Set up organizations
store.dispatch(addOrganization({id: 'organization1', name: 'Laurelhurst'}));
store.dispatch(addOrganization({id:'organization2', name:'Long Beach'}));

// Set up checkpoints
store.dispatch(addCheckpoint({id:'checkpoint1', time:0, name:'start'}));
store.dispatch(addCheckpoint({id:'checkpoint2', time:1, name:'end'}));

// Set up employees
store.dispatch(addEmployee({id:'employeeid1', name: 'Cody Potter', checkpoints:['checkpoint1', 'checkpoint2']}));
store.dispatch(addEmployee({id:'employeeid2', name: 'Cierra Cook', checkpoints:['checkpoint1', 'checkpoint2']}));

// Set up employee categories
store.dispatch(addEmployeeCategory({id:'employeeCategory1', title:'Shift Leaders', employeeIds:['employeeid1']}));
store.dispatch(addEmployeeCategory({id:'employeeCategory1', title:'STL', employeeIds:['employeeid2']}));

// Set up notes
store.dispatch(addNote({id:'note1', text:'Had to ask a canner to leave today'}));
store.dispatch(addNote({id:'note2', text:'Thanks for taking out the trash!'}));

// Set up note categories
store.dispatch(addNoteCategory({id:'noteCategory1', title:'OBRC', noteIds:['note1']}));
store.dispatch(addNoteCategory({id:'noteCategory2', title:'Appreciations', noteIds:['note2']}));
store.subscribe(() => {
  console.log('store.subscribe', store.getState());
});

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
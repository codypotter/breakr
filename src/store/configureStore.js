import {createStore, combineReducers} from 'redux';
import checkpointsReducer from '../reducers/checkpoints';
import dayReducer from '../reducers/day';
import employeeCategoriesReducer from '../reducers/employee-categories';
import employeesReducer from '../reducers/employees';
import noteCategoriesReducer from '../reducers/note-categories';
import notesReducer from '../reducers/notes';
import organizationsReducer from '../reducers/organizations';

export default () => {
  const store = createStore(
    combineReducers({
      checkpoints: checkpointsReducer,
      day: dayReducer,
      employeeCategories: employeeCategoriesReducer,
      employees: employeesReducer,
      noteCategories: noteCategoriesReducer,
      notes: notesReducer,
      organizations: organizationsReducer
    })
  );

  return store;
};


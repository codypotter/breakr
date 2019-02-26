import uuid from 'uuid';

/*
  Action Generators
*/
const addEmployee = ({name, id, checkpoints}) => ({
  type: 'ADD_EMPLOYEE',
  name,
  id,
  checkpoints
});

const editEmployee = (id, updates) => ({
  type: 'EDIT_EMPLOYEE',
  id,
  updates
});

// REMOVE_EMPLOYEE
const removeEmployee = ({id}) => ({
  type: 'REMOVE_EMPLOYEE',
  id
});

//
// Reducer
//
const store = createStore((state = {}, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      const {id, name, checkpoints} = action;
      return {
        ...state,
        [id]: {
          id,
          name,
          checkpoints
        }
      };
    case 'EDIT_EMPLOYEE':
      return {
        ...state,
        [action.id]: {
          ...action.updates
        }
      }
    case 'REMOVE_EMPLOYEE':
      return Object.keys(state)
        .filter(key => key !== action.id)
        .reduce((result, current) => {
          result[current] = state[current];
          return result;
      }, {});
    default:
      return state;
  }
});


const demoEmployees = {
  employee1234567890: {
    id: 'employee1234567890',
    name: 'Aaron',
    checkpoints: ['checkpoint0', 'checkpoint1', 'checkpoint2']
  }
};
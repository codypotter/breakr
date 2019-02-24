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

// EDIT_EMPLOYEE
const editEmployee = (updates) => ({
  type: 'EDIT_EMPLOYEE',
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
          checkpoints: checkpoints
        }
      };
    case 'EDIT_EMPLOYEE':
      
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
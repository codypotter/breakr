//TODO: Fix exports

/**
 * Add Employee Action Generator
 * Returns an action with data to add a new employee to the store
 * @param {object} payload includes the name, id, and checkpoints of a new employee 
 */
const addEmployee = ({name, id, checkpoints}) => ({
  type: 'ADD_EMPLOYEE',
  name,
  id,
  checkpoints
});

/**
 * Edit Employee Action Generator
 * Returns an action with data to edit an employee in the store
 * @param {string} id 
 * @param {Object} updates 
 */
const editEmployee = (id, updates) => ({
  type: 'EDIT_EMPLOYEE',
  id,
  updates
});

/**
 * Remove Employee Action Generator
 * Returns an action with data to remove an employee from the store
 * @param {Object} payload includes the id of the employee to remove 
 */
const removeEmployee = ({id}) => ({
  type: 'REMOVE_EMPLOYEE',
  id
});

/**
 * Employee Reducer
 * Responsible for interacting with employees in the store
 */
const employeeStore = createStore((state = {}, action) => {
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

export default employeeStore;
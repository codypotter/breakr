const demoEmployeeCategories = {
  employeeCategory1234567890: {
    id: 'employeeCategory1234567890',
    title: 'Cashiers',
    employees: ['employee1234567890']
  }
};

/**
 * Add Employee Category Action Generator
 * Returns an action with data to add a new employee category to the store
 * @param {object} payload includes the id, title, and employee ids array 
 */
const addEmployeeCategory = ({
  id,
  title,
  employeeIds
}) => ({
  type: 'ADD_EMPLOYEE_CATEGORY',
  id,
  title,
  employeeIds
});

/**
 * Edit Employee Category Action Generator
 * Returns an action with data to edit an employee category in the store
 * @param {string} id the employee category id
 * @param {Object} updates the updates for the employee category
 */
const editEmployeeCategory = (id, updates) => ({
  type: 'EDIT_EMPLOYEE_CATEGORY',
  id,
  updates
});

/**
 * Remove Employee Category Action Generator
 * Returns an action with data to remove an employee from the store
 * @param {Object} payload includes the id of the employee to remove 
 */
const removeEmployee = ({
  id
}) => ({
  type: 'REMOVE_EMPLOYEE_CATEGORY',
  id
});

/**
 * Employee Category Reducer
 * Interacts with employee categories in the store
 */
const employeeCategoriesStore = createStore((state = {}, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE_CATEGORY':
      const {
        id,
        title,
        employeeIds
      } = action;
      return {
        ...state,
        [id]: {
          id,
          title,
          employeeIds
        }
      };
    case 'EDIT_EMPLOYEE_CATEGORY':
      return {
        ...state,
        [action.id]: {
          ...action.updates
        }
      }
    case 'REMOVE_EMPLOYEE_CATEGORY':
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
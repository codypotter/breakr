/**
 * Add Employee Action Generator
 * Returns an action with data to add a new employee to the store
 * @param {object} payload includes the name, id, and checkpoints of a new employee 
 */
export const addEmployee = ({name, id, checkpoints}) => ({
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
export const editEmployee = (id, updates) => ({
  type: 'EDIT_EMPLOYEE',
  id,
  updates
});

/**
 * Remove Employee Action Generator
 * Returns an action with data to remove an employee from the store
 * @param {Object} payload includes the id of the employee to remove 
 */
export const removeEmployee = ({id}) => ({
  type: 'REMOVE_EMPLOYEE',
  id
});

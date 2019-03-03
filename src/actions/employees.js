/**
 * Add Employee Action Generator - 
 * Returns an action with data to add a new employee to the store
 * @param {*}       payload -               the employee data
 * @param {string}  payload.id -            the employee id
 * @param {string}  [payload.name] -        the employee name 
 * @param {Array}   [payload.checkpoints] - the employee checkpoints
 */
export const addEmployee = ({id, name ='', checkpoints=[]}) => ({
  type: 'ADD_EMPLOYEE',
  name,
  id,
  checkpoints
});

/**
 * Edit Employee Action Generator - 
 * Returns an action with data to edit an employee in the store
 * @param {string}  id -      the id of the employee to update
 * @param {*}       updates - the updates to apply
 */
export const editEmployee = (id, updates) => ({
  type: 'EDIT_EMPLOYEE',
  id,
  updates
});

/**
 * Remove Employee Action Generator - 
 * Returns an action with data to remove an employee from the store
 * @param {string} id - the employee id to remove
 */
export const removeEmployee = (id) => ({
  type: 'REMOVE_EMPLOYEE',
  id
});

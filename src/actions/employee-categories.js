/**
 * Add Employee Category Action Generator
 * Returns an action with data to add a new employee category to the store
 * @param {object} payload includes the id, title, and employee ids array 
 */
export const addEmployeeCategory = ({
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
export const editEmployeeCategory = (id, updates) => ({
  type: 'EDIT_EMPLOYEE_CATEGORY',
  id,
  updates
});

/**
 * Remove Employee Category Action Generator
 * Returns an action with data to remove an employee from the store
 * @param {Object} payload includes the id of the employee to remove 
 */
export const removeEmployee = ({id}) => ({
  type: 'REMOVE_EMPLOYEE_CATEGORY',
  id
});
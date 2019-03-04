/**
 * Add Employee Category Action Generator - 
 * Returns an action with data to add a new employee category to the store
 * @param {*}             payload -               includes the employee category data
 * @param {string}        payload.id -            the id of the employee category to add
 * @param {string}        [payload.title] -       the title of the employee category to add
 * @param {Array<string>} [payload.employeeIds] - the array of employeeIds
 */
export const addEmployeeCategory = ({ id, title="", employeeIds=[] }) => ({
  type: 'ADD_EMPLOYEE_CATEGORY',
  id,
  title,
  employeeIds
});

/**
 * Edit Employee Category Action Generator -
 * Returns an action with data to edit an employee category in the store
 * @param {string}  id -      the employee category id to edit
 * @param {*}       updates - the updates for the employee category
 */
export const editEmployeeCategory = (id, updates) => ({
  type: 'EDIT_EMPLOYEE_CATEGORY',
  id,
  updates
});

/**
 * Remove Employee Category Action Generator -
 * Returns an action with data to remove an employee category from the store
 * @param {string} id - the id of the employee category to remove 
 */
export const removeEmployeeCategory = (id) => ({
  type: 'REMOVE_EMPLOYEE_CATEGORY',
  id
});

/**
 * Remove Employee From Category Action Generator -
 * Returns an action with data to remove an employee from an employee category
 * @param {*}       payload -                     includes the data to remove an employee from a category
 * @param {string}  payload.employeeCategoryId -  the id of the category to edit 
 * @param {string}  payload.employeeId -          the id of the employee to remove
 */
export const removeEmployeeFromCategory = ({ employeeCategoryId, employeeId }) => ({
  type: 'REMOVE_EMPLOYEE_FROM_CATEGORY',
  employeeCategoryId,
  employeeId
});

/**
 * Add Employee To Category Action Generator - 
 * Returns an action with data to add an employee to an employee category
 * @param {*}       payload -                     the data to add an employee to a category
 * @param {string}  payload.employeeCategoryId -  the id of the category to edit
 * @param {string}  payload.employeeId -          the id of the employee to add
 */
export const addEmployeeToCategory = ({ employeeCategoryId, employeeeId }) => ({
  type: 'ADD_EMPLOYEE_TO_CATEGORY',
  employeeCategoryId,
  employeeId
});
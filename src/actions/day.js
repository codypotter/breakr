/**
 * Add Categories Action Generator -
 * Returns an action with data to add the categories to the store
 * @param {*} updates - includes the noteCategories and/or employeeCategories to add
 * @example
 *  addCategories({
 *    noteCategories: ['123', '234'],
 *    employeeCategories: ['345', '456']
 *  })
 */
export const addCategories = (updates) => ({
  type: 'ADD_CATEGORIES',
  updates
});

/**
 * Clears Day Action Generator -
 * Returns an action with data to clear the day from the store
 */
export const clearDay = () => ({
  type: 'CLEAR_DAY'
});

/**
 * Change Date Action Generator -
 * Returns an action with data to change the date in the store
 * @param {string} date the date string of the selected date to display
 */
export const changeDate = (date) => ({
  type: 'CHANGE_DATE',
  date
});

/**
 * Change Organization Action Generator -
 * Returns an action with data to change the organization in the store
 * @param organizationId - the id of the organization to change to
 * @returns {{organization: *, type: string}}
 */
export const changeOrganization = (organizationId) => ({
  type: 'CHANGE_ORGANIZATION',
  organizationId
});

/**
 * Remove Item -
 * Returns an action with data to remove an item from the store
 * @param {*} itemToRemove - object with key and value matching the value to be removed
 * @example 
 *  removeItem({noteCategories: 'noteCategory1234567890'});
 */
export const removeItem = (itemToRemove) => ({
  type: 'REMOVE_ITEM',
  itemToRemove
});

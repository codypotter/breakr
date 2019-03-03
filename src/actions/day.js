/**
 * Update Day Action Generator
 * Returns an action with data to update the day in the store
 * @param {Object} updates includes the id, noteCategories, and/or employeeCategories
 */
const updateDay = (updates) => ({
  type: 'UPDATE_DAY',
  updates
});

/**
 * Clears Day Action Generator
 * Returns an action with data to clear the day from the store
 * @param {Object} payload includes the id of the day to clear 
 */
const clearDay = () => ({
  type: 'CLEAR_DAY'
});

/**
 * Remove Item 
 * Returns an action with data to remove an item from the store
 * @param {Object} itemToRemove object with key and value matching the value to be removed
 */
const removeItem = (itemToRemove) => ({
  type: 'REMOVE_ITEM',
  itemToRemove
});

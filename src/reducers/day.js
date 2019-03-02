const demoDay = {
  id: '05122018',
  noteCategories: ['noteCategory1234567890'],
  employeeCategories: ['employeeCategory1234567890']
};

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

const removeItem = (itemToRemove) => ({
  type: 'REMOVE_ITEM',
  itemToRemove
});

/**
 * Day Reducer
 * Responsible for interacting with the day in the store
 */
const dayStore = createStore((state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_DAY':
      return {
        ...state,
        noteCategories: [
          ...state.noteCategories,
          ...action.updates.noteCategories
        ],
        employeeCategories: [
          ...state.employeeCategories,
          ...action.updates.employeeCategories
        ]
      }
    case 'CLEAR_DAY':
      return {};
    case 'REMOVE_ITEM':
      const {itemToRemove} = action;
      const keyToUpdate = Object.keys(itemToRemove)[0];
      const propertyToRemove = itemToRemove[keyToUpdate];
      return {
        ...state,
        noteCategories: [...state.noteCategories],
        employeeCategories: [...state.employeeCategories],
        [keyToUpdate]: state[keyToUpdate].filter(element => element !== propertyToRemove)
      }
    default:
      return state;
  }
});

